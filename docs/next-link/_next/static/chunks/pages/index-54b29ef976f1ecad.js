(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1003),u=r(880),c=r(9246);function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s={};function d(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,h=e.as,y=e.children,v=e.prefetch,m=e.passHref,b=e.replace,g=e.shallow,j=e.scroll,k=e.locale,w=e.onClick,x=e.onMouseEnter,E=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=y,a&&"string"===typeof r&&(r=i.default.createElement("a",null,r));var O,_=!1!==v,M=u.useRouter(),C=i.default.useMemo((function(){var e=o(l.resolveHref(M,p,!0),2),t=e[0],r=e[1];return{href:t,as:h?l.resolveHref(M,h):r||t}}),[M,p,h]),I=C.href,S=C.as,A=i.default.useRef(I),L=i.default.useRef(S);a&&(O=i.default.Children.only(r));var R=a?O&&"object"===typeof O&&O.ref:t,z=o(c.useIntersection({rootMargin:"200px"}),3),P=z[0],N=z[1],U=z[2],H=i.default.useCallback((function(e){L.current===S&&A.current===I||(U(),L.current=S,A.current=I),P(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[S,R,I,U,P]);i.default.useEffect((function(){var e=N&&_&&l.isLocalURL(I),t="undefined"!==typeof k?k:M&&M.locale,r=s[I+"%"+S+(t?"%"+t:"")];e&&!r&&d(M,I,S,{locale:t})}),[S,I,N,k,_,M]);var T={ref:H,onClick:function(e){a||"function"!==typeof w||w(e),a&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,M,I,S,b,g,j,k)},onMouseEnter:function(e){a||"function"!==typeof x||x(e),a&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l.isLocalURL(I)&&d(M,I,S,{priority:!0})}};if(!a||m||"a"===O.type&&!("href"in O.props)){var K="undefined"!==typeof k?k:M&&M.locale,B=M&&M.isLocaleDomain&&l.getDomainLocale(S,K,M&&M.locales,M&&M.domainLocales);T.href=B||l.addBasePath(l.addLocale(S,K,M&&M.defaultLocale))}return a?i.default.cloneElement(O,T):i.default.createElement("a",Object.assign({},E,T),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(t?t.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[m,d,b]};var a=r(7294),i=r(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5970:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=r(1664),a=r.n(o);function i(){return(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",children:"with text node"})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",children:(0,n.jsx)("a",{children:"with a tag"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",children:(0,n.jsx)("span",{children:"with span tag"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{children:"with a and span tag"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",children:(0,n.jsx)("a",{href:"https://kimizuka.org",children:"with a and href"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(a(),{href:"https://kimizuka.fm",passHref:!0,children:(0,n.jsx)("a",{href:"https://kimizuka.org",children:"with a and passHref"})})})]})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);