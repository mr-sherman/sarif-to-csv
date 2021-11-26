// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('sarif_to_csv.core');
goog.require('cljs.core');
goog.require('cljs_node_io.core');
goog.require('clojure.string');
sarif_to_csv.core.read_sarif = (function sarif_to_csv$core$read_sarif(filename){
return cljs_node_io.core.slurp.call(null,filename);
});
sarif_to_csv.core.translate_json = (function sarif_to_csv$core$translate_json(string_data){
var json = JSON.parse(string_data);
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
sarif_to_csv.core.read_sarif_as_map = (function sarif_to_csv$core$read_sarif_as_map(filename){
var sarif_str = sarif_to_csv.core.read_sarif.call(null,filename);
return sarif_to_csv.core.translate_json.call(null,sarif_str);
});
sarif_to_csv.core.get_properties_tuple = (function sarif_to_csv$core$get_properties_tuple(item){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
var properties = new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(item);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,id),properties], null);
});
sarif_to_csv.core.get_properties_map = (function sarif_to_csv$core$get_properties_map(sarif_map){
var rules = new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"driver","driver",1515263546).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tool","tool",-1298696470).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"runs","runs",-1553997798).cljs$core$IFn$_invoke$arity$1(sarif_map)))));
var tuples = cljs.core.map.call(null,sarif_to_csv.core.get_properties_tuple,rules);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,tuples);
});
sarif_to_csv.core.get_security_severity_string = (function sarif_to_csv$core$get_security_severity_string(x){
if((x > 8.9)){
return "critical";
} else {
if((x > 6.9)){
return "high";
} else {
if((x > 4.9)){
return "medium";
} else {
if((x > 0.0)){
return "low";
} else {
return "none";

}
}
}
}
});
sarif_to_csv.core.get_results = (function sarif_to_csv$core$get_results(sarif_map){
return new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"runs","runs",-1553997798).cljs$core$IFn$_invoke$arity$1(sarif_map)));
});
sarif_to_csv.core.source = (function sarif_to_csv$core$source(result){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"artificatLocation","artificatLocation",1062133304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"physicalLocation","physicalLocation",1244378136).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(result)))));
});
sarif_to_csv.core.get_csv_line = (function sarif_to_csv$core$get_csv_line(result,properties){
var id = cljs.core.keyword.call(null,result.call(null,new cljs.core.Keyword(null,"ruleId","ruleId",-177430189)));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(id.call(null,properties));
var severity_score = new cljs.core.Keyword(null,"security-severity","security-severity",-1735121237).cljs$core$IFn$_invoke$arity$1(id.call(null,properties));
var severity_string = sarif_to_csv.core.get_security_severity_string.call(null,severity_score);
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(id.call(null,properties));
var vuln_source = sarif_to_csv.core.source.call(null,result);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),",",severity_string,",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(severity_score),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vuln_source)].join('');
});
sarif_to_csv.core.get_csv = (function sarif_to_csv$core$get_csv(sarif_map){
var properties_map = sarif_to_csv.core.get_properties_map.call(null,sarif_map);
var results_map = sarif_to_csv.core.get_results.call(null,sarif_map);
var header = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["NAME, SEVERITY, SCORE, TAGS, SOURCE"], null);
return clojure.string.join.call(null,"\n",cljs.core.into.call(null,header,cljs.core.map.call(null,(function (p1__2245_SHARP_){
return sarif_to_csv.core.get_csv_line.call(null,p1__2245_SHARP_,properties_map);
}),results_map)));
});
sarif_to_csv.core._main = (function sarif_to_csv$core$_main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2247 = arguments.length;
var i__4737__auto___2248 = (0);
while(true){
if((i__4737__auto___2248 < len__4736__auto___2247)){
args__4742__auto__.push((arguments[i__4737__auto___2248]));

var G__2249 = (i__4737__auto___2248 + (1));
i__4737__auto___2248 = G__2249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sarif_to_csv.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sarif_to_csv.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var input_filename = cljs.core.first.call(null,args);
var output_filename = cljs.core.second.call(null,args);
var sarif_map = sarif_to_csv.core.read_sarif_as_map.call(null,input_filename);
var csv_str = sarif_to_csv.core.get_csv.call(null,sarif_map);
return cljs_node_io.core.spit.call(null,output_filename,csv_str);
}));

(sarif_to_csv.core._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sarif_to_csv.core._main.cljs$lang$applyTo = (function (seq2246){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2246));
}));

(cljs.core._STAR_main_cli_fn_STAR_ = sarif_to_csv.core._main);

//# sourceMappingURL=core.js.map
