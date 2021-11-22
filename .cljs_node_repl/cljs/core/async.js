// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2365 = arguments.length;
switch (G__2365) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2366 = (function (f,blockable,meta2367){
this.f = f;
this.blockable = blockable;
this.meta2367 = meta2367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2368,meta2367__$1){
var self__ = this;
var _2368__$1 = this;
return (new cljs.core.async.t_cljs$core$async2366(self__.f,self__.blockable,meta2367__$1));
}));

(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2368){
var self__ = this;
var _2368__$1 = this;
return self__.meta2367;
}));

(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async2366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async2366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2367","meta2367",-1276875639,null)], null);
}));

(cljs.core.async.t_cljs$core$async2366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2366");

(cljs.core.async.t_cljs$core$async2366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async2366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2366.
 */
cljs.core.async.__GT_t_cljs$core$async2366 = (function cljs$core$async$__GT_t_cljs$core$async2366(f__$1,blockable__$1,meta2367){
return (new cljs.core.async.t_cljs$core$async2366(f__$1,blockable__$1,meta2367));
});

}

return (new cljs.core.async.t_cljs$core$async2366(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__2372 = arguments.length;
switch (G__2372) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__2375 = arguments.length;
switch (G__2375) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__2378 = arguments.length;
switch (G__2378) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2380 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2380);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_2380);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__2382 = arguments.length;
switch (G__2382) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___2384 = n;
var x_2385 = (0);
while(true){
if((x_2385 < n__4613__auto___2384)){
(a[x_2385] = (0));

var G__2386 = (x_2385 + (1));
x_2385 = G__2386;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__2387 = (i + (1));
i = G__2387;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2388 = (function (flag,meta2389){
this.flag = flag;
this.meta2389 = meta2389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2390,meta2389__$1){
var self__ = this;
var _2390__$1 = this;
return (new cljs.core.async.t_cljs$core$async2388(self__.flag,meta2389__$1));
}));

(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2390){
var self__ = this;
var _2390__$1 = this;
return self__.meta2389;
}));

(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async2388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2389","meta2389",1504435501,null)], null);
}));

(cljs.core.async.t_cljs$core$async2388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2388");

(cljs.core.async.t_cljs$core$async2388.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async2388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2388.
 */
cljs.core.async.__GT_t_cljs$core$async2388 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2388(flag__$1,meta2389){
return (new cljs.core.async.t_cljs$core$async2388(flag__$1,meta2389));
});

}

return (new cljs.core.async.t_cljs$core$async2388(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2391 = (function (flag,cb,meta2392){
this.flag = flag;
this.cb = cb;
this.meta2392 = meta2392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2393,meta2392__$1){
var self__ = this;
var _2393__$1 = this;
return (new cljs.core.async.t_cljs$core$async2391(self__.flag,self__.cb,meta2392__$1));
}));

(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2393){
var self__ = this;
var _2393__$1 = this;
return self__.meta2392;
}));

(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async2391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async2391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2392","meta2392",-1074729639,null)], null);
}));

(cljs.core.async.t_cljs$core$async2391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2391");

(cljs.core.async.t_cljs$core$async2391.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async2391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2391.
 */
cljs.core.async.__GT_t_cljs$core$async2391 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2391(flag__$1,cb__$1,meta2392){
return (new cljs.core.async.t_cljs$core$async2391(flag__$1,cb__$1,meta2392));
});

}

return (new cljs.core.async.t_cljs$core$async2391(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2394_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2395_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2395_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2396 = (i + (1));
i = G__2396;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2402 = arguments.length;
var i__4737__auto___2403 = (0);
while(true){
if((i__4737__auto___2403 < len__4736__auto___2402)){
args__4742__auto__.push((arguments[i__4737__auto___2403]));

var G__2404 = (i__4737__auto___2403 + (1));
i__4737__auto___2403 = G__2404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2399){
var map__2400 = p__2399;
var map__2400__$1 = (((((!((map__2400 == null))))?(((((map__2400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2400):map__2400);
var opts = map__2400__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2397){
var G__2398 = cljs.core.first.call(null,seq2397);
var seq2397__$1 = cljs.core.next.call(null,seq2397);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2398,seq2397__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__2406 = arguments.length;
switch (G__2406) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2305__auto___2452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2430){
var state_val_2431 = (state_2430[(1)]);
if((state_val_2431 === (7))){
var inst_2426 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
var statearr_2432_2453 = state_2430__$1;
(statearr_2432_2453[(2)] = inst_2426);

(statearr_2432_2453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (1))){
var state_2430__$1 = state_2430;
var statearr_2433_2454 = state_2430__$1;
(statearr_2433_2454[(2)] = null);

(statearr_2433_2454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (4))){
var inst_2409 = (state_2430[(7)]);
var inst_2409__$1 = (state_2430[(2)]);
var inst_2410 = (inst_2409__$1 == null);
var state_2430__$1 = (function (){var statearr_2434 = state_2430;
(statearr_2434[(7)] = inst_2409__$1);

return statearr_2434;
})();
if(cljs.core.truth_(inst_2410)){
var statearr_2435_2455 = state_2430__$1;
(statearr_2435_2455[(1)] = (5));

} else {
var statearr_2436_2456 = state_2430__$1;
(statearr_2436_2456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (13))){
var state_2430__$1 = state_2430;
var statearr_2437_2457 = state_2430__$1;
(statearr_2437_2457[(2)] = null);

(statearr_2437_2457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (6))){
var inst_2409 = (state_2430[(7)]);
var state_2430__$1 = state_2430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2430__$1,(11),to,inst_2409);
} else {
if((state_val_2431 === (3))){
var inst_2428 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2430__$1,inst_2428);
} else {
if((state_val_2431 === (12))){
var state_2430__$1 = state_2430;
var statearr_2438_2458 = state_2430__$1;
(statearr_2438_2458[(2)] = null);

(statearr_2438_2458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (2))){
var state_2430__$1 = state_2430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2430__$1,(4),from);
} else {
if((state_val_2431 === (11))){
var inst_2419 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
if(cljs.core.truth_(inst_2419)){
var statearr_2439_2459 = state_2430__$1;
(statearr_2439_2459[(1)] = (12));

} else {
var statearr_2440_2460 = state_2430__$1;
(statearr_2440_2460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (9))){
var state_2430__$1 = state_2430;
var statearr_2441_2461 = state_2430__$1;
(statearr_2441_2461[(2)] = null);

(statearr_2441_2461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (5))){
var state_2430__$1 = state_2430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2442_2462 = state_2430__$1;
(statearr_2442_2462[(1)] = (8));

} else {
var statearr_2443_2463 = state_2430__$1;
(statearr_2443_2463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (14))){
var inst_2424 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
var statearr_2444_2464 = state_2430__$1;
(statearr_2444_2464[(2)] = inst_2424);

(statearr_2444_2464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (10))){
var inst_2416 = (state_2430[(2)]);
var state_2430__$1 = state_2430;
var statearr_2445_2465 = state_2430__$1;
(statearr_2445_2465[(2)] = inst_2416);

(statearr_2445_2465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2431 === (8))){
var inst_2413 = cljs.core.async.close_BANG_.call(null,to);
var state_2430__$1 = state_2430;
var statearr_2446_2466 = state_2430__$1;
(statearr_2446_2466[(2)] = inst_2413);

(statearr_2446_2466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_2447 = [null,null,null,null,null,null,null,null];
(statearr_2447[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_2447[(1)] = (1));

return statearr_2447;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_2430){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2448){if((e2448 instanceof Object)){
var ex__2214__auto__ = e2448;
var statearr_2449_2467 = state_2430;
(statearr_2449_2467[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2468 = state_2430;
state_2430 = G__2468;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_2430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_2430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2450 = f__2306__auto__.call(null);
(statearr_2450[(6)] = c__2305__auto___2452);

return statearr_2450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__2469){
var vec__2470 = p__2469;
var v = cljs.core.nth.call(null,vec__2470,(0),null);
var p = cljs.core.nth.call(null,vec__2470,(1),null);
var job = vec__2470;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2305__auto___2641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2477){
var state_val_2478 = (state_2477[(1)]);
if((state_val_2478 === (1))){
var state_2477__$1 = state_2477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2477__$1,(2),res,v);
} else {
if((state_val_2478 === (2))){
var inst_2474 = (state_2477[(2)]);
var inst_2475 = cljs.core.async.close_BANG_.call(null,res);
var state_2477__$1 = (function (){var statearr_2479 = state_2477;
(statearr_2479[(7)] = inst_2474);

return statearr_2479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2477__$1,inst_2475);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_2480 = [null,null,null,null,null,null,null,null];
(statearr_2480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__);

(statearr_2480[(1)] = (1));

return statearr_2480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1 = (function (state_2477){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2481){if((e2481 instanceof Object)){
var ex__2214__auto__ = e2481;
var statearr_2482_2642 = state_2477;
(statearr_2482_2642[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2643 = state_2477;
state_2477 = G__2643;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = function(state_2477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1.call(this,state_2477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2483 = f__2306__auto__.call(null);
(statearr_2483[(6)] = c__2305__auto___2641);

return statearr_2483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__2484){
var vec__2485 = p__2484;
var v = cljs.core.nth.call(null,vec__2485,(0),null);
var p = cljs.core.nth.call(null,vec__2485,(1),null);
var job = vec__2485;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___2644 = n;
var __2645 = (0);
while(true){
if((__2645 < n__4613__auto___2644)){
var G__2488_2646 = type;
var G__2488_2647__$1 = (((G__2488_2646 instanceof cljs.core.Keyword))?G__2488_2646.fqn:null);
switch (G__2488_2647__$1) {
case "compute":
var c__2305__auto___2649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2645,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = ((function (__2645,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function (state_2501){
var state_val_2502 = (state_2501[(1)]);
if((state_val_2502 === (1))){
var state_2501__$1 = state_2501;
var statearr_2503_2650 = state_2501__$1;
(statearr_2503_2650[(2)] = null);

(statearr_2503_2650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2502 === (2))){
var state_2501__$1 = state_2501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2501__$1,(4),jobs);
} else {
if((state_val_2502 === (3))){
var inst_2499 = (state_2501[(2)]);
var state_2501__$1 = state_2501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2501__$1,inst_2499);
} else {
if((state_val_2502 === (4))){
var inst_2491 = (state_2501[(2)]);
var inst_2492 = process.call(null,inst_2491);
var state_2501__$1 = state_2501;
if(cljs.core.truth_(inst_2492)){
var statearr_2504_2651 = state_2501__$1;
(statearr_2504_2651[(1)] = (5));

} else {
var statearr_2505_2652 = state_2501__$1;
(statearr_2505_2652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2502 === (5))){
var state_2501__$1 = state_2501;
var statearr_2506_2653 = state_2501__$1;
(statearr_2506_2653[(2)] = null);

(statearr_2506_2653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2502 === (6))){
var state_2501__$1 = state_2501;
var statearr_2507_2654 = state_2501__$1;
(statearr_2507_2654[(2)] = null);

(statearr_2507_2654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2502 === (7))){
var inst_2497 = (state_2501[(2)]);
var state_2501__$1 = state_2501;
var statearr_2508_2655 = state_2501__$1;
(statearr_2508_2655[(2)] = inst_2497);

(statearr_2508_2655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2645,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
;
return ((function (__2645,switch__2210__auto__,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_2509 = [null,null,null,null,null,null,null];
(statearr_2509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__);

(statearr_2509[(1)] = (1));

return statearr_2509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1 = (function (state_2501){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2510){if((e2510 instanceof Object)){
var ex__2214__auto__ = e2510;
var statearr_2511_2656 = state_2501;
(statearr_2511_2656[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2657 = state_2501;
state_2501 = G__2657;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = function(state_2501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1.call(this,state_2501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__;
})()
;})(__2645,switch__2210__auto__,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
})();
var state__2307__auto__ = (function (){var statearr_2512 = f__2306__auto__.call(null);
(statearr_2512[(6)] = c__2305__auto___2649);

return statearr_2512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
});})(__2645,c__2305__auto___2649,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
);


break;
case "async":
var c__2305__auto___2658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__2645,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = ((function (__2645,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function (state_2525){
var state_val_2526 = (state_2525[(1)]);
if((state_val_2526 === (1))){
var state_2525__$1 = state_2525;
var statearr_2527_2659 = state_2525__$1;
(statearr_2527_2659[(2)] = null);

(statearr_2527_2659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2526 === (2))){
var state_2525__$1 = state_2525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2525__$1,(4),jobs);
} else {
if((state_val_2526 === (3))){
var inst_2523 = (state_2525[(2)]);
var state_2525__$1 = state_2525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2525__$1,inst_2523);
} else {
if((state_val_2526 === (4))){
var inst_2515 = (state_2525[(2)]);
var inst_2516 = async.call(null,inst_2515);
var state_2525__$1 = state_2525;
if(cljs.core.truth_(inst_2516)){
var statearr_2528_2660 = state_2525__$1;
(statearr_2528_2660[(1)] = (5));

} else {
var statearr_2529_2661 = state_2525__$1;
(statearr_2529_2661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2526 === (5))){
var state_2525__$1 = state_2525;
var statearr_2530_2662 = state_2525__$1;
(statearr_2530_2662[(2)] = null);

(statearr_2530_2662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2526 === (6))){
var state_2525__$1 = state_2525;
var statearr_2531_2663 = state_2525__$1;
(statearr_2531_2663[(2)] = null);

(statearr_2531_2663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2526 === (7))){
var inst_2521 = (state_2525[(2)]);
var state_2525__$1 = state_2525;
var statearr_2532_2664 = state_2525__$1;
(statearr_2532_2664[(2)] = inst_2521);

(statearr_2532_2664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__2645,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
;
return ((function (__2645,switch__2210__auto__,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_2533 = [null,null,null,null,null,null,null];
(statearr_2533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__);

(statearr_2533[(1)] = (1));

return statearr_2533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1 = (function (state_2525){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2534){if((e2534 instanceof Object)){
var ex__2214__auto__ = e2534;
var statearr_2535_2665 = state_2525;
(statearr_2535_2665[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2666 = state_2525;
state_2525 = G__2666;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = function(state_2525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1.call(this,state_2525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__;
})()
;})(__2645,switch__2210__auto__,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
})();
var state__2307__auto__ = (function (){var statearr_2536 = f__2306__auto__.call(null);
(statearr_2536[(6)] = c__2305__auto___2658);

return statearr_2536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
});})(__2645,c__2305__auto___2658,G__2488_2646,G__2488_2647__$1,n__4613__auto___2644,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2488_2647__$1)].join('')));

}

var G__2667 = (__2645 + (1));
__2645 = G__2667;
continue;
} else {
}
break;
}

var c__2305__auto___2668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2558){
var state_val_2559 = (state_2558[(1)]);
if((state_val_2559 === (7))){
var inst_2554 = (state_2558[(2)]);
var state_2558__$1 = state_2558;
var statearr_2560_2669 = state_2558__$1;
(statearr_2560_2669[(2)] = inst_2554);

(statearr_2560_2669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2559 === (1))){
var state_2558__$1 = state_2558;
var statearr_2561_2670 = state_2558__$1;
(statearr_2561_2670[(2)] = null);

(statearr_2561_2670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2559 === (4))){
var inst_2539 = (state_2558[(7)]);
var inst_2539__$1 = (state_2558[(2)]);
var inst_2540 = (inst_2539__$1 == null);
var state_2558__$1 = (function (){var statearr_2562 = state_2558;
(statearr_2562[(7)] = inst_2539__$1);

return statearr_2562;
})();
if(cljs.core.truth_(inst_2540)){
var statearr_2563_2671 = state_2558__$1;
(statearr_2563_2671[(1)] = (5));

} else {
var statearr_2564_2672 = state_2558__$1;
(statearr_2564_2672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2559 === (6))){
var inst_2539 = (state_2558[(7)]);
var inst_2544 = (state_2558[(8)]);
var inst_2544__$1 = cljs.core.async.chan.call(null,(1));
var inst_2545 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_2546 = [inst_2539,inst_2544__$1];
var inst_2547 = (new cljs.core.PersistentVector(null,2,(5),inst_2545,inst_2546,null));
var state_2558__$1 = (function (){var statearr_2565 = state_2558;
(statearr_2565[(8)] = inst_2544__$1);

return statearr_2565;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2558__$1,(8),jobs,inst_2547);
} else {
if((state_val_2559 === (3))){
var inst_2556 = (state_2558[(2)]);
var state_2558__$1 = state_2558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2558__$1,inst_2556);
} else {
if((state_val_2559 === (2))){
var state_2558__$1 = state_2558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2558__$1,(4),from);
} else {
if((state_val_2559 === (9))){
var inst_2551 = (state_2558[(2)]);
var state_2558__$1 = (function (){var statearr_2566 = state_2558;
(statearr_2566[(9)] = inst_2551);

return statearr_2566;
})();
var statearr_2567_2673 = state_2558__$1;
(statearr_2567_2673[(2)] = null);

(statearr_2567_2673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2559 === (5))){
var inst_2542 = cljs.core.async.close_BANG_.call(null,jobs);
var state_2558__$1 = state_2558;
var statearr_2568_2674 = state_2558__$1;
(statearr_2568_2674[(2)] = inst_2542);

(statearr_2568_2674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2559 === (8))){
var inst_2544 = (state_2558[(8)]);
var inst_2549 = (state_2558[(2)]);
var state_2558__$1 = (function (){var statearr_2569 = state_2558;
(statearr_2569[(10)] = inst_2549);

return statearr_2569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2558__$1,(9),results,inst_2544);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_2570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__);

(statearr_2570[(1)] = (1));

return statearr_2570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1 = (function (state_2558){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2571){if((e2571 instanceof Object)){
var ex__2214__auto__ = e2571;
var statearr_2572_2675 = state_2558;
(statearr_2572_2675[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2676 = state_2558;
state_2558 = G__2676;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = function(state_2558){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1.call(this,state_2558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2573 = f__2306__auto__.call(null);
(statearr_2573[(6)] = c__2305__auto___2668);

return statearr_2573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


var c__2305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2611){
var state_val_2612 = (state_2611[(1)]);
if((state_val_2612 === (7))){
var inst_2607 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
var statearr_2613_2677 = state_2611__$1;
(statearr_2613_2677[(2)] = inst_2607);

(statearr_2613_2677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (20))){
var state_2611__$1 = state_2611;
var statearr_2614_2678 = state_2611__$1;
(statearr_2614_2678[(2)] = null);

(statearr_2614_2678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (1))){
var state_2611__$1 = state_2611;
var statearr_2615_2679 = state_2611__$1;
(statearr_2615_2679[(2)] = null);

(statearr_2615_2679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (4))){
var inst_2576 = (state_2611[(7)]);
var inst_2576__$1 = (state_2611[(2)]);
var inst_2577 = (inst_2576__$1 == null);
var state_2611__$1 = (function (){var statearr_2616 = state_2611;
(statearr_2616[(7)] = inst_2576__$1);

return statearr_2616;
})();
if(cljs.core.truth_(inst_2577)){
var statearr_2617_2680 = state_2611__$1;
(statearr_2617_2680[(1)] = (5));

} else {
var statearr_2618_2681 = state_2611__$1;
(statearr_2618_2681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (15))){
var inst_2589 = (state_2611[(8)]);
var state_2611__$1 = state_2611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2611__$1,(18),to,inst_2589);
} else {
if((state_val_2612 === (21))){
var inst_2602 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
var statearr_2619_2682 = state_2611__$1;
(statearr_2619_2682[(2)] = inst_2602);

(statearr_2619_2682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (13))){
var inst_2604 = (state_2611[(2)]);
var state_2611__$1 = (function (){var statearr_2620 = state_2611;
(statearr_2620[(9)] = inst_2604);

return statearr_2620;
})();
var statearr_2621_2683 = state_2611__$1;
(statearr_2621_2683[(2)] = null);

(statearr_2621_2683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (6))){
var inst_2576 = (state_2611[(7)]);
var state_2611__$1 = state_2611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2611__$1,(11),inst_2576);
} else {
if((state_val_2612 === (17))){
var inst_2597 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
if(cljs.core.truth_(inst_2597)){
var statearr_2622_2684 = state_2611__$1;
(statearr_2622_2684[(1)] = (19));

} else {
var statearr_2623_2685 = state_2611__$1;
(statearr_2623_2685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (3))){
var inst_2609 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2611__$1,inst_2609);
} else {
if((state_val_2612 === (12))){
var inst_2586 = (state_2611[(10)]);
var state_2611__$1 = state_2611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2611__$1,(14),inst_2586);
} else {
if((state_val_2612 === (2))){
var state_2611__$1 = state_2611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2611__$1,(4),results);
} else {
if((state_val_2612 === (19))){
var state_2611__$1 = state_2611;
var statearr_2624_2686 = state_2611__$1;
(statearr_2624_2686[(2)] = null);

(statearr_2624_2686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (11))){
var inst_2586 = (state_2611[(2)]);
var state_2611__$1 = (function (){var statearr_2625 = state_2611;
(statearr_2625[(10)] = inst_2586);

return statearr_2625;
})();
var statearr_2626_2687 = state_2611__$1;
(statearr_2626_2687[(2)] = null);

(statearr_2626_2687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (9))){
var state_2611__$1 = state_2611;
var statearr_2627_2688 = state_2611__$1;
(statearr_2627_2688[(2)] = null);

(statearr_2627_2688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (5))){
var state_2611__$1 = state_2611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2628_2689 = state_2611__$1;
(statearr_2628_2689[(1)] = (8));

} else {
var statearr_2629_2690 = state_2611__$1;
(statearr_2629_2690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (14))){
var inst_2589 = (state_2611[(8)]);
var inst_2589__$1 = (state_2611[(2)]);
var inst_2590 = (inst_2589__$1 == null);
var inst_2591 = cljs.core.not.call(null,inst_2590);
var state_2611__$1 = (function (){var statearr_2630 = state_2611;
(statearr_2630[(8)] = inst_2589__$1);

return statearr_2630;
})();
if(inst_2591){
var statearr_2631_2691 = state_2611__$1;
(statearr_2631_2691[(1)] = (15));

} else {
var statearr_2632_2692 = state_2611__$1;
(statearr_2632_2692[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (16))){
var state_2611__$1 = state_2611;
var statearr_2633_2693 = state_2611__$1;
(statearr_2633_2693[(2)] = false);

(statearr_2633_2693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (10))){
var inst_2583 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
var statearr_2634_2694 = state_2611__$1;
(statearr_2634_2694[(2)] = inst_2583);

(statearr_2634_2694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (18))){
var inst_2594 = (state_2611[(2)]);
var state_2611__$1 = state_2611;
var statearr_2635_2695 = state_2611__$1;
(statearr_2635_2695[(2)] = inst_2594);

(statearr_2635_2695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2612 === (8))){
var inst_2580 = cljs.core.async.close_BANG_.call(null,to);
var state_2611__$1 = state_2611;
var statearr_2636_2696 = state_2611__$1;
(statearr_2636_2696[(2)] = inst_2580);

(statearr_2636_2696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_2637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_2637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__);

(statearr_2637[(1)] = (1));

return statearr_2637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1 = (function (state_2611){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2638){if((e2638 instanceof Object)){
var ex__2214__auto__ = e2638;
var statearr_2639_2697 = state_2611;
(statearr_2639_2697[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2698 = state_2611;
state_2611 = G__2698;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__ = function(state_2611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1.call(this,state_2611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2640 = f__2306__auto__.call(null);
(statearr_2640[(6)] = c__2305__auto__);

return statearr_2640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));

return c__2305__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__2700 = arguments.length;
switch (G__2700) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__2703 = arguments.length;
switch (G__2703) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__2706 = arguments.length;
switch (G__2706) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2305__auto___2755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2732){
var state_val_2733 = (state_2732[(1)]);
if((state_val_2733 === (7))){
var inst_2728 = (state_2732[(2)]);
var state_2732__$1 = state_2732;
var statearr_2734_2756 = state_2732__$1;
(statearr_2734_2756[(2)] = inst_2728);

(statearr_2734_2756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (1))){
var state_2732__$1 = state_2732;
var statearr_2735_2757 = state_2732__$1;
(statearr_2735_2757[(2)] = null);

(statearr_2735_2757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (4))){
var inst_2709 = (state_2732[(7)]);
var inst_2709__$1 = (state_2732[(2)]);
var inst_2710 = (inst_2709__$1 == null);
var state_2732__$1 = (function (){var statearr_2736 = state_2732;
(statearr_2736[(7)] = inst_2709__$1);

return statearr_2736;
})();
if(cljs.core.truth_(inst_2710)){
var statearr_2737_2758 = state_2732__$1;
(statearr_2737_2758[(1)] = (5));

} else {
var statearr_2738_2759 = state_2732__$1;
(statearr_2738_2759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (13))){
var state_2732__$1 = state_2732;
var statearr_2739_2760 = state_2732__$1;
(statearr_2739_2760[(2)] = null);

(statearr_2739_2760[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (6))){
var inst_2709 = (state_2732[(7)]);
var inst_2715 = p.call(null,inst_2709);
var state_2732__$1 = state_2732;
if(cljs.core.truth_(inst_2715)){
var statearr_2740_2761 = state_2732__$1;
(statearr_2740_2761[(1)] = (9));

} else {
var statearr_2741_2762 = state_2732__$1;
(statearr_2741_2762[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (3))){
var inst_2730 = (state_2732[(2)]);
var state_2732__$1 = state_2732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2732__$1,inst_2730);
} else {
if((state_val_2733 === (12))){
var state_2732__$1 = state_2732;
var statearr_2742_2763 = state_2732__$1;
(statearr_2742_2763[(2)] = null);

(statearr_2742_2763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (2))){
var state_2732__$1 = state_2732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2732__$1,(4),ch);
} else {
if((state_val_2733 === (11))){
var inst_2709 = (state_2732[(7)]);
var inst_2719 = (state_2732[(2)]);
var state_2732__$1 = state_2732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2732__$1,(8),inst_2719,inst_2709);
} else {
if((state_val_2733 === (9))){
var state_2732__$1 = state_2732;
var statearr_2743_2764 = state_2732__$1;
(statearr_2743_2764[(2)] = tc);

(statearr_2743_2764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (5))){
var inst_2712 = cljs.core.async.close_BANG_.call(null,tc);
var inst_2713 = cljs.core.async.close_BANG_.call(null,fc);
var state_2732__$1 = (function (){var statearr_2744 = state_2732;
(statearr_2744[(8)] = inst_2712);

return statearr_2744;
})();
var statearr_2745_2765 = state_2732__$1;
(statearr_2745_2765[(2)] = inst_2713);

(statearr_2745_2765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (14))){
var inst_2726 = (state_2732[(2)]);
var state_2732__$1 = state_2732;
var statearr_2746_2766 = state_2732__$1;
(statearr_2746_2766[(2)] = inst_2726);

(statearr_2746_2766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (10))){
var state_2732__$1 = state_2732;
var statearr_2747_2767 = state_2732__$1;
(statearr_2747_2767[(2)] = fc);

(statearr_2747_2767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2733 === (8))){
var inst_2721 = (state_2732[(2)]);
var state_2732__$1 = state_2732;
if(cljs.core.truth_(inst_2721)){
var statearr_2748_2768 = state_2732__$1;
(statearr_2748_2768[(1)] = (12));

} else {
var statearr_2749_2769 = state_2732__$1;
(statearr_2749_2769[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_2750 = [null,null,null,null,null,null,null,null,null];
(statearr_2750[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_2750[(1)] = (1));

return statearr_2750;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_2732){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2751){if((e2751 instanceof Object)){
var ex__2214__auto__ = e2751;
var statearr_2752_2770 = state_2732;
(statearr_2752_2770[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2771 = state_2732;
state_2732 = G__2771;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_2732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_2732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2753 = f__2306__auto__.call(null);
(statearr_2753[(6)] = c__2305__auto___2755);

return statearr_2753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2792){
var state_val_2793 = (state_2792[(1)]);
if((state_val_2793 === (7))){
var inst_2788 = (state_2792[(2)]);
var state_2792__$1 = state_2792;
var statearr_2794_2812 = state_2792__$1;
(statearr_2794_2812[(2)] = inst_2788);

(statearr_2794_2812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (1))){
var inst_2772 = init;
var state_2792__$1 = (function (){var statearr_2795 = state_2792;
(statearr_2795[(7)] = inst_2772);

return statearr_2795;
})();
var statearr_2796_2813 = state_2792__$1;
(statearr_2796_2813[(2)] = null);

(statearr_2796_2813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (4))){
var inst_2775 = (state_2792[(8)]);
var inst_2775__$1 = (state_2792[(2)]);
var inst_2776 = (inst_2775__$1 == null);
var state_2792__$1 = (function (){var statearr_2797 = state_2792;
(statearr_2797[(8)] = inst_2775__$1);

return statearr_2797;
})();
if(cljs.core.truth_(inst_2776)){
var statearr_2798_2814 = state_2792__$1;
(statearr_2798_2814[(1)] = (5));

} else {
var statearr_2799_2815 = state_2792__$1;
(statearr_2799_2815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (6))){
var inst_2775 = (state_2792[(8)]);
var inst_2772 = (state_2792[(7)]);
var inst_2779 = (state_2792[(9)]);
var inst_2779__$1 = f.call(null,inst_2772,inst_2775);
var inst_2780 = cljs.core.reduced_QMARK_.call(null,inst_2779__$1);
var state_2792__$1 = (function (){var statearr_2800 = state_2792;
(statearr_2800[(9)] = inst_2779__$1);

return statearr_2800;
})();
if(inst_2780){
var statearr_2801_2816 = state_2792__$1;
(statearr_2801_2816[(1)] = (8));

} else {
var statearr_2802_2817 = state_2792__$1;
(statearr_2802_2817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (3))){
var inst_2790 = (state_2792[(2)]);
var state_2792__$1 = state_2792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2792__$1,inst_2790);
} else {
if((state_val_2793 === (2))){
var state_2792__$1 = state_2792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2792__$1,(4),ch);
} else {
if((state_val_2793 === (9))){
var inst_2779 = (state_2792[(9)]);
var inst_2772 = inst_2779;
var state_2792__$1 = (function (){var statearr_2803 = state_2792;
(statearr_2803[(7)] = inst_2772);

return statearr_2803;
})();
var statearr_2804_2818 = state_2792__$1;
(statearr_2804_2818[(2)] = null);

(statearr_2804_2818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (5))){
var inst_2772 = (state_2792[(7)]);
var state_2792__$1 = state_2792;
var statearr_2805_2819 = state_2792__$1;
(statearr_2805_2819[(2)] = inst_2772);

(statearr_2805_2819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (10))){
var inst_2786 = (state_2792[(2)]);
var state_2792__$1 = state_2792;
var statearr_2806_2820 = state_2792__$1;
(statearr_2806_2820[(2)] = inst_2786);

(statearr_2806_2820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2793 === (8))){
var inst_2779 = (state_2792[(9)]);
var inst_2782 = cljs.core.deref.call(null,inst_2779);
var state_2792__$1 = state_2792;
var statearr_2807_2821 = state_2792__$1;
(statearr_2807_2821[(2)] = inst_2782);

(statearr_2807_2821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__2211__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2211__auto____0 = (function (){
var statearr_2808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_2808[(0)] = cljs$core$async$reduce_$_state_machine__2211__auto__);

(statearr_2808[(1)] = (1));

return statearr_2808;
});
var cljs$core$async$reduce_$_state_machine__2211__auto____1 = (function (state_2792){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2809){if((e2809 instanceof Object)){
var ex__2214__auto__ = e2809;
var statearr_2810_2822 = state_2792;
(statearr_2810_2822[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2823 = state_2792;
state_2792 = G__2823;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2211__auto__ = function(state_2792){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2211__auto____1.call(this,state_2792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2211__auto____0;
cljs$core$async$reduce_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2211__auto____1;
return cljs$core$async$reduce_$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2811 = f__2306__auto__.call(null);
(statearr_2811[(6)] = c__2305__auto__);

return statearr_2811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));

return c__2305__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2829){
var state_val_2830 = (state_2829[(1)]);
if((state_val_2830 === (1))){
var inst_2824 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_2829__$1 = state_2829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_2829__$1,(2),inst_2824);
} else {
if((state_val_2830 === (2))){
var inst_2826 = (state_2829[(2)]);
var inst_2827 = f__$1.call(null,inst_2826);
var state_2829__$1 = state_2829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2829__$1,inst_2827);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__2211__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2211__auto____0 = (function (){
var statearr_2831 = [null,null,null,null,null,null,null];
(statearr_2831[(0)] = cljs$core$async$transduce_$_state_machine__2211__auto__);

(statearr_2831[(1)] = (1));

return statearr_2831;
});
var cljs$core$async$transduce_$_state_machine__2211__auto____1 = (function (state_2829){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2832){if((e2832 instanceof Object)){
var ex__2214__auto__ = e2832;
var statearr_2833_2835 = state_2829;
(statearr_2833_2835[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2836 = state_2829;
state_2829 = G__2836;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2211__auto__ = function(state_2829){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2211__auto____1.call(this,state_2829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2211__auto____0;
cljs$core$async$transduce_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2211__auto____1;
return cljs$core$async$transduce_$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2834 = f__2306__auto__.call(null);
(statearr_2834[(6)] = c__2305__auto__);

return statearr_2834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));

return c__2305__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__2838 = arguments.length;
switch (G__2838) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_2863){
var state_val_2864 = (state_2863[(1)]);
if((state_val_2864 === (7))){
var inst_2845 = (state_2863[(2)]);
var state_2863__$1 = state_2863;
var statearr_2865_2886 = state_2863__$1;
(statearr_2865_2886[(2)] = inst_2845);

(statearr_2865_2886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (1))){
var inst_2839 = cljs.core.seq.call(null,coll);
var inst_2840 = inst_2839;
var state_2863__$1 = (function (){var statearr_2866 = state_2863;
(statearr_2866[(7)] = inst_2840);

return statearr_2866;
})();
var statearr_2867_2887 = state_2863__$1;
(statearr_2867_2887[(2)] = null);

(statearr_2867_2887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (4))){
var inst_2840 = (state_2863[(7)]);
var inst_2843 = cljs.core.first.call(null,inst_2840);
var state_2863__$1 = state_2863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_2863__$1,(7),ch,inst_2843);
} else {
if((state_val_2864 === (13))){
var inst_2857 = (state_2863[(2)]);
var state_2863__$1 = state_2863;
var statearr_2868_2888 = state_2863__$1;
(statearr_2868_2888[(2)] = inst_2857);

(statearr_2868_2888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (6))){
var inst_2848 = (state_2863[(2)]);
var state_2863__$1 = state_2863;
if(cljs.core.truth_(inst_2848)){
var statearr_2869_2889 = state_2863__$1;
(statearr_2869_2889[(1)] = (8));

} else {
var statearr_2870_2890 = state_2863__$1;
(statearr_2870_2890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (3))){
var inst_2861 = (state_2863[(2)]);
var state_2863__$1 = state_2863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_2863__$1,inst_2861);
} else {
if((state_val_2864 === (12))){
var state_2863__$1 = state_2863;
var statearr_2871_2891 = state_2863__$1;
(statearr_2871_2891[(2)] = null);

(statearr_2871_2891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (2))){
var inst_2840 = (state_2863[(7)]);
var state_2863__$1 = state_2863;
if(cljs.core.truth_(inst_2840)){
var statearr_2872_2892 = state_2863__$1;
(statearr_2872_2892[(1)] = (4));

} else {
var statearr_2873_2893 = state_2863__$1;
(statearr_2873_2893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (11))){
var inst_2854 = cljs.core.async.close_BANG_.call(null,ch);
var state_2863__$1 = state_2863;
var statearr_2874_2894 = state_2863__$1;
(statearr_2874_2894[(2)] = inst_2854);

(statearr_2874_2894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (9))){
var state_2863__$1 = state_2863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_2875_2895 = state_2863__$1;
(statearr_2875_2895[(1)] = (11));

} else {
var statearr_2876_2896 = state_2863__$1;
(statearr_2876_2896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (5))){
var inst_2840 = (state_2863[(7)]);
var state_2863__$1 = state_2863;
var statearr_2877_2897 = state_2863__$1;
(statearr_2877_2897[(2)] = inst_2840);

(statearr_2877_2897[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (10))){
var inst_2859 = (state_2863[(2)]);
var state_2863__$1 = state_2863;
var statearr_2878_2898 = state_2863__$1;
(statearr_2878_2898[(2)] = inst_2859);

(statearr_2878_2898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_2864 === (8))){
var inst_2840 = (state_2863[(7)]);
var inst_2850 = cljs.core.next.call(null,inst_2840);
var inst_2840__$1 = inst_2850;
var state_2863__$1 = (function (){var statearr_2879 = state_2863;
(statearr_2879[(7)] = inst_2840__$1);

return statearr_2879;
})();
var statearr_2880_2899 = state_2863__$1;
(statearr_2880_2899[(2)] = null);

(statearr_2880_2899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_2881 = [null,null,null,null,null,null,null,null];
(statearr_2881[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_2881[(1)] = (1));

return statearr_2881;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_2863){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_2863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e2882){if((e2882 instanceof Object)){
var ex__2214__auto__ = e2882;
var statearr_2883_2900 = state_2863;
(statearr_2883_2900[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_2863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e2882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__2901 = state_2863;
state_2863 = G__2901;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_2863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_2863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_2884 = f__2306__auto__.call(null);
(statearr_2884[(6)] = c__2305__auto__);

return statearr_2884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));

return c__2305__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_2902 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_2902.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_2903 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_2903.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_2904 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_2904.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_2905 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_2905.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async2906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2906 = (function (ch,cs,meta2907){
this.ch = ch;
this.cs = cs;
this.meta2907 = meta2907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2908,meta2907__$1){
var self__ = this;
var _2908__$1 = this;
return (new cljs.core.async.t_cljs$core$async2906(self__.ch,self__.cs,meta2907__$1));
}));

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2908){
var self__ = this;
var _2908__$1 = this;
return self__.meta2907;
}));

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async2906.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async2906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta2907","meta2907",2086198067,null)], null);
}));

(cljs.core.async.t_cljs$core$async2906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async2906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2906");

(cljs.core.async.t_cljs$core$async2906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async2906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2906.
 */
cljs.core.async.__GT_t_cljs$core$async2906 = (function cljs$core$async$mult_$___GT_t_cljs$core$async2906(ch__$1,cs__$1,meta2907){
return (new cljs.core.async.t_cljs$core$async2906(ch__$1,cs__$1,meta2907));
});

}

return (new cljs.core.async.t_cljs$core$async2906(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__2305__auto___3128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3043){
var state_val_3044 = (state_3043[(1)]);
if((state_val_3044 === (7))){
var inst_3039 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3045_3129 = state_3043__$1;
(statearr_3045_3129[(2)] = inst_3039);

(statearr_3045_3129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (20))){
var inst_2942 = (state_3043[(7)]);
var inst_2954 = cljs.core.first.call(null,inst_2942);
var inst_2955 = cljs.core.nth.call(null,inst_2954,(0),null);
var inst_2956 = cljs.core.nth.call(null,inst_2954,(1),null);
var state_3043__$1 = (function (){var statearr_3046 = state_3043;
(statearr_3046[(8)] = inst_2955);

return statearr_3046;
})();
if(cljs.core.truth_(inst_2956)){
var statearr_3047_3130 = state_3043__$1;
(statearr_3047_3130[(1)] = (22));

} else {
var statearr_3048_3131 = state_3043__$1;
(statearr_3048_3131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (27))){
var inst_2991 = (state_3043[(9)]);
var inst_2986 = (state_3043[(10)]);
var inst_2911 = (state_3043[(11)]);
var inst_2984 = (state_3043[(12)]);
var inst_2991__$1 = cljs.core._nth.call(null,inst_2984,inst_2986);
var inst_2992 = cljs.core.async.put_BANG_.call(null,inst_2991__$1,inst_2911,done);
var state_3043__$1 = (function (){var statearr_3049 = state_3043;
(statearr_3049[(9)] = inst_2991__$1);

return statearr_3049;
})();
if(cljs.core.truth_(inst_2992)){
var statearr_3050_3132 = state_3043__$1;
(statearr_3050_3132[(1)] = (30));

} else {
var statearr_3051_3133 = state_3043__$1;
(statearr_3051_3133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (1))){
var state_3043__$1 = state_3043;
var statearr_3052_3134 = state_3043__$1;
(statearr_3052_3134[(2)] = null);

(statearr_3052_3134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (24))){
var inst_2942 = (state_3043[(7)]);
var inst_2961 = (state_3043[(2)]);
var inst_2962 = cljs.core.next.call(null,inst_2942);
var inst_2920 = inst_2962;
var inst_2921 = null;
var inst_2922 = (0);
var inst_2923 = (0);
var state_3043__$1 = (function (){var statearr_3053 = state_3043;
(statearr_3053[(13)] = inst_2920);

(statearr_3053[(14)] = inst_2961);

(statearr_3053[(15)] = inst_2923);

(statearr_3053[(16)] = inst_2922);

(statearr_3053[(17)] = inst_2921);

return statearr_3053;
})();
var statearr_3054_3135 = state_3043__$1;
(statearr_3054_3135[(2)] = null);

(statearr_3054_3135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (39))){
var state_3043__$1 = state_3043;
var statearr_3058_3136 = state_3043__$1;
(statearr_3058_3136[(2)] = null);

(statearr_3058_3136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (4))){
var inst_2911 = (state_3043[(11)]);
var inst_2911__$1 = (state_3043[(2)]);
var inst_2912 = (inst_2911__$1 == null);
var state_3043__$1 = (function (){var statearr_3059 = state_3043;
(statearr_3059[(11)] = inst_2911__$1);

return statearr_3059;
})();
if(cljs.core.truth_(inst_2912)){
var statearr_3060_3137 = state_3043__$1;
(statearr_3060_3137[(1)] = (5));

} else {
var statearr_3061_3138 = state_3043__$1;
(statearr_3061_3138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (15))){
var inst_2920 = (state_3043[(13)]);
var inst_2923 = (state_3043[(15)]);
var inst_2922 = (state_3043[(16)]);
var inst_2921 = (state_3043[(17)]);
var inst_2938 = (state_3043[(2)]);
var inst_2939 = (inst_2923 + (1));
var tmp3055 = inst_2920;
var tmp3056 = inst_2922;
var tmp3057 = inst_2921;
var inst_2920__$1 = tmp3055;
var inst_2921__$1 = tmp3057;
var inst_2922__$1 = tmp3056;
var inst_2923__$1 = inst_2939;
var state_3043__$1 = (function (){var statearr_3062 = state_3043;
(statearr_3062[(13)] = inst_2920__$1);

(statearr_3062[(15)] = inst_2923__$1);

(statearr_3062[(18)] = inst_2938);

(statearr_3062[(16)] = inst_2922__$1);

(statearr_3062[(17)] = inst_2921__$1);

return statearr_3062;
})();
var statearr_3063_3139 = state_3043__$1;
(statearr_3063_3139[(2)] = null);

(statearr_3063_3139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (21))){
var inst_2965 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3067_3140 = state_3043__$1;
(statearr_3067_3140[(2)] = inst_2965);

(statearr_3067_3140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (31))){
var inst_2991 = (state_3043[(9)]);
var inst_2995 = done.call(null,null);
var inst_2996 = cljs.core.async.untap_STAR_.call(null,m,inst_2991);
var state_3043__$1 = (function (){var statearr_3068 = state_3043;
(statearr_3068[(19)] = inst_2995);

return statearr_3068;
})();
var statearr_3069_3141 = state_3043__$1;
(statearr_3069_3141[(2)] = inst_2996);

(statearr_3069_3141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (32))){
var inst_2985 = (state_3043[(20)]);
var inst_2986 = (state_3043[(10)]);
var inst_2984 = (state_3043[(12)]);
var inst_2983 = (state_3043[(21)]);
var inst_2998 = (state_3043[(2)]);
var inst_2999 = (inst_2986 + (1));
var tmp3064 = inst_2985;
var tmp3065 = inst_2984;
var tmp3066 = inst_2983;
var inst_2983__$1 = tmp3066;
var inst_2984__$1 = tmp3065;
var inst_2985__$1 = tmp3064;
var inst_2986__$1 = inst_2999;
var state_3043__$1 = (function (){var statearr_3070 = state_3043;
(statearr_3070[(22)] = inst_2998);

(statearr_3070[(20)] = inst_2985__$1);

(statearr_3070[(10)] = inst_2986__$1);

(statearr_3070[(12)] = inst_2984__$1);

(statearr_3070[(21)] = inst_2983__$1);

return statearr_3070;
})();
var statearr_3071_3142 = state_3043__$1;
(statearr_3071_3142[(2)] = null);

(statearr_3071_3142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (40))){
var inst_3011 = (state_3043[(23)]);
var inst_3015 = done.call(null,null);
var inst_3016 = cljs.core.async.untap_STAR_.call(null,m,inst_3011);
var state_3043__$1 = (function (){var statearr_3072 = state_3043;
(statearr_3072[(24)] = inst_3015);

return statearr_3072;
})();
var statearr_3073_3143 = state_3043__$1;
(statearr_3073_3143[(2)] = inst_3016);

(statearr_3073_3143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (33))){
var inst_3002 = (state_3043[(25)]);
var inst_3004 = cljs.core.chunked_seq_QMARK_.call(null,inst_3002);
var state_3043__$1 = state_3043;
if(inst_3004){
var statearr_3074_3144 = state_3043__$1;
(statearr_3074_3144[(1)] = (36));

} else {
var statearr_3075_3145 = state_3043__$1;
(statearr_3075_3145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (13))){
var inst_2932 = (state_3043[(26)]);
var inst_2935 = cljs.core.async.close_BANG_.call(null,inst_2932);
var state_3043__$1 = state_3043;
var statearr_3076_3146 = state_3043__$1;
(statearr_3076_3146[(2)] = inst_2935);

(statearr_3076_3146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (22))){
var inst_2955 = (state_3043[(8)]);
var inst_2958 = cljs.core.async.close_BANG_.call(null,inst_2955);
var state_3043__$1 = state_3043;
var statearr_3077_3147 = state_3043__$1;
(statearr_3077_3147[(2)] = inst_2958);

(statearr_3077_3147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (36))){
var inst_3002 = (state_3043[(25)]);
var inst_3006 = cljs.core.chunk_first.call(null,inst_3002);
var inst_3007 = cljs.core.chunk_rest.call(null,inst_3002);
var inst_3008 = cljs.core.count.call(null,inst_3006);
var inst_2983 = inst_3007;
var inst_2984 = inst_3006;
var inst_2985 = inst_3008;
var inst_2986 = (0);
var state_3043__$1 = (function (){var statearr_3078 = state_3043;
(statearr_3078[(20)] = inst_2985);

(statearr_3078[(10)] = inst_2986);

(statearr_3078[(12)] = inst_2984);

(statearr_3078[(21)] = inst_2983);

return statearr_3078;
})();
var statearr_3079_3148 = state_3043__$1;
(statearr_3079_3148[(2)] = null);

(statearr_3079_3148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (41))){
var inst_3002 = (state_3043[(25)]);
var inst_3018 = (state_3043[(2)]);
var inst_3019 = cljs.core.next.call(null,inst_3002);
var inst_2983 = inst_3019;
var inst_2984 = null;
var inst_2985 = (0);
var inst_2986 = (0);
var state_3043__$1 = (function (){var statearr_3080 = state_3043;
(statearr_3080[(27)] = inst_3018);

(statearr_3080[(20)] = inst_2985);

(statearr_3080[(10)] = inst_2986);

(statearr_3080[(12)] = inst_2984);

(statearr_3080[(21)] = inst_2983);

return statearr_3080;
})();
var statearr_3081_3149 = state_3043__$1;
(statearr_3081_3149[(2)] = null);

(statearr_3081_3149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (43))){
var state_3043__$1 = state_3043;
var statearr_3082_3150 = state_3043__$1;
(statearr_3082_3150[(2)] = null);

(statearr_3082_3150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (29))){
var inst_3027 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3083_3151 = state_3043__$1;
(statearr_3083_3151[(2)] = inst_3027);

(statearr_3083_3151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (44))){
var inst_3036 = (state_3043[(2)]);
var state_3043__$1 = (function (){var statearr_3084 = state_3043;
(statearr_3084[(28)] = inst_3036);

return statearr_3084;
})();
var statearr_3085_3152 = state_3043__$1;
(statearr_3085_3152[(2)] = null);

(statearr_3085_3152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (6))){
var inst_2975 = (state_3043[(29)]);
var inst_2974 = cljs.core.deref.call(null,cs);
var inst_2975__$1 = cljs.core.keys.call(null,inst_2974);
var inst_2976 = cljs.core.count.call(null,inst_2975__$1);
var inst_2977 = cljs.core.reset_BANG_.call(null,dctr,inst_2976);
var inst_2982 = cljs.core.seq.call(null,inst_2975__$1);
var inst_2983 = inst_2982;
var inst_2984 = null;
var inst_2985 = (0);
var inst_2986 = (0);
var state_3043__$1 = (function (){var statearr_3086 = state_3043;
(statearr_3086[(29)] = inst_2975__$1);

(statearr_3086[(20)] = inst_2985);

(statearr_3086[(30)] = inst_2977);

(statearr_3086[(10)] = inst_2986);

(statearr_3086[(12)] = inst_2984);

(statearr_3086[(21)] = inst_2983);

return statearr_3086;
})();
var statearr_3087_3153 = state_3043__$1;
(statearr_3087_3153[(2)] = null);

(statearr_3087_3153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (28))){
var inst_3002 = (state_3043[(25)]);
var inst_2983 = (state_3043[(21)]);
var inst_3002__$1 = cljs.core.seq.call(null,inst_2983);
var state_3043__$1 = (function (){var statearr_3088 = state_3043;
(statearr_3088[(25)] = inst_3002__$1);

return statearr_3088;
})();
if(inst_3002__$1){
var statearr_3089_3154 = state_3043__$1;
(statearr_3089_3154[(1)] = (33));

} else {
var statearr_3090_3155 = state_3043__$1;
(statearr_3090_3155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (25))){
var inst_2985 = (state_3043[(20)]);
var inst_2986 = (state_3043[(10)]);
var inst_2988 = (inst_2986 < inst_2985);
var inst_2989 = inst_2988;
var state_3043__$1 = state_3043;
if(cljs.core.truth_(inst_2989)){
var statearr_3091_3156 = state_3043__$1;
(statearr_3091_3156[(1)] = (27));

} else {
var statearr_3092_3157 = state_3043__$1;
(statearr_3092_3157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (34))){
var state_3043__$1 = state_3043;
var statearr_3093_3158 = state_3043__$1;
(statearr_3093_3158[(2)] = null);

(statearr_3093_3158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (17))){
var state_3043__$1 = state_3043;
var statearr_3094_3159 = state_3043__$1;
(statearr_3094_3159[(2)] = null);

(statearr_3094_3159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (3))){
var inst_3041 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3043__$1,inst_3041);
} else {
if((state_val_3044 === (12))){
var inst_2970 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3095_3160 = state_3043__$1;
(statearr_3095_3160[(2)] = inst_2970);

(statearr_3095_3160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (2))){
var state_3043__$1 = state_3043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3043__$1,(4),ch);
} else {
if((state_val_3044 === (23))){
var state_3043__$1 = state_3043;
var statearr_3096_3161 = state_3043__$1;
(statearr_3096_3161[(2)] = null);

(statearr_3096_3161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (35))){
var inst_3025 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3097_3162 = state_3043__$1;
(statearr_3097_3162[(2)] = inst_3025);

(statearr_3097_3162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (19))){
var inst_2942 = (state_3043[(7)]);
var inst_2946 = cljs.core.chunk_first.call(null,inst_2942);
var inst_2947 = cljs.core.chunk_rest.call(null,inst_2942);
var inst_2948 = cljs.core.count.call(null,inst_2946);
var inst_2920 = inst_2947;
var inst_2921 = inst_2946;
var inst_2922 = inst_2948;
var inst_2923 = (0);
var state_3043__$1 = (function (){var statearr_3098 = state_3043;
(statearr_3098[(13)] = inst_2920);

(statearr_3098[(15)] = inst_2923);

(statearr_3098[(16)] = inst_2922);

(statearr_3098[(17)] = inst_2921);

return statearr_3098;
})();
var statearr_3099_3163 = state_3043__$1;
(statearr_3099_3163[(2)] = null);

(statearr_3099_3163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (11))){
var inst_2920 = (state_3043[(13)]);
var inst_2942 = (state_3043[(7)]);
var inst_2942__$1 = cljs.core.seq.call(null,inst_2920);
var state_3043__$1 = (function (){var statearr_3100 = state_3043;
(statearr_3100[(7)] = inst_2942__$1);

return statearr_3100;
})();
if(inst_2942__$1){
var statearr_3101_3164 = state_3043__$1;
(statearr_3101_3164[(1)] = (16));

} else {
var statearr_3102_3165 = state_3043__$1;
(statearr_3102_3165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (9))){
var inst_2972 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3103_3166 = state_3043__$1;
(statearr_3103_3166[(2)] = inst_2972);

(statearr_3103_3166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (5))){
var inst_2918 = cljs.core.deref.call(null,cs);
var inst_2919 = cljs.core.seq.call(null,inst_2918);
var inst_2920 = inst_2919;
var inst_2921 = null;
var inst_2922 = (0);
var inst_2923 = (0);
var state_3043__$1 = (function (){var statearr_3104 = state_3043;
(statearr_3104[(13)] = inst_2920);

(statearr_3104[(15)] = inst_2923);

(statearr_3104[(16)] = inst_2922);

(statearr_3104[(17)] = inst_2921);

return statearr_3104;
})();
var statearr_3105_3167 = state_3043__$1;
(statearr_3105_3167[(2)] = null);

(statearr_3105_3167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (14))){
var state_3043__$1 = state_3043;
var statearr_3106_3168 = state_3043__$1;
(statearr_3106_3168[(2)] = null);

(statearr_3106_3168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (45))){
var inst_3033 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3107_3169 = state_3043__$1;
(statearr_3107_3169[(2)] = inst_3033);

(statearr_3107_3169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (26))){
var inst_2975 = (state_3043[(29)]);
var inst_3029 = (state_3043[(2)]);
var inst_3030 = cljs.core.seq.call(null,inst_2975);
var state_3043__$1 = (function (){var statearr_3108 = state_3043;
(statearr_3108[(31)] = inst_3029);

return statearr_3108;
})();
if(inst_3030){
var statearr_3109_3170 = state_3043__$1;
(statearr_3109_3170[(1)] = (42));

} else {
var statearr_3110_3171 = state_3043__$1;
(statearr_3110_3171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (16))){
var inst_2942 = (state_3043[(7)]);
var inst_2944 = cljs.core.chunked_seq_QMARK_.call(null,inst_2942);
var state_3043__$1 = state_3043;
if(inst_2944){
var statearr_3111_3172 = state_3043__$1;
(statearr_3111_3172[(1)] = (19));

} else {
var statearr_3112_3173 = state_3043__$1;
(statearr_3112_3173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (38))){
var inst_3022 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3113_3174 = state_3043__$1;
(statearr_3113_3174[(2)] = inst_3022);

(statearr_3113_3174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (30))){
var state_3043__$1 = state_3043;
var statearr_3114_3175 = state_3043__$1;
(statearr_3114_3175[(2)] = null);

(statearr_3114_3175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (10))){
var inst_2923 = (state_3043[(15)]);
var inst_2921 = (state_3043[(17)]);
var inst_2931 = cljs.core._nth.call(null,inst_2921,inst_2923);
var inst_2932 = cljs.core.nth.call(null,inst_2931,(0),null);
var inst_2933 = cljs.core.nth.call(null,inst_2931,(1),null);
var state_3043__$1 = (function (){var statearr_3115 = state_3043;
(statearr_3115[(26)] = inst_2932);

return statearr_3115;
})();
if(cljs.core.truth_(inst_2933)){
var statearr_3116_3176 = state_3043__$1;
(statearr_3116_3176[(1)] = (13));

} else {
var statearr_3117_3177 = state_3043__$1;
(statearr_3117_3177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (18))){
var inst_2968 = (state_3043[(2)]);
var state_3043__$1 = state_3043;
var statearr_3118_3178 = state_3043__$1;
(statearr_3118_3178[(2)] = inst_2968);

(statearr_3118_3178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (42))){
var state_3043__$1 = state_3043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3043__$1,(45),dchan);
} else {
if((state_val_3044 === (37))){
var inst_2911 = (state_3043[(11)]);
var inst_3002 = (state_3043[(25)]);
var inst_3011 = (state_3043[(23)]);
var inst_3011__$1 = cljs.core.first.call(null,inst_3002);
var inst_3012 = cljs.core.async.put_BANG_.call(null,inst_3011__$1,inst_2911,done);
var state_3043__$1 = (function (){var statearr_3119 = state_3043;
(statearr_3119[(23)] = inst_3011__$1);

return statearr_3119;
})();
if(cljs.core.truth_(inst_3012)){
var statearr_3120_3179 = state_3043__$1;
(statearr_3120_3179[(1)] = (39));

} else {
var statearr_3121_3180 = state_3043__$1;
(statearr_3121_3180[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3044 === (8))){
var inst_2923 = (state_3043[(15)]);
var inst_2922 = (state_3043[(16)]);
var inst_2925 = (inst_2923 < inst_2922);
var inst_2926 = inst_2925;
var state_3043__$1 = state_3043;
if(cljs.core.truth_(inst_2926)){
var statearr_3122_3181 = state_3043__$1;
(statearr_3122_3181[(1)] = (10));

} else {
var statearr_3123_3182 = state_3043__$1;
(statearr_3123_3182[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mult_$_state_machine__2211__auto__ = null;
var cljs$core$async$mult_$_state_machine__2211__auto____0 = (function (){
var statearr_3124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3124[(0)] = cljs$core$async$mult_$_state_machine__2211__auto__);

(statearr_3124[(1)] = (1));

return statearr_3124;
});
var cljs$core$async$mult_$_state_machine__2211__auto____1 = (function (state_3043){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3125){if((e3125 instanceof Object)){
var ex__2214__auto__ = e3125;
var statearr_3126_3183 = state_3043;
(statearr_3126_3183[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3184 = state_3043;
state_3043 = G__3184;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2211__auto__ = function(state_3043){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2211__auto____1.call(this,state_3043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2211__auto____0;
cljs$core$async$mult_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2211__auto____1;
return cljs$core$async$mult_$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3127 = f__2306__auto__.call(null);
(statearr_3127[(6)] = c__2305__auto___3128);

return statearr_3127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__3186 = arguments.length;
switch (G__3186) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_3188 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_3188.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_3189 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_3189.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_3190 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_3190.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_3191 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_3191.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_3192 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_3192.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3203 = arguments.length;
var i__4737__auto___3204 = (0);
while(true){
if((i__4737__auto___3204 < len__4736__auto___3203)){
args__4742__auto__.push((arguments[i__4737__auto___3204]));

var G__3205 = (i__4737__auto___3204 + (1));
i__4737__auto___3204 = G__3205;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3197){
var map__3198 = p__3197;
var map__3198__$1 = (((((!((map__3198 == null))))?(((((map__3198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3198):map__3198);
var opts = map__3198__$1;
var statearr_3200_3206 = state;
(statearr_3200_3206[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_3201_3207 = state;
(statearr_3201_3207[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_3202_3208 = state;
(statearr_3202_3208[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3193){
var G__3194 = cljs.core.first.call(null,seq3193);
var seq3193__$1 = cljs.core.next.call(null,seq3193);
var G__3195 = cljs.core.first.call(null,seq3193__$1);
var seq3193__$2 = cljs.core.next.call(null,seq3193__$1);
var G__3196 = cljs.core.first.call(null,seq3193__$2);
var seq3193__$3 = cljs.core.next.call(null,seq3193__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3194,G__3195,G__3196,seq3193__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3209 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta3210){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta3210 = meta3210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3211,meta3210__$1){
var self__ = this;
var _3211__$1 = this;
return (new cljs.core.async.t_cljs$core$async3209(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta3210__$1));
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3211){
var self__ = this;
var _3211__$1 = this;
return self__.meta3210;
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async3209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta3210","meta3210",1942395961,null)], null);
}));

(cljs.core.async.t_cljs$core$async3209.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3209");

(cljs.core.async.t_cljs$core$async3209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3209");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3209.
 */
cljs.core.async.__GT_t_cljs$core$async3209 = (function cljs$core$async$mix_$___GT_t_cljs$core$async3209(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3210){
return (new cljs.core.async.t_cljs$core$async3209(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta3210));
});

}

return (new cljs.core.async.t_cljs$core$async3209(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2305__auto___3373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3313){
var state_val_3314 = (state_3313[(1)]);
if((state_val_3314 === (7))){
var inst_3228 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
var statearr_3315_3374 = state_3313__$1;
(statearr_3315_3374[(2)] = inst_3228);

(statearr_3315_3374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (20))){
var inst_3240 = (state_3313[(7)]);
var state_3313__$1 = state_3313;
var statearr_3316_3375 = state_3313__$1;
(statearr_3316_3375[(2)] = inst_3240);

(statearr_3316_3375[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (27))){
var state_3313__$1 = state_3313;
var statearr_3317_3376 = state_3313__$1;
(statearr_3317_3376[(2)] = null);

(statearr_3317_3376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (1))){
var inst_3215 = (state_3313[(8)]);
var inst_3215__$1 = calc_state.call(null);
var inst_3217 = (inst_3215__$1 == null);
var inst_3218 = cljs.core.not.call(null,inst_3217);
var state_3313__$1 = (function (){var statearr_3318 = state_3313;
(statearr_3318[(8)] = inst_3215__$1);

return statearr_3318;
})();
if(inst_3218){
var statearr_3319_3377 = state_3313__$1;
(statearr_3319_3377[(1)] = (2));

} else {
var statearr_3320_3378 = state_3313__$1;
(statearr_3320_3378[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (24))){
var inst_3264 = (state_3313[(9)]);
var inst_3287 = (state_3313[(10)]);
var inst_3273 = (state_3313[(11)]);
var inst_3287__$1 = inst_3264.call(null,inst_3273);
var state_3313__$1 = (function (){var statearr_3321 = state_3313;
(statearr_3321[(10)] = inst_3287__$1);

return statearr_3321;
})();
if(cljs.core.truth_(inst_3287__$1)){
var statearr_3322_3379 = state_3313__$1;
(statearr_3322_3379[(1)] = (29));

} else {
var statearr_3323_3380 = state_3313__$1;
(statearr_3323_3380[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (4))){
var inst_3231 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3231)){
var statearr_3324_3381 = state_3313__$1;
(statearr_3324_3381[(1)] = (8));

} else {
var statearr_3325_3382 = state_3313__$1;
(statearr_3325_3382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (15))){
var inst_3258 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3258)){
var statearr_3326_3383 = state_3313__$1;
(statearr_3326_3383[(1)] = (19));

} else {
var statearr_3327_3384 = state_3313__$1;
(statearr_3327_3384[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (21))){
var inst_3263 = (state_3313[(12)]);
var inst_3263__$1 = (state_3313[(2)]);
var inst_3264 = cljs.core.get.call(null,inst_3263__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3265 = cljs.core.get.call(null,inst_3263__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3266 = cljs.core.get.call(null,inst_3263__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3313__$1 = (function (){var statearr_3328 = state_3313;
(statearr_3328[(9)] = inst_3264);

(statearr_3328[(13)] = inst_3265);

(statearr_3328[(12)] = inst_3263__$1);

return statearr_3328;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3313__$1,(22),inst_3266);
} else {
if((state_val_3314 === (31))){
var inst_3295 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3295)){
var statearr_3329_3385 = state_3313__$1;
(statearr_3329_3385[(1)] = (32));

} else {
var statearr_3330_3386 = state_3313__$1;
(statearr_3330_3386[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (32))){
var inst_3272 = (state_3313[(14)]);
var state_3313__$1 = state_3313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3313__$1,(35),out,inst_3272);
} else {
if((state_val_3314 === (33))){
var inst_3263 = (state_3313[(12)]);
var inst_3240 = inst_3263;
var state_3313__$1 = (function (){var statearr_3331 = state_3313;
(statearr_3331[(7)] = inst_3240);

return statearr_3331;
})();
var statearr_3332_3387 = state_3313__$1;
(statearr_3332_3387[(2)] = null);

(statearr_3332_3387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (13))){
var inst_3240 = (state_3313[(7)]);
var inst_3247 = inst_3240.cljs$lang$protocol_mask$partition0$;
var inst_3248 = (inst_3247 & (64));
var inst_3249 = inst_3240.cljs$core$ISeq$;
var inst_3250 = (cljs.core.PROTOCOL_SENTINEL === inst_3249);
var inst_3251 = ((inst_3248) || (inst_3250));
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3251)){
var statearr_3333_3388 = state_3313__$1;
(statearr_3333_3388[(1)] = (16));

} else {
var statearr_3334_3389 = state_3313__$1;
(statearr_3334_3389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (22))){
var inst_3273 = (state_3313[(11)]);
var inst_3272 = (state_3313[(14)]);
var inst_3271 = (state_3313[(2)]);
var inst_3272__$1 = cljs.core.nth.call(null,inst_3271,(0),null);
var inst_3273__$1 = cljs.core.nth.call(null,inst_3271,(1),null);
var inst_3274 = (inst_3272__$1 == null);
var inst_3275 = cljs.core._EQ_.call(null,inst_3273__$1,change);
var inst_3276 = ((inst_3274) || (inst_3275));
var state_3313__$1 = (function (){var statearr_3335 = state_3313;
(statearr_3335[(11)] = inst_3273__$1);

(statearr_3335[(14)] = inst_3272__$1);

return statearr_3335;
})();
if(cljs.core.truth_(inst_3276)){
var statearr_3336_3390 = state_3313__$1;
(statearr_3336_3390[(1)] = (23));

} else {
var statearr_3337_3391 = state_3313__$1;
(statearr_3337_3391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (36))){
var inst_3263 = (state_3313[(12)]);
var inst_3240 = inst_3263;
var state_3313__$1 = (function (){var statearr_3338 = state_3313;
(statearr_3338[(7)] = inst_3240);

return statearr_3338;
})();
var statearr_3339_3392 = state_3313__$1;
(statearr_3339_3392[(2)] = null);

(statearr_3339_3392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (29))){
var inst_3287 = (state_3313[(10)]);
var state_3313__$1 = state_3313;
var statearr_3340_3393 = state_3313__$1;
(statearr_3340_3393[(2)] = inst_3287);

(statearr_3340_3393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (6))){
var state_3313__$1 = state_3313;
var statearr_3341_3394 = state_3313__$1;
(statearr_3341_3394[(2)] = false);

(statearr_3341_3394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (28))){
var inst_3283 = (state_3313[(2)]);
var inst_3284 = calc_state.call(null);
var inst_3240 = inst_3284;
var state_3313__$1 = (function (){var statearr_3342 = state_3313;
(statearr_3342[(7)] = inst_3240);

(statearr_3342[(15)] = inst_3283);

return statearr_3342;
})();
var statearr_3343_3395 = state_3313__$1;
(statearr_3343_3395[(2)] = null);

(statearr_3343_3395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (25))){
var inst_3309 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
var statearr_3344_3396 = state_3313__$1;
(statearr_3344_3396[(2)] = inst_3309);

(statearr_3344_3396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (34))){
var inst_3307 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
var statearr_3345_3397 = state_3313__$1;
(statearr_3345_3397[(2)] = inst_3307);

(statearr_3345_3397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (17))){
var state_3313__$1 = state_3313;
var statearr_3346_3398 = state_3313__$1;
(statearr_3346_3398[(2)] = false);

(statearr_3346_3398[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (3))){
var state_3313__$1 = state_3313;
var statearr_3347_3399 = state_3313__$1;
(statearr_3347_3399[(2)] = false);

(statearr_3347_3399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (12))){
var inst_3311 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3313__$1,inst_3311);
} else {
if((state_val_3314 === (2))){
var inst_3215 = (state_3313[(8)]);
var inst_3220 = inst_3215.cljs$lang$protocol_mask$partition0$;
var inst_3221 = (inst_3220 & (64));
var inst_3222 = inst_3215.cljs$core$ISeq$;
var inst_3223 = (cljs.core.PROTOCOL_SENTINEL === inst_3222);
var inst_3224 = ((inst_3221) || (inst_3223));
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3224)){
var statearr_3348_3400 = state_3313__$1;
(statearr_3348_3400[(1)] = (5));

} else {
var statearr_3349_3401 = state_3313__$1;
(statearr_3349_3401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (23))){
var inst_3272 = (state_3313[(14)]);
var inst_3278 = (inst_3272 == null);
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3278)){
var statearr_3350_3402 = state_3313__$1;
(statearr_3350_3402[(1)] = (26));

} else {
var statearr_3351_3403 = state_3313__$1;
(statearr_3351_3403[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (35))){
var inst_3298 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
if(cljs.core.truth_(inst_3298)){
var statearr_3352_3404 = state_3313__$1;
(statearr_3352_3404[(1)] = (36));

} else {
var statearr_3353_3405 = state_3313__$1;
(statearr_3353_3405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (19))){
var inst_3240 = (state_3313[(7)]);
var inst_3260 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3240);
var state_3313__$1 = state_3313;
var statearr_3354_3406 = state_3313__$1;
(statearr_3354_3406[(2)] = inst_3260);

(statearr_3354_3406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (11))){
var inst_3240 = (state_3313[(7)]);
var inst_3244 = (inst_3240 == null);
var inst_3245 = cljs.core.not.call(null,inst_3244);
var state_3313__$1 = state_3313;
if(inst_3245){
var statearr_3355_3407 = state_3313__$1;
(statearr_3355_3407[(1)] = (13));

} else {
var statearr_3356_3408 = state_3313__$1;
(statearr_3356_3408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (9))){
var inst_3215 = (state_3313[(8)]);
var state_3313__$1 = state_3313;
var statearr_3357_3409 = state_3313__$1;
(statearr_3357_3409[(2)] = inst_3215);

(statearr_3357_3409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (5))){
var state_3313__$1 = state_3313;
var statearr_3358_3410 = state_3313__$1;
(statearr_3358_3410[(2)] = true);

(statearr_3358_3410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (14))){
var state_3313__$1 = state_3313;
var statearr_3359_3411 = state_3313__$1;
(statearr_3359_3411[(2)] = false);

(statearr_3359_3411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (26))){
var inst_3273 = (state_3313[(11)]);
var inst_3280 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3273);
var state_3313__$1 = state_3313;
var statearr_3360_3412 = state_3313__$1;
(statearr_3360_3412[(2)] = inst_3280);

(statearr_3360_3412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (16))){
var state_3313__$1 = state_3313;
var statearr_3361_3413 = state_3313__$1;
(statearr_3361_3413[(2)] = true);

(statearr_3361_3413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (38))){
var inst_3303 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
var statearr_3362_3414 = state_3313__$1;
(statearr_3362_3414[(2)] = inst_3303);

(statearr_3362_3414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (30))){
var inst_3264 = (state_3313[(9)]);
var inst_3265 = (state_3313[(13)]);
var inst_3273 = (state_3313[(11)]);
var inst_3290 = cljs.core.empty_QMARK_.call(null,inst_3264);
var inst_3291 = inst_3265.call(null,inst_3273);
var inst_3292 = cljs.core.not.call(null,inst_3291);
var inst_3293 = ((inst_3290) && (inst_3292));
var state_3313__$1 = state_3313;
var statearr_3363_3415 = state_3313__$1;
(statearr_3363_3415[(2)] = inst_3293);

(statearr_3363_3415[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (10))){
var inst_3215 = (state_3313[(8)]);
var inst_3236 = (state_3313[(2)]);
var inst_3237 = cljs.core.get.call(null,inst_3236,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3238 = cljs.core.get.call(null,inst_3236,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3239 = cljs.core.get.call(null,inst_3236,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3240 = inst_3215;
var state_3313__$1 = (function (){var statearr_3364 = state_3313;
(statearr_3364[(16)] = inst_3238);

(statearr_3364[(7)] = inst_3240);

(statearr_3364[(17)] = inst_3237);

(statearr_3364[(18)] = inst_3239);

return statearr_3364;
})();
var statearr_3365_3416 = state_3313__$1;
(statearr_3365_3416[(2)] = null);

(statearr_3365_3416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (18))){
var inst_3255 = (state_3313[(2)]);
var state_3313__$1 = state_3313;
var statearr_3366_3417 = state_3313__$1;
(statearr_3366_3417[(2)] = inst_3255);

(statearr_3366_3417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (37))){
var state_3313__$1 = state_3313;
var statearr_3367_3418 = state_3313__$1;
(statearr_3367_3418[(2)] = null);

(statearr_3367_3418[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3314 === (8))){
var inst_3215 = (state_3313[(8)]);
var inst_3233 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3215);
var state_3313__$1 = state_3313;
var statearr_3368_3419 = state_3313__$1;
(statearr_3368_3419[(2)] = inst_3233);

(statearr_3368_3419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
var cljs$core$async$mix_$_state_machine__2211__auto__ = null;
var cljs$core$async$mix_$_state_machine__2211__auto____0 = (function (){
var statearr_3369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3369[(0)] = cljs$core$async$mix_$_state_machine__2211__auto__);

(statearr_3369[(1)] = (1));

return statearr_3369;
});
var cljs$core$async$mix_$_state_machine__2211__auto____1 = (function (state_3313){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3370){if((e3370 instanceof Object)){
var ex__2214__auto__ = e3370;
var statearr_3371_3420 = state_3313;
(statearr_3371_3420[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3421 = state_3313;
state_3313 = G__3421;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2211__auto__ = function(state_3313){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2211__auto____1.call(this,state_3313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2211__auto____0;
cljs$core$async$mix_$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2211__auto____1;
return cljs$core$async$mix_$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3372 = f__2306__auto__.call(null);
(statearr_3372[(6)] = c__2305__auto___3373);

return statearr_3372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_3424 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_3424.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_3425 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_3425.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_3426 = (function() {
var G__3427 = null;
var G__3427__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__3427__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__3427 = function(p,v){
switch(arguments.length){
case 1:
return G__3427__1.call(this,p);
case 2:
return G__3427__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3427.cljs$core$IFn$_invoke$arity$1 = G__3427__1;
G__3427.cljs$core$IFn$_invoke$arity$2 = G__3427__2;
return G__3427;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3423 = arguments.length;
switch (G__3423) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3426.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_3426.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__3431 = arguments.length;
switch (G__3431) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__3429_SHARP_){
if(cljs.core.truth_(p1__3429_SHARP_.call(null,topic))){
return p1__3429_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3429_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3432 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3433){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3433 = meta3433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3434,meta3433__$1){
var self__ = this;
var _3434__$1 = this;
return (new cljs.core.async.t_cljs$core$async3432(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3433__$1));
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3434){
var self__ = this;
var _3434__$1 = this;
return self__.meta3433;
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async3432.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async3432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3433","meta3433",122575218,null)], null);
}));

(cljs.core.async.t_cljs$core$async3432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3432");

(cljs.core.async.t_cljs$core$async3432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3432.
 */
cljs.core.async.__GT_t_cljs$core$async3432 = (function cljs$core$async$__GT_t_cljs$core$async3432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3433){
return (new cljs.core.async.t_cljs$core$async3432(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3433));
});

}

return (new cljs.core.async.t_cljs$core$async3432(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2305__auto___3552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3506){
var state_val_3507 = (state_3506[(1)]);
if((state_val_3507 === (7))){
var inst_3502 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3508_3553 = state_3506__$1;
(statearr_3508_3553[(2)] = inst_3502);

(statearr_3508_3553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (20))){
var state_3506__$1 = state_3506;
var statearr_3509_3554 = state_3506__$1;
(statearr_3509_3554[(2)] = null);

(statearr_3509_3554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (1))){
var state_3506__$1 = state_3506;
var statearr_3510_3555 = state_3506__$1;
(statearr_3510_3555[(2)] = null);

(statearr_3510_3555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (24))){
var inst_3485 = (state_3506[(7)]);
var inst_3494 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_3485);
var state_3506__$1 = state_3506;
var statearr_3511_3556 = state_3506__$1;
(statearr_3511_3556[(2)] = inst_3494);

(statearr_3511_3556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (4))){
var inst_3437 = (state_3506[(8)]);
var inst_3437__$1 = (state_3506[(2)]);
var inst_3438 = (inst_3437__$1 == null);
var state_3506__$1 = (function (){var statearr_3512 = state_3506;
(statearr_3512[(8)] = inst_3437__$1);

return statearr_3512;
})();
if(cljs.core.truth_(inst_3438)){
var statearr_3513_3557 = state_3506__$1;
(statearr_3513_3557[(1)] = (5));

} else {
var statearr_3514_3558 = state_3506__$1;
(statearr_3514_3558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (15))){
var inst_3479 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3515_3559 = state_3506__$1;
(statearr_3515_3559[(2)] = inst_3479);

(statearr_3515_3559[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (21))){
var inst_3499 = (state_3506[(2)]);
var state_3506__$1 = (function (){var statearr_3516 = state_3506;
(statearr_3516[(9)] = inst_3499);

return statearr_3516;
})();
var statearr_3517_3560 = state_3506__$1;
(statearr_3517_3560[(2)] = null);

(statearr_3517_3560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (13))){
var inst_3461 = (state_3506[(10)]);
var inst_3463 = cljs.core.chunked_seq_QMARK_.call(null,inst_3461);
var state_3506__$1 = state_3506;
if(inst_3463){
var statearr_3518_3561 = state_3506__$1;
(statearr_3518_3561[(1)] = (16));

} else {
var statearr_3519_3562 = state_3506__$1;
(statearr_3519_3562[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (22))){
var inst_3491 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
if(cljs.core.truth_(inst_3491)){
var statearr_3520_3563 = state_3506__$1;
(statearr_3520_3563[(1)] = (23));

} else {
var statearr_3521_3564 = state_3506__$1;
(statearr_3521_3564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (6))){
var inst_3485 = (state_3506[(7)]);
var inst_3437 = (state_3506[(8)]);
var inst_3487 = (state_3506[(11)]);
var inst_3485__$1 = topic_fn.call(null,inst_3437);
var inst_3486 = cljs.core.deref.call(null,mults);
var inst_3487__$1 = cljs.core.get.call(null,inst_3486,inst_3485__$1);
var state_3506__$1 = (function (){var statearr_3522 = state_3506;
(statearr_3522[(7)] = inst_3485__$1);

(statearr_3522[(11)] = inst_3487__$1);

return statearr_3522;
})();
if(cljs.core.truth_(inst_3487__$1)){
var statearr_3523_3565 = state_3506__$1;
(statearr_3523_3565[(1)] = (19));

} else {
var statearr_3524_3566 = state_3506__$1;
(statearr_3524_3566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (25))){
var inst_3496 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3525_3567 = state_3506__$1;
(statearr_3525_3567[(2)] = inst_3496);

(statearr_3525_3567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (17))){
var inst_3461 = (state_3506[(10)]);
var inst_3470 = cljs.core.first.call(null,inst_3461);
var inst_3471 = cljs.core.async.muxch_STAR_.call(null,inst_3470);
var inst_3472 = cljs.core.async.close_BANG_.call(null,inst_3471);
var inst_3473 = cljs.core.next.call(null,inst_3461);
var inst_3447 = inst_3473;
var inst_3448 = null;
var inst_3449 = (0);
var inst_3450 = (0);
var state_3506__$1 = (function (){var statearr_3526 = state_3506;
(statearr_3526[(12)] = inst_3450);

(statearr_3526[(13)] = inst_3447);

(statearr_3526[(14)] = inst_3448);

(statearr_3526[(15)] = inst_3449);

(statearr_3526[(16)] = inst_3472);

return statearr_3526;
})();
var statearr_3527_3568 = state_3506__$1;
(statearr_3527_3568[(2)] = null);

(statearr_3527_3568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (3))){
var inst_3504 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3506__$1,inst_3504);
} else {
if((state_val_3507 === (12))){
var inst_3481 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3528_3569 = state_3506__$1;
(statearr_3528_3569[(2)] = inst_3481);

(statearr_3528_3569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (2))){
var state_3506__$1 = state_3506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3506__$1,(4),ch);
} else {
if((state_val_3507 === (23))){
var state_3506__$1 = state_3506;
var statearr_3529_3570 = state_3506__$1;
(statearr_3529_3570[(2)] = null);

(statearr_3529_3570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (19))){
var inst_3437 = (state_3506[(8)]);
var inst_3487 = (state_3506[(11)]);
var inst_3489 = cljs.core.async.muxch_STAR_.call(null,inst_3487);
var state_3506__$1 = state_3506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3506__$1,(22),inst_3489,inst_3437);
} else {
if((state_val_3507 === (11))){
var inst_3447 = (state_3506[(13)]);
var inst_3461 = (state_3506[(10)]);
var inst_3461__$1 = cljs.core.seq.call(null,inst_3447);
var state_3506__$1 = (function (){var statearr_3530 = state_3506;
(statearr_3530[(10)] = inst_3461__$1);

return statearr_3530;
})();
if(inst_3461__$1){
var statearr_3531_3571 = state_3506__$1;
(statearr_3531_3571[(1)] = (13));

} else {
var statearr_3532_3572 = state_3506__$1;
(statearr_3532_3572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (9))){
var inst_3483 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3533_3573 = state_3506__$1;
(statearr_3533_3573[(2)] = inst_3483);

(statearr_3533_3573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (5))){
var inst_3444 = cljs.core.deref.call(null,mults);
var inst_3445 = cljs.core.vals.call(null,inst_3444);
var inst_3446 = cljs.core.seq.call(null,inst_3445);
var inst_3447 = inst_3446;
var inst_3448 = null;
var inst_3449 = (0);
var inst_3450 = (0);
var state_3506__$1 = (function (){var statearr_3534 = state_3506;
(statearr_3534[(12)] = inst_3450);

(statearr_3534[(13)] = inst_3447);

(statearr_3534[(14)] = inst_3448);

(statearr_3534[(15)] = inst_3449);

return statearr_3534;
})();
var statearr_3535_3574 = state_3506__$1;
(statearr_3535_3574[(2)] = null);

(statearr_3535_3574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (14))){
var state_3506__$1 = state_3506;
var statearr_3539_3575 = state_3506__$1;
(statearr_3539_3575[(2)] = null);

(statearr_3539_3575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (16))){
var inst_3461 = (state_3506[(10)]);
var inst_3465 = cljs.core.chunk_first.call(null,inst_3461);
var inst_3466 = cljs.core.chunk_rest.call(null,inst_3461);
var inst_3467 = cljs.core.count.call(null,inst_3465);
var inst_3447 = inst_3466;
var inst_3448 = inst_3465;
var inst_3449 = inst_3467;
var inst_3450 = (0);
var state_3506__$1 = (function (){var statearr_3540 = state_3506;
(statearr_3540[(12)] = inst_3450);

(statearr_3540[(13)] = inst_3447);

(statearr_3540[(14)] = inst_3448);

(statearr_3540[(15)] = inst_3449);

return statearr_3540;
})();
var statearr_3541_3576 = state_3506__$1;
(statearr_3541_3576[(2)] = null);

(statearr_3541_3576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (10))){
var inst_3450 = (state_3506[(12)]);
var inst_3447 = (state_3506[(13)]);
var inst_3448 = (state_3506[(14)]);
var inst_3449 = (state_3506[(15)]);
var inst_3455 = cljs.core._nth.call(null,inst_3448,inst_3450);
var inst_3456 = cljs.core.async.muxch_STAR_.call(null,inst_3455);
var inst_3457 = cljs.core.async.close_BANG_.call(null,inst_3456);
var inst_3458 = (inst_3450 + (1));
var tmp3536 = inst_3447;
var tmp3537 = inst_3448;
var tmp3538 = inst_3449;
var inst_3447__$1 = tmp3536;
var inst_3448__$1 = tmp3537;
var inst_3449__$1 = tmp3538;
var inst_3450__$1 = inst_3458;
var state_3506__$1 = (function (){var statearr_3542 = state_3506;
(statearr_3542[(12)] = inst_3450__$1);

(statearr_3542[(13)] = inst_3447__$1);

(statearr_3542[(14)] = inst_3448__$1);

(statearr_3542[(17)] = inst_3457);

(statearr_3542[(15)] = inst_3449__$1);

return statearr_3542;
})();
var statearr_3543_3577 = state_3506__$1;
(statearr_3543_3577[(2)] = null);

(statearr_3543_3577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (18))){
var inst_3476 = (state_3506[(2)]);
var state_3506__$1 = state_3506;
var statearr_3544_3578 = state_3506__$1;
(statearr_3544_3578[(2)] = inst_3476);

(statearr_3544_3578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3507 === (8))){
var inst_3450 = (state_3506[(12)]);
var inst_3449 = (state_3506[(15)]);
var inst_3452 = (inst_3450 < inst_3449);
var inst_3453 = inst_3452;
var state_3506__$1 = state_3506;
if(cljs.core.truth_(inst_3453)){
var statearr_3545_3579 = state_3506__$1;
(statearr_3545_3579[(1)] = (10));

} else {
var statearr_3546_3580 = state_3506__$1;
(statearr_3546_3580[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_3547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3547[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_3547[(1)] = (1));

return statearr_3547;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_3506){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3548){if((e3548 instanceof Object)){
var ex__2214__auto__ = e3548;
var statearr_3549_3581 = state_3506;
(statearr_3549_3581[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3582 = state_3506;
state_3506 = G__3582;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_3506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_3506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3550 = f__2306__auto__.call(null);
(statearr_3550[(6)] = c__2305__auto___3552);

return statearr_3550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__3584 = arguments.length;
switch (G__3584) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__3587 = arguments.length;
switch (G__3587) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__3590 = arguments.length;
switch (G__3590) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__2305__auto___3657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3629){
var state_val_3630 = (state_3629[(1)]);
if((state_val_3630 === (7))){
var state_3629__$1 = state_3629;
var statearr_3631_3658 = state_3629__$1;
(statearr_3631_3658[(2)] = null);

(statearr_3631_3658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (1))){
var state_3629__$1 = state_3629;
var statearr_3632_3659 = state_3629__$1;
(statearr_3632_3659[(2)] = null);

(statearr_3632_3659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (4))){
var inst_3593 = (state_3629[(7)]);
var inst_3595 = (inst_3593 < cnt);
var state_3629__$1 = state_3629;
if(cljs.core.truth_(inst_3595)){
var statearr_3633_3660 = state_3629__$1;
(statearr_3633_3660[(1)] = (6));

} else {
var statearr_3634_3661 = state_3629__$1;
(statearr_3634_3661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (15))){
var inst_3625 = (state_3629[(2)]);
var state_3629__$1 = state_3629;
var statearr_3635_3662 = state_3629__$1;
(statearr_3635_3662[(2)] = inst_3625);

(statearr_3635_3662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (13))){
var inst_3618 = cljs.core.async.close_BANG_.call(null,out);
var state_3629__$1 = state_3629;
var statearr_3636_3663 = state_3629__$1;
(statearr_3636_3663[(2)] = inst_3618);

(statearr_3636_3663[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (6))){
var state_3629__$1 = state_3629;
var statearr_3637_3664 = state_3629__$1;
(statearr_3637_3664[(2)] = null);

(statearr_3637_3664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (3))){
var inst_3627 = (state_3629[(2)]);
var state_3629__$1 = state_3629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3629__$1,inst_3627);
} else {
if((state_val_3630 === (12))){
var inst_3615 = (state_3629[(8)]);
var inst_3615__$1 = (state_3629[(2)]);
var inst_3616 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_3615__$1);
var state_3629__$1 = (function (){var statearr_3638 = state_3629;
(statearr_3638[(8)] = inst_3615__$1);

return statearr_3638;
})();
if(cljs.core.truth_(inst_3616)){
var statearr_3639_3665 = state_3629__$1;
(statearr_3639_3665[(1)] = (13));

} else {
var statearr_3640_3666 = state_3629__$1;
(statearr_3640_3666[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (2))){
var inst_3592 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_3593 = (0);
var state_3629__$1 = (function (){var statearr_3641 = state_3629;
(statearr_3641[(9)] = inst_3592);

(statearr_3641[(7)] = inst_3593);

return statearr_3641;
})();
var statearr_3642_3667 = state_3629__$1;
(statearr_3642_3667[(2)] = null);

(statearr_3642_3667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (11))){
var inst_3593 = (state_3629[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_3629,(10),Object,null,(9));
var inst_3602 = chs__$1.call(null,inst_3593);
var inst_3603 = done.call(null,inst_3593);
var inst_3604 = cljs.core.async.take_BANG_.call(null,inst_3602,inst_3603);
var state_3629__$1 = state_3629;
var statearr_3643_3668 = state_3629__$1;
(statearr_3643_3668[(2)] = inst_3604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (9))){
var inst_3593 = (state_3629[(7)]);
var inst_3606 = (state_3629[(2)]);
var inst_3607 = (inst_3593 + (1));
var inst_3593__$1 = inst_3607;
var state_3629__$1 = (function (){var statearr_3644 = state_3629;
(statearr_3644[(10)] = inst_3606);

(statearr_3644[(7)] = inst_3593__$1);

return statearr_3644;
})();
var statearr_3645_3669 = state_3629__$1;
(statearr_3645_3669[(2)] = null);

(statearr_3645_3669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (5))){
var inst_3613 = (state_3629[(2)]);
var state_3629__$1 = (function (){var statearr_3646 = state_3629;
(statearr_3646[(11)] = inst_3613);

return statearr_3646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3629__$1,(12),dchan);
} else {
if((state_val_3630 === (14))){
var inst_3615 = (state_3629[(8)]);
var inst_3620 = cljs.core.apply.call(null,f,inst_3615);
var state_3629__$1 = state_3629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3629__$1,(16),out,inst_3620);
} else {
if((state_val_3630 === (16))){
var inst_3622 = (state_3629[(2)]);
var state_3629__$1 = (function (){var statearr_3647 = state_3629;
(statearr_3647[(12)] = inst_3622);

return statearr_3647;
})();
var statearr_3648_3670 = state_3629__$1;
(statearr_3648_3670[(2)] = null);

(statearr_3648_3670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (10))){
var inst_3597 = (state_3629[(2)]);
var inst_3598 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_3629__$1 = (function (){var statearr_3649 = state_3629;
(statearr_3649[(13)] = inst_3597);

return statearr_3649;
})();
var statearr_3650_3671 = state_3629__$1;
(statearr_3650_3671[(2)] = inst_3598);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3630 === (8))){
var inst_3611 = (state_3629[(2)]);
var state_3629__$1 = state_3629;
var statearr_3651_3672 = state_3629__$1;
(statearr_3651_3672[(2)] = inst_3611);

(statearr_3651_3672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_3652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3652[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_3652[(1)] = (1));

return statearr_3652;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_3629){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3653){if((e3653 instanceof Object)){
var ex__2214__auto__ = e3653;
var statearr_3654_3673 = state_3629;
(statearr_3654_3673[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3674 = state_3629;
state_3629 = G__3674;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_3629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_3629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3655 = f__2306__auto__.call(null);
(statearr_3655[(6)] = c__2305__auto___3657);

return statearr_3655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__3677 = arguments.length;
switch (G__3677) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___3731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3709){
var state_val_3710 = (state_3709[(1)]);
if((state_val_3710 === (7))){
var inst_3689 = (state_3709[(7)]);
var inst_3688 = (state_3709[(8)]);
var inst_3688__$1 = (state_3709[(2)]);
var inst_3689__$1 = cljs.core.nth.call(null,inst_3688__$1,(0),null);
var inst_3690 = cljs.core.nth.call(null,inst_3688__$1,(1),null);
var inst_3691 = (inst_3689__$1 == null);
var state_3709__$1 = (function (){var statearr_3711 = state_3709;
(statearr_3711[(9)] = inst_3690);

(statearr_3711[(7)] = inst_3689__$1);

(statearr_3711[(8)] = inst_3688__$1);

return statearr_3711;
})();
if(cljs.core.truth_(inst_3691)){
var statearr_3712_3732 = state_3709__$1;
(statearr_3712_3732[(1)] = (8));

} else {
var statearr_3713_3733 = state_3709__$1;
(statearr_3713_3733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (1))){
var inst_3678 = cljs.core.vec.call(null,chs);
var inst_3679 = inst_3678;
var state_3709__$1 = (function (){var statearr_3714 = state_3709;
(statearr_3714[(10)] = inst_3679);

return statearr_3714;
})();
var statearr_3715_3734 = state_3709__$1;
(statearr_3715_3734[(2)] = null);

(statearr_3715_3734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (4))){
var inst_3679 = (state_3709[(10)]);
var state_3709__$1 = state_3709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_3709__$1,(7),inst_3679);
} else {
if((state_val_3710 === (6))){
var inst_3705 = (state_3709[(2)]);
var state_3709__$1 = state_3709;
var statearr_3716_3735 = state_3709__$1;
(statearr_3716_3735[(2)] = inst_3705);

(statearr_3716_3735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (3))){
var inst_3707 = (state_3709[(2)]);
var state_3709__$1 = state_3709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3709__$1,inst_3707);
} else {
if((state_val_3710 === (2))){
var inst_3679 = (state_3709[(10)]);
var inst_3681 = cljs.core.count.call(null,inst_3679);
var inst_3682 = (inst_3681 > (0));
var state_3709__$1 = state_3709;
if(cljs.core.truth_(inst_3682)){
var statearr_3718_3736 = state_3709__$1;
(statearr_3718_3736[(1)] = (4));

} else {
var statearr_3719_3737 = state_3709__$1;
(statearr_3719_3737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (11))){
var inst_3679 = (state_3709[(10)]);
var inst_3698 = (state_3709[(2)]);
var tmp3717 = inst_3679;
var inst_3679__$1 = tmp3717;
var state_3709__$1 = (function (){var statearr_3720 = state_3709;
(statearr_3720[(10)] = inst_3679__$1);

(statearr_3720[(11)] = inst_3698);

return statearr_3720;
})();
var statearr_3721_3738 = state_3709__$1;
(statearr_3721_3738[(2)] = null);

(statearr_3721_3738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (9))){
var inst_3689 = (state_3709[(7)]);
var state_3709__$1 = state_3709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3709__$1,(11),out,inst_3689);
} else {
if((state_val_3710 === (5))){
var inst_3703 = cljs.core.async.close_BANG_.call(null,out);
var state_3709__$1 = state_3709;
var statearr_3722_3739 = state_3709__$1;
(statearr_3722_3739[(2)] = inst_3703);

(statearr_3722_3739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (10))){
var inst_3701 = (state_3709[(2)]);
var state_3709__$1 = state_3709;
var statearr_3723_3740 = state_3709__$1;
(statearr_3723_3740[(2)] = inst_3701);

(statearr_3723_3740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3710 === (8))){
var inst_3679 = (state_3709[(10)]);
var inst_3690 = (state_3709[(9)]);
var inst_3689 = (state_3709[(7)]);
var inst_3688 = (state_3709[(8)]);
var inst_3693 = (function (){var cs = inst_3679;
var vec__3684 = inst_3688;
var v = inst_3689;
var c = inst_3690;
return (function (p1__3675_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__3675_SHARP_);
});
})();
var inst_3694 = cljs.core.filterv.call(null,inst_3693,inst_3679);
var inst_3679__$1 = inst_3694;
var state_3709__$1 = (function (){var statearr_3724 = state_3709;
(statearr_3724[(10)] = inst_3679__$1);

return statearr_3724;
})();
var statearr_3725_3741 = state_3709__$1;
(statearr_3725_3741[(2)] = null);

(statearr_3725_3741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_3726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3726[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_3726[(1)] = (1));

return statearr_3726;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_3709){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3727){if((e3727 instanceof Object)){
var ex__2214__auto__ = e3727;
var statearr_3728_3742 = state_3709;
(statearr_3728_3742[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3743 = state_3709;
state_3709 = G__3743;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_3709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_3709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3729 = f__2306__auto__.call(null);
(statearr_3729[(6)] = c__2305__auto___3731);

return statearr_3729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__3745 = arguments.length;
switch (G__3745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___3790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3769){
var state_val_3770 = (state_3769[(1)]);
if((state_val_3770 === (7))){
var inst_3751 = (state_3769[(7)]);
var inst_3751__$1 = (state_3769[(2)]);
var inst_3752 = (inst_3751__$1 == null);
var inst_3753 = cljs.core.not.call(null,inst_3752);
var state_3769__$1 = (function (){var statearr_3771 = state_3769;
(statearr_3771[(7)] = inst_3751__$1);

return statearr_3771;
})();
if(inst_3753){
var statearr_3772_3791 = state_3769__$1;
(statearr_3772_3791[(1)] = (8));

} else {
var statearr_3773_3792 = state_3769__$1;
(statearr_3773_3792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (1))){
var inst_3746 = (0);
var state_3769__$1 = (function (){var statearr_3774 = state_3769;
(statearr_3774[(8)] = inst_3746);

return statearr_3774;
})();
var statearr_3775_3793 = state_3769__$1;
(statearr_3775_3793[(2)] = null);

(statearr_3775_3793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (4))){
var state_3769__$1 = state_3769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3769__$1,(7),ch);
} else {
if((state_val_3770 === (6))){
var inst_3764 = (state_3769[(2)]);
var state_3769__$1 = state_3769;
var statearr_3776_3794 = state_3769__$1;
(statearr_3776_3794[(2)] = inst_3764);

(statearr_3776_3794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (3))){
var inst_3766 = (state_3769[(2)]);
var inst_3767 = cljs.core.async.close_BANG_.call(null,out);
var state_3769__$1 = (function (){var statearr_3777 = state_3769;
(statearr_3777[(9)] = inst_3766);

return statearr_3777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3769__$1,inst_3767);
} else {
if((state_val_3770 === (2))){
var inst_3746 = (state_3769[(8)]);
var inst_3748 = (inst_3746 < n);
var state_3769__$1 = state_3769;
if(cljs.core.truth_(inst_3748)){
var statearr_3778_3795 = state_3769__$1;
(statearr_3778_3795[(1)] = (4));

} else {
var statearr_3779_3796 = state_3769__$1;
(statearr_3779_3796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (11))){
var inst_3746 = (state_3769[(8)]);
var inst_3756 = (state_3769[(2)]);
var inst_3757 = (inst_3746 + (1));
var inst_3746__$1 = inst_3757;
var state_3769__$1 = (function (){var statearr_3780 = state_3769;
(statearr_3780[(10)] = inst_3756);

(statearr_3780[(8)] = inst_3746__$1);

return statearr_3780;
})();
var statearr_3781_3797 = state_3769__$1;
(statearr_3781_3797[(2)] = null);

(statearr_3781_3797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (9))){
var state_3769__$1 = state_3769;
var statearr_3782_3798 = state_3769__$1;
(statearr_3782_3798[(2)] = null);

(statearr_3782_3798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (5))){
var state_3769__$1 = state_3769;
var statearr_3783_3799 = state_3769__$1;
(statearr_3783_3799[(2)] = null);

(statearr_3783_3799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (10))){
var inst_3761 = (state_3769[(2)]);
var state_3769__$1 = state_3769;
var statearr_3784_3800 = state_3769__$1;
(statearr_3784_3800[(2)] = inst_3761);

(statearr_3784_3800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3770 === (8))){
var inst_3751 = (state_3769[(7)]);
var state_3769__$1 = state_3769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3769__$1,(11),out,inst_3751);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_3785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3785[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_3785[(1)] = (1));

return statearr_3785;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_3769){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3786){if((e3786 instanceof Object)){
var ex__2214__auto__ = e3786;
var statearr_3787_3801 = state_3769;
(statearr_3787_3801[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3802 = state_3769;
state_3769 = G__3802;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_3769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_3769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3788 = f__2306__auto__.call(null);
(statearr_3788[(6)] = c__2305__auto___3790);

return statearr_3788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3804 = (function (f,ch,meta3805){
this.f = f;
this.ch = ch;
this.meta3805 = meta3805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3806,meta3805__$1){
var self__ = this;
var _3806__$1 = this;
return (new cljs.core.async.t_cljs$core$async3804(self__.f,self__.ch,meta3805__$1));
}));

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3806){
var self__ = this;
var _3806__$1 = this;
return self__.meta3805;
}));

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3807 = (function (f,ch,meta3805,_,fn1,meta3808){
this.f = f;
this.ch = ch;
this.meta3805 = meta3805;
this._ = _;
this.fn1 = fn1;
this.meta3808 = meta3808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3809,meta3808__$1){
var self__ = this;
var _3809__$1 = this;
return (new cljs.core.async.t_cljs$core$async3807(self__.f,self__.ch,self__.meta3805,self__._,self__.fn1,meta3808__$1));
}));

(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3809){
var self__ = this;
var _3809__$1 = this;
return self__.meta3808;
}));

(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async3807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__3803_SHARP_){
return f1.call(null,(((p1__3803_SHARP_ == null))?null:self__.f.call(null,p1__3803_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async3807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3805","meta3805",1488500446,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async3804","cljs.core.async/t_cljs$core$async3804",-441319900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta3808","meta3808",-739506078,null)], null);
}));

(cljs.core.async.t_cljs$core$async3807.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3807");

(cljs.core.async.t_cljs$core$async3807.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3807");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3807.
 */
cljs.core.async.__GT_t_cljs$core$async3807 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3807(f__$1,ch__$1,meta3805__$1,___$2,fn1__$1,meta3808){
return (new cljs.core.async.t_cljs$core$async3807(f__$1,ch__$1,meta3805__$1,___$2,fn1__$1,meta3808));
});

}

return (new cljs.core.async.t_cljs$core$async3807(self__.f,self__.ch,self__.meta3805,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async3804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3805","meta3805",1488500446,null)], null);
}));

(cljs.core.async.t_cljs$core$async3804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3804");

(cljs.core.async.t_cljs$core$async3804.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3804.
 */
cljs.core.async.__GT_t_cljs$core$async3804 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async3804(f__$1,ch__$1,meta3805){
return (new cljs.core.async.t_cljs$core$async3804(f__$1,ch__$1,meta3805));
});

}

return (new cljs.core.async.t_cljs$core$async3804(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3810 = (function (f,ch,meta3811){
this.f = f;
this.ch = ch;
this.meta3811 = meta3811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3812,meta3811__$1){
var self__ = this;
var _3812__$1 = this;
return (new cljs.core.async.t_cljs$core$async3810(self__.f,self__.ch,meta3811__$1));
}));

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3812){
var self__ = this;
var _3812__$1 = this;
return self__.meta3811;
}));

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async3810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3811","meta3811",1594513909,null)], null);
}));

(cljs.core.async.t_cljs$core$async3810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3810");

(cljs.core.async.t_cljs$core$async3810.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3810.
 */
cljs.core.async.__GT_t_cljs$core$async3810 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async3810(f__$1,ch__$1,meta3811){
return (new cljs.core.async.t_cljs$core$async3810(f__$1,ch__$1,meta3811));
});

}

return (new cljs.core.async.t_cljs$core$async3810(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3813 = (function (p,ch,meta3814){
this.p = p;
this.ch = ch;
this.meta3814 = meta3814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3815,meta3814__$1){
var self__ = this;
var _3815__$1 = this;
return (new cljs.core.async.t_cljs$core$async3813(self__.p,self__.ch,meta3814__$1));
}));

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3815){
var self__ = this;
var _3815__$1 = this;
return self__.meta3814;
}));

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async3813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async3813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta3814","meta3814",1752448063,null)], null);
}));

(cljs.core.async.t_cljs$core$async3813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async3813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3813");

(cljs.core.async.t_cljs$core$async3813.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async3813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3813.
 */
cljs.core.async.__GT_t_cljs$core$async3813 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async3813(p__$1,ch__$1,meta3814){
return (new cljs.core.async.t_cljs$core$async3813(p__$1,ch__$1,meta3814));
});

}

return (new cljs.core.async.t_cljs$core$async3813(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__3817 = arguments.length;
switch (G__3817) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___3857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3838){
var state_val_3839 = (state_3838[(1)]);
if((state_val_3839 === (7))){
var inst_3834 = (state_3838[(2)]);
var state_3838__$1 = state_3838;
var statearr_3840_3858 = state_3838__$1;
(statearr_3840_3858[(2)] = inst_3834);

(statearr_3840_3858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (1))){
var state_3838__$1 = state_3838;
var statearr_3841_3859 = state_3838__$1;
(statearr_3841_3859[(2)] = null);

(statearr_3841_3859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (4))){
var inst_3820 = (state_3838[(7)]);
var inst_3820__$1 = (state_3838[(2)]);
var inst_3821 = (inst_3820__$1 == null);
var state_3838__$1 = (function (){var statearr_3842 = state_3838;
(statearr_3842[(7)] = inst_3820__$1);

return statearr_3842;
})();
if(cljs.core.truth_(inst_3821)){
var statearr_3843_3860 = state_3838__$1;
(statearr_3843_3860[(1)] = (5));

} else {
var statearr_3844_3861 = state_3838__$1;
(statearr_3844_3861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (6))){
var inst_3820 = (state_3838[(7)]);
var inst_3825 = p.call(null,inst_3820);
var state_3838__$1 = state_3838;
if(cljs.core.truth_(inst_3825)){
var statearr_3845_3862 = state_3838__$1;
(statearr_3845_3862[(1)] = (8));

} else {
var statearr_3846_3863 = state_3838__$1;
(statearr_3846_3863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (3))){
var inst_3836 = (state_3838[(2)]);
var state_3838__$1 = state_3838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3838__$1,inst_3836);
} else {
if((state_val_3839 === (2))){
var state_3838__$1 = state_3838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3838__$1,(4),ch);
} else {
if((state_val_3839 === (11))){
var inst_3828 = (state_3838[(2)]);
var state_3838__$1 = state_3838;
var statearr_3847_3864 = state_3838__$1;
(statearr_3847_3864[(2)] = inst_3828);

(statearr_3847_3864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (9))){
var state_3838__$1 = state_3838;
var statearr_3848_3865 = state_3838__$1;
(statearr_3848_3865[(2)] = null);

(statearr_3848_3865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (5))){
var inst_3823 = cljs.core.async.close_BANG_.call(null,out);
var state_3838__$1 = state_3838;
var statearr_3849_3866 = state_3838__$1;
(statearr_3849_3866[(2)] = inst_3823);

(statearr_3849_3866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (10))){
var inst_3831 = (state_3838[(2)]);
var state_3838__$1 = (function (){var statearr_3850 = state_3838;
(statearr_3850[(8)] = inst_3831);

return statearr_3850;
})();
var statearr_3851_3867 = state_3838__$1;
(statearr_3851_3867[(2)] = null);

(statearr_3851_3867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3839 === (8))){
var inst_3820 = (state_3838[(7)]);
var state_3838__$1 = state_3838;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3838__$1,(11),out,inst_3820);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_3852 = [null,null,null,null,null,null,null,null,null];
(statearr_3852[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_3852[(1)] = (1));

return statearr_3852;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_3838){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3853){if((e3853 instanceof Object)){
var ex__2214__auto__ = e3853;
var statearr_3854_3868 = state_3838;
(statearr_3854_3868[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3869 = state_3838;
state_3838 = G__3869;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_3838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_3838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3855 = f__2306__auto__.call(null);
(statearr_3855[(6)] = c__2305__auto___3857);

return statearr_3855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__3871 = arguments.length;
switch (G__3871) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_3934){
var state_val_3935 = (state_3934[(1)]);
if((state_val_3935 === (7))){
var inst_3930 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3936_3974 = state_3934__$1;
(statearr_3936_3974[(2)] = inst_3930);

(statearr_3936_3974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (20))){
var inst_3900 = (state_3934[(7)]);
var inst_3911 = (state_3934[(2)]);
var inst_3912 = cljs.core.next.call(null,inst_3900);
var inst_3886 = inst_3912;
var inst_3887 = null;
var inst_3888 = (0);
var inst_3889 = (0);
var state_3934__$1 = (function (){var statearr_3937 = state_3934;
(statearr_3937[(8)] = inst_3887);

(statearr_3937[(9)] = inst_3911);

(statearr_3937[(10)] = inst_3886);

(statearr_3937[(11)] = inst_3889);

(statearr_3937[(12)] = inst_3888);

return statearr_3937;
})();
var statearr_3938_3975 = state_3934__$1;
(statearr_3938_3975[(2)] = null);

(statearr_3938_3975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (1))){
var state_3934__$1 = state_3934;
var statearr_3939_3976 = state_3934__$1;
(statearr_3939_3976[(2)] = null);

(statearr_3939_3976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (4))){
var inst_3875 = (state_3934[(13)]);
var inst_3875__$1 = (state_3934[(2)]);
var inst_3876 = (inst_3875__$1 == null);
var state_3934__$1 = (function (){var statearr_3940 = state_3934;
(statearr_3940[(13)] = inst_3875__$1);

return statearr_3940;
})();
if(cljs.core.truth_(inst_3876)){
var statearr_3941_3977 = state_3934__$1;
(statearr_3941_3977[(1)] = (5));

} else {
var statearr_3942_3978 = state_3934__$1;
(statearr_3942_3978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (15))){
var state_3934__$1 = state_3934;
var statearr_3946_3979 = state_3934__$1;
(statearr_3946_3979[(2)] = null);

(statearr_3946_3979[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (21))){
var state_3934__$1 = state_3934;
var statearr_3947_3980 = state_3934__$1;
(statearr_3947_3980[(2)] = null);

(statearr_3947_3980[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (13))){
var inst_3887 = (state_3934[(8)]);
var inst_3886 = (state_3934[(10)]);
var inst_3889 = (state_3934[(11)]);
var inst_3888 = (state_3934[(12)]);
var inst_3896 = (state_3934[(2)]);
var inst_3897 = (inst_3889 + (1));
var tmp3943 = inst_3887;
var tmp3944 = inst_3886;
var tmp3945 = inst_3888;
var inst_3886__$1 = tmp3944;
var inst_3887__$1 = tmp3943;
var inst_3888__$1 = tmp3945;
var inst_3889__$1 = inst_3897;
var state_3934__$1 = (function (){var statearr_3948 = state_3934;
(statearr_3948[(14)] = inst_3896);

(statearr_3948[(8)] = inst_3887__$1);

(statearr_3948[(10)] = inst_3886__$1);

(statearr_3948[(11)] = inst_3889__$1);

(statearr_3948[(12)] = inst_3888__$1);

return statearr_3948;
})();
var statearr_3949_3981 = state_3934__$1;
(statearr_3949_3981[(2)] = null);

(statearr_3949_3981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (22))){
var state_3934__$1 = state_3934;
var statearr_3950_3982 = state_3934__$1;
(statearr_3950_3982[(2)] = null);

(statearr_3950_3982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (6))){
var inst_3875 = (state_3934[(13)]);
var inst_3884 = f.call(null,inst_3875);
var inst_3885 = cljs.core.seq.call(null,inst_3884);
var inst_3886 = inst_3885;
var inst_3887 = null;
var inst_3888 = (0);
var inst_3889 = (0);
var state_3934__$1 = (function (){var statearr_3951 = state_3934;
(statearr_3951[(8)] = inst_3887);

(statearr_3951[(10)] = inst_3886);

(statearr_3951[(11)] = inst_3889);

(statearr_3951[(12)] = inst_3888);

return statearr_3951;
})();
var statearr_3952_3983 = state_3934__$1;
(statearr_3952_3983[(2)] = null);

(statearr_3952_3983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (17))){
var inst_3900 = (state_3934[(7)]);
var inst_3904 = cljs.core.chunk_first.call(null,inst_3900);
var inst_3905 = cljs.core.chunk_rest.call(null,inst_3900);
var inst_3906 = cljs.core.count.call(null,inst_3904);
var inst_3886 = inst_3905;
var inst_3887 = inst_3904;
var inst_3888 = inst_3906;
var inst_3889 = (0);
var state_3934__$1 = (function (){var statearr_3953 = state_3934;
(statearr_3953[(8)] = inst_3887);

(statearr_3953[(10)] = inst_3886);

(statearr_3953[(11)] = inst_3889);

(statearr_3953[(12)] = inst_3888);

return statearr_3953;
})();
var statearr_3954_3984 = state_3934__$1;
(statearr_3954_3984[(2)] = null);

(statearr_3954_3984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (3))){
var inst_3932 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3934__$1,inst_3932);
} else {
if((state_val_3935 === (12))){
var inst_3920 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3955_3985 = state_3934__$1;
(statearr_3955_3985[(2)] = inst_3920);

(statearr_3955_3985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (2))){
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3934__$1,(4),in$);
} else {
if((state_val_3935 === (23))){
var inst_3928 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3956_3986 = state_3934__$1;
(statearr_3956_3986[(2)] = inst_3928);

(statearr_3956_3986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (19))){
var inst_3915 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3957_3987 = state_3934__$1;
(statearr_3957_3987[(2)] = inst_3915);

(statearr_3957_3987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (11))){
var inst_3900 = (state_3934[(7)]);
var inst_3886 = (state_3934[(10)]);
var inst_3900__$1 = cljs.core.seq.call(null,inst_3886);
var state_3934__$1 = (function (){var statearr_3958 = state_3934;
(statearr_3958[(7)] = inst_3900__$1);

return statearr_3958;
})();
if(inst_3900__$1){
var statearr_3959_3988 = state_3934__$1;
(statearr_3959_3988[(1)] = (14));

} else {
var statearr_3960_3989 = state_3934__$1;
(statearr_3960_3989[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (9))){
var inst_3922 = (state_3934[(2)]);
var inst_3923 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_3934__$1 = (function (){var statearr_3961 = state_3934;
(statearr_3961[(15)] = inst_3922);

return statearr_3961;
})();
if(cljs.core.truth_(inst_3923)){
var statearr_3962_3990 = state_3934__$1;
(statearr_3962_3990[(1)] = (21));

} else {
var statearr_3963_3991 = state_3934__$1;
(statearr_3963_3991[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (5))){
var inst_3878 = cljs.core.async.close_BANG_.call(null,out);
var state_3934__$1 = state_3934;
var statearr_3964_3992 = state_3934__$1;
(statearr_3964_3992[(2)] = inst_3878);

(statearr_3964_3992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (14))){
var inst_3900 = (state_3934[(7)]);
var inst_3902 = cljs.core.chunked_seq_QMARK_.call(null,inst_3900);
var state_3934__$1 = state_3934;
if(inst_3902){
var statearr_3965_3993 = state_3934__$1;
(statearr_3965_3993[(1)] = (17));

} else {
var statearr_3966_3994 = state_3934__$1;
(statearr_3966_3994[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (16))){
var inst_3918 = (state_3934[(2)]);
var state_3934__$1 = state_3934;
var statearr_3967_3995 = state_3934__$1;
(statearr_3967_3995[(2)] = inst_3918);

(statearr_3967_3995[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3935 === (10))){
var inst_3887 = (state_3934[(8)]);
var inst_3889 = (state_3934[(11)]);
var inst_3894 = cljs.core._nth.call(null,inst_3887,inst_3889);
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3934__$1,(13),out,inst_3894);
} else {
if((state_val_3935 === (18))){
var inst_3900 = (state_3934[(7)]);
var inst_3909 = cljs.core.first.call(null,inst_3900);
var state_3934__$1 = state_3934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3934__$1,(20),out,inst_3909);
} else {
if((state_val_3935 === (8))){
var inst_3889 = (state_3934[(11)]);
var inst_3888 = (state_3934[(12)]);
var inst_3891 = (inst_3889 < inst_3888);
var inst_3892 = inst_3891;
var state_3934__$1 = state_3934;
if(cljs.core.truth_(inst_3892)){
var statearr_3968_3996 = state_3934__$1;
(statearr_3968_3996[(1)] = (10));

} else {
var statearr_3969_3997 = state_3934__$1;
(statearr_3969_3997[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____0 = (function (){
var statearr_3970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__);

(statearr_3970[(1)] = (1));

return statearr_3970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____1 = (function (state_3934){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_3934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e3971){if((e3971 instanceof Object)){
var ex__2214__auto__ = e3971;
var statearr_3972_3998 = state_3934;
(statearr_3972_3998[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3999 = state_3934;
state_3934 = G__3999;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__ = function(state_3934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____1.call(this,state_3934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2211__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_3973 = f__2306__auto__.call(null);
(statearr_3973[(6)] = c__2305__auto__);

return statearr_3973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));

return c__2305__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4001 = arguments.length;
switch (G__4001) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4004 = arguments.length;
switch (G__4004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4007 = arguments.length;
switch (G__4007) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___4054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_4031){
var state_val_4032 = (state_4031[(1)]);
if((state_val_4032 === (7))){
var inst_4026 = (state_4031[(2)]);
var state_4031__$1 = state_4031;
var statearr_4033_4055 = state_4031__$1;
(statearr_4033_4055[(2)] = inst_4026);

(statearr_4033_4055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (1))){
var inst_4008 = null;
var state_4031__$1 = (function (){var statearr_4034 = state_4031;
(statearr_4034[(7)] = inst_4008);

return statearr_4034;
})();
var statearr_4035_4056 = state_4031__$1;
(statearr_4035_4056[(2)] = null);

(statearr_4035_4056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (4))){
var inst_4011 = (state_4031[(8)]);
var inst_4011__$1 = (state_4031[(2)]);
var inst_4012 = (inst_4011__$1 == null);
var inst_4013 = cljs.core.not.call(null,inst_4012);
var state_4031__$1 = (function (){var statearr_4036 = state_4031;
(statearr_4036[(8)] = inst_4011__$1);

return statearr_4036;
})();
if(inst_4013){
var statearr_4037_4057 = state_4031__$1;
(statearr_4037_4057[(1)] = (5));

} else {
var statearr_4038_4058 = state_4031__$1;
(statearr_4038_4058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (6))){
var state_4031__$1 = state_4031;
var statearr_4039_4059 = state_4031__$1;
(statearr_4039_4059[(2)] = null);

(statearr_4039_4059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (3))){
var inst_4028 = (state_4031[(2)]);
var inst_4029 = cljs.core.async.close_BANG_.call(null,out);
var state_4031__$1 = (function (){var statearr_4040 = state_4031;
(statearr_4040[(9)] = inst_4028);

return statearr_4040;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4031__$1,inst_4029);
} else {
if((state_val_4032 === (2))){
var state_4031__$1 = state_4031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4031__$1,(4),ch);
} else {
if((state_val_4032 === (11))){
var inst_4011 = (state_4031[(8)]);
var inst_4020 = (state_4031[(2)]);
var inst_4008 = inst_4011;
var state_4031__$1 = (function (){var statearr_4041 = state_4031;
(statearr_4041[(10)] = inst_4020);

(statearr_4041[(7)] = inst_4008);

return statearr_4041;
})();
var statearr_4042_4060 = state_4031__$1;
(statearr_4042_4060[(2)] = null);

(statearr_4042_4060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (9))){
var inst_4011 = (state_4031[(8)]);
var state_4031__$1 = state_4031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4031__$1,(11),out,inst_4011);
} else {
if((state_val_4032 === (5))){
var inst_4011 = (state_4031[(8)]);
var inst_4008 = (state_4031[(7)]);
var inst_4015 = cljs.core._EQ_.call(null,inst_4011,inst_4008);
var state_4031__$1 = state_4031;
if(inst_4015){
var statearr_4044_4061 = state_4031__$1;
(statearr_4044_4061[(1)] = (8));

} else {
var statearr_4045_4062 = state_4031__$1;
(statearr_4045_4062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (10))){
var inst_4023 = (state_4031[(2)]);
var state_4031__$1 = state_4031;
var statearr_4046_4063 = state_4031__$1;
(statearr_4046_4063[(2)] = inst_4023);

(statearr_4046_4063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4032 === (8))){
var inst_4008 = (state_4031[(7)]);
var tmp4043 = inst_4008;
var inst_4008__$1 = tmp4043;
var state_4031__$1 = (function (){var statearr_4047 = state_4031;
(statearr_4047[(7)] = inst_4008__$1);

return statearr_4047;
})();
var statearr_4048_4064 = state_4031__$1;
(statearr_4048_4064[(2)] = null);

(statearr_4048_4064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_4049 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4049[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_4049[(1)] = (1));

return statearr_4049;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_4031){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_4031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e4050){if((e4050 instanceof Object)){
var ex__2214__auto__ = e4050;
var statearr_4051_4065 = state_4031;
(statearr_4051_4065[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4066 = state_4031;
state_4031 = G__4066;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_4031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_4031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_4052 = f__2306__auto__.call(null);
(statearr_4052[(6)] = c__2305__auto___4054);

return statearr_4052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4068 = arguments.length;
switch (G__4068) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___4134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_4106){
var state_val_4107 = (state_4106[(1)]);
if((state_val_4107 === (7))){
var inst_4102 = (state_4106[(2)]);
var state_4106__$1 = state_4106;
var statearr_4108_4135 = state_4106__$1;
(statearr_4108_4135[(2)] = inst_4102);

(statearr_4108_4135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (1))){
var inst_4069 = (new Array(n));
var inst_4070 = inst_4069;
var inst_4071 = (0);
var state_4106__$1 = (function (){var statearr_4109 = state_4106;
(statearr_4109[(7)] = inst_4071);

(statearr_4109[(8)] = inst_4070);

return statearr_4109;
})();
var statearr_4110_4136 = state_4106__$1;
(statearr_4110_4136[(2)] = null);

(statearr_4110_4136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (4))){
var inst_4074 = (state_4106[(9)]);
var inst_4074__$1 = (state_4106[(2)]);
var inst_4075 = (inst_4074__$1 == null);
var inst_4076 = cljs.core.not.call(null,inst_4075);
var state_4106__$1 = (function (){var statearr_4111 = state_4106;
(statearr_4111[(9)] = inst_4074__$1);

return statearr_4111;
})();
if(inst_4076){
var statearr_4112_4137 = state_4106__$1;
(statearr_4112_4137[(1)] = (5));

} else {
var statearr_4113_4138 = state_4106__$1;
(statearr_4113_4138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (15))){
var inst_4096 = (state_4106[(2)]);
var state_4106__$1 = state_4106;
var statearr_4114_4139 = state_4106__$1;
(statearr_4114_4139[(2)] = inst_4096);

(statearr_4114_4139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (13))){
var state_4106__$1 = state_4106;
var statearr_4115_4140 = state_4106__$1;
(statearr_4115_4140[(2)] = null);

(statearr_4115_4140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (6))){
var inst_4071 = (state_4106[(7)]);
var inst_4092 = (inst_4071 > (0));
var state_4106__$1 = state_4106;
if(cljs.core.truth_(inst_4092)){
var statearr_4116_4141 = state_4106__$1;
(statearr_4116_4141[(1)] = (12));

} else {
var statearr_4117_4142 = state_4106__$1;
(statearr_4117_4142[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (3))){
var inst_4104 = (state_4106[(2)]);
var state_4106__$1 = state_4106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4106__$1,inst_4104);
} else {
if((state_val_4107 === (12))){
var inst_4070 = (state_4106[(8)]);
var inst_4094 = cljs.core.vec.call(null,inst_4070);
var state_4106__$1 = state_4106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4106__$1,(15),out,inst_4094);
} else {
if((state_val_4107 === (2))){
var state_4106__$1 = state_4106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4106__$1,(4),ch);
} else {
if((state_val_4107 === (11))){
var inst_4086 = (state_4106[(2)]);
var inst_4087 = (new Array(n));
var inst_4070 = inst_4087;
var inst_4071 = (0);
var state_4106__$1 = (function (){var statearr_4118 = state_4106;
(statearr_4118[(7)] = inst_4071);

(statearr_4118[(10)] = inst_4086);

(statearr_4118[(8)] = inst_4070);

return statearr_4118;
})();
var statearr_4119_4143 = state_4106__$1;
(statearr_4119_4143[(2)] = null);

(statearr_4119_4143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (9))){
var inst_4070 = (state_4106[(8)]);
var inst_4084 = cljs.core.vec.call(null,inst_4070);
var state_4106__$1 = state_4106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4106__$1,(11),out,inst_4084);
} else {
if((state_val_4107 === (5))){
var inst_4071 = (state_4106[(7)]);
var inst_4074 = (state_4106[(9)]);
var inst_4070 = (state_4106[(8)]);
var inst_4079 = (state_4106[(11)]);
var inst_4078 = (inst_4070[inst_4071] = inst_4074);
var inst_4079__$1 = (inst_4071 + (1));
var inst_4080 = (inst_4079__$1 < n);
var state_4106__$1 = (function (){var statearr_4120 = state_4106;
(statearr_4120[(12)] = inst_4078);

(statearr_4120[(11)] = inst_4079__$1);

return statearr_4120;
})();
if(cljs.core.truth_(inst_4080)){
var statearr_4121_4144 = state_4106__$1;
(statearr_4121_4144[(1)] = (8));

} else {
var statearr_4122_4145 = state_4106__$1;
(statearr_4122_4145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (14))){
var inst_4099 = (state_4106[(2)]);
var inst_4100 = cljs.core.async.close_BANG_.call(null,out);
var state_4106__$1 = (function (){var statearr_4124 = state_4106;
(statearr_4124[(13)] = inst_4099);

return statearr_4124;
})();
var statearr_4125_4146 = state_4106__$1;
(statearr_4125_4146[(2)] = inst_4100);

(statearr_4125_4146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (10))){
var inst_4090 = (state_4106[(2)]);
var state_4106__$1 = state_4106;
var statearr_4126_4147 = state_4106__$1;
(statearr_4126_4147[(2)] = inst_4090);

(statearr_4126_4147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4107 === (8))){
var inst_4070 = (state_4106[(8)]);
var inst_4079 = (state_4106[(11)]);
var tmp4123 = inst_4070;
var inst_4070__$1 = tmp4123;
var inst_4071 = inst_4079;
var state_4106__$1 = (function (){var statearr_4127 = state_4106;
(statearr_4127[(7)] = inst_4071);

(statearr_4127[(8)] = inst_4070__$1);

return statearr_4127;
})();
var statearr_4128_4148 = state_4106__$1;
(statearr_4128_4148[(2)] = null);

(statearr_4128_4148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_4129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4129[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_4129[(1)] = (1));

return statearr_4129;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_4106){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_4106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e4130){if((e4130 instanceof Object)){
var ex__2214__auto__ = e4130;
var statearr_4131_4149 = state_4106;
(statearr_4131_4149[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4150 = state_4106;
state_4106 = G__4150;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_4106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_4106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_4132 = f__2306__auto__.call(null);
(statearr_4132[(6)] = c__2305__auto___4134);

return statearr_4132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4152 = arguments.length;
switch (G__4152) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2305__auto___4222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__2306__auto__ = (function (){var switch__2210__auto__ = (function (state_4194){
var state_val_4195 = (state_4194[(1)]);
if((state_val_4195 === (7))){
var inst_4190 = (state_4194[(2)]);
var state_4194__$1 = state_4194;
var statearr_4196_4223 = state_4194__$1;
(statearr_4196_4223[(2)] = inst_4190);

(statearr_4196_4223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (1))){
var inst_4153 = [];
var inst_4154 = inst_4153;
var inst_4155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4194__$1 = (function (){var statearr_4197 = state_4194;
(statearr_4197[(7)] = inst_4155);

(statearr_4197[(8)] = inst_4154);

return statearr_4197;
})();
var statearr_4198_4224 = state_4194__$1;
(statearr_4198_4224[(2)] = null);

(statearr_4198_4224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (4))){
var inst_4158 = (state_4194[(9)]);
var inst_4158__$1 = (state_4194[(2)]);
var inst_4159 = (inst_4158__$1 == null);
var inst_4160 = cljs.core.not.call(null,inst_4159);
var state_4194__$1 = (function (){var statearr_4199 = state_4194;
(statearr_4199[(9)] = inst_4158__$1);

return statearr_4199;
})();
if(inst_4160){
var statearr_4200_4225 = state_4194__$1;
(statearr_4200_4225[(1)] = (5));

} else {
var statearr_4201_4226 = state_4194__$1;
(statearr_4201_4226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (15))){
var inst_4184 = (state_4194[(2)]);
var state_4194__$1 = state_4194;
var statearr_4202_4227 = state_4194__$1;
(statearr_4202_4227[(2)] = inst_4184);

(statearr_4202_4227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (13))){
var state_4194__$1 = state_4194;
var statearr_4203_4228 = state_4194__$1;
(statearr_4203_4228[(2)] = null);

(statearr_4203_4228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (6))){
var inst_4154 = (state_4194[(8)]);
var inst_4179 = inst_4154.length;
var inst_4180 = (inst_4179 > (0));
var state_4194__$1 = state_4194;
if(cljs.core.truth_(inst_4180)){
var statearr_4204_4229 = state_4194__$1;
(statearr_4204_4229[(1)] = (12));

} else {
var statearr_4205_4230 = state_4194__$1;
(statearr_4205_4230[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (3))){
var inst_4192 = (state_4194[(2)]);
var state_4194__$1 = state_4194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4194__$1,inst_4192);
} else {
if((state_val_4195 === (12))){
var inst_4154 = (state_4194[(8)]);
var inst_4182 = cljs.core.vec.call(null,inst_4154);
var state_4194__$1 = state_4194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4194__$1,(15),out,inst_4182);
} else {
if((state_val_4195 === (2))){
var state_4194__$1 = state_4194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4194__$1,(4),ch);
} else {
if((state_val_4195 === (11))){
var inst_4158 = (state_4194[(9)]);
var inst_4162 = (state_4194[(10)]);
var inst_4172 = (state_4194[(2)]);
var inst_4173 = [];
var inst_4174 = inst_4173.push(inst_4158);
var inst_4154 = inst_4173;
var inst_4155 = inst_4162;
var state_4194__$1 = (function (){var statearr_4206 = state_4194;
(statearr_4206[(11)] = inst_4174);

(statearr_4206[(7)] = inst_4155);

(statearr_4206[(8)] = inst_4154);

(statearr_4206[(12)] = inst_4172);

return statearr_4206;
})();
var statearr_4207_4231 = state_4194__$1;
(statearr_4207_4231[(2)] = null);

(statearr_4207_4231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (9))){
var inst_4154 = (state_4194[(8)]);
var inst_4170 = cljs.core.vec.call(null,inst_4154);
var state_4194__$1 = state_4194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4194__$1,(11),out,inst_4170);
} else {
if((state_val_4195 === (5))){
var inst_4158 = (state_4194[(9)]);
var inst_4155 = (state_4194[(7)]);
var inst_4162 = (state_4194[(10)]);
var inst_4162__$1 = f.call(null,inst_4158);
var inst_4163 = cljs.core._EQ_.call(null,inst_4162__$1,inst_4155);
var inst_4164 = cljs.core.keyword_identical_QMARK_.call(null,inst_4155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4165 = ((inst_4163) || (inst_4164));
var state_4194__$1 = (function (){var statearr_4208 = state_4194;
(statearr_4208[(10)] = inst_4162__$1);

return statearr_4208;
})();
if(cljs.core.truth_(inst_4165)){
var statearr_4209_4232 = state_4194__$1;
(statearr_4209_4232[(1)] = (8));

} else {
var statearr_4210_4233 = state_4194__$1;
(statearr_4210_4233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (14))){
var inst_4187 = (state_4194[(2)]);
var inst_4188 = cljs.core.async.close_BANG_.call(null,out);
var state_4194__$1 = (function (){var statearr_4212 = state_4194;
(statearr_4212[(13)] = inst_4187);

return statearr_4212;
})();
var statearr_4213_4234 = state_4194__$1;
(statearr_4213_4234[(2)] = inst_4188);

(statearr_4213_4234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (10))){
var inst_4177 = (state_4194[(2)]);
var state_4194__$1 = state_4194;
var statearr_4214_4235 = state_4194__$1;
(statearr_4214_4235[(2)] = inst_4177);

(statearr_4214_4235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4195 === (8))){
var inst_4158 = (state_4194[(9)]);
var inst_4154 = (state_4194[(8)]);
var inst_4162 = (state_4194[(10)]);
var inst_4167 = inst_4154.push(inst_4158);
var tmp4211 = inst_4154;
var inst_4154__$1 = tmp4211;
var inst_4155 = inst_4162;
var state_4194__$1 = (function (){var statearr_4215 = state_4194;
(statearr_4215[(7)] = inst_4155);

(statearr_4215[(8)] = inst_4154__$1);

(statearr_4215[(14)] = inst_4167);

return statearr_4215;
})();
var statearr_4216_4236 = state_4194__$1;
(statearr_4216_4236[(2)] = null);

(statearr_4216_4236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__2211__auto__ = null;
var cljs$core$async$state_machine__2211__auto____0 = (function (){
var statearr_4217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4217[(0)] = cljs$core$async$state_machine__2211__auto__);

(statearr_4217[(1)] = (1));

return statearr_4217;
});
var cljs$core$async$state_machine__2211__auto____1 = (function (state_4194){
while(true){
var ret_value__2212__auto__ = (function (){try{while(true){
var result__2213__auto__ = switch__2210__auto__.call(null,state_4194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2213__auto__;
}
break;
}
}catch (e4218){if((e4218 instanceof Object)){
var ex__2214__auto__ = e4218;
var statearr_4219_4237 = state_4194;
(statearr_4219_4237[(5)] = ex__2214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4238 = state_4194;
state_4194 = G__4238;
continue;
} else {
return ret_value__2212__auto__;
}
break;
}
});
cljs$core$async$state_machine__2211__auto__ = function(state_4194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2211__auto____1.call(this,state_4194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2211__auto____0;
cljs$core$async$state_machine__2211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2211__auto____1;
return cljs$core$async$state_machine__2211__auto__;
})()
})();
var state__2307__auto__ = (function (){var statearr_4220 = f__2306__auto__.call(null);
(statearr_4220[(6)] = c__2305__auto___4222);

return statearr_4220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2307__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
