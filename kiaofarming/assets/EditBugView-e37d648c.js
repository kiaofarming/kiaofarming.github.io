import{d as ge,b as v,r as Be,o as d,h as m,F as S,m as E,c as Fe,a as o,t as $,f as Re,s as Ve,e as Ye,u as Ue,l as je,g as Ge,i as R,k as ue,w as He,A as I,v as V,aa as Z,I as Qe,j as de}from"./index-a9bb2c77.js";import{b as qe,u as Ke,c as Ze,F as Je,_ as We,s as Xe,a as et}from"./firebase-54531c47.js";import{C as J,S as W,f as tt,E as st,g as me,e as ot,I as nt}from"./editorStore-477e7c0a.js";import{C as lt}from"./zh-00a5aa34.js";import{v as it}from"./viewerStore-473e90c2.js";import{B as at,E as rt}from"./bug.model-5af5baaf.js";const ct={class:"mt-3"},ut={class:"mt-3 flex"},dt=o("label",{class:"mt-1 w-24 text-sm font-medium align-bottom text-gray-900"},"免登資材",-1),mt={class:"grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:grid-cols-4 gap-2"},gt={class:"flex h-6 items-center"},ft=["checked","onClick"],vt={class:"ml-1 text-xs leading-6 text-gray-900"},pt={class:"mt-2 flex text-sm ml-5 justify-center w-full text-gray-600"},ht={class:""},_t=o("img",{src:qe,width:"32",alt:""},null,-1),bt=[_t],xt={class:"mx-2 mt-2 flex text-sm ml-5 justify-end w-full text-gray-600"},yt={class:"px-5 py-2 rounded-full filter-btn-style"},kt={class:"mx-2 px-3 py-2 rounded-full see-all-button"},Ct=ge({__name:"BugTextEditor",props:{preventions:{type:Array,default:[]},checkMaterial:{type:Array,default:[]},controlMaterial:{type:Array,default:[]},controlMaterialType:{type:Array,default:[]}},emits:["save","goback"],setup(B,{emit:F}){const f=B,L=v([]),b=v(lt);v("");const T=v({language:"zh",toolbar:["undo","redo","|","heading","bold","|"]});function A(i){console.log("mixAllEditorStr");let r="";if(i.title==null)return r;console.log(i),r="<h2><strong>"+i.title+"</strong></h2>";for(let u=0;u<i.subInfo.length;u++){const g=i.subInfo[u];r=r+"<h3><strong>"+g.title+"</strong></h3>";for(let h=0;h<g.contents.length;h++){const x=g.contents[h];r=r+"<p>"+x+"</p>"}}return r}function P(){let i=new J;i.title="標題",i.subInfo=[];let r=new W;r.title="副標題",r.contents=["副標題內容"],i.subInfo.push(r),f.preventions.push(A(i))}function Y(i,r){if(f.checkMaterial[i]==null)return!1;if(f.checkMaterial[i].subInfo[0].materials!=null){for(let u=0;u<f.checkMaterial[i].subInfo[0].materials.length;u++)if(f.checkMaterial[i].subInfo[0].materials[u].id==r.id.toString())return!0;return!1}return!1}function M(i,r){if(f.checkMaterial[i]==null){let g=new J,h=new W;g.subInfo=[],h.materials=[],g.subInfo.push(h),f.checkMaterial[i]=g}f.checkMaterial[i].subInfo[0].materials==null&&(f.checkMaterial[i].subInfo[0].materials=[]);let u=f.checkMaterial[i].subInfo[0].materials;if(u.some(g=>g.id===r.id.toString()))u=u.filter(g=>g.id!==r.id.toString());else{let g=new tt;g.id=r.id.toString(),g.name=r.name,u.push(g)}f.checkMaterial[i].subInfo[0].materials=u,console.log(f.checkMaterial[i].subInfo[0].materials)}function N(){F("goback")}function w(i,r){console.log(r),f.preventions[i]=r}function a(){L.value=[];for(let i=0;i<f.preventions.length;i++){const r=f.preventions[i],u=[];new DOMParser().parseFromString(r,"text/html").body.childNodes.forEach(p=>{p.nodeName==="H2"?u.push({type:"h2",content:p.textContent??""}):p.nodeName==="H3"||p.nodeName==="H4"?u.push({type:"h3",content:p.textContent??""}):p.nodeName==="P"&&u.push({type:"p",content:p.textContent??""})}),console.log(u);let k=new st;k.subInfo=[];let _=new me;_.contents=[];for(let p=0;p<u.length;p++){const C=u[p];C.type=="h2"?k.title=C.content:C.type=="h3"?(_=new me,_.contents=[],_.title=C.content,f.checkMaterial[i]!=null&&f.checkMaterial[i].subInfo!=null&&f.checkMaterial[i].subInfo[0].materials!=null&&(_.materials=[],f.checkMaterial[i].subInfo[0].materials.forEach(j=>{_.materials.push(Number(j.id))})),console.log(_)):C.type=="p"&&(p==u.length-1||u[p+1]!=null&&u[p+1].type=="h3"?(_.contents.push(C.content),k.subInfo.push(_)):_.contents.push(C.content))}L.value.push(k)}console.log(L.value),F("save",L.value)}function U(){console.log(f.checkMaterial),a()}return(i,r)=>{const u=Be("ckeditor");return d(),m("div",null,[(d(!0),m(S,null,E(B.preventions,(g,h)=>(d(),m("div",ct,[(d(),Fe(u,{id:"editor-"+h,editor:b.value,modelValue:g,key:h,config:T.value,onInput:x=>w(h,x)},null,8,["id","editor","modelValue","config","onInput"])),o("div",ut,[dt,o("div",mt,[(d(!0),m(S,null,E(B.controlMaterial,x=>(d(),m("div",gt,[o("input",{id:"black","aria-describedby":"comments-description",name:"black",checked:Y(h,x),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 custom-checkbox",onClick:k=>M(h,x)},null,8,ft),o("label",vt,$(x.name),1)]))),256))])])]))),256)),o("div",pt,[o("button",ht,[o("a",{class:"float-right cursor-pointer",onClick:r[0]||(r[0]=g=>P())},bt)])]),o("div",xt,[o("button",yt,[o("a",{class:"cursor-pointer font-semibold",onClick:r[1]||(r[1]=g=>N())},"取消")]),o("button",kt,[o("a",{class:"cursor-pointer",onClick:r[2]||(r[2]=g=>U())},"儲存變更")])])])}}});const wt={key:0,class:"main-filter-bg"},It={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8"},St=o("div",{class:"flex items-center"},[o("label",{class:"text-2xl font-semibold text-gray-900"},"病蟲害基本資料")],-1),Et={class:"flex mt-3 items-center"},Lt=o("label",{for:"type",class:"w-24 text-sm font-medium align-bottom text-gray-900"},"病蟲害類型",-1),Mt={id:"type"},Tt={class:"flex mt-5 items-center"},At=o("label",{for:"chinese",class:"w-24 text-sm font-medium align-bottom text-gray-900"},"病蟲害名稱",-1),$t={class:"mt-3 flex"},Pt=o("label",{for:"part",class:"mt-2 w-24 text-sm font-medium align-bottom text-gray-900"},"危害部位",-1),Nt={class:"grid grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 sm:grid-cols-4 gap-3"},Dt={class:"flex h-6 items-center"},zt=["id","name","checked","onClick"],Ot=["for"],Bt={class:"mt-3 flex"},Ft=o("label",{for:"symptom",class:"mt-1 w-24 text-sm font-medium align-bottom text-gray-900"},"病徵",-1),Rt={class:"grid grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 sm:grid-cols-4 gap-2"},Vt={class:"flex h-6 items-center"},Yt=["id","name","checked","onClick"],Ut=["for"],jt={key:0,class:"mt-3 flex"},Gt=o("label",{for:"color",class:"mt-1 w-24 text-sm font-medium align-bottom text-gray-900"},"蟲體顏色",-1),Ht={class:"grid grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 sm:grid-cols-4 gap-2"},Qt={class:"flex h-6 items-center"},qt=["id","name","checked","onClick"],Kt=["for"],Zt={key:1,class:"flex mt-3 items-center"},Jt=o("label",{for:"pestsize",class:"w-24 text-sm font-medium align-bottom text-gray-900"},"蟲體大小",-1),Wt={id:"containerDeep"},Xt={class:"flex mt-3 items-center"},es=o("label",{for:"environment",class:"w-24 text-sm font-medium align-bottom text-gray-900"},"好發環境",-1),ts={id:"containerDeep"},ss={class:"mt-3 flex items-baseline"},os=o("label",{for:"cover-photo",class:"mt-1 w-24 text-sm font-medium align-bottom text-gray-900"},"上傳圖片",-1),ns={class:"grid grid-cols-1 w-full"},ls={class:"flex w-full rounded-full px-4 py-2 mt-1"},is={class:"flex items-center w-1/2 text-sm mx-2"},as=["src"],rs=["src"],cs={class:"flex text-sm ml-5 justify-end w-full text-gray-600"},us={class:""},ds=["onClick"],ms=o("img",{src:et,width:"18",alt:""},null,-1),gs=[ms],fs={class:"flex w-full rounded-lg py-1 mt-1 border-gray-900/25"},vs={class:"text-center"},ps={class:"flex text-sm leading-6 upload-text-color"},hs={for:"file-upload",class:"flex items-center relative cursor-pointer rounded-md text-indigo-600 focus-within:outline-none hover:text-indigo-500"},_s=o("img",{src:We,width:"15",class:"w-4 h-4",alt:""},null,-1),bs=o("p",null,"上傳檔案",-1),xs={class:"mt-7 grid grid-cols-1 w-full"},ys=o("label",{class:"text-2xl font-semibold text-gray-900"},"防治資訊",-1),ks={key:1,class:"main-filter-bg"},Cs=o("label",{class:"text-2xl font-semibold text-gray-900"},"權限不足",-1),ws=[Cs],As=ge({__name:"EditBugView",setup(B){var oe,ne,le,ie,ae,re,ce;const F=Re(),{selectedAccount:f}=Ve(F),L=v(""),b=v(""),T=v(""),A=v("N"),P=Ye(),Y=Ue();let M=v([]);const N=v();v();const w=je(),a=v(),{uploadFile:U,hasFailed:i,state:r,downloadUrl:u,progressInPercentage:g}=Ke(),h=v(),x=v(),k=v(),_=v(),p=v(),C=v(),j=v(),G=v([]),X=it(),ee=ot(),fe=Ze({}),ve=v([{id:1,name:"蟲害",value:"pests"},{id:2,name:"病害",value:"diseases"}]),l=v({chinese:((oe=a.value)==null?void 0:oe.name.chinese)??"",list:((ne=a.value)==null?void 0:ne.images.list)??[],profile:((le=a.value)==null?void 0:le.images.profile)??[],size:((ie=a.value)==null?void 0:ie.size.name)??"",colors:Q()??[],environment:((ae=a.value)==null?void 0:ae.environment.name)??"",organs:H()??[],preventions:((re=a.value)==null?void 0:re.preventions)??[],symptoms:((ce=a.value)==null?void 0:ce.symptoms)??[]}),pe=t=>{console.log("getContent"),console.log(l.value),Oe(t)};function he(t){const e=t.target;let n=[];n=M.value,console.log(n),e&&e.files&&(N.value=e.files[0],n.push(N.value),console.log(N.value)),M.value=n}function _e(){b.value=b.value!="pests"?"pests":"diseases",T.value=b.value=="pests"?"蟲害":"病害"}function be(){w.getClassList(I.CLASS_TYPE_PLANTORGAN).subscribe(t=>{console.log(t),h.value=t,xe()})}function xe(){w.getClassList(I.CLASS_TYPE_SYMPTOM).subscribe(t=>{console.log(t),x.value=t,ye()})}function ye(){w.getClassList(I.CLASS_TYPE_COLOR).subscribe(t=>{console.log(t),k.value=t,ke()})}function ke(){w.getClassList(I.CLASS_TYPE_PESTSIZE).subscribe(t=>{console.log(t),_.value=t,Ce()})}function Ce(){w.getClassList(I.CLASS_TYPE_ENVIRONMENT).subscribe(t=>{console.log(t),p.value=t,we()})}function we(){w.getDataList(I.GET_LIST_TYPE_MATERIALS,0).subscribe(t=>{console.log(t),C.value=t,Ie()})}function Ie(){w.getClassList(I.CLASS_TYPE_CONTROL_MATERIAL_TYPE).subscribe(t=>{console.log(t),j.value=t,A.value=="Y"?Se():K()})}function Se(){b.value=="pests"?Ee(L.value):Le(L.value)}function Ee(t){X.getDamageInfo(I.GET_DAMAGE_PESTS_INFO,t).subscribe(e=>{var n,s,c,y,D,z,O;console.log(e),a.value=e,l.value={chinese:((n=a.value)==null?void 0:n.name.chinese)??"",list:((s=a.value)==null?void 0:s.images.list)??[],profile:((c=a.value)==null?void 0:c.images.profile)??[],size:((y=a.value)==null?void 0:y.size.name)??"",colors:Q()??[],environment:((D=a.value)==null?void 0:D.environment.name)??"",organs:H()??[],preventions:((z=a.value)==null?void 0:z.preventions)??[],symptoms:((O=a.value)==null?void 0:O.symptoms)??[]},K(),console.log(l.value)})}function Le(t){X.getDamageInfo(I.GET_DAMAGE_DISEASES_INFO,t).subscribe(e=>{var n,s,c,y,D,z,O;console.log(e),a.value=new at(e),l.value={chinese:((n=a.value)==null?void 0:n.name.chinese)??"",list:((s=a.value)==null?void 0:s.images.list)??[],profile:((c=a.value)==null?void 0:c.images.profile)??[],size:((y=a.value)==null?void 0:y.size.name)??"",colors:Q()??[],environment:((D=a.value)==null?void 0:D.environment.name)??"",organs:H()??[],preventions:((z=a.value)==null?void 0:z.preventions)??[],symptoms:((O=a.value)==null?void 0:O.symptoms)??[]},K(),console.log(l.value)})}function H(){let t=[];if(a.value)for(let e=0;e<a.value.organs.length;e++){const n=a.value.organs[e];t.push(n.name)}return t}function Q(){let t=[];if(a.value)for(let e=0;e<a.value.colors.length;e++){const n=a.value.colors[e];t.push(n.name)}return t}function Me(t){let e=l.value.colors;e.includes(t.name)?e=e.filter(n=>n!==t.name):e.push(t.name),l.value.colors=e}function Te(t){let e=l.value.organs;e.includes(t.name)?e=e.filter(n=>n!==t.name):e.push(t.name),l.value.organs=e}function Ae(t){let e=l.value.symptoms;e.includes(t.name)?e=e.filter(n=>n!==t.name):e.push(t.name),l.value.symptoms=e}function q(t){if(t=="colors"){if(k.value){let e=[];for(let n=0;n<k.value.length;n++){const s=k.value[n];for(let c=0;c<l.value.colors.length;c++)l.value.colors[c]==s.name&&e.push(Number(s.id))}return e}}else if(t=="organs"){if(h.value){let e=[];for(let n=0;n<h.value.length;n++){const s=h.value[n];for(let c=0;c<l.value.organs.length;c++)l.value.organs[c]==s.name&&e.push(Number(s.id))}return e}}else if(t=="symptoms"&&x.value){let e=[];for(let n=0;n<x.value.length;n++){const s=x.value[n];for(let c=0;c<l.value.symptoms.length;c++)l.value.symptoms[c]==s.name&&e.push(s.id)}return e}return[]}function $e(){if(p.value)for(let t=0;t<p.value.length;t++){const e=p.value[t];if(e.name==l.value.environment)return e.id}return 0}function Pe(){if(_.value)for(let t=0;t<_.value.length;t++){const e=_.value[t];if(e.name==l.value.size)return e.id}return 0}function K(){if(l.value.preventions.length==0){let e=new J;e.title="標題";let n=new W;n.title="副標題",n.contents=["內文"],e.subInfo=[n];const s=te(e);G.value.push(s);return}let t=[];for(let e=0;e<l.value.preventions.length;e++){const n=l.value.preventions[e],s=te(n);console.log(s),t.push(s)}G.value=t}function te(t){let e="";if(t.title==null)return e;console.log(t),e="<h2><strong>"+t.title+"</strong></h2>";for(let n=0;n<t.subInfo.length;n++){const s=t.subInfo[n];e=e+"<h3><strong>"+s.title+"</strong></h3>";for(let c=0;c<s.contents.length;c++){const y=s.contents[c];e=e+"<p>"+y+"</p>"}}return e}function se(){Y.go(-1)}function Ne(t){var s;let e=new rt;e.name=l.value.chinese,e.environment=$e(),e.size=Pe(),e.colors=q("colors"),e.organs=q("organs"),e.symptoms=q("symptoms");let n=new nt({list:[],profile:[],calendar:""});n.list=l.value.list??[],n.profile=l.value.profile??[],e.images=n,e.preventions=t,A.value!="Y"&&(b.value=T.value=="蟲害"?"pests":"diseases"),console.log(e),console.log(b.value),console.log(A.value),A.value=="Y"?(e.id=Number((s=a.value)==null?void 0:s.id),ee.modifyDamageProfile(b.value,e).subscribe(c=>{console.log(c),se()})):ee.addDamageProfile(b.value,e).subscribe(c=>{console.log(c),se()})}function De(t){if(typeof t=="string"){let e=l.value;e.profile=e.profile.filter(n=>n!==t),l.value=e}else M.value=M.value.filter(e=>e!==t)}function ze(t){let e="";return e=URL.createObjectURL(t),e}async function Oe(t){const e=[];let n=[];M.value.forEach(s=>{const c=U({storage:Xe,path:s.name,data:s}).then(y=>{n.push(y),console.log(`File uploaded successfully. Download URL: ${y}`)}).catch(()=>{console.error("File upload failed.")});e.push(c)}),Promise.all(e).then(()=>{console.log("files uploaded success."),l.value.profile=[...l.value.profile,...n],l.value.list=[...l.value.list,...n],Ne(t)}).catch(s=>{console.error("Error:",s)})}return Ge(()=>{L.value=P.query.id,b.value=P.query.type,T.value=b.value=="pests"?"蟲害":"病害",A.value=P.query.isEdit,be()}),(t,e)=>{var n;return(n=R(f))!=null&&n.isAdmin?(d(),m("div",wt,[ue(R(Je),{"validation-schema":R(fe),onSubmit:e[6]||(e[6]=()=>{})},{default:He(()=>[o("div",It,[St,o("div",Et,[Lt,V(o("select",{id:"type",name:"type","onUpdate:modelValue":e[0]||(e[0]=s=>T.value=s),class:"-ml-2 w-2/5 rounded-full border-0 py-2 text-gray-900 main-filter-bg shadow-sm ring-1 ring-inset ring-gray-500 sm:text-sm",onChange:e[1]||(e[1]=s=>_e())},[(d(!0),m(S,null,E(ve.value,s=>(d(),m("option",Mt,$(s.name),1))),256))],544),[[Z,T.value]])]),o("div",Tt,[At,V(o("input",{type:"text",name:"chinese",id:"chinese","onUpdate:modelValue":e[2]||(e[2]=s=>l.value.chinese=s),class:"block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"病蟲害名"},null,512),[[Qe,l.value.chinese]])]),o("div",$t,[Pt,o("div",Nt,[(d(!0),m(S,null,E(h.value,s=>(d(),m("div",Dt,[o("input",{id:s.name,"aria-describedby":"comments-description",name:s.name,checked:l.value.organs.includes(s.name),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 custom-checkbox",onClick:c=>Te(s)},null,8,zt),o("label",{for:s.name,class:"ml-1 text-xs leading-6 text-gray-900"},$(s.name),9,Ot)]))),256))])]),o("div",Bt,[Ft,o("div",Rt,[(d(!0),m(S,null,E(x.value,s=>(d(),m("div",Vt,[o("input",{id:s.name,"aria-describedby":"comments-description",name:s.name,checked:l.value.symptoms.includes(s.name),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 custom-checkbox",onClick:c=>Ae(s)},null,8,Yt),o("label",{for:s.name,class:"ml-1 text-xs leading-6 text-gray-900"},$(s.name),9,Ut)]))),256))])]),b.value=="pests"?(d(),m("div",jt,[Gt,o("div",Ht,[(d(!0),m(S,null,E(k.value,s=>(d(),m("div",Qt,[o("input",{id:s.name,"aria-describedby":"comments-description",name:s.name,checked:l.value.colors.includes(s.name),type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 custom-checkbox",onClick:c=>Me(s)},null,8,qt),o("label",{for:s.name,class:"ml-1 text-xs leading-6 text-gray-900"},$(s.name),9,Kt)]))),256))])])):de("",!0),b.value=="pests"?(d(),m("div",Zt,[Jt,V(o("select",{id:"pestSize",name:"pestSize","onUpdate:modelValue":e[3]||(e[3]=s=>l.value.size=s),class:"w-full rounded-full border-0 px-4 py-2 text-gray-900 main-filter-bg shadow-sm ring-1 ring-inset ring-gray-500 sm:text-sm sm:leading-6"},[(d(!0),m(S,null,E(_.value,s=>(d(),m("option",Wt,$(s.name),1))),256))],512),[[Z,l.value.size]])])):de("",!0),o("div",Xt,[es,V(o("select",{id:" environment",name:" environment","onUpdate:modelValue":e[4]||(e[4]=s=>l.value.environment=s),class:"w-full rounded-full border-0 px-4 py-2 text-gray-900 main-filter-bg shadow-sm ring-1 ring-inset ring-gray-500 sm:text-sm sm:leading-6"},[(d(!0),m(S,null,E(p.value,s=>(d(),m("option",ts,$(s.name),1))),256))],512),[[Z,l.value.environment]])]),o("div",ss,[os,o("div",ns,[(d(!0),m(S,null,E([...l.value.profile,...R(M)],s=>(d(),m("div",ls,[o("div",is,[typeof s=="string"?(d(),m("img",{key:0,src:s,alt:"",class:"object-cover object-center rounded-md h-36 w-48"},null,8,as)):(d(),m("img",{key:1,src:ze(s),alt:"",class:"object-cover object-center rounded-md h-36 w-48"},null,8,rs)),o("div",cs,[o("button",us,[o("a",{class:"float-right cursor-pointer",onClick:c=>De(s)},gs,8,ds)])])])]))),256)),o("div",fs,[o("div",vs,[o("div",ps,[o("label",hs,[_s,bs,o("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:e[5]||(e[5]=s=>he(s)),accept:"image/*"},null,32)])])])])])]),o("div",xs,[ys,ue(Ct,{checkMaterial:l.value.preventions,controlMaterial:C.value,preventions:G.value,onSave:pe,class:"mt-3 w-full"},null,8,["checkMaterial","controlMaterial","preventions"])])])]),_:1},8,["validation-schema"])])):(d(),m("div",ks,ws))}}});export{As as default};
