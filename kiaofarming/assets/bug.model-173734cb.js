var h=Object.defineProperty;var c=(i,s,n)=>s in i?h(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n;var e=(i,s,n)=>(c(i,typeof s!="symbol"?s+"":s,n),n);import{N as o,I as t,B as m}from"./editorStore-73f92a1e.js";class v{constructor(s){e(this,"id");e(this,"name");e(this,"images");e(this,"typeName");e(this,"symptoms");s&&(this.id=s.id||"",this.name=s.name||"",this.typeName=s.typeName||"",this.symptoms=s.symptoms||[],this.images=s.images||[])}}class y{constructor(s){e(this,"id");e(this,"name");e(this,"images");e(this,"size");e(this,"colors");e(this,"symptoms");e(this,"environment");e(this,"organs");e(this,"preventions");s&&(this.id=s.id||"",this.name=new o(s.name)||new o,this.images=s.images||new t,this.size=new r(s.size)||new r,this.colors=s.colors||[],this.symptoms=s.symptoms||[],this.environment=new m(s.environment)||new m,this.organs=s.organs||[],this.preventions=s.preventions||[])}}class l{constructor(s){e(this,"id");e(this,"name");e(this,"environment");e(this,"size");e(this,"colors");e(this,"organs");e(this,"symptoms");e(this,"images");e(this,"preventions");s&&(this.id=s.id||0,this.name=s.name||"",this.images=s.images||new t,this.size=s.size||0,this.colors=s.colors||[],this.environment=s.environment||0,this.organs=s.organs||[],this.symptoms=s.symptoms||[],this.preventions=s.preventions||[])}}class r{constructor(s){e(this,"id");e(this,"name");e(this,"desc");s&&(this.id=s.id||0,this.name=s.name||"",this.desc=s.desc||"")}}export{y as B,l as E,v as b};
