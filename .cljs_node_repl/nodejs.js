// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__2248__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__2248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2249__i = 0, G__2249__a = new Array(arguments.length -  0);
while (G__2249__i < G__2249__a.length) {G__2249__a[G__2249__i] = arguments[G__2249__i + 0]; ++G__2249__i;}
  args = new cljs.core.IndexedSeq(G__2249__a,0,null);
} 
return G__2248__delegate.call(this,args);};
G__2248.cljs$lang$maxFixedArity = 0;
G__2248.cljs$lang$applyTo = (function (arglist__2250){
var args = cljs.core.seq(arglist__2250);
return G__2248__delegate(args);
});
G__2248.cljs$core$IFn$_invoke$arity$variadic = G__2248__delegate;
return G__2248;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__2251__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__2251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2252__i = 0, G__2252__a = new Array(arguments.length -  0);
while (G__2252__i < G__2252__a.length) {G__2252__a[G__2252__i] = arguments[G__2252__i + 0]; ++G__2252__i;}
  args = new cljs.core.IndexedSeq(G__2252__a,0,null);
} 
return G__2251__delegate.call(this,args);};
G__2251.cljs$lang$maxFixedArity = 0;
G__2251.cljs$lang$applyTo = (function (arglist__2253){
var args = cljs.core.seq(arglist__2253);
return G__2251__delegate(args);
});
G__2251.cljs$core$IFn$_invoke$arity$variadic = G__2251__delegate;
return G__2251;
})()
);

return null;
});

//# sourceMappingURL=nodejs.js.map
