(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7414:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return p}});var t=r(3012),i=r(7294),s=r(6687),c=r(6486),u=r(990),o=r(5893);function a(e){var n=e.number,r=e.fps,t=e.direction,c=void 0===t?"":t,a=(0,i.useRef)(-1),d=(0,i.useRef)(!0),f=(0,i.useRef)(null);return(0,i.useEffect)(function(){if(f.current){0<a.current&&a.current!==n&&(d.current=!1);var e={current:0};u.p8.to(e,{current:1,duration:""===c?0:1/r,ease:"linear",onUpdate:function(){f.current&&(f.current.style.transform="translateY(".concat(function(e,n,r){switch(e){case"up":return -100/11*((n=n||10)-1)-100/11*r;case"down":return -100/11*(n+1)+100/11*r;default:return -100/11*n}}(c,n,e.current),"%)"))}})}a.current=n},[n]),(0,o.jsxs)(l,{ref:f,className:"reel-number-ol",children:[(0,s.Z)(Array(10)).map(function(e,n){return(0,o.jsx)("li",{children:n},n)}),(0,o.jsx)("li",{children:"0"})]})}var l=t.ZP.ol.withConfig({displayName:"ReelNumberOl__Wrapper",componentId:"sc-gnk8d8-0"})(["text-align:center;"]);function d(e){var n=e.currentNumber,r=e.fps,t=e.minDigits,u=void 0===t?0:t,l=(0,i.useState)([]),d=l[0],p=l[1],m=(0,i.useState)(""),x=m[0],h=m[1],j=(0,i.useRef)(0);return(0,i.useEffect)(function(){var e,r;h((e=n=Math.max(n,0))===(r=j.current)?"":e<r?"down":"up"),p((0,c.reverse)((0,s.Z)(String(n).padStart(u,"0")))),j.current=n},[n]),(0,o.jsxs)(f,{className:"reel-numbers",children:[(0,o.jsx)("ol",{className:"transparent-number",children:d.map(function(e,n){return(0,o.jsx)("li",{children:e},n)})}),(0,o.jsx)("div",{className:"scroll-numbers",children:d.map(function(e,n){return(0,o.jsx)(a,{number:Number(e),fps:r,direction:x},n)})})]})}var f=t.ZP.div.withConfig({displayName:"ReelNumbers__Wrapper",componentId:"sc-rba7je-0"})(["position:relative;overflow:hidden;.transparent-number{display:flex;color:transparent;}.scroll-numbers{display:flex;justify-content:flex-end;flex-direction:row-reverse;position:absolute;top:0;right:0;}"]);function p(){var e=(0,i.useState)(0),n=e[0],r=e[1],t=(0,i.useState)(100),s=t[0],c=t[1],u=(0,i.useState)(8)[0];return(0,o.jsxs)(m,{children:[(0,o.jsxs)("dl",{style:{cursor:"pointer",userSelect:"none"},onClick:function(){return r(n+1)},children:[(0,o.jsx)("dt",{children:"countup - click"}),(0,o.jsx)("dd",{children:(0,o.jsx)(d,{currentNumber:n,minDigits:3,fps:u})})]}),(0,o.jsxs)("dl",{style:{cursor:"pointer",userSelect:"none"},onClick:function(){return c(s-1)},children:[(0,o.jsx)("dt",{children:"countdown - click"}),(0,o.jsx)("dd",{children:(0,o.jsx)(d,{currentNumber:s,minDigits:3,fps:u})})]})]})}Date.now();var m=t.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-1fcovnd-0"})(["display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;dl{margin:8px;padding:8px;border:solid 1px black;}dt{font-size:16px;text-align:center;}dd{display:flex;align-items:center;justify-content:center;margin-top:8px;font-size:32px;}"])},8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7414)}])}},function(e){e.O(0,[662,802,292,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);