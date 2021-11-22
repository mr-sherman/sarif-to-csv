// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('cljs_node_io.fs');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
cljs_node_io.fs.fs = require("fs");
cljs_node_io.fs.path = require("path");
/**
 * @type {!string}
 */
cljs_node_io.fs.sep = cljs_node_io.fs.path.sep;
/**
 * Synchronous stat
 * @param {!string} pathstring
 * @return {!fs.Stats} file stats object
 */
cljs_node_io.fs.stat = (function cljs_node_io$fs$stat(pathstring){
return cljs_node_io.fs.fs.statSync(pathstring);
});
/**
 * Asynchronous stat
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err ?fs.Stats]
 */
cljs_node_io.fs.astat = (function cljs_node_io$fs$astat(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.stat(pathstr,(function() { 
var G__4295__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4296__i = 0, G__4296__a = new Array(arguments.length -  0);
while (G__4296__i < G__4296__a.length) {G__4296__a[G__4296__i] = arguments[G__4296__i + 0]; ++G__4296__i;}
  args = new cljs.core.IndexedSeq(G__4296__a,0,null);
} 
return G__4295__delegate.call(this,args);};
G__4295.cljs$lang$maxFixedArity = 0;
G__4295.cljs$lang$applyTo = (function (arglist__4297){
var args = cljs.core.seq(arglist__4297);
return G__4295__delegate(args);
});
G__4295.cljs$core$IFn$_invoke$arity$variadic = G__4295__delegate;
return G__4295;
})()
);

return c;
});
/**
 * Synchronous lstat identical to stat(), except that if path is a symbolic link,
 * then the link itself is stat-ed, not the file that it refers to
 * @param {!string} pathstr
 * @return {!fs.Stats} file stats object
 */
cljs_node_io.fs.lstat = (function cljs_node_io$fs$lstat(pathstr){
return cljs_node_io.fs.fs.lstatSync(pathstr);
});
/**
 * Asynchronous lstat
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err ?fs.Stats]
 */
cljs_node_io.fs.alstat = (function cljs_node_io$fs$alstat(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lstat(pathstr,(function() { 
var G__4298__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4299__i = 0, G__4299__a = new Array(arguments.length -  0);
while (G__4299__i < G__4299__a.length) {G__4299__a[G__4299__i] = arguments[G__4299__i + 0]; ++G__4299__i;}
  args = new cljs.core.IndexedSeq(G__4299__a,0,null);
} 
return G__4298__delegate.call(this,args);};
G__4298.cljs$lang$maxFixedArity = 0;
G__4298.cljs$lang$applyTo = (function (arglist__4300){
var args = cljs.core.seq(arglist__4300);
return G__4298__delegate(args);
});
G__4298.cljs$core$IFn$_invoke$arity$variadic = G__4298__delegate;
return G__4298;
})()
);

return c;
});
/**
 * Convert a fs.Stats object to edn. Function are swapped out for their return values.
 * This is useful at repl but not particularly efficient.
 * @param {!fs.Stats} st
 * @return {!IMap}
 */
cljs_node_io.fs.stat__GT_clj = (function cljs_node_io$fs$stat__GT_clj(st){
var ks = goog.object.getKeys(st);
var vs = goog.object.getValues(st);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.remove.call(null,(function (p1__4301_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.nth.call(null,p1__4301_SHARP_,(0)),"_checkModeProperty");
})),cljs.core.map.call(null,(function (p__4302){
var vec__4303 = p__4302;
var k = cljs.core.nth.call(null,vec__4303,(0),null);
var v = cljs.core.nth.call(null,vec__4303,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),((cljs.core.fn_QMARK_.call(null,v))?v.apply(st):v)], null);
}))),cljs.core.map.call(null,cljs.core.vector,ks,vs));
});
/**
 * @param {!Array<!Number>} bita :: an array of 1s an 0s
 * @return {!Number} integer
 */
cljs_node_io.fs.bita__GT_int = (function cljs_node_io$fs$bita__GT_int(bita){
return parseInt(bita.join(""),(2));
});
/**
 * @param {!fs.Stats} s :: a fs.Stats object
 * @return {!Array<Number>}
 */
cljs_node_io.fs.stat__GT_perm_bita = (function cljs_node_io$fs$stat__GT_perm_bita(s){
var mode = (s["mode"]);
var ownr = (mode & (256));
var ownw = (mode & (128));
var ownx = (mode & (64));
var grpr = (mode & (32));
var grpw = (mode & (16));
var grpx = (mode & (8));
var othr = (mode & (4));
var othw = (mode & (2));
var othx = (mode & (1));
var a = [ownr,ownw,ownx,grpr,grpw,grpx,othr,othw,othx];
var a__4607__auto__ = a;
var l__4608__auto__ = a__4607__auto__.length;
var res = cljs.core.aclone.call(null,a__4607__auto__);
var i = (0);
while(true){
if((i < l__4608__auto__)){
(res[i] = (((!(((a[i]) === (0)))))?(1):(0)));

var G__4306 = (i + (1));
i = G__4306;
continue;
} else {
return res;
}
break;
}
});
/**
 * @param {!fs.Stats} st
 * @return {!Number}
 */
cljs_node_io.fs.permissions = (function cljs_node_io$fs$permissions(st){
return cljs_node_io.fs.bita__GT_int.call(null,cljs_node_io.fs.stat__GT_perm_bita.call(null,st));
});
/**
 * @return {!IMap}
 */
cljs_node_io.fs.gid_uid = (function cljs_node_io$fs$gid_uid(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gid","gid",-714078321),process.getgid(),new cljs.core.Keyword(null,"uid","uid",-1447769400),process.getuid()], null);
});
/**
 * @param {!string} pathstr
 * @return {!boolean} is the file hidden (unix only)
 */
cljs_node_io.fs.hidden_QMARK_ = (function cljs_node_io$fs$hidden_QMARK_(pathstr){
return (new RegExp("(^|\\/)\\.[^\\/\\.]")).test(pathstr);
});
/**
 * @param {!string} pathstring
 * @return {!boolean} iff abstract pathname exists and is a directory
 */
cljs_node_io.fs.dir_QMARK_ = (function cljs_node_io$fs$dir_QMARK_(pathstring){
if(typeof pathstring === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstring)"));
}

var stats = (function (){try{return cljs_node_io.fs.fs.statSync(pathstring);
}catch (e4307){if((e4307 instanceof Error)){
var e = e4307;
return false;
} else {
throw e4307;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isDirectory();
}
});
/**
 * Asynchronous directory predicate.
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.adir_QMARK_ = (function cljs_node_io$fs$adir_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.astat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,(function (p__4308){
var vec__4309 = p__4308;
var err = cljs.core.nth.call(null,vec__4309,(0),null);
var stats = cljs.core.nth.call(null,vec__4309,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isDirectory():false));
}));

return c;
});
/**
 * Synchronous file predicate
 * @param {!string} pathstring
 * @return {!boolean} iff abstract pathname exists and is a file
 */
cljs_node_io.fs.file_QMARK_ = (function cljs_node_io$fs$file_QMARK_(pathstring){
if(typeof pathstring === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstring)"));
}

var stats = (function (){try{return cljs_node_io.fs.lstat.call(null,pathstring);
}catch (e4312){if((e4312 instanceof Error)){
var e = e4312;
return false;
} else {
throw e4312;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isFile();
}
});
/**
 * Asynchronous file predicate.
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.afile_QMARK_ = (function cljs_node_io$fs$afile_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.alstat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,(function (p__4313){
var vec__4314 = p__4313;
var err = cljs.core.nth.call(null,vec__4314,(0),null);
var stats = cljs.core.nth.call(null,vec__4314,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isFile():false));
}));

return c;
});
/**
 * @param {!string} pathstr :: path to test
 * @return {!boolean} is pathstr an absolute path
 */
cljs_node_io.fs.absolute_QMARK_ = (function cljs_node_io$fs$absolute_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

return cljs_node_io.fs.path.isAbsolute.call(null,pathstr);
});
/**
 * Synchronously test if a file or directory exists
 * @param {!string} pathstr :: file path to test
 * @return {!boolean}
 */
cljs_node_io.fs.fexists_QMARK_ = (function cljs_node_io$fs$fexists_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.F_OK);

return true;
}catch (e4317){if((e4317 instanceof Error)){
var e = e4317;
return false;
} else {
throw e4317;

}
}});
/**
 * Asynchronously test if a file or directory exists
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.afexists_QMARK_ = (function cljs_node_io$fs$afexists_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.F_OK,(function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
}));

return c;
});
/**
 * Synchronously test if a file is readable to the process
 * @param {!string} pathstr :: path to test for process read permission
 * @return {!boolean}
 */
cljs_node_io.fs.readable_QMARK_ = (function cljs_node_io$fs$readable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.R_OK);

return true;
}catch (e4318){if((e4318 instanceof Error)){
var e = e4318;
return false;
} else {
throw e4318;

}
}});
/**
 * Asynchronously test if a file is readable to the process
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.areadable_QMARK_ = (function cljs_node_io$fs$areadable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.R_OK,(function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
}));

return c;
});
/**
 * Synchronously test if a file is writable to the process
 * @param {!string} pathstr :: path to test for process write permission
 * @return {!boolean}
 */
cljs_node_io.fs.writable_QMARK_ = (function cljs_node_io$fs$writable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.W_OK);

return true;
}catch (e4319){if((e4319 instanceof Error)){
var e = e4319;
return false;
} else {
throw e4319;

}
}});
/**
 * Asynchronously test if a file is writable to the process
 * @param {!string} pathstr :: path to test for process write permission
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.awritable_QMARK_ = (function cljs_node_io$fs$awritable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.W_OK,(function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
}));

return c;
});
/**
 * @param {!string} pathstr :: path to test for process executable permission
 * @return {!boolean}
 */
cljs_node_io.fs.executable_QMARK_ = (function cljs_node_io$fs$executable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if((!(cljs.core._EQ_.call(null,"win32",process.platform)))){
try{cljs_node_io.fs.fs.accessSync(pathstr,cljs_node_io.fs.fs.X_OK);

return true;
}catch (e4320){if((e4320 instanceof Error)){
var e = e4320;
return false;
} else {
throw e4320;

}
}} else {
throw Error("Testing if a file is executable has no effect on Windows");
}
});
/**
 * Asynchronously test if a file is executable to the process
 * @param {!string} pathstr :: path to test for process execute permission
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.aexecutable_QMARK_ = (function cljs_node_io$fs$aexecutable_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if((!(cljs.core._EQ_.call(null,"win32",process.platform)))){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.access(pathstr,cljs_node_io.fs.fs.X_OK,(function (e){
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,e))?true:false));
}));

return c;
} else {
throw Error("Testing if a file is executable has no effect on Windows");
}
});
/**
 * Synchronous test for symbolic link
 * @param {!string} pathstr :: path to test
 * @return {!boolean}
 */
cljs_node_io.fs.symlink_QMARK_ = (function cljs_node_io$fs$symlink_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var stats = (function (){try{return cljs_node_io.fs.lstat.call(null,pathstr);
}catch (e4321){if((e4321 instanceof Error)){
var e = e4321;
return false;
} else {
throw e4321;

}
}})();
if(cljs.core.not.call(null,stats)){
return false;
} else {
return stats.isSymbolicLink();
}
});
/**
 * Asynchronously test if path is a symbolic link
 * @param {!string} pathstr :: path to test
 * @return {!Channel} promise-chan receiving boolean
 */
cljs_node_io.fs.asymlink_QMARK_ = (function cljs_node_io$fs$asymlink_QMARK_(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var stat_ch = cljs_node_io.fs.alstat.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,stat_ch,(function (p__4322){
var vec__4323 = p__4322;
var err = cljs.core.nth.call(null,vec__4323,(0),null);
var stats = cljs.core.nth.call(null,vec__4323,(1),null);
return cljs.core.async.put_BANG_.call(null,c,((cljs.core.not.call(null,err))?stats.isSymbolicLink():false));
}));

return c;
});
/**
 * @param {!string} pathstring :: path to get parent of
 * @return {!string} the parent directory
 */
cljs_node_io.fs.dirname = (function cljs_node_io$fs$dirname(pathstring){
return cljs_node_io.fs.path.dirname(pathstring);
});
/**
 * @return {!string}
 */
cljs_node_io.fs.basename = (function cljs_node_io$fs$basename(var_args){
var G__4327 = arguments.length;
switch (G__4327) {
case 1:
return cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs_node_io.fs.path.basename(p);
}));

(cljs_node_io.fs.basename.cljs$core$IFn$_invoke$arity$2 = (function (p,ext){
return cljs_node_io.fs.path.basename(p,ext);
}));

(cljs_node_io.fs.basename.cljs$lang$maxFixedArity = 2);

/**
 * @return {!string}
 */
cljs_node_io.fs.resolve_path = (function cljs_node_io$fs$resolve_path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___4330 = arguments.length;
var i__4737__auto___4331 = (0);
while(true){
if((i__4737__auto___4331 < len__4736__auto___4330)){
args__4742__auto__.push((arguments[i__4737__auto___4331]));

var G__4332 = (i__4737__auto___4331 + (1));
i__4737__auto___4331 = G__4332;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs_node_io.fs.resolve_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return cljs_node_io.fs.path.resolve.apply(null,cljs.core.apply.call(null,cljs.core.array,paths));
}));

(cljs_node_io.fs.resolve_path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs_node_io.fs.resolve_path.cljs$lang$applyTo = (function (seq4329){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4329));
}));

/**
 * @param {!string} pathstring :: pathstring to normalize
 * @return {!string}
 */
cljs_node_io.fs.normalize_path = (function cljs_node_io$fs$normalize_path(pathstring){
return cljs_node_io.fs.path.normalize(pathstring);
});
/**
 * @param {!string} pathstring :: file to get extension from
 * @return {!string}
 */
cljs_node_io.fs.ext = (function cljs_node_io$fs$ext(pathstring){
return cljs_node_io.fs.path.extname(pathstring);
});
/**
 * Synchronous realpath
 * @param {!string} pathstr
 * @return {!string} resolved path
 */
cljs_node_io.fs.realpath = (function cljs_node_io$fs$realpath(pathstr){
return cljs_node_io.fs.fs.realpathSync(pathstr);
});
/**
 * Asynchronous realpath
 * @param {!string} pathstr
 * @return {!Channel} promise-chan recieving [?err ?resolvedPathstr]
 */
cljs_node_io.fs.arealpath = (function cljs_node_io$fs$arealpath(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.realpath(pathstr,(function() { 
var G__4333__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4334__i = 0, G__4334__a = new Array(arguments.length -  0);
while (G__4334__i < G__4334__a.length) {G__4334__a[G__4334__i] = arguments[G__4334__i + 0]; ++G__4334__i;}
  args = new cljs.core.IndexedSeq(G__4334__a,0,null);
} 
return G__4333__delegate.call(this,args);};
G__4333.cljs$lang$maxFixedArity = 0;
G__4333.cljs$lang$applyTo = (function (arglist__4335){
var args = cljs.core.seq(arglist__4335);
return G__4333__delegate(args);
});
G__4333.cljs$core$IFn$_invoke$arity$variadic = G__4333__delegate;
return G__4333;
})()
);

return c;
});
/**
 * Synchronous readlink
 * @param {!string} pathstr :: the symbolic link to read
 * @return {!string} the symbolic link's string value
 */
cljs_node_io.fs.readlink = (function cljs_node_io$fs$readlink(pathstr){
return cljs_node_io.fs.fs.readlinkSync(pathstr);
});
/**
 * Asynchronous readlink
 * @param {!string} pathstr :: the symbolic link to read
 * @return {!Channel} promise-chan receiving [?err ?linkstring]
 */
cljs_node_io.fs.areadlink = (function cljs_node_io$fs$areadlink(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readlink(pathstr,(function() { 
var G__4336__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4337__i = 0, G__4337__a = new Array(arguments.length -  0);
while (G__4337__i < G__4337__a.length) {G__4337__a[G__4337__i] = arguments[G__4337__i + 0]; ++G__4337__i;}
  args = new cljs.core.IndexedSeq(G__4337__a,0,null);
} 
return G__4336__delegate.call(this,args);};
G__4336.cljs$lang$maxFixedArity = 0;
G__4336.cljs$lang$applyTo = (function (arglist__4338){
var args = cljs.core.seq(arglist__4338);
return G__4336__delegate(args);
});
G__4336.cljs$core$IFn$_invoke$arity$variadic = G__4336__delegate;
return G__4336;
})()
);

return c;
});
/**
 * Synchronously reads directory content
 * @param {!string} dirpath :: directory path to read
 * @return {!IVector} Vector<strings> representing directory content
 */
cljs_node_io.fs.readdir = (function cljs_node_io$fs$readdir(dirpath){
if(typeof dirpath === 'string'){
} else {
throw (new Error("Assert failed: (string? dirpath)"));
}

return cljs.core.vec.call(null,cljs_node_io.fs.fs.readdirSync(dirpath));
});
/**
 * Asynchronously reads directory content
 * @param {!string} dirpath :: directory path to read
 * @return {!Channel} promise-chan receiving [?err, ?Vector<string>]
 *  where strings are representing directory content
 */
cljs_node_io.fs.areaddir = (function cljs_node_io$fs$areaddir(dirpath){
if(typeof dirpath === 'string'){
} else {
throw (new Error("Assert failed: (string? dirpath)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readdir(dirpath,(function (e,data){
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.vec.call(null,data)], null));
}));

return c;
});
/**
 * Synchronous chmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {nil} or throws
 */
cljs_node_io.fs.chmod = (function cljs_node_io$fs$chmod(pathstr,mode){
return cljs_node_io.fs.fs.chmodSync(pathstr,mode);
});
/**
 * Asynchronous chmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.achmod = (function cljs_node_io$fs$achmod(pathstr,mode){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.chmod(pathstr,mode,(function() { 
var G__4339__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4340__i = 0, G__4340__a = new Array(arguments.length -  0);
while (G__4340__i < G__4340__a.length) {G__4340__a[G__4340__i] = arguments[G__4340__i + 0]; ++G__4340__i;}
  args = new cljs.core.IndexedSeq(G__4340__a,0,null);
} 
return G__4339__delegate.call(this,args);};
G__4339.cljs$lang$maxFixedArity = 0;
G__4339.cljs$lang$applyTo = (function (arglist__4341){
var args = cljs.core.seq(arglist__4341);
return G__4339__delegate(args);
});
G__4339.cljs$core$IFn$_invoke$arity$variadic = G__4339__delegate;
return G__4339;
})()
);

return c;
});
/**
 * Synchronous lchmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {nil}
 */
cljs_node_io.fs.lchmod = (function cljs_node_io$fs$lchmod(pathstr,mode){
return cljs_node_io.fs.fs.lchmodSync(pathstr,mode);
});
/**
 * Asynchronous lchmod
 * @param {!string} pathstr
 * @param {!Number} mode :: must be an integer
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alchmod = (function cljs_node_io$fs$alchmod(pathstr,mode){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lchmod(pathstr,mode,(function() { 
var G__4342__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4343__i = 0, G__4343__a = new Array(arguments.length -  0);
while (G__4343__i < G__4343__a.length) {G__4343__a[G__4343__i] = arguments[G__4343__i + 0]; ++G__4343__i;}
  args = new cljs.core.IndexedSeq(G__4343__a,0,null);
} 
return G__4342__delegate.call(this,args);};
G__4342.cljs$lang$maxFixedArity = 0;
G__4342.cljs$lang$applyTo = (function (arglist__4344){
var args = cljs.core.seq(arglist__4344);
return G__4342__delegate(args);
});
G__4342.cljs$core$IFn$_invoke$arity$variadic = G__4342__delegate;
return G__4342;
})()
);

return c;
});
/**
 * Synchronous chown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {nil}
 */
cljs_node_io.fs.chown = (function cljs_node_io$fs$chown(pathstr,uid,gid){
return cljs_node_io.fs.fs.chownSync(pathstr,uid,gid);
});
/**
 * Asynchronous chown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.achown = (function cljs_node_io$fs$achown(pathstr,uid,gid){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.chown(pathstr,uid,gid,(function() { 
var G__4345__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4346__i = 0, G__4346__a = new Array(arguments.length -  0);
while (G__4346__i < G__4346__a.length) {G__4346__a[G__4346__i] = arguments[G__4346__i + 0]; ++G__4346__i;}
  args = new cljs.core.IndexedSeq(G__4346__a,0,null);
} 
return G__4345__delegate.call(this,args);};
G__4345.cljs$lang$maxFixedArity = 0;
G__4345.cljs$lang$applyTo = (function (arglist__4347){
var args = cljs.core.seq(arglist__4347);
return G__4345__delegate(args);
});
G__4345.cljs$core$IFn$_invoke$arity$variadic = G__4345__delegate;
return G__4345;
})()
);

return c;
});
/**
 * Synchronous lchown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {nil} or throws
 */
cljs_node_io.fs.lchown = (function cljs_node_io$fs$lchown(pathstr,uid,gid){
return cljs_node_io.fs.fs.lchownSync(pathstr,uid,gid);
});
/**
 * Asynchronous lchown
 * @param {!string} pathstr
 * @param {!Number} uid
 * @param {!Number} gid
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alchown = (function cljs_node_io$fs$alchown(pathstr,uid,gid){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.lchown(pathstr,uid,gid,(function() { 
var G__4348__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4349__i = 0, G__4349__a = new Array(arguments.length -  0);
while (G__4349__i < G__4349__a.length) {G__4349__a[G__4349__i] = arguments[G__4349__i + 0]; ++G__4349__i;}
  args = new cljs.core.IndexedSeq(G__4349__a,0,null);
} 
return G__4348__delegate.call(this,args);};
G__4348.cljs$lang$maxFixedArity = 0;
G__4348.cljs$lang$applyTo = (function (arglist__4350){
var args = cljs.core.seq(arglist__4350);
return G__4348__delegate(args);
});
G__4348.cljs$core$IFn$_invoke$arity$variadic = G__4348__delegate;
return G__4348;
})()
);

return c;
});
/**
 * synchronous utimes
 * - If the value is NaN or Infinity, the value would get converted to Date.now()
 * - numerable strings ie '12235' are converted to numbers
 * @param {!string} pathstr
 * @param {(string|Number)} atime
 * @param {(string|Number)} mtime
 * @return {nil}
 */
cljs_node_io.fs.utimes = (function cljs_node_io$fs$utimes(pathstr,atime,mtime){
return cljs_node_io.fs.fs.utimesSync(pathstr,atime,mtime);
});
/**
 * asynchronous utimes
 * - If the value is NaN or Infinity, the value would get converted to Date.now()
 * - numerable strings ie '12235' are converted to numbers
 * @param {!string} pathstr
 * @param {(string|Number)} atime
 * @param {(string|Number)} mtime
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.autimes = (function cljs_node_io$fs$autimes(pathstr,atime,mtime){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.utimes(pathstr,atime,mtime,(function() { 
var G__4351__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4352__i = 0, G__4352__a = new Array(arguments.length -  0);
while (G__4352__i < G__4352__a.length) {G__4352__a[G__4352__i] = arguments[G__4352__i + 0]; ++G__4352__i;}
  args = new cljs.core.IndexedSeq(G__4352__a,0,null);
} 
return G__4351__delegate.call(this,args);};
G__4351.cljs$lang$maxFixedArity = 0;
G__4351.cljs$lang$applyTo = (function (arglist__4353){
var args = cljs.core.seq(arglist__4353);
return G__4351__delegate(args);
});
G__4351.cljs$core$IFn$_invoke$arity$variadic = G__4351__delegate;
return G__4351;
})()
);

return c;
});
/**
 * Synchronously create a directory
 * @param {!string} pathstr :: path of directory to create
 * @return {nil} or throws
 */
cljs_node_io.fs.mkdir = (function cljs_node_io$fs$mkdir(pathstr){
return cljs_node_io.fs.fs.mkdirSync(pathstr);
});
/**
 * Asynchronously create a directory
 * @param {!string} pathstr :: path of directory to create
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.amkdir = (function cljs_node_io$fs$amkdir(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.mkdir(pathstr,(function() { 
var G__4354__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4355__i = 0, G__4355__a = new Array(arguments.length -  0);
while (G__4355__i < G__4355__a.length) {G__4355__a[G__4355__i] = arguments[G__4355__i + 0]; ++G__4355__i;}
  args = new cljs.core.IndexedSeq(G__4355__a,0,null);
} 
return G__4354__delegate.call(this,args);};
G__4354.cljs$lang$maxFixedArity = 0;
G__4354.cljs$lang$applyTo = (function (arglist__4356){
var args = cljs.core.seq(arglist__4356);
return G__4354__delegate(args);
});
G__4354.cljs$core$IFn$_invoke$arity$variadic = G__4354__delegate;
return G__4354;
})()
);

return c;
});
/**
 * Synchronously remove a directory
 * @param {!string} pathstr :: path of directory to remove
 * @return {nil} or throws
 */
cljs_node_io.fs.rmdir = (function cljs_node_io$fs$rmdir(pathstr){
return cljs_node_io.fs.fs.rmdirSync(pathstr);
});
/**
 * Asynchronously remove a directory
 * @param {!string} pathstr :: path of directory to remove
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.armdir = (function cljs_node_io$fs$armdir(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.rmdir(pathstr,(function() { 
var G__4357__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4358__i = 0, G__4358__a = new Array(arguments.length -  0);
while (G__4358__i < G__4358__a.length) {G__4358__a[G__4358__i] = arguments[G__4358__i + 0]; ++G__4358__i;}
  args = new cljs.core.IndexedSeq(G__4358__a,0,null);
} 
return G__4357__delegate.call(this,args);};
G__4357.cljs$lang$maxFixedArity = 0;
G__4357.cljs$lang$applyTo = (function (arglist__4359){
var args = cljs.core.seq(arglist__4359);
return G__4357__delegate(args);
});
G__4357.cljs$core$IFn$_invoke$arity$variadic = G__4357__delegate;
return G__4357;
})()
);

return c;
});
/**
 * Synchronous link. Will not overwrite newpath if it exists.
 * @param {!string} srcpathstr
 * @param {!string} dstpathstr
 * @return {nil} or throws
 */
cljs_node_io.fs.link = (function cljs_node_io$fs$link(srcpathstr,dstpathstr){
if(typeof srcpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? srcpathstr)"));
}

if(typeof dstpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? dstpathstr)"));
}

return cljs_node_io.fs.fs.linkSync(srcpathstr,dstpathstr);
});
/**
 * Synchronous link. Will not overwrite newpath if it exists.
 * @param {!string} srcpathstr
 * @param {!string} dstpathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.alink = (function cljs_node_io$fs$alink(srcpathstr,dstpathstr){
if(typeof srcpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? srcpathstr)"));
}

if(typeof dstpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? dstpathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.link(srcpathstr,dstpathstr,(function() { 
var G__4360__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4361__i = 0, G__4361__a = new Array(arguments.length -  0);
while (G__4361__i < G__4361__a.length) {G__4361__a[G__4361__i] = arguments[G__4361__i + 0]; ++G__4361__i;}
  args = new cljs.core.IndexedSeq(G__4361__a,0,null);
} 
return G__4360__delegate.call(this,args);};
G__4360.cljs$lang$maxFixedArity = 0;
G__4360.cljs$lang$applyTo = (function (arglist__4362){
var args = cljs.core.seq(arglist__4362);
return G__4360__delegate(args);
});
G__4360.cljs$core$IFn$_invoke$arity$variadic = G__4360__delegate;
return G__4360;
})()
);

return c;
});
/**
 * Synchronous symlink.
 * @param {!string} target :: what gets pointed to
 * @param {!string} pathstr :: the new symbolic link that points to target
 * @return {nil} or throws
 */
cljs_node_io.fs.symlink = (function cljs_node_io$fs$symlink(target,pathstr){
return cljs_node_io.fs.fs.symlinkSync(target,pathstr);
});
/**
 * Synchronous symlink.
 * @param {!string} targetstr :: what gets pointed to
 * @param {!string} pathstr :: the new symbolic link that points to target
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.asymlink = (function cljs_node_io$fs$asymlink(targetstr,pathstr){
if(typeof targetstr === 'string'){
} else {
throw (new Error("Assert failed: (string? targetstr)"));
}

if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.symlink(targetstr,pathstr,(function() { 
var G__4363__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4364__i = 0, G__4364__a = new Array(arguments.length -  0);
while (G__4364__i < G__4364__a.length) {G__4364__a[G__4364__i] = arguments[G__4364__i + 0]; ++G__4364__i;}
  args = new cljs.core.IndexedSeq(G__4364__a,0,null);
} 
return G__4363__delegate.call(this,args);};
G__4363.cljs$lang$maxFixedArity = 0;
G__4363.cljs$lang$applyTo = (function (arglist__4365){
var args = cljs.core.seq(arglist__4365);
return G__4363__delegate(args);
});
G__4363.cljs$core$IFn$_invoke$arity$variadic = G__4363__delegate;
return G__4363;
})()
);

return c;
});
/**
 * Synchronously unlink a file.
 * @param {!string} pathstr :: path of file to unlink
 * @return {nil} or throws
 */
cljs_node_io.fs.unlink = (function cljs_node_io$fs$unlink(pathstr){
return cljs_node_io.fs.fs.unlinkSync(pathstr);
});
/**
 * Asynchronously unlink a file
 * @param {!string} pathstr :: path of file to unlink
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.aunlink = (function cljs_node_io$fs$aunlink(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.unlink(pathstr,(function() { 
var G__4366__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4367__i = 0, G__4367__a = new Array(arguments.length -  0);
while (G__4367__i < G__4367__a.length) {G__4367__a[G__4367__i] = arguments[G__4367__i + 0]; ++G__4367__i;}
  args = new cljs.core.IndexedSeq(G__4367__a,0,null);
} 
return G__4366__delegate.call(this,args);};
G__4366.cljs$lang$maxFixedArity = 0;
G__4366.cljs$lang$applyTo = (function (arglist__4368){
var args = cljs.core.seq(arglist__4368);
return G__4366__delegate(args);
});
G__4366.cljs$core$IFn$_invoke$arity$variadic = G__4366__delegate;
return G__4366;
})()
);

return c;
});
/**
 * Synchronously delete the file or directory path
 * @param {!string} pathstr :: can be file or directory
 * @return {nil} or throws
 */
cljs_node_io.fs.rm = (function cljs_node_io$fs$rm(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs_node_io.fs.dir_QMARK_.call(null,pathstr)){
return cljs_node_io.fs.rmdir.call(null,pathstr);
} else {
return cljs_node_io.fs.unlink.call(null,pathstr);
}
});
/**
 * Asynchronously delete the file or directory path
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arm = (function cljs_node_io$fs$arm(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
var dc = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
cljs.core.async.take_BANG_.call(null,dc,(function (d_QMARK_){
return cljs.core.async.take_BANG_.call(null,(cljs.core.truth_(d_QMARK_)?cljs_node_io.fs.armdir.call(null,pathstr):cljs_node_io.fs.aunlink.call(null,pathstr)),(function (ev){
return cljs.core.async.put_BANG_.call(null,c,ev);
}));
}));

return c;
});
/**
 * @param {!string} pathstr :: path to a directory to recursively delete. Deletes a passed file as well.
 * @return {nil} or throws
 */
cljs_node_io.fs.rm_r = (function cljs_node_io$fs$rm_r(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["/",null,"\\\\",null,"\\",null,"//",null], null), null).call(null,pathstr)) === false){
} else {
throw (new Error(["Assert failed: ",["you just tried to delete root, ",cljs.core.pr_str.call(null,pathstr),", be more careful."].join(''),"\n","(false? (boolean (#{\"/\" \"\\\\\\\\\" \"\\\\\" \"//\"} pathstr)))"].join('')));
}

if(cljs_node_io.fs.dir_QMARK_.call(null,pathstr)){
var seq__4369_4373 = cljs.core.seq.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr),cljs_node_io.fs.readdir.call(null,pathstr)));
var chunk__4370_4374 = null;
var count__4371_4375 = (0);
var i__4372_4376 = (0);
while(true){
if((i__4372_4376 < count__4371_4375)){
var p_4377 = cljs.core._nth.call(null,chunk__4370_4374,i__4372_4376);
cljs_node_io.fs.rm_r.call(null,p_4377);


var G__4378 = seq__4369_4373;
var G__4379 = chunk__4370_4374;
var G__4380 = count__4371_4375;
var G__4381 = (i__4372_4376 + (1));
seq__4369_4373 = G__4378;
chunk__4370_4374 = G__4379;
count__4371_4375 = G__4380;
i__4372_4376 = G__4381;
continue;
} else {
var temp__5753__auto___4382 = cljs.core.seq.call(null,seq__4369_4373);
if(temp__5753__auto___4382){
var seq__4369_4383__$1 = temp__5753__auto___4382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4369_4383__$1)){
var c__4556__auto___4384 = cljs.core.chunk_first.call(null,seq__4369_4383__$1);
var G__4385 = cljs.core.chunk_rest.call(null,seq__4369_4383__$1);
var G__4386 = c__4556__auto___4384;
var G__4387 = cljs.core.count.call(null,c__4556__auto___4384);
var G__4388 = (0);
seq__4369_4373 = G__4385;
chunk__4370_4374 = G__4386;
count__4371_4375 = G__4387;
i__4372_4376 = G__4388;
continue;
} else {
var p_4389 = cljs.core.first.call(null,seq__4369_4383__$1);
cljs_node_io.fs.rm_r.call(null,p_4389);


var G__4390 = cljs.core.next.call(null,seq__4369_4383__$1);
var G__4391 = null;
var G__4392 = (0);
var G__4393 = (0);
seq__4369_4373 = G__4390;
chunk__4370_4374 = G__4391;
count__4371_4375 = G__4392;
i__4372_4376 = G__4393;
continue;
}
} else {
}
}
break;
}

return cljs_node_io.fs.rmdir.call(null,pathstr);
} else {
return cljs_node_io.fs.unlink.call(null,pathstr);
}
});
/**
 * asynchronous recursive delete. Crawls in order provided by readdir and makes unlink/rmdir calls sequentially
 * after the previous has completed. Breaks on any err which is returned as [err].
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arm_r = (function cljs_node_io$fs$arm_r(pathstr){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

if(cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["/",null,"\\\\",null,"\\",null,"//",null], null), null).call(null,pathstr)) === false){
} else {
throw (new Error(["Assert failed: ",["you just tried to delete root, ",cljs.core.pr_str.call(null,pathstr),", be more careful."].join(''),"\n","(false? (boolean (#{\"/\" \"\\\\\\\\\" \"\\\\\" \"//\"} pathstr)))"].join('')));
}

var c = cljs.core.async.promise_chan.call(null);
var c__2305__auto___4488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_4459){
var state_val_4460 = (state_4459[(1)]);
if((state_val_4460 === (7))){
var inst_4405 = (state_4459[(7)]);
var inst_4408 = cljs.core.partial.call(null,cljs_node_io.fs.resolve_path,pathstr);
var inst_4409 = cljs.core.mapv.call(null,inst_4408,inst_4405);
var inst_4410 = inst_4409;
var state_4459__$1 = (function (){var statearr_4461 = state_4459;
(statearr_4461[(8)] = inst_4410);

return statearr_4461;
})();
var statearr_4462_4489 = state_4459__$1;
(statearr_4462_4489[(2)] = null);

(statearr_4462_4489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (20))){
var inst_4441 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4463_4490 = state_4459__$1;
(statearr_4463_4490[(2)] = inst_4441);

(statearr_4463_4490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (1))){
var inst_4394 = cljs_node_io.fs.adir_QMARK_.call(null,pathstr);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4459__$1,(2),inst_4394);
} else {
if((state_val_4460 === (24))){
var inst_4453 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4459__$1,(23),c,inst_4453);
} else {
if((state_val_4460 === (4))){
var inst_4451 = cljs_node_io.fs.aunlink.call(null,pathstr);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4459__$1,(24),inst_4451);
} else {
if((state_val_4460 === (15))){
var inst_4422 = (state_4459[(9)]);
var inst_4421 = (state_4459[(2)]);
var inst_4422__$1 = cljs.core.nth.call(null,inst_4421,(0),null);
var inst_4423 = (inst_4422__$1 instanceof Error);
var state_4459__$1 = (function (){var statearr_4464 = state_4459;
(statearr_4464[(9)] = inst_4422__$1);

return statearr_4464;
})();
if(cljs.core.truth_(inst_4423)){
var statearr_4465_4491 = state_4459__$1;
(statearr_4465_4491[(1)] = (16));

} else {
var statearr_4466_4492 = state_4459__$1;
(statearr_4466_4492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (21))){
var inst_4439 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4459__$1,(20),c,inst_4439);
} else {
if((state_val_4460 === (13))){
var state_4459__$1 = state_4459;
var statearr_4467_4493 = state_4459__$1;
(statearr_4467_4493[(2)] = null);

(statearr_4467_4493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (22))){
var inst_4447 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4468_4494 = state_4459__$1;
(statearr_4468_4494[(2)] = inst_4447);

(statearr_4468_4494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (6))){
var inst_4404 = (state_4459[(10)]);
var inst_4403 = (state_4459[(2)]);
var inst_4404__$1 = cljs.core.nth.call(null,inst_4403,(0),null);
var inst_4405 = cljs.core.nth.call(null,inst_4403,(1),null);
var inst_4406 = cljs.core.not.call(null,inst_4404__$1);
var state_4459__$1 = (function (){var statearr_4469 = state_4459;
(statearr_4469[(10)] = inst_4404__$1);

(statearr_4469[(7)] = inst_4405);

return statearr_4469;
})();
if(inst_4406){
var statearr_4470_4495 = state_4459__$1;
(statearr_4470_4495[(1)] = (7));

} else {
var statearr_4471_4496 = state_4459__$1;
(statearr_4471_4496[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (17))){
var inst_4410 = (state_4459[(8)]);
var inst_4428 = cljs.core.next.call(null,inst_4410);
var inst_4410__$1 = inst_4428;
var state_4459__$1 = (function (){var statearr_4472 = state_4459;
(statearr_4472[(8)] = inst_4410__$1);

return statearr_4472;
})();
var statearr_4473_4497 = state_4459__$1;
(statearr_4473_4497[(2)] = null);

(statearr_4473_4497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (3))){
var inst_4401 = cljs_node_io.fs.areaddir.call(null,pathstr);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4459__$1,(6),inst_4401);
} else {
if((state_val_4460 === (12))){
var inst_4410 = (state_4459[(8)]);
var inst_4418 = cljs.core.first.call(null,inst_4410);
var inst_4419 = cljs_node_io.fs.arm_r.call(null,inst_4418);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4459__$1,(15),inst_4419);
} else {
if((state_val_4460 === (2))){
var inst_4396 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
if(cljs.core.truth_(inst_4396)){
var statearr_4474_4498 = state_4459__$1;
(statearr_4474_4498[(1)] = (3));

} else {
var statearr_4475_4499 = state_4459__$1;
(statearr_4475_4499[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (23))){
var inst_4455 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4476_4500 = state_4459__$1;
(statearr_4476_4500[(2)] = inst_4455);

(statearr_4476_4500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (19))){
var inst_4426 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4477_4501 = state_4459__$1;
(statearr_4477_4501[(2)] = inst_4426);

(statearr_4477_4501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (11))){
var inst_4436 = (state_4459[(2)]);
var inst_4437 = cljs_node_io.fs.armdir.call(null,pathstr);
var state_4459__$1 = (function (){var statearr_4478 = state_4459;
(statearr_4478[(11)] = inst_4436);

return statearr_4478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4459__$1,(21),inst_4437);
} else {
if((state_val_4460 === (9))){
var inst_4449 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4479_4502 = state_4459__$1;
(statearr_4479_4502[(2)] = inst_4449);

(statearr_4479_4502[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (5))){
var inst_4457 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4459__$1,inst_4457);
} else {
if((state_val_4460 === (14))){
var inst_4434 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4480_4503 = state_4459__$1;
(statearr_4480_4503[(2)] = inst_4434);

(statearr_4480_4503[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (16))){
var inst_4422 = (state_4459[(9)]);
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4459__$1,(19),c,inst_4422);
} else {
if((state_val_4460 === (10))){
var inst_4410 = (state_4459[(8)]);
var inst_4412 = (inst_4410 == null);
var inst_4413 = cljs.core.not.call(null,inst_4412);
var state_4459__$1 = state_4459;
if(inst_4413){
var statearr_4481_4504 = state_4459__$1;
(statearr_4481_4504[(1)] = (12));

} else {
var statearr_4482_4505 = state_4459__$1;
(statearr_4482_4505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (18))){
var inst_4431 = (state_4459[(2)]);
var state_4459__$1 = state_4459;
var statearr_4483_4506 = state_4459__$1;
(statearr_4483_4506[(2)] = inst_4431);

(statearr_4483_4506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4460 === (8))){
var inst_4404 = (state_4459[(10)]);
var inst_4443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4444 = [inst_4404];
var inst_4445 = (new cljs.core.PersistentVector(null,1,(5),inst_4443,inst_4444,null));
var state_4459__$1 = state_4459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4459__$1,(22),c,inst_4445);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs_node_io$fs$arm_r_$_state_machine__2211__auto__ = null;
var cljs_node_io$fs$arm_r_$_state_machine__2211__auto____0 = (function (){
var statearr_4484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4484[(0)] = cljs_node_io$fs$arm_r_$_state_machine__2211__auto__);

(statearr_4484[(1)] = (1));

return statearr_4484;
});
var cljs_node_io$fs$arm_r_$_state_machine__2211__auto____1 = (function (state_4459){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_4459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e4485){if((e4485 instanceof Object)){
var ex__2214__auto__ = e4485;
var statearr_4486_4507 = state_4459;
(statearr_4486_4507[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4508 = state_4459;
state_4459 = G__4508;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs_node_io$fs$arm_r_$_state_machine__2211__auto__ = function(state_4459){
switch(arguments.length){
case 0:
return cljs_node_io$fs$arm_r_$_state_machine__2211__auto____0.call(this);
case 1:
return cljs_node_io$fs$arm_r_$_state_machine__2211__auto____1.call(this,state_4459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_node_io$fs$arm_r_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_node_io$fs$arm_r_$_state_machine__2211__auto____0;
cljs_node_io$fs$arm_r_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_node_io$fs$arm_r_$_state_machine__2211__auto____1;
return cljs_node_io$fs$arm_r_$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_4487 = f__2306__auto__.call(null);
(statearr_4487[(6)] = c__2305__auto___4488);

return statearr_4487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return c;
});
/**
 * Synchronously rename a file.
 * @param {!string} oldpathstr :: file to rename
 * @param {!string} newpathstr :: what to rename it to
 * @return {nil}
 */
cljs_node_io.fs.rename = (function cljs_node_io$fs$rename(oldpathstr,newpathstr){
return cljs_node_io.fs.fs.renameSync(oldpathstr,newpathstr);
});
/**
 * Asynchronously rename a file
 * @param {!string} oldpathstr :: file to rename
 * @param {!string} newpathstr :: what to rename it to
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.arename = (function cljs_node_io$fs$arename(oldpathstr,newpathstr){
if(typeof oldpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? oldpathstr)"));
}

if(typeof newpathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? newpathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.rename(oldpathstr,newpathstr,(function() { 
var G__4509__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4510__i = 0, G__4510__a = new Array(arguments.length -  0);
while (G__4510__i < G__4510__a.length) {G__4510__a[G__4510__i] = arguments[G__4510__i + 0]; ++G__4510__i;}
  args = new cljs.core.IndexedSeq(G__4510__a,0,null);
} 
return G__4509__delegate.call(this,args);};
G__4509.cljs$lang$maxFixedArity = 0;
G__4509.cljs$lang$applyTo = (function (arglist__4511){
var args = cljs.core.seq(arglist__4511);
return G__4509__delegate(args);
});
G__4509.cljs$core$IFn$_invoke$arity$variadic = G__4509__delegate;
return G__4509;
})()
);

return c;
});
/**
 * Synchronous truncate
 * @param {!string} pathstr
 * @param {!number} length
 * @return {nil} or throws
 */
cljs_node_io.fs.truncate = (function cljs_node_io$fs$truncate(pathstr,length){
return cljs_node_io.fs.fs.truncateSync(pathstr,length);
});
/**
 * Asynchronous truncate
 * @param {!string} pathstr
 * @param {!number} len
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.atruncate = (function cljs_node_io$fs$atruncate(pathstr,len){
if(typeof pathstr === 'string'){
} else {
throw (new Error("Assert failed: (string? pathstr)"));
}

var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.truncate(pathstr,len,(function() { 
var G__4512__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4513__i = 0, G__4513__a = new Array(arguments.length -  0);
while (G__4513__i < G__4513__a.length) {G__4513__a[G__4513__i] = arguments[G__4513__i + 0]; ++G__4513__i;}
  args = new cljs.core.IndexedSeq(G__4513__a,0,null);
} 
return G__4512__delegate.call(this,args);};
G__4512.cljs$lang$maxFixedArity = 0;
G__4512.cljs$lang$applyTo = (function (arglist__4514){
var args = cljs.core.seq(arglist__4514);
return G__4512__delegate(args);
});
G__4512.cljs$core$IFn$_invoke$arity$variadic = G__4512__delegate;
return G__4512;
})()
);

return c;
});
/**
 * @param {!string} pathstr :: the file path to read
 * @param {!string} enc :: encoding , if "" (an explicit empty string), => raw buffer
 * @return {(buffer.Buffer|string)} or throw
 */
cljs_node_io.fs.readFile = (function cljs_node_io$fs$readFile(pathstr,enc){
return cljs_node_io.fs.fs.readFileSync(pathstr,enc);
});
/**
 * @param {!string} pathstr
 * @param {!string} enc :: if "" (an explicit empty string) => raw buffer
 * @return {!Channel} promise-chan receiving [?err ?(str|Buffer)] on successful read
 */
cljs_node_io.fs.areadFile = (function cljs_node_io$fs$areadFile(pathstr,enc){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.readFile(pathstr,enc,(function() { 
var G__4515__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4516__i = 0, G__4516__a = new Array(arguments.length -  0);
while (G__4516__i < G__4516__a.length) {G__4516__a[G__4516__i] = arguments[G__4516__i + 0]; ++G__4516__i;}
  args = new cljs.core.IndexedSeq(G__4516__a,0,null);
} 
return G__4515__delegate.call(this,args);};
G__4515.cljs$lang$maxFixedArity = 0;
G__4515.cljs$lang$applyTo = (function (arglist__4517){
var args = cljs.core.seq(arglist__4517);
return G__4515__delegate(args);
});
G__4515.cljs$core$IFn$_invoke$arity$variadic = G__4515__delegate;
return G__4515;
})()
);

return c;
});
/**
 * synchronously writes content to file represented by pathstring.
 * @param {!string} pathstr :: file to write to
 * @param {(string|buffer.Buffer)} content :: if buffer, :encoding is ignored
 * @param {?IMap} opts :: {:encoding {string}, :append {boolean}, :flags {string}, :mode {int}}
 *  - flags override append
 *  - :encoding defaults to utf8
 * @return {nil} or throws
 */
cljs_node_io.fs.writeFile = (function cljs_node_io$fs$writeFile(pathstr,content,opts){
return cljs_node_io.fs.fs.writeFileSync(pathstr,content,({"flag": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "utf8";
}
})()}));
});
/**
 * Asynchronously write to a file.
 * @param {!string} pathstring : file to write to
 * @param {(string|buffer.Buffer)} content : if buffer, :encoding is ignored
 * @param {?IMap} opts : :encoding {string}, :append {bool}, :flags {string}, :mode {int}
 *  - flags override append
 * @return {!Channel} promise-chan recieving [?err]
 */
cljs_node_io.fs.awriteFile = (function cljs_node_io$fs$awriteFile(pathstring,content,opts){
var c = cljs.core.async.promise_chan.call(null);
cljs_node_io.fs.fs.writeFile(pathstring,content,({"flag": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"append","append",-291298229).cljs$core$IFn$_invoke$arity$1(opts))){
return "a";
} else {
return "w";
}
}
})(), "mode": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (438);
}
})(), "encoding": (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "utf8";
}
})()}),(function() { 
var G__4518__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,c,cljs.core.vec.call(null,args));
};
var G__4518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4519__i = 0, G__4519__a = new Array(arguments.length -  0);
while (G__4519__i < G__4519__a.length) {G__4519__a[G__4519__i] = arguments[G__4519__i + 0]; ++G__4519__i;}
  args = new cljs.core.IndexedSeq(G__4519__a,0,null);
} 
return G__4518__delegate.call(this,args);};
G__4518.cljs$lang$maxFixedArity = 0;
G__4518.cljs$lang$applyTo = (function (arglist__4520){
var args = cljs.core.seq(arglist__4520);
return G__4518__delegate(args);
});
G__4518.cljs$core$IFn$_invoke$arity$variadic = G__4518__delegate;
return G__4518;
})()
);

return c;
});
cljs_node_io.fs.watcher__GT_ch = (function cljs_node_io$fs$watcher__GT_ch(var_args){
var G__4522 = arguments.length;
switch (G__4522) {
case 2:
return cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$2 = (function (FSWatcher,out_ch){
return cljs_node_io.fs.watcher__GT_ch.call(null,FSWatcher,out_ch,null);
}));

(cljs_node_io.fs.watcher__GT_ch.cljs$core$IFn$_invoke$arity$3 = (function (FSWatcher,out_ch,p__4523){
var map__4524 = p__4523;
var map__4524__$1 = (((((!((map__4524 == null))))?(((((map__4524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4524):map__4524);
var key = cljs.core.get.call(null,map__4524__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var buf_or_n = cljs.core.get.call(null,map__4524__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10));
var G__4526_4528 = FSWatcher;
G__4526_4528.on("change",(function (eventType,filename){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,eventType)], null));
}));

G__4526_4528.on("error",(function (e){
return cljs.core.async.put_BANG_.call(null,out_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)], null));
}));


return out_ch;
}));

(cljs_node_io.fs.watcher__GT_ch.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs_node_io.fs.Object}
*/
cljs_node_io.fs.Watcher = (function (FSWatcher,out){
this.FSWatcher = FSWatcher;
this.out = out;
});
(cljs_node_io.fs.Watcher.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs_node_io.fs.Watcher.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.out,handler);
}));

(cljs_node_io.fs.Watcher.prototype.close = (function (){
var self__ = this;
var this$ = this;
self__.FSWatcher.close();

return cljs.core.async.put_BANG_.call(null,self__.out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close","close",1835149582)], null),(function (){
return cljs.core.async.close_BANG_.call(null,self__.out);
}));
}));

(cljs_node_io.fs.Watcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"FSWatcher","FSWatcher",-1658877931,null),new cljs.core.Symbol(null,"out","out",729986010,null)], null);
}));

(cljs_node_io.fs.Watcher.cljs$lang$type = true);

(cljs_node_io.fs.Watcher.cljs$lang$ctorStr = "cljs-node-io.fs/Watcher");

(cljs_node_io.fs.Watcher.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs-node-io.fs/Watcher");
}));

/**
 * Positional factory function for cljs-node-io.fs/Watcher.
 */
cljs_node_io.fs.__GT_Watcher = (function cljs_node_io$fs$__GT_Watcher(FSWatcher,out){
return (new cljs_node_io.fs.Watcher(FSWatcher,out));
});

/**
 * Watch a file or directory.
 * Make note of caveats https://nodejs.org/api/fs.html#fs_caveats
 * events : 'rename', 'change' , 'error', 'close'
 * opts :
 *  :peristent {boolean} (true) :: whether the process should continue as long as files are being watched.
 *  :recursive {boolean} (false) :: watch subdirectories
 *  :buf-or-n {(impl/Buffer|number)} (10) :: channel buffer
 *  :encoding {string} ('utf8') :: used to interpret passed filename
 * @return {!Watcher}
 */
cljs_node_io.fs.watch = (function cljs_node_io$fs$watch(var_args){
var G__4531 = arguments.length;
switch (G__4531) {
case 1:
return cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return cljs_node_io.fs.watch.call(null,filename,null);
}));

(cljs_node_io.fs.watch.cljs$core$IFn$_invoke$arity$2 = (function (filename,opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"persistent","persistent",885415113),true,new cljs.core.Keyword(null,"recursive","recursive",718885872),false,new cljs.core.Keyword(null,"encoding","encoding",1728578272),"utf8",new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10)], null);
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
var key = (function (){var or__4126__auto__ = cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return filename;
}
})();
var out = cljs.core.async.chan.call(null,cljs.core.get.call(null,opts__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719)),cljs.core.map.call(null,(function (p1__4529_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),p1__4529_SHARP_);
})));
var w = cljs_node_io.fs.fs.watch.call(null,filename,cljs.core.clj__GT_js.call(null,opts__$1));
return cljs_node_io.fs.__GT_Watcher.call(null,w,cljs_node_io.fs.watcher__GT_ch.call(null,w,out));
}));

(cljs_node_io.fs.watch.cljs$lang$maxFixedArity = 2);

/**
 * Prefer watch. Polls files and returns stat objects. Opts:
 *   :peristent {boolean} (true) :: whether the process should continue as long as files are being watched.
 *   :interval {number} (5007) :: polling interval in msecs
 *   :edn? {boolean} (true) :: converts stats to edn
 *   :buf-or-n {(impl/Buffer|number)} (10) :: channel buffer
 * @return {!Channel} <= [filename [current fs.stat, previous fs.stat]]
 */
cljs_node_io.fs.watchFile = (function cljs_node_io$fs$watchFile(var_args){
var G__4535 = arguments.length;
switch (G__4535) {
case 1:
return cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return cljs_node_io.fs.watchFile.call(null,filename,null);
}));

(cljs_node_io.fs.watchFile.cljs$core$IFn$_invoke$arity$2 = (function (filename,opts){
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"interval","interval",1708495417),(5007),new cljs.core.Keyword(null,"persistent","persistent",885415113),true,new cljs.core.Keyword(null,"edn?","edn?",-499466946),true,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719),(10)], null);
var map__4536 = cljs.core.merge.call(null,defaults,opts);
var map__4536__$1 = (((((!((map__4536 == null))))?(((((map__4536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4536):map__4536);
var opts__$1 = map__4536__$1;
var edn_QMARK_ = cljs.core.get.call(null,map__4536__$1,new cljs.core.Keyword(null,"edn?","edn?",-499466946));
var buf_or_n = cljs.core.get.call(null,map__4536__$1,new cljs.core.Keyword(null,"buf-or-n","buf-or-n",1007620719));
var out = cljs.core.async.chan.call(null,buf_or_n,cljs.core.map.call(null,(function (p1__4533_SHARP_){
return cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename], null),p1__4533_SHARP_);
})));
var cb = (function (curr,prev){
return cljs.core.async.put_BANG_.call(null,out,(cljs.core.truth_(edn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_node_io.fs.stat__GT_clj.call(null,curr),cljs_node_io.fs.stat__GT_clj.call(null,prev)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,prev], null)));
});
var w = cljs_node_io.fs.fs.watchFile.call(null,filename,cljs.core.clj__GT_js.call(null,opts__$1),cb);
return out;
}));

(cljs_node_io.fs.watchFile.cljs$lang$maxFixedArity = 2);

/**
 * remove all watchers from a file
 * @param {!string} pathstr
 * @return {nil}
 */
cljs_node_io.fs.unwatchFile = (function cljs_node_io$fs$unwatchFile(pathstr){
return cljs_node_io.fs.fs.unwatchFile.call(null,pathstr);
});
/**
 * creates a file if non-existent, writes blank string to an existing
 * @param {!string} pathstr
 * @return {nil}
 */
cljs_node_io.fs.touch = (function cljs_node_io$fs$touch(pathstr){
return cljs_node_io.fs.writeFile.call(null,pathstr,"",null);
});
/**
 * creates a file if non-existent, writes blank string to an existing
 * @param {!string} pathstr
 * @return {!Channel} promise-chan receiving [?err]
 */
cljs_node_io.fs.atouch = (function cljs_node_io$fs$atouch(pathstr){
return cljs_node_io.fs.awriteFile.call(null,pathstr,"",null);
});
cljs_node_io.fs.rl = require("readline");
/**
 * A simple file line reader.
 * @param {!string} pathstr
 * @return {!Channel} chan receiving [?err ?line] until file is consumed,
 * and then the channel closes.
 */
cljs_node_io.fs.readline = (function cljs_node_io$fs$readline(pathstr){
var out = cljs.core.async.chan.call(null,(10));
var in$ = cljs_node_io.fs.fs.createReadStream.call(null,pathstr);
var _ = (out.in = in$);
var r = cljs_node_io.fs.rl.createInterface.call(null,({"input": in$, "crlfDelay": Infinity}));
var G__4539_4541 = in$;
G__4539_4541.on("error",(function (e){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));
}));

G__4539_4541.on("close",(function (){
return cljs.core.async.close_BANG_.call(null,out);
}));


var G__4540_4542 = r;
G__4540_4542.on("line",(function (line){
return cljs.core.async.put_BANG_.call(null,out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,line], null));
}));


return out;
});

//# sourceMappingURL=fs.js.map
