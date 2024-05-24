(ns sarif-to-csv.core
  (:require 
            [cljs-node-io.core :as io :refer [slurp spit]]
            [clojure.string :as cs]
            ["@actions/core" :as ac :refer [getInput]]))

(defn read-sarif [filename]
  (slurp filename))

(defn translate-json [string-data]
  (let [json (.parse js/JSON string-data)]
     (js->clj json :keywordize-keys true)))

(defn read-sarif-as-map [filename]
  (let [ sarif-str (read-sarif filename) ]
    (translate-json sarif-str)))

(defn get-properties-tuple [item]
  (let [
        id (-> item :id)
        properties (-> item :properties)    ]
    [(keyword id) properties]))

(defn get-properties-map [sarif-map]
  (let [rules (remove nil?
                      (flatten (into (-> sarif-map :runs first :tool :driver :rules) 
                                     (map :rules (-> sarif-map :runs first :tool :extensions)))))
        tuples (map get-properties-tuple rules)]
    (into {} tuples)))

(defn get-security-severity-string [x]
  (cond 
        (> x 8.9) "critical"
        (> x 6.9) "high"
        (> x 4.9) "medium"
        (> x 0.0) "low"
        :else "none"))

(defn get-results [sarif-map]
  (-> sarif-map :runs first :results))

(defn source [result]
  (-> result :locations first :physicalLocation :artifactLocation :uri))
(defn line-number [result]
  (-> result :locations :region :startLine))
(defn start-column [result]
  (-> result :locations :region :startColumn))
(defn end-column [result]
  (-> result :locations :region :endColumn))

(defn get-csv-line [result properties]
  (let [ id (keyword (result :ruleId))
        name (-> properties id :name)
        severity-score (-> properties id :security-severity)
        severity-string (get-security-severity-string severity-score)
        tags  (-> properties id :tags)
        vuln-source (source result) 
        line  (line-number result)
        start (start-column result)
        end (end-column result)]
     (str name ","
          severity-string ","
          severity-score ","
          tags ","
          vuln-source ","
          line ","
          start ","
          end)))

(defn get-csv [sarif-map]
  (let [   properties-map (get-properties-map sarif-map)
           results-map (get-results sarif-map)
           header ["NAME, SEVERITY, SCORE, TAGS, SOURCE, START LINE, START COLUMN, END COLUMN"] ]
     (cs/join "\n" (into header   (map #(get-csv-line %1 properties-map) results-map)))))

(defn -main []
  (let [   input-filename (getInput  "input-file")
           output-filename (getInput "output-file")
           sarif-map (read-sarif-as-map input-filename)
           csv-str (get-csv sarif-map)] 
     (spit output-filename csv-str)))

(set! *main-cli-fn* -main)
