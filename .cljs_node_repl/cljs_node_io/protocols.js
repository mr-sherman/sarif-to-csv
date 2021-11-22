// Compiled by ClojureScript 1.10.758 {:target :nodejs}
goog.provide('cljs_node_io.protocols');
goog.require('cljs.core');

/**
 * Coerce between various 'resource-namish' things.
 * @interface
 */
cljs_node_io.protocols.Coercions = function(){};

var cljs_node_io$protocols$Coercions$as_file$dyn_4545 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.as_file[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.as_file["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Coercions.as-file",x);
}
}
});
/**
 * Coerce argument to a file.
 */
cljs_node_io.protocols.as_file = (function cljs_node_io$protocols$as_file(x){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$Coercions$as_file$arity$1 == null)))))){
return x.cljs_node_io$protocols$Coercions$as_file$arity$1(x);
} else {
return cljs_node_io$protocols$Coercions$as_file$dyn_4545.call(null,x);
}
});

var cljs_node_io$protocols$Coercions$as_url$dyn_4546 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.as_url[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.as_url["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"Coercions.as-url",x);
}
}
});
/**
 * Coerce argument to a URL.
 */
cljs_node_io.protocols.as_url = (function cljs_node_io$protocols$as_url(x){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$Coercions$as_url$arity$1 == null)))))){
return x.cljs_node_io$protocols$Coercions$as_url$arity$1(x);
} else {
return cljs_node_io$protocols$Coercions$as_url$dyn_4546.call(null,x);
}
});


/**
 * Factory functions that create various node I/O stream types, on top of anything that can
 * be unequivocally converted to the requested kind of stream.
 * Common options include
 *   :encoding  string name of encoding to use, e.g. "UTF-8".
 * Callers should generally prefer the higher level API provided by
 * reader, writer, input-stream, and output-stream.
 * @interface
 */
cljs_node_io.protocols.IOFactory = function(){};

var cljs_node_io$protocols$IOFactory$make_reader$dyn_4547 = (function (x,opts){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.make_reader[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x,opts);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.make_reader["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-reader",x);
}
}
});
/**
 * Defers back to the InputStream
 */
cljs_node_io.protocols.make_reader = (function cljs_node_io$protocols$make_reader(x,opts){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$IOFactory$make_reader$arity$2 == null)))))){
return x.cljs_node_io$protocols$IOFactory$make_reader$arity$2(x,opts);
} else {
return cljs_node_io$protocols$IOFactory$make_reader$dyn_4547.call(null,x,opts);
}
});

var cljs_node_io$protocols$IOFactory$make_writer$dyn_4548 = (function (x,opts){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.make_writer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x,opts);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.make_writer["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-writer",x);
}
}
});
/**
 * Defers back to the OutputStream
 */
cljs_node_io.protocols.make_writer = (function cljs_node_io$protocols$make_writer(x,opts){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$IOFactory$make_writer$arity$2 == null)))))){
return x.cljs_node_io$protocols$IOFactory$make_writer$arity$2(x,opts);
} else {
return cljs_node_io$protocols$IOFactory$make_writer$dyn_4548.call(null,x,opts);
}
});

var cljs_node_io$protocols$IOFactory$make_input_stream$dyn_4549 = (function (x,opts){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.make_input_stream[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x,opts);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.make_input_stream["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-input-stream",x);
}
}
});
/**
 * Creates a buffered InputStream. See also IOFactory docs.
 */
cljs_node_io.protocols.make_input_stream = (function cljs_node_io$protocols$make_input_stream(x,opts){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2 == null)))))){
return x.cljs_node_io$protocols$IOFactory$make_input_stream$arity$2(x,opts);
} else {
return cljs_node_io$protocols$IOFactory$make_input_stream$dyn_4549.call(null,x,opts);
}
});

var cljs_node_io$protocols$IOFactory$make_output_stream$dyn_4550 = (function (x,opts){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (cljs_node_io.protocols.make_output_stream[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,x,opts);
} else {
var m__4426__auto__ = (cljs_node_io.protocols.make_output_stream["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,x,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IOFactory.make-output-stream",x);
}
}
});
/**
 * Creates a buffered OutputStream. See also IOFactory docs.
 */
cljs_node_io.protocols.make_output_stream = (function cljs_node_io$protocols$make_output_stream(x,opts){
if((((!((x == null)))) && ((!((x.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2 == null)))))){
return x.cljs_node_io$protocols$IOFactory$make_output_stream$arity$2(x,opts);
} else {
return cljs_node_io$protocols$IOFactory$make_output_stream$dyn_4550.call(null,x,opts);
}
});


/**
 * A marker protocol indicating a reified File
 * @interface
 */
cljs_node_io.protocols.IFile = function(){};


/**
 * A marker protocol indicating an input-stream
 * @interface
 */
cljs_node_io.protocols.IInputStream = function(){};


/**
 * A marker protocol indicating an output-stream
 * @interface
 */
cljs_node_io.protocols.IOutputStream = function(){};


//# sourceMappingURL=protocols.js.map
