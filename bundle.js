!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){(function(){"use strict";var t=window.Document.prototype.createElement,e=window.Document.prototype.createElementNS,n=window.Document.prototype.importNode,o=window.Document.prototype.prepend,r=window.Document.prototype.append,i=window.DocumentFragment.prototype.prepend,a=window.DocumentFragment.prototype.append,l=window.Node.prototype.cloneNode,c=window.Node.prototype.appendChild,s=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,d=window.Node.prototype.replaceChild,f=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),p=window.Element.prototype.attachShadow,h=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),m=window.Element.prototype.getAttribute,g=window.Element.prototype.setAttribute,y=window.Element.prototype.removeAttribute,E=window.Element.prototype.getAttributeNS,v=window.Element.prototype.setAttributeNS,w=window.Element.prototype.removeAttributeNS,b=window.Element.prototype.insertAdjacentElement,_=window.Element.prototype.insertAdjacentHTML,C=window.Element.prototype.prepend,N=window.Element.prototype.append,T=window.Element.prototype.before,S=window.Element.prototype.after,D=window.Element.prototype.replaceWith,A=window.Element.prototype.remove,k=window.HTMLElement,L=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),O=window.HTMLElement.prototype.insertAdjacentElement,F=window.HTMLElement.prototype.insertAdjacentHTML,M=new Set;function j(t){var e=M.has(t);return t=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(t),!e&&t}"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach((function(t){return M.add(t)}));var x=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function H(t){var e=t.isConnected;if(void 0!==e)return e;if(x(t))return!0;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function P(t){var e=t.children;if(e)return Array.prototype.slice.call(e);for(e=[],t=t.firstChild;t;t=t.nextSibling)t.nodeType===Node.ELEMENT_NODE&&e.push(t);return e}function R(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function W(){var t=!(null==at||!at.noDocumentConstructionObserver),e=!(null==at||!at.shadyDomFastWalk);this.h=[],this.a=[],this.f=!1,this.shadyDomFastWalk=e,this.C=t}function B(t,e,n,o){var r=window.ShadyDom;if(t.shadyDomFastWalk&&r&&r.inUse){if(e.nodeType===Node.ELEMENT_NODE&&n(e),e.querySelectorAll)for(t=r.nativeMethods.querySelectorAll.call(e,"*"),e=0;e<t.length;e++)n(t[e])}else!function t(e,n,o){for(var r=e;r;){if(r.nodeType===Node.ELEMENT_NODE){var i=r;n(i);var a=i.localName;if("link"===a&&"import"===i.getAttribute("rel")){if(r=i.import,void 0===o&&(o=new Set),r instanceof Node&&!o.has(r))for(o.add(r),r=r.firstChild;r;r=r.nextSibling)t(r,n,o);r=R(e,i);continue}if("template"===a){r=R(e,i);continue}if(i=i.__CE_shadowRoot)for(i=i.firstChild;i;i=i.nextSibling)t(i,n,o)}r=r.firstChild?r.firstChild:R(e,r)}}(e,n,o)}function I(t,e){t.f&&B(t,e,(function(e){return z(t,e)}))}function z(t,e){if(t.f&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.h.length;n++)t.h[n](e);for(n=0;n<t.a.length;n++)t.a[n](e)}}function $(t,e){var n=[];for(B(t,e,(function(t){return n.push(t)})),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):q(t,o)}}function U(t,e){var n=[];for(B(t,e,(function(t){return n.push(t)})),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o)}}function V(t,e,n){var o=(n=void 0===n?{}:n).D,r=n.upgrade||function(e){return q(t,e)},i=[];for(B(t,e,(function(e){if(t.f&&z(t,e),"link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_registry=document.__CE_registry),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",(function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var i=new Set;o&&(o.forEach((function(t){return i.add(t)})),i.delete(n)),V(t,n,{D:i,upgrade:r})}}))}else i.push(e)}),o),e=0;e<i.length;e++)r(i[e])}function q(t,e){try{var n=e.ownerDocument,o=n.__CE_registry,r=o&&(n.defaultView||n.__CE_isImportDocument)?nt(o,e.localName):void 0;if(r&&void 0===e.__CE_state){r.constructionStack.push(e);try{try{if(new r.constructorFunction!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{r.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=r,r.attributeChangedCallback&&e.hasAttributes()){var i=r.observedAttributes;for(r=0;r<i.length;r++){var a=i[r],l=e.getAttribute(a);null!==l&&t.attributeChangedCallback(e,a,null,l,null)}}H(e)&&t.connectedCallback(e)}}catch(t){J(t)}}function X(n,o,r,i){var a=o.__CE_registry;if(a&&(null===i||"http://www.w3.org/1999/xhtml"===i)&&(a=nt(a,r)))try{var l=new a.constructorFunction;if(void 0===l.__CE_state||void 0===l.__CE_definition)throw Error("Failed to construct '"+r+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==l.namespaceURI)throw Error("Failed to construct '"+r+"': The constructed element's namespace must be the HTML namespace.");if(l.hasAttributes())throw Error("Failed to construct '"+r+"': The constructed element must not have any attributes.");if(null!==l.firstChild)throw Error("Failed to construct '"+r+"': The constructed element must not have any children.");if(null!==l.parentNode)throw Error("Failed to construct '"+r+"': The constructed element must not have a parent node.");if(l.ownerDocument!==o)throw Error("Failed to construct '"+r+"': The constructed element's owner document is incorrect.");if(l.localName!==r)throw Error("Failed to construct '"+r+"': The constructed element's local name is incorrect.");return l}catch(a){return J(a),o=null===i?t.call(o,r):e.call(o,i,r),Object.setPrototypeOf(o,HTMLUnknownElement.prototype),o.__CE_state=2,o.__CE_definition=void 0,z(n,o),o}return z(n,o=null===i?t.call(o,r):e.call(o,i,r)),o}function J(t){var e=t.message,n=t.sourceURL||t.fileName||"",o=t.line||t.lineNumber||0,r=t.column||t.columnNumber||0,i=void 0;void 0===ErrorEvent.prototype.initErrorEvent?i=new ErrorEvent("error",{cancelable:!0,message:e,filename:n,lineno:o,colno:r,error:t}):((i=document.createEvent("ErrorEvent")).initErrorEvent("error",!1,!0,e,n,o),i.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),void 0===i.error&&Object.defineProperty(i,"error",{configurable:!0,enumerable:!0,get:function(){return t}}),window.dispatchEvent(i),i.defaultPrevented||console.error(t)}function G(){var t=this;this.a=void 0,this.w=new Promise((function(e){t.g=e}))}function K(t){var e=document;this.g=void 0,this.b=t,this.a=e,V(this.b,this.a),"loading"===this.a.readyState&&(this.g=new MutationObserver(this.A.bind(this)),this.g.observe(this.a,{childList:!0,subtree:!0}))}function Q(t){t.g&&t.g.disconnect()}function Y(t){this.j=new Map,this.l=new Map,this.u=new Map,this.o=!1,this.s=new Map,this.i=function(t){return t()},this.c=!1,this.m=[],this.b=t,this.v=t.C?new K(t):void 0}function Z(t,e){if(!j(e))throw new SyntaxError("The element name '"+e+"' is not valid.");if(nt(t,e))throw Error("A custom element with name '"+e+"' has already been defined.");if(t.o)throw Error("A custom element is already being defined.")}function tt(t,e,n){var o;t.o=!0;try{var r=n.prototype;if(!(r instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var i=function(t){var e=r[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},a=i("connectedCallback"),l=i("disconnectedCallback"),c=i("adoptedCallback"),s=(o=i("attributeChangedCallback"))&&n.observedAttributes||[]}catch(t){throw t}finally{t.o=!1}return n={localName:e,constructorFunction:n,connectedCallback:a,disconnectedCallback:l,adoptedCallback:c,attributeChangedCallback:o,observedAttributes:s,constructionStack:[]},t.l.set(e,n),t.u.set(n.constructorFunction,n),n}function et(t){if(!1!==t.c){t.c=!1;for(var e=[],n=t.m,o=new Map,r=0;r<n.length;r++)o.set(n[r],[]);for(V(t.b,document,{upgrade:function(n){if(void 0===n.__CE_state){var r=n.localName,i=o.get(r);i?i.push(n):t.l.has(r)&&e.push(n)}}}),r=0;r<e.length;r++)q(t.b,e[r]);for(r=0;r<n.length;r++){for(var i=n[r],a=o.get(i),l=0;l<a.length;l++)q(t.b,a[l]);(i=t.s.get(i))&&i.resolve(void 0)}n.length=0}}function nt(t,e){var n=t.l.get(e);if(n)return n;if(n=t.j.get(e)){t.j.delete(e);try{return tt(t,e,n())}catch(t){J(t)}}}function ot(t,e,n){function o(e){return function(n){for(var o=[],r=0;r<arguments.length;++r)o[r]=arguments[r];r=[];for(var i=[],a=0;a<o.length;a++){var l=o[a];if(l instanceof Element&&H(l)&&i.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)r.push(l);else r.push(l)}for(e.apply(this,o),o=0;o<i.length;o++)U(t,i[o]);if(H(this))for(o=0;o<r.length;o++)(i=r[o])instanceof Element&&$(t,i)}}void 0!==n.prepend&&(e.prepend=o(n.prepend)),void 0!==n.append&&(e.append=o(n.append))}function rt(t){function n(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var o=this,r=void 0;if(H(this)&&(r=[],B(t,this,(function(t){t!==o&&r.push(t)}))),n.set.call(this,e),r)for(var i=0;i<r.length;i++){var a=r[i];1===a.__CE_state&&t.disconnectedCallback(a)}return this.ownerDocument.__CE_registry?V(t,this):I(t,this),e}})}function o(e,n){e.insertAdjacentElement=function(e,o){var r=H(o);return e=n.call(this,e,o),r&&U(t,o),H(e)&&$(t,o),e}}function r(e,n){function o(e,n){for(var o=[];e!==n;e=e.nextSibling)o.push(e);for(n=0;n<o.length;n++)V(t,o[n])}e.insertAdjacentHTML=function(t,e){if("beforebegin"===(t=t.toLowerCase())){var r=this.previousSibling;n.call(this,t,e),o(r||this.parentNode.firstChild,this)}else if("afterbegin"===t)r=this.firstChild,n.call(this,t,e),o(this.firstChild,r);else if("beforeend"===t)r=this.lastChild,n.call(this,t,e),o(r||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");r=this.nextSibling,n.call(this,t,e),o(this.nextSibling,r)}}}p&&(Element.prototype.attachShadow=function(e){if(e=p.call(this,e),t.f&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.h.length;n++)t.h[n](e)}return this.__CE_shadowRoot=e}),h&&h.get?n(Element.prototype,h):L&&L.get?n(HTMLElement.prototype,L):function(t,e){t.f=!0,t.a.push(e)}(t,(function(t){n(t,{enumerable:!0,configurable:!0,get:function(){return l.call(this,!0).innerHTML},set:function(t){var n="template"===this.localName,o=n?this.content:this,r=e.call(document,this.namespaceURI,this.localName);for(r.innerHTML=t;0<o.childNodes.length;)u.call(o,o.childNodes[0]);for(t=n?r.content:r;0<t.childNodes.length;)c.call(o,t.childNodes[0])}})})),Element.prototype.setAttribute=function(e,n){if(1!==this.__CE_state)return g.call(this,e,n);var o=m.call(this,e);g.call(this,e,n),n=m.call(this,e),t.attributeChangedCallback(this,e,o,n,null)},Element.prototype.setAttributeNS=function(e,n,o){if(1!==this.__CE_state)return v.call(this,e,n,o);var r=E.call(this,e,n);v.call(this,e,n,o),o=E.call(this,e,n),t.attributeChangedCallback(this,n,r,o,e)},Element.prototype.removeAttribute=function(e){if(1!==this.__CE_state)return y.call(this,e);var n=m.call(this,e);y.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)},Element.prototype.removeAttributeNS=function(e,n){if(1!==this.__CE_state)return w.call(this,e,n);var o=E.call(this,e,n);w.call(this,e,n);var r=E.call(this,e,n);o!==r&&t.attributeChangedCallback(this,n,o,r,e)},O?o(HTMLElement.prototype,O):b&&o(Element.prototype,b),F?r(HTMLElement.prototype,F):_&&r(Element.prototype,_),ot(t,Element.prototype,{prepend:C,append:N}),function(t){function e(e){return function(n){for(var o=[],r=0;r<arguments.length;++r)o[r]=arguments[r];r=[];for(var i=[],a=0;a<o.length;a++){var l=o[a];if(l instanceof Element&&H(l)&&i.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)r.push(l);else r.push(l)}for(e.apply(this,o),o=0;o<i.length;o++)U(t,i[o]);if(H(this))for(o=0;o<r.length;o++)(i=r[o])instanceof Element&&$(t,i)}}var n=Element.prototype;void 0!==T&&(n.before=e(T)),void 0!==S&&(n.after=e(S)),void 0!==D&&(n.replaceWith=function(e){for(var n=[],o=0;o<arguments.length;++o)n[o]=arguments[o];o=[];for(var r=[],i=0;i<n.length;i++){var a=n[i];if(a instanceof Element&&H(a)&&r.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)o.push(a);else o.push(a)}for(i=H(this),D.apply(this,n),n=0;n<r.length;n++)U(t,r[n]);if(i)for(U(t,this),n=0;n<o.length;n++)(r=o[n])instanceof Element&&$(t,r)}),void 0!==A&&(n.remove=function(){var e=H(this);A.call(this),e&&U(t,this)})}(t)}W.prototype.connectedCallback=function(t){var e=t.__CE_definition;if(e.connectedCallback)try{e.connectedCallback.call(t)}catch(t){J(t)}},W.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;if(e.disconnectedCallback)try{e.disconnectedCallback.call(t)}catch(t){J(t)}},W.prototype.attributeChangedCallback=function(t,e,n,o,r){var i=t.__CE_definition;if(i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(e))try{i.attributeChangedCallback.call(t,e,n,o,r)}catch(t){J(t)}},G.prototype.resolve=function(t){if(this.a)throw Error("Already resolved.");this.a=t,this.g(t)},K.prototype.A=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||Q(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)V(this.b,n[o])},Y.prototype.B=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");Z(this,t),this.j.set(t,e),this.m.push(t),this.c||(this.c=!0,this.i((function(){return et(n)})))},Y.prototype.define=function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");Z(this,t),tt(this,t,e),this.m.push(t),this.c||(this.c=!0,this.i((function(){return et(n)})))},Y.prototype.upgrade=function(t){V(this.b,t)},Y.prototype.get=function(t){if(t=nt(this,t))return t.constructorFunction},Y.prototype.whenDefined=function(t){if(!j(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.s.get(t);if(e)return e.w;e=new G,this.s.set(t,e);var n=this.l.has(t)||this.j.has(t);return t=-1===this.m.indexOf(t),n&&t&&e.resolve(void 0),e.w},Y.prototype.polyfillWrapFlushCallback=function(t){this.v&&Q(this.v);var e=this.i;this.i=function(n){return t((function(){return e(n)}))}},window.CustomElementRegistry=Y,Y.prototype.define=Y.prototype.define,Y.prototype.upgrade=Y.prototype.upgrade,Y.prototype.get=Y.prototype.get,Y.prototype.whenDefined=Y.prototype.whenDefined,Y.prototype.polyfillDefineLazy=Y.prototype.B,Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;var it={};var at=window.customElements;function lt(){var e=new W;!function(e){function n(){var n=this.constructor,o=document.__CE_registry.u.get(n);if(!o)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var r=o.constructionStack;if(0===r.length)return r=t.call(document,o.localName),Object.setPrototypeOf(r,n.prototype),r.__CE_state=1,r.__CE_definition=o,z(e,r),r;var i=r.length-1,a=r[i];if(a===it)throw Error("Failed to construct '"+o.localName+"': This element was already constructed.");return r[i]=it,Object.setPrototypeOf(a,n.prototype),z(e,a),a}n.prototype=k.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:n}),window.HTMLElement=n}(e),function(t){Document.prototype.createElement=function(e){return X(t,this,e,null)},Document.prototype.importNode=function(e,o){return e=n.call(this,e,!!o),this.__CE_registry?V(t,e):I(t,e),e},Document.prototype.createElementNS=function(e,n){return X(t,this,n,e)},ot(t,Document.prototype,{prepend:o,append:r})}(e),ot(e,DocumentFragment.prototype,{prepend:i,append:a}),function(t){function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var o=void 0;if(this.firstChild){var r=this.childNodes,i=r.length;if(0<i&&H(this)){o=Array(i);for(var a=0;a<i;a++)o[a]=r[a]}}if(n.set.call(this,e),o)for(e=0;e<o.length;e++)U(t,o[e])}}})}Node.prototype.insertBefore=function(e,n){if(e instanceof DocumentFragment){var o=P(e);if(e=s.call(this,e,n),H(this))for(n=0;n<o.length;n++)$(t,o[n]);return e}return o=e instanceof Element&&H(e),n=s.call(this,e,n),o&&U(t,e),H(this)&&$(t,e),n},Node.prototype.appendChild=function(e){if(e instanceof DocumentFragment){var n=P(e);if(e=c.call(this,e),H(this))for(var o=0;o<n.length;o++)$(t,n[o]);return e}return n=e instanceof Element&&H(e),o=c.call(this,e),n&&U(t,e),H(this)&&$(t,e),o},Node.prototype.cloneNode=function(e){return e=l.call(this,!!e),this.ownerDocument.__CE_registry?V(t,e):I(t,e),e},Node.prototype.removeChild=function(e){var n=e instanceof Element&&H(e),o=u.call(this,e);return n&&U(t,e),o},Node.prototype.replaceChild=function(e,n){if(e instanceof DocumentFragment){var o=P(e);if(e=d.call(this,e,n),H(this))for(U(t,n),n=0;n<o.length;n++)$(t,o[n]);return e}o=e instanceof Element&&H(e);var r=d.call(this,e,n),i=H(this);return i&&U(t,n),o&&U(t,e),i&&$(t,e),r},f&&f.get?e(Node.prototype,f):function(t,e){t.f=!0,t.h.push(e)}(t,(function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=this.firstChild;e;e=e.nextSibling)e.nodeType!==Node.COMMENT_NODE&&t.push(e.textContent);return t.join("")},set:function(t){for(;this.firstChild;)u.call(this,this.firstChild);null!=t&&""!==t&&c.call(this,document.createTextNode(t))}})}))}(e),rt(e),e=new Y(e),document.__CE_registry=e,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:e})}at&&!at.forcePolyfill&&"function"==typeof at.define&&"function"==typeof at.get||lt(),window.__CE_installPolyfill=lt}).call(self)},function(t,e,n){"use strict";n.r(e);n(0);class o extends HTMLElement{constructor(t){super(),this.style.backgroundColor=t}}function r(t){const e=function(){let t=document.getSelection().getRangeAt(0),e=t.commonAncestorContainer;1!==e.nodeType&&(e=e.parentElement);let n=[],o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:e=>function(t,e){return!t.data.match(/^\s+$/)&&e.intersectsNode(t)}(e,t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT});for(;o.nextNode();){let e=o.currentNode,r=new Range;r.selectNode(e),e===t.startContainer?t.startContainer===t.endContainer?(r.setStart(e,t.startOffset),r.setEnd(e,t.endOffset)):r.setStart(e,t.startOffset):e===t.endContainer&&r.setEnd(e,t.endOffset),n.push(r)}return n}(),n=customElements.get("highlight-snippet");for(let o of e)o.surroundContents(new n(t))}function i(t,e){const n=function(){let t=document.getSelection().getRangeAt(0).endContainer;1!==t.nodeType&&(t=t.parentElement);let e=window.getComputedStyle(t).getPropertyValue("line-height"),n=window.getComputedStyle(t).getPropertyValue("font-size");return"normal"===e?1.2*parseFloat(n):parseFloat(e)}();t.style.marginTop=`${n+8}px`,e.classList.add("pointer-top")}function a(t){let e=document.createElement("div");e.classList.add("highlight-menu-container");let n=document.createElement("div");n.classList.add("highlight-menu-pointer"),e.append(n);let o=document.createElement("div");o.classList.add("highlight-menu-options");let a=function(){let t=["#F7A586","#ECF786","#9BEBAA","#9BC1EB"],e=[];for(let n=0;n<4;n++){let o=document.createElement("div");o.classList.add("highlight-option-wrapper");let i=document.createElement("div");i.classList.add(`highlight-option-${n}`),i.classList.add("highlight-option"),i.setAttribute("data-color",t[n]),i.onclick=function(t){r(t.target.dataset.color)},o.append(i),e.push(o)}return e}();for(let t of a)o.append(t);e.append(o);let l=document.getSelection().getRangeAt(0).cloneRange();return l.collapse(t),l.insertNode(e),e.style.marginLeft=`-${e.offsetWidth/2}px`,t?function(t,e){t.style.marginTop=`-${t.offsetHeight+10}px`,e.classList.add("pointer-bottom")}(e,n):i(e,n),e}customElements.define("highlight-snippet",o);let l=null,c=null;document.onmouseup=function(t){const e=document.getSelection();if(e&&0!=e.rangeCount&&!e.isCollapsed&&!l){const t=e.getRangeAt(0);c=t.endContainer,3===c.nodeType&&(c=c.parentElement);const n=function(t){let e=new Range;return e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset),e.collapsed}(e);l=a(n)}},document.onmousedown=function(t){if(l&&!l.contains(t.target))l.remove(),c&&c.normalize(),document.getSelection().removeAllRanges(),l=null;else if(l&&l.contains(t.target))return!1},document.onclick=function(t){t.target.classList.contains("highlight-option")&&(l&&l.remove(),c&&c.normalize(),document.getSelection().removeAllRanges())}}]);
//# sourceMappingURL=bundle.js.map