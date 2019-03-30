(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	function e(e,t,n){var r=arguments;if(t=t||{},arguments.length>3){n=[n];for(var o=3;o<arguments.length;o++)n.push(r[o]);}null!=n&&(t.children=n);var a={type:e,props:t},u=t.key;return null!=u&&(a.key=""+u),a}function t(t){return null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t?e(null,null,""+t):t}var n=[],r={},o={},u="@state",c="@type",i="host",f=116,l=79,p=77,v=73,d=67,h={children:1},y={innerHTML:1,textContent:1,contenteditable:1},g={};function w(e,t){var n=arguments;for(var r in t)e[r]=t[r];for(var o=2;o<arguments.length;o++)w(e,n[o]);return e}var k,b=Promise.prototype.then.bind(Promise.resolve());function C(e,t,n,o,a,u){if(o!=n)if("o"!=t[0]||"n"!=t[1]||"function"!=typeof o&&"function"!=typeof n)switch(t){case"ref":o&&(o.current=e);break;case"style":!function(e,t,n){var r=t,o=n;if("object"==typeof o)for(var a in o="",n)n[a]&&(g[a]||(g[a]=a.replace(/([A-Z])/g,"-$1").toLowerCase()),o+=g[a]+":"+n[a]+";");r!=o&&(e.style.cssText=o);}(e,n||e.style.cssText,o);break;case"shadowDom":return void("attachShadow"in e&&(e.shadowRoot&&!o||!e.shadowRoot&&o)&&e.attachShadow({mode:o?"open":"closed"}));case"key":t="data-key",null==o?delete e.dataset.key:e.dataset.key=o;break;case"class":case"className":t=a?"class":"className";default:"list"!=t&&!a&&t in e?e[t]=null==o?"":o:null==o?e.removeAttribute(t):e.setAttribute(t,o);}else!function(e,t,n,o){r[t]||(r[t]=t.slice(2).toLocaleLowerCase()),t=r[t],o.handleEvent||(o.handleEvent=N),n?(o[t]||e.addEventListener(t,o),o[t]=n):o[t]&&(e.removeEventListener(t,o),delete o[t]);}(e,t,o,u);}function N(e){return this[e.type](e)}function A(e,t){e.reducer&&(e.state=e.reducer(e.state,t));}function S(e,t){for(var n=e.length,r=0;r<n;r++){var o=e[r],a=o.hooks,u=a.length;t.type===d&&(o.remove=!0);for(var c=0;c<u;c++)A(a[c],t);}}function T(e,t,n,r){var o=(t[e]||{}).updateComponent,a=t.childNodes,u=a.length;o&&o!=r&&o(n?v:d);for(var c=0;c<u;c++)T(e,a[c]);}function V(e,t){var n,r=document;return (n=null!=e?t?r.createElementNS("http://www.w3.org/2000/svg",e):r.createElement(e):r.createTextNode(""))[c]=e,n}function j(e,r,o,a,u){if(void 0===u&&(u=0),o=o||[],a=a||[],Array.isArray(e))for(var c=e.length,i=0;i<c;i++)j(e[i],r,o,a,u+1);else{if(null==e&&!u)return n;var s=r?r(e,a.length):t(e);r||"object"==typeof s&&null!=s.key&&-1==o.indexOf(s.key)&&(o.push(s.key),o.withKeyes=!0),a.push(s);}return a}function O(n,r,a){a=a||u,n=t(n),a==u&&n.type!=i&&(n=e(i,{},n)),function e(n,r,o,a,u,s){var g=r&&r[n]||{},m=g.vnode,N=g.updateComponent,E=g.handlers;if(void 0===E&&(E={}),m==o)return r;m=m||{props:{}};var L=o.type,A=o.props,O=A.shadowDom,P=A.children,R="function"==typeof L;if(u=u||"svg"==L,R&&!N&&(N=function(n,r){var o,a=[];return function u(c,i,s,h){switch(c){case f:return o=i,function c(i,s,v){if(o){if("function"!=typeof(i=t(i)).type)return S(a.splice(v),{type:d}),o=e(n,o,i,s,r,u),void(a.length&&(o[n].updateComponent=u));var h,y,g=a[v]||{};g.type!=i.type&&(S(a.splice(v),{type:d}),a[v]=w({hooks:[]},i),h=!0,y=!0);var m=i.props,C=(g=a[v]).props;if(!y){var N=Object.keys(C).length,E=0;for(var L in m)if(E++,m[L]!=C[L]){y=!0;break}y=y||N!=E;}y=g.context!=s||y,g.props=m,g.context=s,y&&!g.prevent&&function e(){if(g.remove)return o;var t=k={component:g,context:s,next:function(){g.prevent||(g.prevent=!0,b(function(){g.prevent=!1,e();}));}};S([g],{type:f});var n=g.type(g.props);k=!1,c(n,t.context,v+1),S([g],{type:h?l:p}),h=!1;}();}}(s,h,0),o;case v:S([].concat(a).reverse(),{type:c});break;case d:o=!1,S(a.reverse(),{type:c}),a=[];}}}(n,u)),!R&&L!=i&&function(e){if(e){if(!e[c]){var t=e.nodeName.toLowerCase();e[c]="#text"==t?null:t;}return e[c]}}(r)!==L){var B=V(L,u),D=r&&r.parentNode;D&&(T(n,r,!0,s),D.replaceChild(B,r)),r=B,E={};}return N&&s!=N?N(f,r,o,a):(null==L?r.nodeValue!=P&&(r.nodeValue=P):function(e,t,n,r,o){for(var a in t=t||{})h[a]||a in n||C(e,a,t[a],null,r,o);var u;for(var c in n)h[c]||(C(e,c,t[c],n[c],r,o),u=u||y[c]);return u}(r,m.props,o.props,u,E)||m.props.children==P||function(t,n,r,o,a){for(var u=[],c=j(r,!1,u),i=c.length,s=n.childNodes,f={},l=s.length,p=u.withKeyes,v=p?0:l>i?i:l;v<l;v++){var d=s[v],h=v;p&&u.indexOf(h=d.dataset.key)>-1?f[h]=d:(T(t,d),v--,l--,n.removeChild(d));}for(var y=0;y<i;y++){var g=c[y],m=s[y],w=s[y+1],k=p?f[p?g.key:y]:m;p&&k!=m&&n.insertBefore(k,m);var x=e(t,k||"function"!=typeof g.type?k:V(null),g,o,a);k||(w?n.insertBefore(x,w):n.appendChild(x));}}(n,O&&r.shadowRoot||r,P,a,u),r[n]={vnode:o,handlers:E},r)}(a,r,n,o);}var Z=e;

	let r$1=Promise.resolve(),s=0;class o$1 extends HTMLElement{constructor(){super();let i,o="@wc."+s++,n=this.constructor.attributes,h=this.props={};this.set=((t,e)=>{if("object"==typeof t&&null==e){for(let e in t)this.set(e,t[e]);return}let s=t.replace(/-(\w)/g,(t,e)=>e.toUpperCase());n[t]&&(e=n[t](e,h[s],t)),h[s]!=e&&(h[t]=e,!i&&this.mounted&&(i=!0,r$1.then(()=>{i=!1,this.update(h);})));}),this.render=this.render.bind(this),this.update=(r=>{O(r?Z(this.render,r):Z("host"),this,o);}),this.setup=(()=>{this.mounted=!0;for(let t in n)this.set(t,this.getAttribute(t));this.update(h);});}static get observedAttributes(){return Object.keys(this.attributes||{})}connectedCallback(){this.setup();}disconnectedCallback(){this.update(null);}attributeChangedCallback(t,e,r){this.set(t,r);}render(){return Z("host")}}

	class MyTag extends o$1 {
		render() {
			return (
				Z('host', { shadowDom: true,}
	, Z('style', null, `
				@import url('https://fonts.googleapis.com/css?family=Muli:400,900');
				:host{
					font-family: 'Muli', sans-serif;
					font-size:50px;
					text-align:center;
				}
				`), "Ahoras ready ready"

	)
			);
		}
	}

	customElements.define("my-tag", MyTag);

}));
//# sourceMappingURL=my-wc.umd.js.map
