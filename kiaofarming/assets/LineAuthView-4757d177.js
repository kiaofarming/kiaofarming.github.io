import{d as m,u as h,f,s as p,b as a,g as v,o as b,h as y,a as k}from"./index-52de95f1.js";const w={class:"line_auth"},V=k("div",{class:"spinner-border text-primary",role:"status"},null,-1),q=[V],S=m({__name:"LineAuthView",setup(x){const r=h(),s=f(),{selectedAccount:u}=p(s),t=a(""),c=a(void 0);(async()=>{try{const o=window.location.search,e=new URLSearchParams(o),g=e.get("status"),n=e.get("auth_code")??"";t.value=n;const _=e.get("name"),d=e.get("image");console.log(n);const B=require("qs");console.log(g),console.log(n),console.log(_),console.log(d)}catch(o){console.log(o)}})(),v(()=>{l()});function l(){console.log(t.value),s.userToken(t.value).subscribe(o=>{var e;console.log(o),c.value=o,i(((e=c.value)==null?void 0:e.system_user_token)??"")})}function i(o){s.useVerification(o).subscribe(e=>{u.value=e,r.push({name:"home"}),console.log(e)})}return(o,e)=>(b(),y("span",w,q))}});export{S as default};
