(ns sarif-to-csv.core
  (:require 
            [cljs-node-io.core :as io :refer [slurp spit]]
            [clojure.string :as cs]
            ["@actions/core" :as ac :refer [getInput]]
            ;["@actions/github" :as ag]
  )
)

(defn read-sarif [filename]
  (slurp filename))

(defn translate-json [string-data]
(let [json (.parse js/JSON string-data)]
  (js->clj json :keywordize-keys true))
  )
(defn read-sarif-as-map [filename]
  (let [ sarif-str (read-sarif filename) ]
    (translate-json sarif-str)))

(defn get-properties-tuple [item]
  (let [
        id (-> item :id)
        properties (-> item :properties)    
  ]
    [(keyword id) properties]
    )
  )

(defn get-properties-map [sarif-map]
  (let [
        rules (-> sarif-map :runs first :tool :driver :rules)
        tuples (map get-properties-tuple rules)
        ]
    (into {} tuples)
)
)

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
  (-> result :locations first :physicalLocation :artificatLocation :uri)
)

(defn get-csv-line [result properties]
  (let [ id (keyword (result :ruleId))
         name (-> properties id :name)
         severity-score (-> properties id :security-severity)
         severity-string (get-security-severity-string severity-score)
         tags  (-> properties id :tags)
         vuln-source (source result) ]
  (str name ","
   severity-string ","
   severity-score ","
   tags ","
   vuln-source )
  ))

(defn get-csv [sarif-map]
  (let [
        properties-map (get-properties-map sarif-map)
        results-map (get-results sarif-map)
        header ["NAME, SEVERITY, SCORE, TAGS, SOURCE"]
  ]
  (cs/join "\n" (into header   (map #(get-csv-line %1 properties-map) results-map)))))


(defn -main []
  (let [
        ;core (ac)
        ;github (ag)
        input-filename (getInput  "input-file")
        output-filename (getInput "output-file")
        sarif-map (read-sarif-as-map input-filename)
        csv-str (get-csv sarif-map)
  ] (spit output-filename csv-str)
    ;(println csv-str)
  ))

(set! *main-cli-fn* -main)