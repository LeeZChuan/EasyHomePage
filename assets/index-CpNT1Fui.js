function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as G,r as j,o as L,a as o,c as n,b as t,u as g,t as _,F as y,e as w,p as S,f as R,g as A,n as $,h as E,i as O,j as M,s as X,T as Z,k as P,S as Q,l as tt,m as et,q as st,v as ot}from"./vendor-x-CjE2Av.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function m(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=m(a);fetch(a.href,e)}})();const I=G("main",{state:()=>({isMobile:!1}),getters:{},actions:{setIsMobile(c){this.isMobile=c}}}),C={Introduce:"简介",Conversations:"关于",Abilities:"功能",Jobs:"工作",Products:"产品",Works:"作品",Pricing:"买他",Footer:"联系",AgeTitle:"版本号即岁数",Name:"LZC"},nt=""+new URL("logo-D-pRNQ6W1731997888166.png",import.meta.url).href,T=(c,p)=>{const m=c.__vccOpts||c;for(const[r,a]of p)m[r]=a;return m},at=c=>(S("data-v-5b4a692f"),c=c(),R(),c),it={class:"navbar navbar-expand-lg py-2 mb-3 jn-navbar-top"},rt={id:"navbar-top",class:"container-xl"},lt={class:"jn-logo"},ct={class:"navbar-brand flex align-items-center align-content-center",href:"#"},dt=["src"],ut={class:"fw-bold"},_t=["title"],mt=at(()=>t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon bg-transparent"})],-1)),pt={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},bt={class:"navbar-nav"},vt=["href"],gt={__name:"Nav",setup(c){const p=j(0),m=()=>{const r=new Date,a=new Date("1996-12-17"),e=r.getTime()-a.getTime(),l=new Date(e),u=Math.abs(l.getUTCFullYear()-1970)+l.getMonth()/12;p.value=u.toFixed(2)};return L(()=>{m()}),(r,a)=>(o(),n("header",it,[t("nav",rt,[t("div",lt,[t("a",ct,[t("span",null,[t("img",{src:g(nt),alt:"logo",class:"jn-logo-img"},null,8,dt)]),t("span",ut,_(g(C).Name),1),t("span",{class:"fw-lighter",title:g(C).AgeTitle},".v"+_(p.value),9,_t)])]),mt,t("div",pt,[t("div",bt,[(o(),n(y,null,w(["Introduce","Conversations","Abilities","Jobs","Products","Works","Pricing","Footer"],e=>t("a",{key:e,class:"nav-link",href:`#${e}`},_(g(C)[e]),9,vt)),64))])])])]))}},ht=T(gt,[["__scopeId","data-v-5b4a692f"]]),D={name:"阿哲",subtitle:"一个喜欢运动和户外的程序猿",button:"OK，知道了"},ft=`<p>哟，您来了，您请进。</p>
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
`,N=c=>(S("data-v-fd1f1c3e"),c=c(),R(),c),yt={class:"text-dark mb-4 jn-introduce-doc"},$t=["innerHTML"],jt={class:"btn-purple",href:"#Conversations"},wt=N(()=>t("i",{class:"bi bi-arrow-down-circle"},null,-1)),kt={key:0,class:"col-6 px-4 pt-4"},Tt=N(()=>t("div",{class:"jn-introduce-bg"},null,-1)),Pt=[Tt],Lt={__name:"Introduce",setup(c){const p=I(),m=A(()=>p.isMobile),r=j(""),a=e=>e.toString().replace(/<li>/g,'<p><i class="bi bi-check-circle-fill text-purple"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return r.value=a(ft),(e,l)=>(o(),n("div",{class:$(["row jn-introduce justify-content-evenly pt-5 mx-0",m.value?"jn-mobile-mt":"jn-desktop-mt"]),id:"Introduce"},[t("div",{class:$([m.value?"col-12 px-5 py-2":"col-5 p-5"])},[t("div",null,[t("h2",{class:$(["jn-introduce-title",[m.value?"jn-h2-mobile":"jn-h2"]])},_(g(D).name),3),t("h3",{class:$(["jn-introduce-subtitle",[m.value?"jn-h3-mobile":"jn-h3"]])},_(g(D).subtitle),3),t("div",yt,[t("div",{innerHTML:r.value,class:"mb-4"},null,8,$t),t("a",jt,[E(_(g(D).button)+"  ",1),wt])])])],2),m.value?O("",!0):(o(),n("div",kt,Pt))],2))}},Ot=T(Lt,[["__scopeId","data-v-fd1f1c3e"]]),xt="modulepreload",Et=function(c,p){return new URL(c,p).href},F={},f=function(p,m,r){let a=Promise.resolve();if(m&&m.length>0){const e=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),b=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=Promise.all(m.map(u=>{if(u=Et(u,r),u in F)return;F[u]=!0;const i=u.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(!!r)for(let h=e.length-1;h>=0;h--){const k=e[h];if(k.href===u&&(!i||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":xt,i||(s.as="script",s.crossOrigin=""),s.href=u,b&&s.setAttribute("nonce",b),document.head.appendChild(s),i)return new Promise((h,k)=>{s.addEventListener("load",h),s.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}return a.then(()=>p()).catch(e=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=e,window.dispatchEvent(l),!l.defaultPrevented)throw e})},Mt=""+new URL("g1-CrI8Tb461731997888166.png",import.meta.url).href,It=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),St=""+new URL("g2-DDuPLeXY1731997888166.png",import.meta.url).href,Rt=Object.freeze(Object.defineProperty({__proto__:null,default:St},Symbol.toStringTag,{value:"Module"})),At=""+new URL("g3-C175VPXf1731997888166.png",import.meta.url).href,Ct=Object.freeze(Object.defineProperty({__proto__:null,default:At},Symbol.toStringTag,{value:"Module"})),Dt=""+new URL("g4-D-q2ct0f1731997888166.png",import.meta.url).href,Ht=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"})),Vt=""+new URL("m1-C2mM0dfF1731997888166.png",import.meta.url).href,Ft=Object.freeze(Object.defineProperty({__proto__:null,default:Vt},Symbol.toStringTag,{value:"Module"})),Bt=""+new URL("m2-BkRP9CPd1731997888166.png",import.meta.url).href,zt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),Ut=""+new URL("m3-vbqHpX0x1731997888166.png",import.meta.url).href,Nt=Object.freeze(Object.defineProperty({__proto__:null,default:Ut},Symbol.toStringTag,{value:"Module"})),Wt=""+new URL("m4-LJ-m-nPJ1731997888166.png",import.meta.url).href,qt=Object.freeze(Object.defineProperty({__proto__:null,default:Wt},Symbol.toStringTag,{value:"Module"})),Jt={Badge:"造禅者说"},Kt={class:"jn-conversations mt-5 position-relative",id:"Conversations"},Yt={class:"badge bg-purple jn-badge"},Gt={class:"row justify-content-evenly mt-5 mx-0"},Xt={class:"px-5 col-12"},Zt={key:0},Qt=["innerHTML"],te=["src"],ee={__name:"Conversations",setup(c){const p=j(!1),m=Object.assign({"/contents/conversations/conv1.md":()=>f(()=>import("./conv1-BOBXHo9t.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv2.md":()=>f(()=>import("./conv2-tf2hWNhH.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv3.md":()=>f(()=>import("./conv3-TyaX4iMy.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv4.md":()=>f(()=>import("./conv4-vYn461Pb.js"),__vite__mapDeps([]),import.meta.url),"/contents/conversations/conv5.md":()=>f(()=>import("./conv5-SlRpfno5.js"),__vite__mapDeps([]),import.meta.url)}),r=Object.assign({"/contents/conversations/images/g1.png":It,"/contents/conversations/images/g2.png":Rt,"/contents/conversations/images/g3.png":Ct,"/contents/conversations/images/g4.png":Ht,"/contents/conversations/images/m1.png":Ft,"/contents/conversations/images/m2.png":zt,"/contents/conversations/images/m3.png":Nt,"/contents/conversations/images/m4.png":qt}),a=M([]),e=async()=>{const b=Object.values(m).map(async u=>{const i=await u(),d=i.attributes,v=Object.keys(r).find(h=>h.includes(d.avatar)),s=v?r[v].default:null;return{html:l(i.html),attributes:{...d,avatar:s}}});a.push(...await Promise.all(b)),a.sort((u,i)=>i.attributes.date-u.attributes.date),p.value=!0},l=b=>b.toString().replace(/<li>/g,'<span class="badge bg-white text-purple">').replace(/<\/li>/g,"</span>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return L(async()=>{await e()}),(b,u)=>(o(),n("div",Kt,[t("span",Yt,_(g(Jt).Badge),1),t("div",Gt,[t("div",Xt,[p.value?(o(),n("div",Zt,[(o(!0),n(y,null,w(a,(i,d)=>(o(),n("div",{key:d,class:$(`row flex-nowrap align-items-start ${d%2===0?"":"flex-row-reverse"}`)},[t("div",{class:$(`conversation ${d%2===0?"conversation-right":"conversation-left"} col-8 col-md-9`),innerHTML:i.html},null,10,Qt),t("div",{class:$(["col-4 col-md-3",`jn-img-${d%2===0?"right":"left"}`])},[t("img",{src:i.attributes.avatar,alt:"avatar",class:"img-fluid rounded-circle jn-avatar"},null,8,te)],2)],2))),128))])):O("",!0)])])]))}},se=T(ee,[["__scopeId","data-v-1395ae21"]]),B={Badge:"主要功能",Title:"存在而造"},oe=`<p>阿哲这个人，主要包含 4 个核心的功能。</p>
<p>既然功能是 4 个了，不妨再来四个基本原则。</p>
<p>无论做哪件事，阿哲都遵循着这些原则：</p>
<ul>
<li>以业务为中心</li>
<li>以目标为导向</li>
<li>以数据为依据</li>
<li>以存在为意义</li>
</ul>
<p>看不懂？没关系，我也看不懂，但这样说就能假装很专业。</p>
`,ne={class:"jn-abilities mt-5 position-relative",id:"Abilities"},ae={class:"badge bg-success jn-badge"},ie={class:"row justify-content-evenly mt-5 mx-0"},re={class:"jn-left-panel mb-4 col-md-5 col-12"},le={class:"jn-h2"},ce=["innerHTML"],de={key:0,class:"jn-right-panel col-md-7 col-12"},ue={class:"card jn-card jn-abilities-card h-100 jn-animate-card"},_e={key:0,class:"card-body"},me={class:"jn-icon"},pe={class:"card-title"},be=["innerHTML"],ve={__name:"Abilities",setup(c){const p=j(!1),m=j(""),r=b=>b.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");m.value=r(oe);const a=Object.assign({"/contents/abilities/ability1.md":()=>f(()=>import("./ability1-Cm0awv9Q.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability2.md":()=>f(()=>import("./ability2-kEFZ97wZ.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability3.md":()=>f(()=>import("./ability3-CdG7boYL.js"),__vite__mapDeps([]),import.meta.url),"/contents/abilities/ability4.md":()=>f(()=>import("./ability4-CInmfoJw.js"),__vite__mapDeps([]),import.meta.url)}),e=M([]),l=async()=>{const b=Object.values(a).map(u=>u().then(i=>({html:i.html,attributes:i.attributes})));e.push(...await Promise.all(b)),e.sort((u,i)=>u.attributes.date<i.attributes.date?1:-1),p.value=!0};return L(async()=>{await l()}),(b,u)=>(o(),n("div",ne,[t("span",ae,_(g(B).Badge),1),t("div",ie,[t("div",re,[t("h2",le,_(g(B).Title),1),t("div",{innerHTML:m.value},null,8,ce)]),p.value?(o(),n("div",de,[(o(!0),n(y,null,w(Math.ceil(e.length/2),i=>(o(),n("div",{key:i,class:"row"},[(o(),n(y,null,w(2,d=>t("div",{key:d,class:"col-md-6 col-12 mb-5"},[t("div",ue,[e[(i-1)*2+(d-1)]?(o(),n("div",_e,[t("div",me,[t("i",{class:$(["bi",e[(i-1)*2+(d-1)].attributes.icon])},null,2)]),t("h5",pe,_(e[(i-1)*2+(d-1)].attributes.Title),1),t("div",{innerHTML:e[(i-1)*2+(d-1)].html,class:"jn-card-text"},null,8,be)])):O("",!0)])])),64))]))),128))])):O("",!0)])]))}},ge=T(ve,[["__scopeId","data-v-f18336b5"]]),z={Badge:"都谁用过",Title:"好不好都用过"},he=`<p>如果阿哲是一款产品，那么他上线已经快 30 多年了，阿哲的用户群体非常广泛。换句话说，也比较杂乱。</p>
<p>作为一款多功能的产品，用户们在使用的时候，会有不同的用法，包括：</p>
<ul>
<li>作为开发使用</li>
</ul>
<p>至于用起来觉得好不好，咱就不好说了，面子上总是要说好的。</p>
`,fe={class:"jn-jobs mt-5 position-relative",id:"Jobs"},ye={class:"badge bg-purple jn-badge"},$e={class:"row justify-content-evenly mt-5 mx-0"},je={class:"jn-left-panel mb-4 col-md-5 col-12"},we={class:"jn-h2"},ke=["innerHTML"],Te={key:0,class:"jn-right-panel col-md-7 col-12"},Pe={class:"nav nav-underline mb-3 text-nowrap overflow-x-scroll flex-nowrap",id:"pills-tab",role:"tablist"},Le=["onClick","id","aria-selected"],Oe=["id","aria-labelledby"],xe={class:"fs-4"},Ee={class:"fw-bold"},Me=["href"],Ie={class:"badge bg-purple"},Se=["innerHTML"],Re={__name:"Jobs",setup(c){const p=I(),m=A(()=>p.isMobile),r=j(!1),a=j(0),e=j(""),l=Object.assign({"/contents/jobs/jqka.md":()=>f(()=>import("./jqka-C8YFAlbb.js"),__vite__mapDeps([]),import.meta.url),"/contents/jobs/ydy.md":()=>f(()=>import("./ydy-BvzZU-gd.js"),__vite__mapDeps([]),import.meta.url),"/contents/jobs/znz.md":()=>f(()=>import("./znz-DDS-RdXH.js"),__vite__mapDeps([]),import.meta.url)}),b=M([]),u=async()=>{const d=Object.values(l).map(v=>v().then(s=>({html:i(s.html,"bi-arrow-right-circle-fill"),attributes:s.attributes})));b.push(...await Promise.all(d)),b.sort((v,s)=>v.attributes.date<s.attributes.date?1:-1),r.value=!0},i=(d,v)=>d.toString().replace(/<li>/g,`<p><i class="bi text-purple ${v}"></i> `).replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");return e.value=i(he,"bi-emoji-expressionless-fill"),L(async()=>{await u()}),(d,v)=>(o(),n("div",fe,[t("span",ye,_(g(z).Badge),1),t("div",$e,[t("div",je,[t("h2",we,_(g(z).Title),1),t("div",{innerHTML:e.value},null,8,ke)]),r.value?(o(),n("div",Te,[t("ul",Pe,[(o(!0),n(y,null,w(b,(s,h)=>(o(),n("li",{class:"nav-item",role:"presentation",key:"nav-item-"+s.attributes.id},[t("button",{class:$(["nav-link",{active:a.value===h}]),onClick:k=>a.value=h,id:"pills-"+s.attributes.id+"-tab",type:"button",role:"tab","aria-selected":a.value===h},_(s.attributes.company),11,Le)]))),128))]),t("div",{class:$(["tab-content jn-tab-content card jn-card mb-5",[m.value?"p-4 jn-jobs-content-mobile":"p-5"]]),id:"pills-tabContent"},[(o(!0),n(y,null,w(b,(s,h)=>(o(),n("div",{class:$(["tab-pane fade",{"show active":a.value===h}]),key:"tab-pane-"+s.attributes.id,id:"jobs-"+s.attributes.id,role:"tabpanel","aria-labelledby":"pills-"+s.attributes.id+"-tab",tabindex:"0"},[t("div",xe,[t("span",Ee,_(s.attributes.title),1),E(" @ "),t("a",{class:"text-decoration-none link-purple",href:s.attributes.url,target:"_blank",rel:"noopener noreferrer"},_(s.attributes.company),9,Me)]),t("div",Ie,_(s.attributes.range),1),t("div",{class:"mt-3 fw-light",innerHTML:s.html},null,8,Se)],10,Oe))),128))],2)])):O("",!0)])]))}},Ae=T(Re,[["__scopeId","data-v-f022d29f"]]),Ce=""+new URL("ChinaVis2019_Poster-2yng55fc1731997888166.png",import.meta.url).href,De=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),He=""+new URL("av-standard-Blaaj_Xb1731997888166.png",import.meta.url).href,Ve=Object.freeze(Object.defineProperty({__proto__:null,default:He},Symbol.toStringTag,{value:"Module"})),U={Badge:"产品介绍"},Fe="",Be=c=>(S("data-v-3261516b"),c=c(),R(),c),ze={class:"jn-products mt-5 position-relative",id:"Products"},Ue={class:"badge bg-dark jn-badge"},Ne={class:"row justify-content-evenly mt-5 mx-0"},We={class:"jn-left-panel mb-4 col-md-5 col-12"},qe={class:"sticky-wrapper"},Je={class:"jn-h2"},Ke=["innerHTML"],Ye={key:0,class:"jn-right-panel col-md-7 col-12"},Ge={class:"col-12 mb-5 jn-product-card"},Xe={class:"card jn-card"},Ze={class:"card-body"},Qe={class:"card-title"},ts=["href"],es=Be(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),ss=[es],os={class:"card-title mt-3"},ns={class:"row my-3 align-items-start"},as=["innerHTML"],is={class:"col-md-4 col-12 pb-2"},rs={class:"jn-cover-img"},ls=["src","alt"],cs={__name:"Products",setup(c){const p=I(),m=A(()=>p.isMobile),r=j(!1),a=j(""),e=d=>d.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");a.value=e(Fe);const l=Object.assign({"/contents/products/chinavis.md":()=>f(()=>import("./chinavis-DvxR6Vhf.js"),__vite__mapDeps([]),import.meta.url),"/contents/products/standardchart.md":()=>f(()=>import("./standardchart-YRZsl4WY.js"),__vite__mapDeps([]),import.meta.url)}),b=Object.assign({"/contents/products/images/ChinaVis2019_Poster.png":De,"/contents/products/images/av-standard.png":Ve}),u=M([]),i=async()=>{const d=Object.values(l).map(async v=>{const s=await v(),h=s.attributes,k=Object.keys(b).find(Y=>Y.includes(h.cover)),K=k?b[k].default:null;return{html:e(s.html),attributes:{...h,cover:K}}});u.push(...await Promise.all(d)),u.sort((v,s)=>s.attributes.date-v.attributes.date),r.value=!0};return L(async()=>{await i(),m.value||X(".sticky-wrapper",{stickyBitStickyOffset:100})}),(d,v)=>(o(),n("div",ze,[t("span",Ue,_(g(U).Badge),1),t("div",Ne,[t("div",We,[t("div",qe,[t("h2",Je,_(g(U).Title),1),t("div",{innerHTML:a.value},null,8,Ke)])]),r.value?(o(),n("div",Ye,[(o(!0),n(y,null,w(u,(s,h)=>(o(),n("div",{key:s,class:"row justify-content-between"},[t("div",Ge,[t("div",Xe,[t("div",Ze,[t("h5",Qe,[E(_(s.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-dark",href:s.attributes.url,target:"_blank",rel:"noopener noreferrer"},ss,8,ts)]),t("div",os,[(o(!0),n(y,null,w(s.attributes.tags,k=>(o(),n("span",{key:h,class:"badge bg-dark jn-tags me-2"},_(k),1))),128))]),t("div",ns,[t("div",{innerHTML:s.html,class:"jn-card-text col-md-8 col-12 jn-products-text"},null,8,as),t("div",is,[t("div",rs,[t("img",{src:s.attributes.cover,class:"img-fluid",alt:s.attributes.title},null,8,ls)])])])])])])]))),128))])):O("",!0)])]))}},ds=T(cs,[["__scopeId","data-v-3261516b"]]),us={Badge:"IT技术的涉猎与参与的项目"},_s="",ms=c=>(S("data-v-677d43b6"),c=c(),R(),c),ps={class:"jn-works mt-5 position-relative",id:"Works"},bs={class:"badge bg-success jn-badge"},vs={key:0,class:"row mt-5 mx-0 jn-works-row"},gs={class:"card jn-works-card h-100"},hs={class:"card-body"},fs={class:"card-title"},ys=["href"],$s=ms(()=>t("i",{class:"bi bi-arrow-up-right-circle"},null,-1)),js=[$s],ws={class:"card-title mt-3"},ks=["innerHTML"],Ts={__name:"Works",setup(c){const p=j(!1),m=j(""),r=b=>b.toString().replace(/<li>/g,'<p><i class="bi bi-emoji-wink-fill text-success"></i> ').replace(/<\/li>/g,"</p>").replace(/<ul>/g,"").replace(/<\/ul>/g,"");m.value=r(_s);const a=Object.assign({"/contents/works/chinavis.md":()=>f(()=>import("./chinavis-DV_BQpIt.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/haikoutvis.md":()=>f(()=>import("./haikoutvis-yRDVvnia.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/movingchart.md":()=>f(()=>import("./movingchart-Dx2S2uzP.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/movingtreechart.md":()=>f(()=>import("./movingtreechart-CZ6SE0ch.js"),__vite__mapDeps([]),import.meta.url),"/contents/works/stardardchart.md":()=>f(()=>import("./stardardchart-Chr36aXH.js"),__vite__mapDeps([]),import.meta.url)}),e=M([]),l=async()=>{const b=Object.values(a).map(u=>u().then(i=>({html:i.html,attributes:i.attributes})));e.push(...await Promise.all(b)),e.sort((u,i)=>u.attributes.date<i.attributes.date?1:-1),p.value=!0};return L(async()=>{await l()}),(b,u)=>(o(),n("div",ps,[t("span",bs,_(g(us).Badge),1),p.value?(o(),n("div",vs,[(o(!0),n(y,null,w(Math.ceil(e.length/3),i=>(o(),n("div",{key:i,class:"row"},[(o(!0),n(y,null,w(e.slice((i-1)*3,i*3),(d,v)=>(o(),n("div",{key:d.id,class:"col-md-4 col-12 mb-5"},[t("div",gs,[t("div",hs,[t("h5",fs,[E(_(d.attributes.title)+" ",1),t("a",{class:"text-decoration-none link-success",href:d.attributes.url,target:"_blank",rel:"noopener noreferrer"},js,8,ys)]),t("div",ws,[(o(!0),n(y,null,w(d.attributes.tags,s=>(o(),n("span",{key:s,class:"badge bg-success jn-tags me-2"},_(s),1))),128))]),t("div",{innerHTML:d.html,class:"jn-card-text"},null,8,ks)])])]))),128))]))),128))])):O("",!0)]))}},Ps=T(Ts,[["__scopeId","data-v-677d43b6"]]),H={Badge:"阿哲怎么卖？",Buy:"就买这个！",alertTitle:"你还真点了购买",alertMessage:"在下面的联系方式里找一个来联系吧"},V=c=>(S("data-v-e78d00c9"),c=c(),R(),c),Ls={class:"jn-pricing mt-5 position-relative",id:"Pricing"},Os={class:"badge bg-purple jn-badge"},xs={key:0,class:"row mt-5 mx-0 jn-pricing-row px-4"},Es={class:"card jn-card mb-4 position-relative jn-animate-card"},Ms={class:"card-title"},Is={class:"card-subtitle mb-2 mb-4 opacity-50"},Ss={class:"card-body"},Rs={class:"jn-plan-detail"},As={class:"list-group list-group-flush"},Cs={class:"list-group-item border-0"},Ds=V(()=>t("i",{class:"bi bi-check-circle-fill text-success"},null,-1)),Hs={class:"list-group-item border-0"},Vs=V(()=>t("i",{class:"bi bi-x-circle-fill text-danger"},null,-1)),Fs={class:"jn-plan-buy row m-3"},Bs={class:"toast-container p-3 jn-toast"},zs={class:"toast-header"},Us=V(()=>t("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1)),Ns={class:"toast-body"},Ws={__name:"Pricing",setup(c){const p=j(!1),m=j({}),r=j(null),a=(i=2e3)=>{m.value={alertTitle:H.alertTitle,alertMessage:H.alertMessage,alertStyle:"text-success"},r.value?new Z(r.value,{delay:2e3}).show():console.error("Toast element not found")},e=Object.assign({"/contents/pricing/plan1.md":()=>f(()=>import("./plan1-DhEX_YWh.js"),__vite__mapDeps([]),import.meta.url),"/contents/pricing/plan2.md":()=>f(()=>import("./plan2-BPxk62RB.js"),__vite__mapDeps([]),import.meta.url),"/contents/pricing/plan3.md":()=>f(()=>import("./plan3-DQO0KHQf.js"),__vite__mapDeps([]),import.meta.url)}),l=M([]),b=async()=>{const i=Object.values(e).map(d=>d().then(v=>({html:v.html,attributes:v.attributes})));l.push(...await Promise.all(i)),l.sort((d,v)=>d.attributes.date<v.attributes.date?1:-1),p.value=!0},u=()=>{const i=window.innerWidth,v=(i-1600)/2,s=document.querySelector(".jn-toast");i>1600?s.style.right=`${v+0}px`:s.style.right="0"};return L(()=>{window.addEventListener("resize",u),u()}),L(async()=>{await b()}),(i,d)=>(o(),n(y,null,[t("div",Ls,[t("span",Os,_(g(H).Badge),1),p.value?(o(),n("div",xs,[(o(!0),n(y,null,w(l,(v,s)=>(o(),n("div",{key:v,class:"col-mb-4 col-xl-4 col-xxl-4 col-12 mb-5"},[t("div",Es,[t("div",{class:$(["jn-plan-title",{"bg-primary":s%3===0,"bg-success":s%3===1,"bg-purple":s%3===2}])},[t("h5",Ms,_(v.attributes.Title),1),t("h6",Is,_(v.attributes.Subtitle),1)],2),t("div",Ss,[t("div",Rs,[t("ul",As,[(o(!0),n(y,null,w(v.attributes.Includes,h=>(o(),n("li",Cs,[Ds,E(" "+_(h),1)]))),256)),(o(!0),n(y,null,w(v.attributes.Excludes,h=>(o(),n("li",Hs,[Vs,E(" "+_(h),1)]))),256))])]),t("div",Fs,[t("button",{class:$(["btn",{"btn-primary":s%3===0,"btn-success":s%3===1,"btn-purple":s%3===2}]),onClick:a},_(v.attributes.Price),3)])])])]))),128))])):O("",!0)]),t("div",Bs,[t("div",{id:"toastInfoMask",class:"toast",role:"alert",ref_key:"toastEl",ref:r,"aria-live":"assertive","aria-atomic":"true"},[t("div",zs,[t("strong",{class:$(["me-auto",m.value.alertStyle])},_(m.value.alertTitle),3),Us]),t("div",Ns,_(m.value.alertMessage),1)],512)])],64))}},qs=T(Ws,[["__scopeId","data-v-e78d00c9"]]),x={Title:"阿哲",Subtitle:"一个喜欢运动的程序猿。",ContactTitle:"怎么联系？",ContactSubtitle:"有需要我的地方就与我联系吧，我会尽快回复的。",Social:[{name:"GitHub",icon:"github",url:"https://github.com/LeeZChuan"},{name:"Facebook",icon:"facebook",url:"https://www.facebook.com/profile.php?id=100083154937436"},{name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/zchuan-lee-89214a1a3/"},{name:"Email",icon:"envelope",url:"mailto:cdutlzc@gmail.com"},{name:"博客",icon:"rss",url:"https://leezchuan.github.io/"}]},Js={class:"jn-footer mt-5 position-relative",id:"Footer"},Ks={class:"row p-5 w-100"},Ys={class:"col-md-6 col-lg-6 col-12"},Gs={class:"opacity-75"},Xs={class:"col-md-6 col-lg-6 col-12"},Zs={class:"opacity-75"},Qs={class:"flex"},to=["href","title"],eo={class:"jn-footer-placeholder"},so={__name:"Footer",setup(c){const p=I(),m=A(()=>p.isMobile),r=new Date().getFullYear();return(a,e)=>(o(),n("div",Js,[t("div",Ks,[t("div",Ys,[t("h1",null,_(g(x).Title),1),t("p",Gs,_(g(x).Subtitle),1)]),t("div",Xs,[t("h3",null,_(g(x).ContactTitle),1),t("p",Zs,_(g(x).ContactSubtitle),1),t("div",Qs,[(o(!0),n(y,null,w(g(x).Social,(l,b)=>(o(),n("a",{key:b,class:$([m.value?"jn-footer-social-mobile me-3":"jn-footer-social-desktop me-4"]),href:l.url,title:l.name,target:"_blank"},[t("i",{class:$(["bi","bi-"+l.icon])},null,2)],10,to))),128))])])]),t("div",eo,_(g(x).Title)+" © "+_(g(r)),1)]))}},oo=T(so,[["__scopeId","data-v-f4b73c5b"]]),no={id:"main-part",class:"container mt-2 px-0"},ao={"data-bs-spy":"scroll","data-bs-target":"#navbar-top","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"rounded-2",tabindex:"0"},io={__name:"App",setup(c){const p=I(),m=A(()=>p.isMobile),r=(e,l=200,b,u=!1)=>{Q().reveal(e,{delay:l,duration:1e3,origin:b,distance:"100px",reset:u})};return(()=>{let e=document.getElementById("jn-loading");e&&(e.style.display="none")})(),L(()=>{r(".jn-introduce-bg",200,"bottom",!1),r(".jn-introduce-title",600,"top",!1),r(".jn-introduce-subtitle",600,"left",!1),r(".jn-introduce-doc",1600,"bottom",!1),setTimeout(()=>{r(".conversation-right",200,"right",!1),r(".conversation-left",200,"left",!1),r(".jn-animate-card",200,"bottom",!1)},1e3)}),(e,l)=>(o(),n(y,null,[P(ht),t("div",no,[t("div",ao,[P(Ot),t("div",{class:$([m.value?"jn-items-full-width":"jn-items"])},[P(se),P(ge),P(Ae),P(ds),P(Ps),P(qs)],2)]),P(oo)])],64))}},ro=T(io,[["__scopeId","data-v-09be0a06"]]),W=tt(ro),q=et();W.use(q);const lo=I(q),co=st({app:"MyIP",plugins:[ot({measurementIds:["G-Z5G5JGDFMK"]})]});co.page();function J(){lo.setIsMobile(window.innerWidth<768)}J();window.addEventListener("resize",J);W.mount("#app");