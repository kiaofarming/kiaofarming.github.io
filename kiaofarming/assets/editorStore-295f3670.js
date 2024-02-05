var S=Object.defineProperty;var E=(t,i,l)=>i in t?S(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l;var e=(t,i,l)=>(E(t,typeof i!="symbol"?i+"":i,l),l);import{ak as A,al as R,A as r,am as c}from"./index-6ae4db78.js";class T{constructor(i){e(this,"id");e(this,"name");i&&(this.id=i.id||0,this.name=i.name||"")}}class b{constructor(i){e(this,"id");e(this,"name");e(this,"class");e(this,"iconName");e(this,"color");i&&(this.id=i.id||0,this.name=i.name||"",this.class=i.class||"",this.iconName=i.iconName||"",this.color=i.color||"")}}class L{constructor(i){e(this,"id");e(this,"name");e(this,"temperature");e(this,"harvestPeriod");e(this,"waterRequirement");e(this,"plantingDifficulty");e(this,"propagations");e(this,"commonSpecies");e(this,"category");e(this,"family");e(this,"potSize");e(this,"cropLifeCycle");e(this,"irrigationMode");e(this,"lightCondition");e(this,"soil");e(this,"images");e(this,"places");e(this,"months");e(this,"damages");e(this,"content");i&&(this.id=i.id||"",this.name=new m(i.name)||new m,this.temperature=new u(i.temperature)||new u,this.harvestPeriod=new p(i.harvestPeriod),this.waterRequirement=i.waterRequirement||0,this.plantingDifficulty=i.plantingDifficulty||0,this.propagations=i.propagations||[],this.commonSpecies=i.commonSpecies||"",this.category=i.category||"",this.family=i.family||"",this.potSize=i.potSize||new C,this.cropLifeCycle=i.cropLifeCycle||"",this.irrigationMode=i.irrigationMode||"",this.lightCondition=i.lightCondition||[],this.soil=i.soil||"",this.images=i.images||new g,this.places=i.places||[],this.months=new f(i.months)||new f,this.content=i.content,this.damages=i.damages||[])}}class N{constructor(i){e(this,"id");e(this,"name");e(this,"temperature");e(this,"harvestPeriod");e(this,"waterRequirement");e(this,"plantingDifficulty");e(this,"propagations");e(this,"commonSpecies");e(this,"category");e(this,"family");e(this,"potSize");e(this,"cropLifeCycle");e(this,"irrigationMode");e(this,"lightCondition");e(this,"soil");e(this,"images");e(this,"places");e(this,"months");e(this,"content");e(this,"damages");i&&(this.id=i.id||"",this.name=new m(i.name)||new m,this.temperature=new u(i.temperature)||new u,this.harvestPeriod=new p(i.harvestPeriod),this.waterRequirement=i.waterRequirement||0,this.plantingDifficulty=i.plantingDifficulty||0,this.propagations=i.propagations||[],this.commonSpecies=i.commonSpecies||"",this.category=i.category||0,this.family=i.family||0,this.potSize=i.potSize||0,this.cropLifeCycle=i.cropLifeCycle||0,this.irrigationMode=i.irrigationMode||0,this.lightCondition=i.lightCondition||[],this.soil=i.soil||"",this.images=i.images||new g,this.places=i.places||[],this.months=new f(i.months)||new f,this.content=i.content,this.damages=i.damages||new v)}}class m{constructor(i){e(this,"chinese");e(this,"english");e(this,"scientific");e(this,"nick");i&&(this.chinese=i.chinese||"",this.english=i.english||"",this.scientific=i.scientific||"",this.nick=i.nick||"")}}class u{constructor(i){e(this,"growth");e(this,"germination");i&&(this.growth=new p(i.growth),this.germination=new p(i.germination))}}class p{constructor(i){e(this,"min");e(this,"max");i&&(this.min=i.min||0,this.max=i.max||0)}}class f{constructor(i){e(this,"plant");e(this,"breeding");e(this,"viewing");i&&(this.plant=i.plant||[],this.breeding=i.breeding||[],this.viewing=i.viewing||[])}}class _{constructor(i){e(this,"id");e(this,"title");e(this,"subInfo");e(this,"contents");e(this,"stepPeriod");e(this,"image");e(this,"video");i&&(this.id=i.id||0,this.title=i.title||"",this.subInfo=i.subInfo||[],this.contents=i.contents||[],this.stepPeriod=i.stepPeriod||"",this.image=i.image||"",this.video=i.video||"")}}class z{constructor(i){e(this,"id");e(this,"title");e(this,"subInfo");e(this,"contents");e(this,"stepPeriod");i&&(this.id=i.id||0,this.title=i.title||"",this.subInfo=i.subInfo||[],this.contents=i.contents||[],this.stepPeriod=i.stepPeriod||"")}}class x{constructor(i){e(this,"id");e(this,"title");e(this,"contents");e(this,"materials");i&&(this.id=i.id||"",this.title=i.title||"",this.contents=i.contents||[],this.materials=i.materials||[])}}class k{constructor(i){e(this,"id");e(this,"title");e(this,"contents");e(this,"materials");i&&(this.id=i.id||"",this.title=i.title||"",this.contents=i.contents||[],this.materials=i.materials||[])}}class G{constructor(i){e(this,"id");e(this,"name");e(this,"type");e(this,"images");i&&(this.id=i.id||"",this.name=i.name||"",this.type=i.type||"",this.images=i.images||[])}}class g{constructor(i){e(this,"list");e(this,"profile");e(this,"calendar");e(this,"fourPanel");i&&(this.list=i.list||[],this.profile=i.profile||[],this.calendar=i.calendar||"",this.fourPanel=i.fourPanel||"")}}class v{constructor(i){e(this,"pests");e(this,"diseases");i&&(this.pests=i.pests||[],this.diseases=i.diseases||[])}}class C{constructor(i){e(this,"id");e(this,"name");e(this,"level");i&&(this.id=i.id||0,this.name=i.name||"",this.level=i.level||0)}}const B=A("editorManagement",()=>{const t=R();function i(s){const n=r.EDIT_PLANT+"/"+s.id;return t.putRequest(n,s).pipe(c(o=>o.data))}function l(s){const n=r.EDIT_PLANT+"/"+s;return t.deleteRequest(n).pipe(c(o=>o.data))}function a(s){const n=r.EDIT_PLANT;return t.editPostRequest(n,s).pipe(c(o=>o.data))}function P(s,n){const o=r.EDIT_DAMAGE+"/"+s+"/"+n.id;return t.putRequest(o,n).pipe(c(h=>h.data))}function w(s,n){const o=r.EDIT_DAMAGE+"/"+s+"/"+n;return t.deleteRequest(o).pipe(c(h=>h.data))}function y(s,n){const o=r.EDIT_DAMAGE+"/"+s;return t.editPostRequest(o,n).pipe(c(h=>h.data))}function I(s){const n=r.EDIT_MATERIAL+"/"+s.id;return t.putRequest(n,s).pipe(c(o=>o.data))}function D(s){const n=r.EDIT_MATERIAL+"/"+s;return t.deleteRequest(n).pipe(c(o=>o.data))}function M(s){const n=r.EDIT_DAMAGE;return t.editPostRequest(n,s).pipe(c(o=>o.data))}return{modifyPlantInfo:i,deletePlantInfo:l,addPlantInfo:a,modifyDamageProfile:P,deleteDamageProfile:w,addDamageProfile:y,modifyMaterialProfile:I,deleteMaterialProfile:D,addMaterialProfile:M}});export{T as B,_ as C,v as D,z as E,g as I,p as M,m as N,L as P,x as S,N as a,u as b,b as c,f as d,B as e,G as f,k as g};
