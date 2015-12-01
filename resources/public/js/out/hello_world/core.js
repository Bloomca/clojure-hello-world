// Compiled by ClojureScript 1.7.58 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof hello_world.core.app_state !== 'undefined'){
} else {
hello_world.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello CLJS Application",new cljs.core.Keyword(null,"counter","counter",804008177),(0),new cljs.core.Keyword(null,"contacts","contacts",333503174),cljs.core.PersistentVector.EMPTY], null));
}
hello_world.core.incrementCounter = (function hello_world$core$incrementCounter(data){
return om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
});
om.core.root.call(null,(function (data,owner){
if(typeof hello_world.core.t_hello_world$core12375 !== 'undefined'){
} else {

/**
* @constructor
*/
hello_world.core.t_hello_world$core12375 = (function (data,owner,meta12376){
this.data = data;
this.owner = owner;
this.meta12376 = meta12376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
hello_world.core.t_hello_world$core12375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12377,meta12376__$1){
var self__ = this;
var _12377__$1 = this;
return (new hello_world.core.t_hello_world$core12375(self__.data,self__.owner,meta12376__$1));
});

hello_world.core.t_hello_world$core12375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12377){
var self__ = this;
var _12377__$1 = this;
return self__.meta12376;
});

hello_world.core.t_hello_world$core12375.prototype.om$core$IRender$ = true;

hello_world.core.t_hello_world$core12375.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "container"},React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"className": "button", "onClick": ((function (___$1){
return (function (){
return hello_world.core.incrementCounter.call(null,self__.data);
});})(___$1))
},"Click me!"),React.DOM.span(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

hello_world.core.t_hello_world$core12375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta12376","meta12376",1678135227,null)], null);
});

hello_world.core.t_hello_world$core12375.cljs$lang$type = true;

hello_world.core.t_hello_world$core12375.cljs$lang$ctorStr = "hello-world.core/t_hello_world$core12375";

hello_world.core.t_hello_world$core12375.cljs$lang$ctorPrWriter = (function (this__5130__auto__,writer__5131__auto__,opt__5132__auto__){
return cljs.core._write.call(null,writer__5131__auto__,"hello-world.core/t_hello_world$core12375");
});

hello_world.core.__GT_t_hello_world$core12375 = (function hello_world$core$__GT_t_hello_world$core12375(data__$1,owner__$1,meta12376){
return (new hello_world.core.t_hello_world$core12375(data__$1,owner__$1,meta12376));
});

}

return (new hello_world.core.t_hello_world$core12375(data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),hello_world.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
hello_world.core.on_js_reload = (function hello_world$core$on_js_reload(){
return null;
});
