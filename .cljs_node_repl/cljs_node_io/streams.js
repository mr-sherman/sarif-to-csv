// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('cljs_node_io.streams');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('cljs_node_io.protocols');
cljs_node_io.streams.fs = require("fs");
cljs_node_io.streams.stream = require("stream");
/**
 * adds IOFactory input impls that just defer back to the stream or throw as appropriate
 * @param {!stream.Readable} streamobj
 * @return {!stream.Readable}
 */
cljs_node_io.streams.input_IOF_BANG_ = (function cljs_node_io$streams$input_IOF_BANG_(streamobj){
var x4553 = streamobj;
(x4553.cljs_node_io$protocols$IInputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4553.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL);

(x4553.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (this$,opts){
var this$__$1 = this;
return this$__$1;
}));

(x4553.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(x4553.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (this$,_){
var this$__$1 = this;
throw (new Error(["ILLEGAL ARGUMENT: Cannot open <",cljs.core.pr_str.call(null,this$__$1),"> as an OutputStream."].join('')));
}));

(x4553.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
throw (new Error(["ILLEGAL ARGUMENT: Cannot open <",cljs.core.pr_str.call(null,this$__$1),"> as an OutputStream."].join('')));
}));

return x4553;
});
/**
 * adds IOFactory output impls that just defer back to the stream or throw as appropriate
 * @param {!stream.Writable} streamobj
 * @return {!stream.Writable}
 */
cljs_node_io.streams.output_IOF_BANG_ = (function cljs_node_io$streams$output_IOF_BANG_(streamobj){
var x4554 = streamobj;
(x4554.cljs_node_io$protocols$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4554.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL);

(x4554.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (this$,_){
var this$__$1 = this;
throw (new Error(["ILLEGAL ARGUMENT: Cannot open <",cljs.core.pr_str.call(null,this$__$1),"> as an InputStream."].join('')));
}));

(x4554.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
throw (new Error(["ILLEGAL ARGUMENT: Cannot open <",cljs.core.pr_str.call(null,this$__$1),"> as an InputStream."].join('')));
}));

(x4554.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(x4554.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

return x4554;
});
/**
 * defer back to the stream in all cases
 * @param {!stream.Duplex} streamobj
 * @return {!stream.Duplex}
 */
cljs_node_io.streams.duplex_IOF_BANG_ = (function cljs_node_io$streams$duplex_IOF_BANG_(streamobj){
var x4555 = streamobj;
(x4555.cljs_node_io$protocols$IInputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4555.cljs_node_io$protocols$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4555.cljs_node_io$protocols$IOFactory$ = cljs.core.PROTOCOL_SENTINEL);

(x4555.cljs_node_io$protocols$IOFactory$make_reader$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(x4555.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(x4555.cljs_node_io$protocols$IOFactory$make_writer$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(x4555.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

return x4555;
});
/**
 * @param {!IMap} opts
 * @return {!stream.Readable}
 */
cljs_node_io.streams.ReadableStream = (function cljs_node_io$streams$ReadableStream(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error(["Assert failed: ","you must pass a map of constructor options containing at least a :read k-v pair","\n","(map? opts)"].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"read","read",1140058661)))){
} else {
throw (new Error(["Assert failed: ","you must supply an internal :read function when creating a read stream","\n","(fn? (get opts :read))"].join('')));
}

return cljs_node_io.streams.input_IOF_BANG_.call(null,(new cljs_node_io.streams.stream.Readable(cljs.core.clj__GT_js.call(null,opts))));
});
/**
 * @param {!IMap} opts
 * @return {!stream.Writable}
 */
cljs_node_io.streams.WritableStream = (function cljs_node_io$streams$WritableStream(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error(["Assert failed: ","you must pass a map of constructor options containing at least a :write k-v pair","\n","(map? opts)"].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"write","write",-1857649168)))){
} else {
throw (new Error(["Assert failed: ","you must supply an internal :write function when creating writable streams","\n","(fn? (get opts :write))"].join('')));
}

return cljs_node_io.streams.output_IOF_BANG_.call(null,(new cljs_node_io.streams.stream.Writable(cljs.core.clj__GT_js.call(null,opts))));
});
/**
 * @param {!IMap} opts
 * @return {!stream.Duplex}
 */
cljs_node_io.streams.DuplexStream = (function cljs_node_io$streams$DuplexStream(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error(["Assert failed: ","you must pass a map of constructor options containing at least :read & :write fns","\n","(map? opts)"].join('')));
}

if(((cljs.core.fn_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"read","read",1140058661)))) && (cljs.core.fn_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"write","write",-1857649168)))))){
} else {
throw (new Error(["Assert failed: ","you must supply :read & :write fns when creating duplex streams.","\n","(and (fn? (get opts :read)) (fn? (get opts :write)))"].join('')));
}

return cljs_node_io.streams.duplex_IOF_BANG_.call(null,(new cljs_node_io.streams.stream.Duplex(cljs.core.clj__GT_js.call(null,opts))));
});
/**
 * @param {!IMap} opts
 * @return {!stream.Duplex}
 */
cljs_node_io.streams.TransformStream = (function cljs_node_io$streams$TransformStream(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error(["Assert failed: ","you must pass a map of constructor options containing at least a :transform fn","\n","(map? opts)"].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"transform","transform",1381301764)))){
} else {
throw (new Error(["Assert failed: ","you must supply a :transform fn when creating a transform stream.","\n","(fn? (get opts :transform))"].join('')));
}

if((function (){var temp__5751__auto__ = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"flush","flush",-1138711199));
if(cljs.core.truth_(temp__5751__auto__)){
var flush = temp__5751__auto__;
return cljs.core.fn_QMARK_.call(null,flush);
} else {
return true;
}
})()){
} else {
throw (new Error(["Assert failed: ",":flush must be a fn","\n","(if-let [flush (get opts :flush)] (fn? flush) true)"].join('')));
}

return cljs_node_io.streams.duplex_IOF_BANG_.call(null,(new cljs_node_io.streams.stream.Transform(cljs.core.clj__GT_js.call(null,opts))));
});
/**
 * Creates a ReadableStream from a Buffer. Opts are same as ReadableStream except
 * the :read fn is provided. If you provide :read, it is ignored
 * @return {!stream.Readable}
 */
cljs_node_io.streams.BufferReadStream = (function cljs_node_io$streams$BufferReadStream(var_args){
var G__4557 = arguments.length;
switch (G__4557) {
case 1:
return cljs_node_io.streams.BufferReadStream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.streams.BufferReadStream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.streams.BufferReadStream.cljs$core$IFn$_invoke$arity$1 = (function (source){
return cljs_node_io.streams.BufferReadStream.call(null,source,null);
}));

(cljs_node_io.streams.BufferReadStream.cljs$core$IFn$_invoke$arity$2 = (function (source,opts){
if(cljs.core.truth_(Buffer.isBuffer(source))){
} else {
throw (new Error(["Assert failed: ","source must be a Buffer instance","\n","(js/Buffer.isBuffer source)"].join('')));
}

var offset = cljs.core.atom.call(null,(0));
var length = source.length;
var read = (function (size){
var this$ = this;
if((cljs.core.deref.call(null,offset) < length)){
var chunk = source.slice(cljs.core.deref.call(null,offset),(cljs.core.deref.call(null,offset) + size));
this$.push(chunk);

return cljs.core.swap_BANG_.call(null,offset,cljs.core._PLUS_,size);
} else {
return this$.push(null);
}
});
var strm = cljs_node_io.streams.ReadableStream.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),read], null)));
return cljs_node_io.streams.input_IOF_BANG_.call(null,strm);
}));

(cljs_node_io.streams.BufferReadStream.cljs$lang$maxFixedArity = 2);

/**
 * Creates WritableStream to a buffer. The buffer is formed from concatenated
 * chunks passed to write method. cb is called with the buffer on the 'finish' event.
 * 'finish' must be triggered to recieve buffer
 * @return {!stream.Writable}
 */
cljs_node_io.streams.BufferWriteStream = (function cljs_node_io$streams$BufferWriteStream(var_args){
var G__4560 = arguments.length;
switch (G__4560) {
case 1:
return cljs_node_io.streams.BufferWriteStream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.streams.BufferWriteStream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.streams.BufferWriteStream.cljs$core$IFn$_invoke$arity$1 = (function (cb){
return cljs_node_io.streams.BufferWriteStream.call(null,cb,null);
}));

(cljs_node_io.streams.BufferWriteStream.cljs$core$IFn$_invoke$arity$2 = (function (cb,opts){
var data = [];
var buf = cljs.core.atom.call(null,null);
var write = (function (chunk,_,callback){
data.push(chunk);

return callback.call(null);
});
var strm = cljs_node_io.streams.WritableStream.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),write], null)));
var _ = (strm.buf = data);
var ___$1 = strm.on("finish",(function (){
var b = Buffer.concat(data);
cljs.core.reset_BANG_.call(null,buf,b);

return cb.call(null,b);
}));
var x4561 = cljs_node_io.streams.output_IOF_BANG_.call(null,strm);
(x4561.toString = (function (){
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,buf))){
return cljs.core.deref.call(null,buf).toString();
} else {
return null;
}
}));

(x4561.toBuffer = (function (){
var ___$2 = this;
return cljs.core.deref.call(null,buf);
}));

return x4561;
}));

(cljs_node_io.streams.BufferWriteStream.cljs$lang$maxFixedArity = 2);

/**
 * @param {!Number} fd
 * @return {!boolean} is File-descriptor?
 */
cljs_node_io.streams.fd_QMARK_ = (function cljs_node_io$streams$fd_QMARK_(fd){
return cljs.core._EQ_.call(null,fd,(fd >>> (0)));
});
/**
 * @param {(string|Uri|IFile)} f :: path to filestream
 * @param {?IMap} opts :: map of options
 * @param {!string} k :: string provided by caller for more detailed error in else case
 * @return {?string} or throws. returns nil if fd is present in opts, otherwise returns pathstring
 */
cljs_node_io.streams.filepath = (function cljs_node_io$streams$filepath(f,opts,k){
var fd = cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"fd","fd",-1524403000));
if(cljs_node_io.streams.fd_QMARK_.call(null,fd)){
return null;
} else {
if(typeof f === 'string'){
return f;
} else {
if((function (){var or__4126__auto__ = (((!((f == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs_node_io$protocols$IFile$))))?true:false):false);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,goog.Uri,cljs.core.type.call(null,f));
}
})()){
return f.getPath();
} else {
throw (new TypeError(["Unrecognized path configuration passed to File",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"Stream constructor.","\n    You passed ",cljs.core.pr_str.call(null,f)," and ",cljs.core.pr_str.call(null,opts),"\n    You must pass a [pathstring opts], [uri opts], [file opts], or include :fd in opts ."].join('')));

}
}
}
});
/**
 * @param {!string} src :: filepath to read from
 * @param {!IMap} opts :: map of options
 * @return {!stream.Readable}
 */
cljs_node_io.streams.FileInputStream_STAR_ = (function cljs_node_io$streams$FileInputStream_STAR_(src,opts){
var map__4565 = opts;
var map__4565__$1 = (((((!((map__4565 == null))))?(((((map__4565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4565):map__4565);
var flags = cljs.core.get.call(null,map__4565__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var encoding = cljs.core.get.call(null,map__4565__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var fd = cljs.core.get.call(null,map__4565__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000));
var mode = cljs.core.get.call(null,map__4565__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var autoClose_QMARK_ = cljs.core.get.call(null,map__4565__$1,new cljs.core.Keyword(null,"autoClose?","autoClose?",375814080));
var options = ({"encoding": (function (){var or__4126__auto__ = encoding;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})(), "flags": (function (){var or__4126__auto__ = flags;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "r";
}
})(), "fd": (function (){var or__4126__auto__ = fd;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})(), "mode": (function (){var or__4126__auto__ = mode;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (438);
}
})(), "autoClose": (function (){var or__4126__auto__ = autoClose_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return true;
}
})()});
var filestreamobj = cljs_node_io.streams.fs.createReadStream(src,options);
var filedesc = cljs.core.atom.call(null,null);
var _ = filestreamobj.on("open",(function (fd__$1){
return cljs.core.reset_BANG_.call(null,filedesc,fd__$1);
}));
var x4567_4568 = filestreamobj;
(x4567_4568.cljs_node_io$protocols$IInputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4567_4568.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(x4567_4568.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var this$__$1 = this;
return ((cljs.core._EQ_.call(null,cljs.core.type.call(null,this$__$1),cljs.core.type.call(null,that))) && (cljs.core._EQ_.call(null,this$__$1.path,that.path)));
}));

(x4567_4568.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(x4567_4568.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [FileInputStream");

return cljs.core._write.call(null,writer,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.path),"]"].join(''));
}));

(x4567_4568.getFd = (function (){
var ___$1 = this;
return cljs.core.deref.call(null,filedesc);
}));


return cljs_node_io.streams.input_IOF_BANG_.call(null,filestreamobj);
});
/**
 * @return {!stream.Readable}
 */
cljs_node_io.streams.FileInputStream = (function cljs_node_io$streams$FileInputStream(var_args){
var G__4570 = arguments.length;
switch (G__4570) {
case 1:
return cljs_node_io.streams.FileInputStream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.streams.FileInputStream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.streams.FileInputStream.cljs$core$IFn$_invoke$arity$1 = (function (src){
return cljs_node_io.streams.FileInputStream.call(null,src,null);
}));

(cljs_node_io.streams.FileInputStream.cljs$core$IFn$_invoke$arity$2 = (function (src,opts){
return cljs_node_io.streams.FileInputStream_STAR_.call(null,cljs_node_io.streams.filepath.call(null,src,opts,"Input"),opts);
}));

(cljs_node_io.streams.FileInputStream.cljs$lang$maxFixedArity = 2);

/**
 * @param {!string} target :: filepath to write to
 * @param {!IMap} opts :: map of options
 * @return {!stream.Writable}
 */
cljs_node_io.streams.FileOutputStream_STAR_ = (function cljs_node_io$streams$FileOutputStream_STAR_(target,opts){
var map__4572 = opts;
var map__4572__$1 = (((((!((map__4572 == null))))?(((((map__4572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4572):map__4572);
var append = cljs.core.get.call(null,map__4572__$1,new cljs.core.Keyword(null,"append","append",-291298229));
var flags = cljs.core.get.call(null,map__4572__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var encoding = cljs.core.get.call(null,map__4572__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var mode = cljs.core.get.call(null,map__4572__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var fd = cljs.core.get.call(null,map__4572__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000));
var options = ({"defaultEncoding": (function (){var or__4126__auto__ = encoding;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "utf8";
}
})(), "flags": (function (){var or__4126__auto__ = flags;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(append)){
return "a";
} else {
return "w";
}
}
})(), "fd": (function (){var or__4126__auto__ = fd;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return null;
}
})(), "mode": (function (){var or__4126__auto__ = mode;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (438);
}
})()});
var filestreamobj = cljs_node_io.streams.fs.createWriteStream(target,options);
var filedesc = cljs.core.atom.call(null,null);
var _ = filestreamobj.on("open",(function (fd__$1){
return cljs.core.reset_BANG_.call(null,filedesc,fd__$1);
}));
var x4574_4575 = filestreamobj;
(x4574_4575.cljs_node_io$protocols$IOutputStream$ = cljs.core.PROTOCOL_SENTINEL);

(x4574_4575.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(x4574_4575.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,that){
var this$__$1 = this;
return ((cljs.core._EQ_.call(null,cljs.core.type.call(null,this$__$1),cljs.core.type.call(null,that))) && (cljs.core._EQ_.call(null,this$__$1.path,that.path)));
}));

(x4574_4575.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(x4574_4575.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts__$1){
var this$__$1 = this;
cljs.core._write.call(null,writer,"#object [FileOutputStream");

return cljs.core._write.call(null,writer,["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.path),"]"].join(''));
}));

(x4574_4575.getFd = (function (){
var ___$1 = this;
return cljs.core.deref.call(null,filedesc);
}));


return cljs_node_io.streams.output_IOF_BANG_.call(null,filestreamobj);
});
/**
 * @return {!stream.Writable}
 */
cljs_node_io.streams.FileOutputStream = (function cljs_node_io$streams$FileOutputStream(var_args){
var G__4577 = arguments.length;
switch (G__4577) {
case 1:
return cljs_node_io.streams.FileOutputStream.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_node_io.streams.FileOutputStream.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs_node_io.streams.FileOutputStream.cljs$core$IFn$_invoke$arity$1 = (function (target){
return cljs_node_io.streams.FileOutputStream.call(null,target,null);
}));

(cljs_node_io.streams.FileOutputStream.cljs$core$IFn$_invoke$arity$2 = (function (target,opts){
return cljs_node_io.streams.FileOutputStream_STAR_.call(null,cljs_node_io.streams.filepath.call(null,target,opts,"Output"),opts);
}));

(cljs_node_io.streams.FileOutputStream.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=streams.js.map
