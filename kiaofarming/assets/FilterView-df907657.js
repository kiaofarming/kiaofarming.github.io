import{d as fe,b as v,u as ge,l as me,e as ve,f as _e,s as be,g as xe,r as ye,o as a,h as f,k as g,i as o,a as t,n,j as E,F as N,m as D,A as h,t as j,c as pe,w as _,R as we,p as Ce,y as M,q as ke,T as Te,M as Pe}from"./index-52de95f1.js";import{F as Le,_ as he}from"./FilterModal-2f2cea6f.js";import{_ as Ae,a as Se}from"./delete-3bc6e9da.js";import{_ as Fe}from"./edit-ad45d112.js";import{r as Ee}from"./StarIcon-7f447a30.js";const Ne={class:"main-filter-bg"},De={class:"mx-12 sm:mx-12"},je={class:"flex flex-wrap items-center"},Ie=t("img",{class:"object-cover",src:he,width:"20",alt:""},null,-1),Ve=t("p",{class:"ml-1 font-semibold text-base"},"篩選條件",-1),Ge=[Ie,Ve],Re=t("p",{class:"py-1 my-6 font-semibold text-base text-gray-900"},"類別",-1),$e={class:"my-6"},Be={class:"my-6"},Ye=["onClick"],He=t("img",{src:Ae,alt:"",class:"w-9 h-9"},null,-1),Oe=t("img",{src:Fe,alt:"",class:"w-5 h-5"},null,-1),qe=t("p",{class:"ml-2 text-sm"},"編輯",-1),ze=t("img",{src:Se,alt:"",class:"w-5 h-5"},null,-1),Qe=t("p",{class:"ml-2 text-sm"},"刪除",-1),Ue=[ze,Qe],We=["onClick"],Je=["src"],Ke=["onClick"],Xe=["onClick"],Ze=t("p",{class:"mt-0.5 mr-2 block text-sm font-medium text-gray-500"},"容易種植",-1),Me={class:"flex flex-auto justify-end"},es={class:"px-1 py-0.5 rounded-full bg-gray-300 text-center text-xs text-gray-700 hover:bg-gray-400"},cs=fe({__name:"FilterView",setup(ss){let b=v(!1);const I=v(0),ee=ge(),T=me(),se=ve(),A=v([]),m=v([]),x=v(),P=v(!1),te=_e(),{selectedAccount:V}=be(te),y=v({}),ie=e=>{y.value=e,b.value=!1,de()},le=e=>{switch(e.class){case"葉菜":return"vegetableLeaves-card-bg vegetableLeaves-card-hover";case"花果菜":return"cauliflower-card-bg cauliflower-card-hover";case"根莖菜":return"rootVegetables-card-bg rootVegetables-card-hover";case"香辛料":return"spices-card-bg spices-card-hover";case"香藥草":return"fragrantHerbs-card-bg fragrantHerbs-card-hover";case"食用花卉":return"dinnerPlateFlowers-card-bg dinnerPlateFlowers-card-hover";case"五穀雜糧":return"wholeGrains-card-bg wholeGrains-card-hover";case"觀葉植物":return"foliagePlants-card-bg foliagePlants-card-hover";case"觀花植物":return"ornamentalPlants-card-bg ornamentalPlants-card-hover";default:return"vegetableLeaves-card-bg vegetableLeaves-card-hover"}};function re(){b.value=!0}function oe(e){var s;return e.id==((s=x.value)==null?void 0:s.id)?"plant-position-selected":"plant-position-unselect"}function ce(){return P.value==!0?"plant-position-selected":"plant-position-unselect"}function ae(){T.getClassList(h.CLASS_TYPE_PLANTTYPE).subscribe(e=>{console.log(e),A.value=e,x.value=A.value.find(s=>s.id===I.value),G(x.value)})}function ne(e){let s="";return(e!=null&&e.includes(3)||e!=null&&e.includes(4)||e!=null&&e.includes(5))&&(s=s+"春"),(e!=null&&e.includes(6)||e!=null&&e.includes(7)||e!=null&&e.includes(8))&&(s=s+"夏"),(e!=null&&e.includes(9)||e!=null&&e.includes(10)||e!=null&&e.includes(11))&&(s=s+"秋"),(e!=null&&e.includes(12)||e!=null&&e.includes(1)||e!=null&&e.includes(2))&&(s=s+"冬"),s=="春夏秋冬"&&(s="全年"),s}function G(e){e&&T.getDataList(h.GET_LIST_TYPE_PLANTS,e.id).subscribe(s=>{x.value=e,P.value=!1,m.value=s})}function ue(){T.getDataList(h.GET_LIST_TYPE_PLANTS,0).subscribe(e=>{P.value=!0,x.value=void 0,m.value=e})}function de(){T.getDataList(h.GET_LIST_TYPE_PLANTS,0).subscribe(e=>{console.log(e),P.value=!1,x.value=void 0,m.value=e;let s=y.value.level,p=[];s==null||s.length==0?p=m.value:p=m.value.filter(l=>s==null?void 0:s.some(c=>l.plantingDifficulty===c.rating));let i=y.value.season,u=[];i==null||i.length==0?u=p:u=p.filter(l=>{var Y,H,O,q,z,Q,U,W,J,K,X,Z;const c=((Y=l.plantMonth)==null?void 0:Y.includes(3))||((H=l.plantMonth)==null?void 0:H.includes(4))||((O=l.plantMonth)==null?void 0:O.includes(5)),R=((q=l.plantMonth)==null?void 0:q.includes(6))||((z=l.plantMonth)==null?void 0:z.includes(7))||((Q=l.plantMonth)==null?void 0:Q.includes(8)),$=((U=l.plantMonth)==null?void 0:U.includes(9))||((W=l.plantMonth)==null?void 0:W.includes(10))||((J=l.plantMonth)==null?void 0:J.includes(11)),B=((K=l.plantMonth)==null?void 0:K.includes(12))||((X=l.plantMonth)==null?void 0:X.includes(1))||((Z=l.plantMonth)==null?void 0:Z.includes(2));return i==null?void 0:i.some(L=>L.id==1?c&&R&&$&&B:L.id==2?c:L.id==3?R:L.id==4?$:B)});let d=y.value.cyopLifeCycle,r=[];d==null||d.length==0?r=u:r=u.filter(l=>d==null?void 0:d.some(c=>l.cropLifeCycle===c.id));let w=y.value.lightCondition,C=[];console.log(w),w==null||w.length==0?C=r:C=r.filter(l=>w==null?void 0:w.some(c=>{if(l.lightConditions!=null)return l.lightConditions.includes(c.id)})),console.log(C);let k=y.value.place,F=[];k==null||k.length==0?F=C:F=C.filter(l=>k==null?void 0:k.some(c=>{if(l.places!=null)return l.places.includes(c.id)})),m.value=F})}function S(e){ee.push({name:"vegetable-recommendation",params:{id:e.id}})}return xe(()=>{ae(),I.value=parseInt(se.query.id)}),(e,s)=>{const p=ye("router-link");return a(),f("div",Ne,[g(Le,{show:o(b),onClose:ie},null,8,["show"]),t("div",De,[t("div",{class:n(o(b)?"modal-open":"")},[t("div",je,[o(b)?E("",!0):(a(),f("button",{key:0,class:"flex items-center mx-2 px-2 py-0.5 text-base h-8 filter-btn-style",onClick:s[0]||(s[0]=i=>re())},Ge)),Re,t("div",$e,[t("button",{class:n([ce(),"mx-2 px-2 py-0.5 text-base"]),onClick:s[1]||(s[1]=i=>ue())},"全部",2)]),(a(!0),f(N,null,D(A.value,i=>(a(),f("div",Be,[t("button",{class:n([oe(i),"mx-2 px-2 py-0.5 text-base"]),onClick:u=>G(i)},j(i.name),11,Ye)]))),256))]),t("ul",{role:"list",class:n(o(b)?"grid grid-cols-2 gap-x-4 gap-y-8 mt-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-16":"grid grid-cols-2 gap-x-4 gap-y-8 mt-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-16")},[(a(!0),f(N,null,D(m.value,i=>{var u,d;return a(),f("li",{class:"relative",onClick:s[4]||(s[4]=()=>{})},[t("div",{class:n([le(i),"aspect-w-10 w-full h-40 overflow-hidden rounded-3xl focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:border hover:shadow-md"])},[(u=o(V))!=null&&u.isAdmin?(a(),pe(o(Pe),{key:0,as:"div",class:"flex justify-end"},{default:_(()=>[g(o(we),{class:"edit-color mx-1 my-1",onClick:s[2]||(s[2]=()=>{})},{default:_(()=>[He]),_:1}),g(Te,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:_(()=>[g(o(Ce),{class:"absolute z-10 mt-10 w-36 origin-top-right rounded-xl bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:_(()=>[g(o(M),null,{default:_(({active:r})=>[g(p,{to:o(ke).EDIT_PLANT+"/"+i.id,class:n([[r?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex"])},{default:_(()=>[Oe,qe]),_:2},1032,["to","class"])]),_:2},1024),g(o(M),null,{default:_(({active:r})=>[t("button",{class:n([[r?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"],"flex"]),onClick:s[3]||(s[3]=()=>{})},Ue,2)]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)):E("",!0),t("div",{class:"flex justify-center",onClick:r=>S(i)},[i.image!=null?(a(),f("img",{key:0,src:i.image[0],alt:"",class:n([[(d=o(V))!=null&&d.isAdmin?"-mt-5":"mt-4"],"pointer-events-none object-contain object-center w-28 group-hover:opacity-75"])},null,10,Je)):E("",!0)],8,We)],2),t("p",{class:"pointer-events-none mt-2 block truncate text-sm text-gray-900",onClick:r=>S(i)},j(i.name),9,Ke),t("div",{class:"flex mt-2",onClick:r=>S(i)},[Ze,(a(),f(N,null,D([0,1,2],r=>g(o(Ee),{key:r,class:n([i.plantingDifficulty>r?"start-yellow-color":"text-gray-400","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])),64)),t("div",Me,[t("button",es,j(ne(i.plantMonth)),1)])],8,Xe)])}),256))],2)],2)])])}}});export{cs as default};
