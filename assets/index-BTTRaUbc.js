function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as Q,r as j,o as O,a as o,c as n,b as t,u as f,t as m,F as y,e as w,p as D,f as C,g as M,n as $,h as S,i as E,j as x,k as tt,l as et,w as st,v as ot,s as nt,m as P,T as at,S as it,q as rt,x as lt,y as ct,z as dt}from"./vendor-CFk-bT5l.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(i){if(i.ep)return;i.ep=!0;const e=l(i);fetch(i.href,e)}})();const R=Q("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(u){this.isMobile=u}}}),z={Introduce:"简介",Conversations:"关于",Abilities:"功能",Jobs:"工作",Products:"产品",Works:"作品",Pricing:"买他",Footer:"联系",AgeTitle:"版本号即岁数",Name:"LZC"},ut=""+new URL("logo-D-pRNQ6W1734328844224.png",import.meta.url).href,T=(u,p)=>{const l=u.__vccOpts||u;for(const[r,i]of p)l[r]=i;return l},_t=u=>(D("data-v-21344e04"),u=u(),C(),u),mt={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},pt={id:"navbar-top",class:"container-xl"},bt={class:"jn-logo"},vt={class:"navbar-brand flex align-items-center align-content-center",href:"#"},gt=["src"],ht={class:"fw-bold"},ft=["title"],yt=_t(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),$t={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},jt={class:"navbar-nav"},wt=["href"],kt={__name:"Nav",setup(u){const p=j(0),l=()=>{const r=new Date,i=new Date("1996-12-17"),e=r.getTime()-i.getTime(),c=new Date(e),_=Math.abs(c.getUTCFullYear()-1970)+c.getMonth()/12;p.value=_.toFixed(2)};return O(()=>{l()}),(r,i)=>(o(),n("header",mt,[t("nav",pt,[t("div",bt,[t("a",vt,[t("span",null,[t("img",{src:f(ut),alt:"logo",class:"jn-logo-img"},null,8,gt)]),t("span",ht,m(f(z).Name),1),t("span",{class:"fw-lighter",title:f(z).AgeTitle},".v"+m(p.value),9,ft)])]),yt,t("div",$t,[t("div",jt,[(o(),n(y,null,w(["Introduce","Conversations","Abilities","Jobs","Products","Works","Pricing","Footer"],e=>t("a",{key:e,class:"nav-link",href:`#${e}`},m(f(z)[e]),9,wt)),64))])])])]))}},Tt=T(kt,[["__scopeId","data-v-21344e04"]]),H={name:"阿哲",subtitle:"一个喜欢运动和户外的程序猿",button:"OK，知道了"},Pt=`<p>哟，您来了，您请进。</p>
<p>欢迎来到阿哲的介绍页面。</p>
<p>在这里，你可以了解到这个人的基本信息，以及他的一些<strong>特性</strong>和<strong>功能</strong>，当然，还能了解到有哪些<strong>公司</strong>曾经使用过这个人。</p>
<p>在开始之前，请了解本页面：</p>
<ul>
<li>可以在办公室查看</li>
<li>可以一边走路一边看</li>
<li>可以在赛车场查看</li>
<li>可以不彻底煮熟的情况下查看</li>
<li>未成年人可以在监护人陪同下查看</li>
</ul>
`,J=u=>(D("data-v-53db45b1"),u=u(),C(),u),Ot={class:"text-dark mb-4 jn-introduce-doc"},Lt=["innerHTML"],Et={class:"btn-purple",href:"#Conversations"},It=J(()=>t("i",{class:"bi bi-arrow-down-circle"},null,-1)),St={key:0,class:"col-6 px-4 pt-4"},Mt=J(()=>t("div",{class:"jn-introduce-bg"},null,-1)),xt=[Mt],Rt={__name:"Introduce",setup(u){const p=R(),l=M(()=>p.isMobile),r=j(""),i=e=>e.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return r.value=i(Pt),(e,c)=>(o(),n("div",{class:$(["row jn-introduce justify-content-evenly pt-5 mx-0",l.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:$([l.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:$(["jn-introduce-title",[l.value?"jn-h2-mobile":"jn-h2"]])},m(f(H).name),3),t("h3",{class:$(["jn-introduce-subtitle",[l.value?"jn-h3-mobile":"jn-h3"]])},m(f(H).subtitle),3),t("div",Ot,[t("div",{innerHTML:r.value,class:"mb-4"},null,8,Lt),t("a",Et,[S(m(f(H).button)+"  ",1),It])])])],2),l.value?E("",!0):(o(),n("div",St,xt))],2))}},At=T(Rt,[["__scopeId","data-v-53db45b1"]]),Dt="modulepreload",Ct=function(u,p){return new URL(u,p).href},U={},h=function(p,l,r){let i=Promise.resolve();if(l&&l.length>0){const e=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),b=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.all(l.map(_=>{if(_=Ct(_,r),_ in U)return;U[_]=!0;const a=_.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(!!r)for(let g=e.length-1;g>=0;g--){const k=e[g];if(k.href===_&&(!a||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${d}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":Dt,a||(s.as="script",s.crossOrigin=""),s.href=_,b&&s.setAttribute("nonce",b),document.head.appendChild(s),a)return new Promise((g,k)=>{s.addEventListener("load",g),s.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${_}`)))})}))}return i.then(()=>p()).catch(e=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=e,window.dispatchEvent(c),!c.defaultPrevented)throw e})},Vt=""+new URL("g1-CrI8Tb461734328844224.png",import.meta.url).href,zt=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),Ht=""+new URL("g2-DDuPLeXY1734328844224.png",import.meta.url).href,Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Ht},Symbol.toStringTag,{value:"Module"})),Bt=""+new URL("g3-C175VPXf1734328844224.png",import.meta.url).href,Ut=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),Nt=""+new URL("g4-D-q2ct0f1734328844224.png",import.meta.url).href,Wt=Object.freeze(Object.defineProperty({__proto__:null,default:Nt},Symbol.toStringTag,{value:"Module"})),qt=""+new URL("m1-C2mM0dfF1734328844224.png",import.meta.url).href,Jt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"})),Yt=""+new URL("m2-BkRP9CPd1734328844224.png",import.meta.url).href,Xt=Object.freeze(Object.defineProperty({__proto__:null,default:Yt},Symbol.toStringTag,{value:"Module"})),Gt=""+new URL("m3-vbqHpX0x1734328844224.png",import.meta.url).href,Kt=Object.freeze(Object.defineProperty({__proto__:null,default:Gt},Symbol.toStringTag,{value:"Module"})),Zt=""+new URL("m4-LJ-m-nPJ1734328844224.png",import.meta.url).href,Qt=Object.freeze(Object.defineProperty({__proto__:null,default:Zt},Symbol.toStringTag,{value:"Module"})),te={Badge:"造禅者说"},ee={class:"jn-conversations mt-5 position-relative",id:"Conversations"},se={class:"badge bg-purple jn-badge"},oe={class:"row justify-content-evenly mt-5 mx-0"},ne={class:"px-5 col-12"},ae={key:0},ie=["innerHTML"],re=["src"],le={__name:"Conversations",setup(u){const p=j(!1),l=Object.assign({"/contents/conversations/conv1.md":()=>h(()=>import("./conv1-BwzuHvZA.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv2.md":()=>h(()=>import("./conv2-DcKSurbT.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv3.md":()=>h(()=>import("./conv3-TyaX4iMy.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv4.md":()=>h(()=>import("./conv4-vYn461Pb.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv5.md":()=>h(()=>import("./conv5-CM7CKxLk.js"),__vite__mapDeps([]),import.meta.url)}),r=Object.assign({"/contents/conversations/images/g1.png":zt,"/contents/conversations/images/g2.png":Ft,"/contents/conversations/images/g3.png":Ut,"/contents/conversations/images/g4.png":Wt,"/contents/conversations/images/m1.png":Jt,"/contents/conversations/images/m2.png":Xt,"/contents/conversations/images/m3.png":Kt,"/contents/conversations/images/m4.png":Qt}),i=x([]),e=async()=>{const b=Object.values(l).map(async _=>{const a=await _(),d=a.attributes,v=Object.keys(r).find(g=>g.includes(d.avatar)),s=v?r[v].default:null;return{html:c(a.html),attributes:{...d,avatar:s}}});i.push(...await Promise.all(b)),i.sort((_,a)=>a.attributes.date-_.attributes.date),p.value=!0},c=b=>b.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return O(async()=>{await e()}),(b,_)=>(o(),n("div",ee,[t("span",se,m(f(te).Badge),1),t("div",oe,[t("div",ne,[p.value?(o(),n("div",ae,[(o(!0),n(y,null,w(i,(a,d)=>(o(),n("div",{key:d,class:$(`row flex-nowrap align-items-start ${d%2===0?"":"flex-row-reverse"}`)},[t("div",{class:$(`conversation ${d%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:a.html},null,10,ie),t("div",{class:$(["col-4 col-md-3",`jn-img-${d%2===0?"right":"left"}`])},[t("img",{src:a.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,re)],2)],2))),128))])):E("",!0)])])]))}},ce=T(le,[["__scopeId","data-v-7d5fe3a4"]]),N={Badge:"主要功能",Title:"存在而造"},de=`<p>阿哲这个人，主要包含 4 个核心的功能。</p>
<p>既然功能是 4 个了，不妨再来四个基本原则。</p>
<p>无论做哪件事，阿哲都遵循着这些原则：</p>
<ul>
<li>以业务为中心</li>
<li>以目标为导向</li>
<li>以数据为依据</li>
<li>以存在为意义</li>
</ul>
<p>看不懂？没关系，我也看不懂，但这样说就能假装很专业。</p>
`,ue={class:"jn-abilities mt-5 position-relative",id:"Abilities"},_e={class:"badge bg-success jn-badge"},me={class:"row justify-content-evenly mt-5 mx-0"},pe={class:"jn-left-panel mb-4 col-md-5 col-12"},be={class:"jn-h2"},ve=["innerHTML"],ge={key:0,class:"jn-right-panel col-md-7 col-12"},he={class:"card jn-card jn-abilities-card h-100 jn-animate-card"},fe={key:0,class:"card-body"},ye={class:"jn-icon"},$e={class:"card-title"},je=["innerHTML"],we={__name:"Abilities",setup(u){const p=j(!1),l=j(""),r=b=>b.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");l.value=r(de);const i=Object.assign({"/contents/abilities/ability1.md":()=>h(()=>import("./ability1-Cm0awv9Q.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability2.md":()=>h(()=>import("./ability2-kEFZ97wZ.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability3.md":()=>h(()=>import("./ability3-CdG7boYL.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability4.md":()=>h(()=>import("./ability4-CInmfoJw.js"),__vite__mapDeps([]),import.meta.url)}),e=x([]),c=async()=>{const b=Object.values(i).map(_=>_().then(a=>({html:a.html,attributes:a.attributes})));e.push(...await Promise.all(b)),e.sort((_,a)=>_.attributes.date<a.attributes.date?1:-1),p.value=!0};return O(async()=>{await c()}),(b,_)=>(o(),n("div",ue,[t("span",_e,m(f(N).Badge),1),t("div",me,[t("div",pe,[t("h2",be,m(f(N).Title),1),t("div",{innerHTML:l.value},null,8,ve)]),p.value?(o(),n("div",ge,[(o(!0),n(y,null,w(Math.ceil(e.length/2),a=>(o(),n("div",{key:a,class:"row"},[(o(),n(y,null,w(2,d=>t("div",{key:d,class:"col-md-6 col-12 mb-5"},[t("div",he,[e[(a-1)*2+(d-1)]?(o(),n("div",fe,[t("div",ye,[t("i",{class:$(["bi",e[(a-1)*2+(d-1)].attributes.icon])},null,2)]),t("h5",$e,m(e[(a-1)*2+(d-1)].attributes.Title),1),t("div",{innerHTML:e[(a-1)*2+(d-1)].html,class:"jn-card-text"},null,8,je)])):E("",!0)])])),64))]))),128))])):E("",!0)])]))}},ke=T(we,[["__scopeId","data-v-716ba1c9"]]),W={Badge:"都谁用过",Title:"好不好都用过"},Te=`<p>如果阿哲是一个代码库，那么他上线已经快 30 年了，阿哲的用户群体非常广泛。换句话说，也比较杂乱。</p>
<p>作为一个具有精简并且具有完美抽象的代码库，用户们在使用的时候，会有不同的用法，包括：</p>
<ul>
<li>作为开发使用</li>
</ul>
<p>至于用起来觉得好不好，咱就不好说了，面子上总是要说好的。</p>
`,Pe={class:"jn-jobs mt-5 position-relative",id:"Jobs"},Oe={class:"badge bg-purple jn-badge"},Le={class:"row justify-content-evenly mt-5 mx-0"},Ee={class:"jn-left-panel mb-4 col-md-5 col-12"},Ie={class:"jn-h2"},Se=["innerHTML"],Me={key:0,class:"jn-right-panel col-md-7 col-12"},xe={class:"nav nav-underline mb-3 text-nowrap flex-nowrap",id:"pills-tab",role:"tablist"},Re=["onClick","id","aria-selected"],Ae=["id","aria-labelledby"],De={class:"fs-4"},Ce={class:"fw-bold"},Ve=["href"],ze={class:"badge bg-purple"},He=["innerHTML"],Fe={__name:"Jobs",setup(u){const p=R(),l=M(()=>p.isMobile),r=j(!1),i=j(0),e=j(""),c=Object.assign({"/contents/jobs/jqka.md":()=>h(()=>import("./jqka-Da-vhZzx.js"),__vite__mapDeps([]),import.meta.url),"/contents/jobs/ydy.md":()=>h(()=>import("./ydy-CMMococc.js"),__vite__mapDeps([]),import.meta.url),"/contents/jobs/znz.md":()=>h(()=>import("./znz-BbhUo7ok.js"),__vite__mapDeps([]),import.meta.url)}),b=x([]),_=async()=>{const d=Object.values(c).map(v=>v().then(s=>({html:a(s.html,"bi-arrow-right-circle-fill"),attributes:s.attributes})));b.push(...await Promise.all(d)),b.sort((v,s)=>v.attributes.date<s.attributes.date?1:-1),r.value=!0},a=(d,v)=>d.toString().replace(/<li>/g,`<p><i class="bi text-purple ${v}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return e.value=a(Te,"bi-emoji-expressionless-fill"),O(async()=>{await _()}),(d,v)=>(o(),n("div",Pe,[t("span",Oe,m(f(W).Badge),1),t("div",Le,[t("div",Ee,[t("h2",Ie,m(f(W).Title),1),t("div",{innerHTML:e.value},null,8,Se)]),r.value?(o(),n("div",Me,[t("ul",xe,[(o(!0),n(y,null,w(b,(s,g)=>(o(),n("li",{class:"nav-item",role:"presentation",key:"nav-item-"+s.attributes.id},[t("button",{class:$(["nav-link",{active:i.value===g}]),onClick:k=>i.value=g,id:"pills-"+s.attributes.id+"-tab",type:"button",role:"tab","aria-selected":i.value===g},m(s.attributes.company),11,Re)]))),128))]),t("div",{class:$(["tab-content jn-tab-content card jn-card mb-5",[l.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(o(!0),n(y,null,w(b,(s,g)=>(o(),n("div",{class:$(["tab-pane fade",{"show active":i.value===g}]),key:"tab-pane-"+s.attributes.id,id:"jobs-"+s.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+s.attributes.id+"-tab",tabindex:"0"},[t("div",De,[t("span",Ce,m(s.attributes.title),1),S(" @ "),t("a",{class:"text-decoration-none link-purple",href:s.attributes.url,target:"_blank",rel:"noopener noreferrer"},m(s.attributes.company),9,Ve)]),t("div",ze,m(s.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:s.html},null,8,He)],10,Ae))),128))],2)])):E("",!0)])]))}},Be=T(Fe,[["__scopeId","data-v-087049e8"]]),Ue=""+new URL("ChinaVis2019_Poster-2yng55fc1734328844224.png",import.meta.url).href,Ne=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),We=""+new URL("av-standard-Blaaj_Xb1734328844224.png",import.meta.url).href,qe=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"})),Je=""+new URL("movingchart01-aQdUYmY-1734328844224.png",import.meta.url).href,Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Je},Symbol.toStringTag,{value:"Module"})),Xe=""+new URL("movingchart02-W1Dl15uu1734328844224.png",import.meta.url).href,Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"})),Ke=""+new URL("movingchart03-CVP4DiE51734328844224.png",import.meta.url).href,Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"})),Qe=""+new URL("table-C1XGm_xX1734328844224.jpg",import.meta.url).href,ts=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"})),es=""+new URL("ydysaas-Ci8ntSfI1734328844224.png",import.meta.url).href,ss=Object.freeze(Object.defineProperty({__proto__:null,default:es},Symbol.toStringTag,{value:"Module"})),os=""+new URL("zchart-ioBbMW3s1734328844224.png",import.meta.url).href,ns=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"})),as={class:"carousel"},is={class:"carousel-inner"},rs=["src","alt","onClick"],ls={key:0,class:"indicators"},cs=["onClick"],ds=["src"],us={__name:"Carousel",props:{images:{type:Array,required:!0}},setup(u){const p=u,{images:l}=tt(p),r=j(0),i=j(!1),e=j(null),c=g=>{s(),e.value=g,i.value=!0},b=()=>{i.value=!1,v()},_=M(()=>l.value.length);let a=null;const d=()=>{r.value=(r.value+1)%_.value},v=()=>{a===null&&(a=setInterval(d,3e3))},s=()=>{clearInterval(a),a=null};return O(()=>{v()}),et(()=>{s()}),(g,k)=>(o(),n("div",as,[t("div",is,[(o(!0),n(y,null,w(f(l),(A,L)=>(o(),n("div",{key:L,class:$(["carousel-item",{active:L===r.value}])},[t("img",{src:A,class:"img-fluid",alt:`Image ${L+1}`,onClick:V=>c(A)},null,8,rs)],2))),128))]),f(l)&&f(l).length>1?(o(),n("div",ls,[(o(!0),n(y,null,w(f(l),(A,L)=>(o(),n("button",{key:L,class:$({active:L===r.value}),onClick:V=>r.value=L},null,10,cs))),128))])):E("",!0),st(t("div",{class:"preview-overlay",onClick:b},[t("img",{src:e.value,class:"preview-image",alt:"Preview"},null,8,ds)],512),[[ot,i.value]])]))}},_s=T(us,[["__scopeId","data-v-28a23e35"]]),q={Badge:"代表代码库",Title:"代码生花"},ms=`<p>从本科到工作这些年，我写了很多代码，这些是我参与过或者独立负责的项目，以及一些个人项目。</p>
`,ps=u=>(D("data-v-1732c7e7"),u=u(),C(),u),bs={class:"jn-products mt-5 position-relative",id:"Products"},vs={class:"badge bg-dark jn-badge"},gs={class:"row justify-content-evenly mt-5 mx-0"},hs={class:"jn-left-panel mb-4 col-md-5 col-12"},fs={class:"sticky-wrapper"},ys={class:"jn-h2"},$s=["innerHTML"],js={key:0,class:"jn-right-panel col-md-7 col-12"},ws={class:"col-12 mb-5 jn-product-card"},ks={class:"card jn-card"},Ts={class:"card-body"},Ps={class:"card-title"},Os=["href"],Ls=ps(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),Es=[Ls],Is={class:"card-title mt-3"},Ss={class:"row my-3 align-items-start"},Ms=["innerHTML"],xs={class:"col-md-4 col-12 pb-2"},Rs={class:"jn-cover-img"},As={__name:"Products",setup(u){const p=R(),l=M(()=>p.isMobile),r=j(!1),i=j(""),e=d=>d.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");i.value=e(ms);const c=Object.assign({"/contents/products/chinavis.md":()=>h(()=>import("./chinavis-BeX-CeqN.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/movingchart.md":()=>h(()=>import("./movingchart-DwGZo2DR.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/standardchart.md":()=>h(()=>import("./standardchart-CgLaMysG.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/table.md":()=>h(()=>import("./table-CQKLJwxp.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/ydysaas.md":()=>h(()=>import("./ydysaas-BJDZvk1x.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/znzchart.md":()=>h(()=>import("./znzchart-C9TK_mj9.js"),__vite__mapDeps([]),import.meta.url)}),b=Object.assign({"/contents/products/images/ChinaVis2019_Poster.png":Ne,"/contents/products/images/av-standard.png":qe,"/contents/products/images/movingchart01.png":Ye,"/contents/products/images/movingchart02.png":Ge,"/contents/products/images/movingchart03.png":Ze,"/contents/products/images/table.jpg":ts,"/contents/products/images/ydysaas.png":ss,"/contents/products/images/zchart.png":ns}),_=x([]),a=async()=>{const d=Object.values(c).map(async v=>{const s=await v(),g=s.attributes;if(g.cover){const k=g.cover.split(",");return k.forEach((A,L)=>{const V=Object.keys(b).find(Z=>Z.includes(A)),K=V?b[V].default:null;k[L]=K}),{html:e(s.html),attributes:{...g,cover:k}}}return{html:e(s.html),attributes:{...g,cover:null}}});_.push(...await Promise.all(d)),_.sort((v,s)=>{const g=new Date(v.attributes.date).getTime();return new Date(s.attributes.date).getTime()-g}),r.value=!0};return O(async()=>{await a(),l.value||nt(".sticky-wrapper",{stickyBitStickyOffset:100})}),(d,v)=>(o(),n("div",bs,[t("span",vs,m(f(q).Badge),1),t("div",gs,[t("div",hs,[t("div",fs,[t("h2",ys,m(f(q).Title),1),t("div",{innerHTML:i.value},null,8,$s)])]),r.value?(o(),n("div",js,[(o(!0),n(y,null,w(_,(s,g)=>(o(),n("div",{key:s,class:"row justify-content-between"},[t("div",ws,[t("div",ks,[t("div",Ts,[t("h5",Ps,[S(m(s.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:s.attributes.url,target:"_blank",rel:"noopener noreferrer"},Es,8,Os)]),t("div",Is,[(o(!0),n(y,null,w(s.attributes.tags,k=>(o(),n("span",{key:g,class:"badge bg-dark jn-tags me-2"},m(k),1))),128))]),t("div",Ss,[t("div",{innerHTML:s.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,Ms),t("div",xs,[t("div",Rs,[P(_s,{images:s.attributes.cover},null,8,["images"])])])])])])])]))),128))])):E("",!0)])]))}},Ds=T(As,[["__scopeId","data-v-1732c7e7"]]),Cs={Badge:"涉猎并参与的项目"},Vs="",zs=u=>(D("data-v-63bd1dd9"),u=u(),C(),u),Hs={class:"jn-works mt-5 position-relative",id:"Works"},Fs={class:"badge bg-success jn-badge"},Bs={key:0,class:"row mt-5 mx-0 jn-works-row"},Us={class:"card jn-works-card h-100"},Ns={class:"card-body"},Ws={class:"card-title"},qs=["href"],Js=zs(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),Ys=[Js],Xs={class:"card-title mt-3"},Gs={class:"card-title mt-3"},Ks=["innerHTML"],Zs={__name:"Works",setup(u){const p=j(!1),l=j(""),r=b=>b.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");l.value=r(Vs);const i=Object.assign({"/contents/works/Taro.md":()=>h(()=>import("./Taro-DmhtXq4E.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/chinavis2019.md":()=>h(()=>import("./chinavis2019-BCe7xas_.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/chinavis2022.md":()=>h(()=>import("./chinavis2022-CLsAolFW.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/haikoutvis.md":()=>h(()=>import("./haikoutvis-CEw87jHd.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/movingchart.md":()=>h(()=>import("./movingchart-Dpeztk50.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/stardardchart.md":()=>h(()=>import("./stardardchart-Chr36aXH.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/treechart.md":()=>h(()=>import("./treechart-CfV9xK6o.js"),__vite__mapDeps([]),import.meta.url)}),e=x([]),c=async()=>{const b=Object.values(i).map(_=>_().then(a=>({html:a.html,attributes:a.attributes})));e.push(...await Promise.all(b)),e.sort((_,a)=>_.attributes.date<a.attributes.date?1:-1),p.value=!0};return O(async()=>{await c()}),(b,_)=>(o(),n("div",Hs,[t("span",Fs,m(f(Cs).Badge),1),p.value?(o(),n("div",Bs,[(o(!0),n(y,null,w(Math.ceil(e.length/3),a=>(o(),n("div",{key:a,class:"row"},[(o(!0),n(y,null,w(e.slice((a-1)*3,a*3),(d,v)=>(o(),n("div",{key:d.id,class:"col-md-4 col-12 mb-5"},[t("div",Us,[t("div",Ns,[t("h5",Ws,[S(m(d.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:d.attributes.url,target:"_blank",rel:"noopener noreferrer"},Ys,8,qs)]),t("div",Xs," 项目日期："+m(d.attributes.date),1),t("div",Gs,[(o(!0),n(y,null,w(d.attributes.tags,s=>(o(),n("span",{key:s,class:"badge bg-success jn-tags me-2"},m(s),1))),128))]),t("div",{innerHTML:d.html,class:"jn-card-text"},null,8,Ks)])])]))),128))]))),128))])):E("",!0)]))}},Qs=T(Zs,[["__scopeId","data-v-63bd1dd9"]]),F={Badge:"阿哲怎么卖？",Buy:"就买这个！",alertTitle:"你还真点了购买",alertMessage:"在下面的联系方式里找一个来联系吧"},B=u=>(D("data-v-8569774b"),u=u(),C(),u),to={class:"jn-pricing mt-5 position-relative",id:"Pricing"},eo={class:"badge bg-purple jn-badge"},so={key:0,class:"row mt-5 mx-0 jn-pricing-row px-4"},oo={class:"card jn-card mb-4 position-relative jn-animate-card"},no={class:"card-title"},ao={class:"card-subtitle mb-2 mb-4 opacity-50"},io={class:"card-body"},ro={class:"jn-plan-detail"},lo={class:"list-group list-group-flush"},co={class:"list-group-item border-0"},uo=B(()=>t("i",{class:"bi bi-check-circle-fill text-success"},null,-1)),_o={class:"list-group-item border-0"},mo=B(()=>t("i",{class:"bi bi-x-circle-fill text-danger"},null,-1)),po={class:"jn-plan-buy row m-3"},bo={class:"toast-container p-3 jn-toast"},vo={class:"toast-header"},go=B(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1)),ho={class:"toast-body"},fo={__name:"Pricing",setup(u){const p=j(!1),l=j({}),r=j(null),i=(a=2e3)=>{l.value={alertTitle:F.alertTitle,alertMessage:F.alertMessage,alertStyle:"text-success"},r.value?new at(r.value,{delay:2e3}).show():console.error("Toast element not found")},e=Object.assign({"/contents/pricing/plan1.md":()=>h(()=>import("./plan1-48TFn3_p.js"),__vite__mapDeps([]),import.meta.url),"/contents/pricing/plan2.md":()=>h(()=>import("./plan2-fOsMjo_O.js"),__vite__mapDeps([]),import.meta.url),"/contents/pricing/plan3.md":()=>h(()=>import("./plan3-Csr3oU_k.js"),__vite__mapDeps([]),import.meta.url)}),c=x([]),b=async()=>{const a=Object.values(e).map(d=>d().then(v=>({html:v.html,attributes:v.attributes})));c.push(...await Promise.all(a)),c.sort((d,v)=>d.attributes.sort>v.attributes.sort?1:-1),p.value=!0},_=()=>{const a=window.innerWidth,v=(a-1600)/2,s=document.querySelector(".jn-toast");a>1600?s.style.right=`${v+0}px`:s.style.right="0"};return O(()=>{window.addEventListener("resize",_),_()}),O(async()=>{await b()}),(a,d)=>(o(),n(y,null,[t("div",to,[t("span",eo,m(f(F).Badge),1),p.value?(o(),n("div",so,[(o(!0),n(y,null,w(c,(v,s)=>(o(),n("div",{key:v,class:"col-mb-4 col-xl-4 col-xxl-4 col-12 mb-5"},[t("div",oo,[t("div",{class:$(["jn-plan-title",{"bg-primary":s%3===0,"bg-success":s%3===1,"bg-purple":s%3===2}])},[t("h5",no,m(v.attributes.Title),1),t("h6",ao,m(v.attributes.Subtitle),1)],2),t("div",io,[t("div",ro,[t("ul",lo,[(o(!0),n(y,null,w(v.attributes.Includes,g=>(o(),n("li",co,[uo,S(" "+m(g),1)]))),256)),(o(!0),n(y,null,w(v.attributes.Excludes,g=>(o(),n("li",_o,[mo,S(" "+m(g),1)]))),256))])]),t("div",po,[t("button",{class:$(["btn",{"btn-primary":s%3===0,"btn-success":s%3===1,"btn-purple":s%3===2}]),onClick:i},m(v.attributes.Price),3)])])])]))),128))])):E("",!0)]),t("div",bo,[t("div",{id:"toastInfoMask",class:"toast",role:"alert",ref_key:"toastEl",ref:r,"aria-live":"assertive","aria-atomic":"true"},[t("div",vo,[t("strong",{class:$(["me-auto",l.value.alertStyle])},m(l.value.alertTitle),3),go]),t("div",ho,m(l.value.alertMessage),1)],512)])],64))}},yo=T(fo,[["__scopeId","data-v-8569774b"]]),I={Title:"阿哲",Subtitle:"一个喜欢运动的程序猿。",ContactTitle:"怎么联系？",ContactSubtitle:"有需要我的地方就与我联系吧，我会尽快回复的。",Social:[{name:"GitHub",icon:"github",url:"https://github.com/LeeZChuan"},{name:"Facebook",icon:"facebook",url:"https://www.facebook.com/profile.php?id=100083154937436"},{name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/zchuan-lee-89214a1a3/"},{name:"Email",icon:"envelope",url:"mailto:cdutlzc@gmail.com"},{name:"博客",icon:"rss",url:"https://leezchuan.github.io/"}]},$o={class:"jn-footer mt-5 position-relative",id:"Footer"},jo={class:"row p-5 w-100"},wo={class:"col-md-6 col-lg-6 col-12"},ko={class:"opacity-75"},To={class:"col-md-6 col-lg-6 col-12"},Po={class:"opacity-75"},Oo={class:"flex"},Lo=["href","title"],Eo={class:"jn-footer-placeholder"},Io={__name:"Footer",setup(u){const p=R(),l=M(()=>p.isMobile),r=new Date().getFullYear();return(i,e)=>(o(),n("div",$o,[t("div",jo,[t("div",wo,[t("h1",null,m(f(I).Title),1),t("p",ko,m(f(I).Subtitle),1)]),t("div",To,[t("h3",null,m(f(I).ContactTitle),1),t("p",Po,m(f(I).ContactSubtitle),1),t("div",Oo,[(o(!0),n(y,null,w(f(I).Social,(c,b)=>(o(),n("a",{key:b,class:$([l.value?"jn-footer-social-mobile me-3":"jn-footer-social-desktop me-4"]),href:c.url,title:c.name,target:"_blank"},[t("i",{class:$(["bi","bi-"+c.icon])},null,2)],10,Lo))),128))])])]),t("div",Eo,m(f(I).Title)+" © "+m(f(r)),1)]))}},So=T(Io,[["__scopeId","data-v-159b1ad1"]]),Mo={id:"main-part",class:"container mt-2 px-0"},xo={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},Ro={__name:"App",setup(u){const p=R(),l=M(()=>p.isMobile),r=(e,c=200,b,_=!1)=>{it().reveal(e,{delay:c,duration:1e3,origin:b,distance:"100px",reset:_})};return(()=>{let e=document.getElementById("jn-loading");e&&(e.style.display="none")})(),O(()=>{r(".jn-introduce-bg",200,"bottom",!1),r(".jn-introduce-title",600,"top",!1),r(".jn-introduce-subtitle",600,"left",!1),r(".jn-introduce-doc",1600,"bottom",!1),setTimeout(()=>{r(".conversation-right",200,"right",!1),r(".conversation-left",200,"left",!1),r(".jn-animate-card",200,"bottom",!1)},1e3)}),(e,c)=>(o(),n(y,null,[P(Tt),t("div",Mo,[t("div",xo,[P(At),t("div",{class:$([l.value?"jn-items-full-width":"jn-items"])},[P(ce),P(ke),P(Be),P(Ds),P(Qs),P(yo)],2)]),P(So)])],64))}},Ao=T(Ro,[["__scopeId","data-v-c3813998"]]),Y=rt(Ao),X=lt();Y.use(X);const Do=R(X),Co=ct({app:"MyIP",plugins:[dt({measurementIds:["G-Z5G5JGDFMK"]})]});Co.page();function G(){Do.setIsMobile(window.innerWidth<768)}G();window.addEventListener("resize",G);Y.mount("#app");