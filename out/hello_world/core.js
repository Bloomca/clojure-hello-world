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
if(typeof hello_world.core.t_hello_world$core19037 !== 'undefined'){
} else {

/**
* @constructor
*/
hello_world.core.t_hello_world$core19037 = (function (data,owner,meta19038){
this.data = data;
this.owner = owner;
this.meta19038 = meta19038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
hello_world.core.t_hello_world$core19037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19039,meta19038__$1){
var self__ = this;
var _19039__$1 = this;
return (new hello_world.core.t_hello_world$core19037(self__.data,self__.owner,meta19038__$1));
});

hello_world.core.t_hello_world$core19037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19039){
var self__ = this;
var _19039__$1 = this;
return self__.meta19038;
});

hello_world.core.t_hello_world$core19037.prototype.om$core$IRender$ = true;

hello_world.core.t_hello_world$core19037.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "container"},React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"className": "button", "onClick": ((function (___$1){
return (function (){
return hello_world.core.incrementCounter.call(null,self__.data);
});})(___$1))
},"Click me!"),React.DOM.span(null,new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

hello_world.core.t_hello_world$core19037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19038","meta19038",1316445289,null)], null);
});

hello_world.core.t_hello_world$core19037.cljs$lang$type = true;

hello_world.core.t_hello_world$core19037.cljs$lang$ctorStr = "hello-world.core/t_hello_world$core19037";

hello_world.core.t_hello_world$core19037.cljs$lang$ctorPrWriter = (function (this__17267__auto__,writer__17268__auto__,opt__17269__auto__){
return cljs.core._write.call(null,writer__17268__auto__,"hello-world.core/t_hello_world$core19037");
});

hello_world.core.__GT_t_hello_world$core19037 = (function hello_world$core$__GT_t_hello_world$core19037(data__$1,owner__$1,meta19038){
return (new hello_world.core.t_hello_world$core19037(data__$1,owner__$1,meta19038));
});

}

return (new hello_world.core.t_hello_world$core19037(data,owner,cljs.core.PersistentArrayMap.EMPTY));
}),hello_world.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
hello_world.core.on_js_reload = (function hello_world$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map