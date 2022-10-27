"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,'html {\r\n  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\nmain {\r\n  padding: 20px;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.recent-scores {\r\n  float: left;\r\n  width: 40%;\r\n}\r\n\r\n.add-score {\r\n  float: right;\r\n  width: 40%;\r\n}\r\n\r\n.names-scores {\r\n  width: 100%;\r\n  height: auto;\r\n  border: 2px solid black;\r\n  clear: both;\r\n}\r\n\r\n.details {\r\n  margin: 0;\r\n  padding: 2px;\r\n}\r\n\r\n.names-scores :nth-child(even) {\r\n  background: rgb(202, 201, 201);\r\n}\r\n\r\n.head-scores {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n#refresh,\r\n#submit {\r\n  height: 2em;\r\n  box-shadow: 3px 3px 0 0 #000;\r\n}\r\n\r\n#refresh :hover {\r\n  cursor: pointer;\r\n}\r\n\r\n#form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n}\r\n\r\ninput {\r\n  height: 2em;\r\n  width: 80%;\r\n}\r\n\r\n#submit {\r\n  width: 5em;\r\n}\r\n',""]);const c=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(s[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=t(u),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=t(o[s]);n[c].references--}for(var i=r(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=i}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},449:(e,n,t)=>{var r=t(379),a=t.n(r),o=t(795),s=t.n(o),c=t(569),i=t.n(c),l=t(565),d=t.n(l),u=t(216),p=t.n(u),m=t(589),f=t.n(m),h=t(426),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=p(),a()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const v=document.querySelector(".names-scores"),g=localStorage.getItem("game"),b=e=>{e.length||(v.innerHTML="<p class='details'>No scores available!</p>"),e.forEach((e=>{const n=document.createElement("p");n.classList.add("details"),n.id="details",v.appendChild(n),n.innerHTML=`${e.name} : ${e.score}`}))};(async()=>{if(g){const e=`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${g}/scores/`,n=await fetch(e),t=await n.json();b(t.result)}})();const w=b,x=document.querySelector(".names-scores"),S=document.getElementById('refresh-form"'),E=document.getElementById("game-name"),T=document.getElementById("name"),I=document.getElementById("score"),C=localStorage.getItem("game"),k=async()=>{const e=new class{constructor(e,n){this.name=e,this.score=n}}(T.value,I.value),n=`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${C}/scores/`,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{const e=await fetch(n,t);return await e.json()}catch(e){return e}},j=document.querySelector(".add-score"),L=document.querySelector(".recent-scores"),M=document.getElementById("form-name-game"),N=document.getElementById("form");window.addEventListener("load",(()=>{w(),S&&S.addEventListener("submit",(e=>{e.preventDefault(),x.innerHTML="",w()})),N.addEventListener("submit",(e=>{e.preventDefault(),k(),N.reset()})),localStorage.getItem("game")&&(M.style.display="none",j.style.display="block",L.style.display="block"),M.addEventListener("submit",(e=>{e.preventDefault(),(async()=>{const e={name:E.value},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games",n);return await e.json()}catch(e){return e}})().then((e=>{let n=e.result;n=n.substr(14,20),n&&(localStorage.setItem("game",n),M.style.display="none",j.style.display="block",L.style.display="block")}))}))}))}},e=>{e(e.s=449)}]);