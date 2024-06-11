import{r as b,i as y,g as A,o as E,b as _}from"../chunks/session.DDEkbpRt.js";import{s as L,a as P,u as S,g as v,b as B,o as U,e as w}from"../chunks/scheduler.BeaK0CkN.js";import{S as M,i as D,e as k,s as N,c as R,f as T,d as f,j,a as m,b as h,p as H,n as K}from"../chunks/index.DAY6Rk4V.js";var O="firebase",$="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */b(O,$,"app");const z="AIzaSyCCLqucU4EwJ1tulHa3KRSKHqr7pZaweQQ",G="sarah-portofolio.firebaseapp.com",q="sarah-portofolio",J="sarah-portofolio.appspot.com",Q="609702587382",V="1:609702587382:web:b114ba7aa02ef2349675d7",F="G-LPMJB4R74Q",W="sarahtanujaya@gmail.com",Y={apiKey:z,authDomain:G,projectId:q,storageBucket:J,messagingSenderId:Q,appId:V,measurementId:F};let u,p;const Z=()=>{u||(console.log(!1),u=y(Y),p=A(u))},X=!0;async function x({url:n}){try{Z()}catch(s){console.error(s)}return{url:n.pathname}}const ne=Object.freeze(Object.defineProperty({__proto__:null,load:x,prerender:X},Symbol.toStringTag,{value:"Module"}));function ee(n){let s,r,o;const c=n[2].default,t=P(c,n,n[1],null);return{c(){s=k("div"),r=N(),t&&t.c(),this.h()},l(e){s=R(e,"DIV",{id:!0,class:!0}),T(s).forEach(f),r=j(e),t&&t.l(e),this.h()},h(){m(s,"id","sky-blinks"),m(s,"class","overflow-hidden")},m(e,l){h(e,s,l),n[3](s),h(e,r,l),t&&t.m(e,l),o=!0},p(e,[l]){t&&t.p&&(!o||l&2)&&S(t,c,e,e[1],o?B(c,e[1],l,null):v(e[1]),null)},i(e){o||(H(t,e),o=!0)},o(e){K(t,e),o=!1},d(e){e&&(f(s),f(r)),n[3](null),t&&t.d(e)}}}function te(n,s,r){let{$$slots:o={},$$scope:c}=s,t=null;const e=a=>Math.floor(Math.random()*a)+1;function l(a=20){let i=document.createElement("div");i.classList.add("circle");let d=e(5);i.classList.add(`blink-${d}`);let C=e(a)+"px";i.style.height=i.style.width=C,i.style.left=e(window.innerWidth)+"px",i.style.top=e(window.innerHeight)+"px",t.appendChild(i)}function I(a=210,i=3){if(t){for(;t.firstChild;)t.removeChild(t.firstChild);for(let d=0;d<a;d++)l(i)}}U(()=>{I(),p&&E(p,a=>{if(!a)return _.update(()=>({user:null,loggedIn:!1,isAdmin:!1})),!1;const i=!!a&&(a==null?void 0:a.emailVerified),d=i??a.email===W;return _.update(()=>({user:a,loggedIn:i,isAdmin:d})),!0})});function g(a){w[a?"unshift":"push"](()=>{t=a,r(0,t)})}return n.$$set=a=>{"$$scope"in a&&r(1,c=a.$$scope)},[t,c,o,g]}class oe extends M{constructor(s){super(),D(this,s,te,ee,L,{})}}export{oe as component,ne as universal};
