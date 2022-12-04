(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4186)}])},3762:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t;var i,{src:r,sizes:a,unoptimized:f=!1,priority:m=!1,loading:x,lazyRoot:j=null,lazyBoundary:S,className:k,quality:A,width:E,height:z,style:O,objectFit:_,objectPosition:I,onLoadingComplete:C,placeholder:R="empty",blurDataURL:P}=e,L=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);let M=o.useContext(u.ImageConfigContext),q=o.useMemo(()=>{let e=g||M||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[M]),D=L,W=a?"responsive":"intrinsic";"layout"in D&&(D.layout&&(W=D.layout),delete D.layout);let B=w;if("loader"in D){if(D.loader){let V=D.loader;B=e=>{let{config:t}=e,i=l(e,["config"]);return V(i)}}delete D.loader}let T="";if("object"==typeof(i=r)&&(b(i)||void 0!==i.src)){let U=b(r)?r.default:r;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(P=P||U.blurDataURL,T=U.src,(!W||"fill"!==W)&&(z=z||U.height,E=E||U.width,!U.height||!U.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)))}let G=!m&&("lazy"===x||void 0===x);((r="string"==typeof r?r:T).startsWith("data:")||r.startsWith("blob:"))&&(f=!0,G=!1),p.has(r)&&(G=!1),q.unoptimized&&(f=!0);let[H,Z]=o.useState(!1),[F,J,X]=d.useIntersection({rootRef:j,rootMargin:S||"200px",disabled:!G}),Q=!G||J,K={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},$=!1,ee=v(E),et=v(z),ei=v(A),en=Object.assign({},O,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:I}),er="blur"!==R||H?{}:{backgroundSize:_||"cover",backgroundPosition:I||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(P,'")')};if("fill"===W)K.display="block",K.position="absolute",K.top=0,K.left=0,K.bottom=0,K.right=0;else if(void 0!==ee&&void 0!==et){let ea=et/ee,el=isNaN(ea)?"100%":"".concat(100*ea,"%");"responsive"===W?(K.display="block",K.position="relative",$=!0,Y.paddingTop=el):"intrinsic"===W?(K.display="inline-block",K.position="relative",K.maxWidth="100%",$=!0,Y.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ee,"%27%20height=%27").concat(et,"%27/%3e")):"fixed"===W&&(K.display="inline-block",K.position="relative",K.width=ee,K.height=et)}let eo={src:h,srcSet:void 0,sizes:void 0};Q&&(eo=y({config:q,src:r,unoptimized:f,layout:W,width:ee,quality:ei,sizes:a,loader:B}));let es=r,ec={imageSrcSet:eo.srcSet,imageSizes:eo.sizes,crossOrigin:D.crossOrigin},ed=o.default.useLayoutEffect,eu=o.useRef(C),ef=o.useRef(r);o.useEffect(()=>{eu.current=C},[C]),ed(()=>{ef.current!==r&&(X(),ef.current=r)},[X,r]);let em=n({isLazy:G,imgAttributes:eo,heightInt:et,widthInt:ee,qualityInt:ei,layout:W,className:k,imgStyle:en,blurStyle:er,loading:x,config:q,unoptimized:f,placeholder:R,loader:B,srcString:es,onLoadingCompleteRef:eu,setBlurComplete:Z,setIntersection:F,isVisible:Q,noscriptSizes:a},D);return o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{style:K},$?o.default.createElement("span",{style:Y},t?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,o.default.createElement(N,Object.assign({},em))),m?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+eo.src+eo.srcSet+eo.sizes,rel:"preload",as:"image",href:eo.srcSet?void 0:eo.src},ec))):null)};var n=i(6495).Z,r=i(2648).Z,a=i(1598).Z,l=i(7273).Z,o=a(i(7294)),s=r(i(3121)),c=i(139),d=i(9246),u=i(8730);i(7238);var f=i(2700);function m(e){return"/"===e[0]?e.slice(1):e}let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},p=new Set,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){let{config:t,src:i,width:n,quality:r}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){let{config:t,src:i,width:n,quality:r}=e,a=new URL("".concat(t.path).concat(m(i))),l=a.searchParams;return l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||n.toString()),r&&l.set("q",r.toString()),a.href}],["cloudinary",function(e){let{config:t,src:i,width:n,quality:r}=e,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(m(i))}],["akamai",function(e){let{config:t,src:i,width:n}=e;return"".concat(t.path).concat(m(i),"?imwidth=").concat(n)}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}function y(e){let{config:t,src:i,unoptimized:n,layout:r,width:a,quality:l,sizes:o,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,i,n){let{deviceSizes:r,allSizes:a}=e;if(n&&("fill"===i||"responsive"===i)){let l=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=l.exec(n);s)o.push(parseInt(s[2]));if(o.length){let c=.01*Math.min(...o);return{widths:a.filter(e=>e>=r[0]*c),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t||"fill"===i||"responsive"===i)return{widths:r,kind:"w"};let d=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:d,kind:"x"}}(t,a,r,o),u=c.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===d?e:n+1).concat(d)).join(", "),src:s({config:t,src:i,quality:l,width:c[u]})}}function v(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function w(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(i))}function j(e,t,i,n,r,a){if(!e||e.src===h||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode&&(p.add(t),"blur"===n&&a(!0),null==r?void 0:r.current)){let{naturalWidth:i,naturalHeight:l}=e;r.current({naturalWidth:i,naturalHeight:l})}})}let N=e=>{var{imgAttributes:t,heightInt:i,widthInt:r,qualityInt:a,layout:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,placeholder:m,loading:g,srcString:p,config:h,unoptimized:x,loader:b,onLoadingCompleteRef:v,setBlurComplete:w,setIntersection:N,onLoad:S,onError:k,isVisible:A,noscriptSizes:E}=e,z=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=f?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":s,className:c,style:n({},d,u),ref:o.useCallback(e=>{N(e),(null==e?void 0:e.complete)&&j(e,p,s,m,v,w)},[N,p,s,m,v,w]),onLoad(e){let t=e.currentTarget;j(t,p,s,m,v,w),S&&S(e)},onError(e){"blur"===m&&w(!0),k&&k(e)}})),(f||"blur"===m)&&o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},z,y({config:h,src:p,unoptimized:x,layout:s,width:r,quality:a,sizes:E,loader:b}),{decoding:"async","data-nimg":s,style:d,className:c,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:i,disabled:s}=e,c=s||!a,[d,u]=n.useState(!1),[f,m]=n.useState(null);n.useEffect(()=>{if(a){if(!c&&!d&&f&&f.tagName){let e=function(e,t,i){let{id:n,observer:r,elements:a}=function(e){let t;let i={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===i.root&&e.margin===i.margin);if(n&&(t=l.get(n)))return t;let r=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e);return t={id:i,observer:a,elements:r},o.push(i),l.set(i,t),t}(i);return a.set(e,t),r.observe(e),function(){if(a.delete(e),r.unobserve(e),0===a.size){r.disconnect(),l.delete(n);let t=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&o.splice(t,1)}}}(f,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:i});return e}}else if(!d){let n=r.requestIdleCallback(()=>u(!0));return()=>r.cancelIdleCallback(n)}},[f,c,i,t,d]);let g=n.useCallback(()=>{u(!1)},[]);return[m,d,g]};var n=i(7294),r=i(4686);let a="function"==typeof IntersectionObserver,l=new Map,o=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var n=i(5893),r=i(9008),a=i.n(r),l=i(9755),o=i.n(l),s=i(7294),c=i(3750),d=i(8193);function u(){let[e,t]=(0,s.useState)(!1);return(0,n.jsxs)("div",{className:e?"dark":"",children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Vadim react app"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white pb-10",children:[(0,n.jsxs)("section",{className:"min-h-screen",children:[(0,n.jsxs)("nav",{className:"py-10 mb-8 flex justify-between",children:[(0,n.jsx)("h1",{className:"text-xl font-roboto",children:"Developer"}),(0,n.jsxs)("ul",{className:"flex items-center",children:[(0,n.jsx)("li",{children:(0,n.jsx)(c.gLD,{onClick:()=>t(!e),className:"cursor-pointer"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"bg-gradient-to-t from-cyan-500 to-teal-200 text-white px-4 py-2 rounded-md ml-8",href:"#",children:"Resume"})})]})]}),(0,n.jsxs)("div",{className:"text-center p-10",children:[(0,n.jsx)("h2",{className:"text-5xl py-2 text-teal-600 font-medium",children:"Vadim Huk"}),(0,n.jsx)("h3",{className:"text-2xl py-2",children:"React developer"}),(0,n.jsx)("p",{className:"text-md py-5 leading-6 md:text-xl max-w-lg mx-auto",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae harum in excepturi qui explicabo quas."})]}),(0,n.jsxs)("div",{className:"text-5xl flex justify-center gap-16 py-3 text-gray-600",children:[(0,n.jsx)(d.wod,{}),(0,n.jsx)(d._iD,{}),(0,n.jsx)(d.b1v,{})]}),(0,n.jsx)("div",{className:"text-center relative bg-gradient-to-b from-teal-500 p-10 rounded-full w-80 h-80 mx-auto my-10",children:(0,n.jsx)(o(),{src:"/img/developer.png",className:"w-full",alt:"",width:300,height:380})})]}),(0,n.jsxs)("section",{className:"mb-10",children:[(0,n.jsx)("h3",{className:"text-5xl py-2 text-teal-600 font-medium",children:"Services i offer"}),(0,n.jsxs)("p",{className:"text-md py-5 leading-6 md:text-xl",children:["Lorem ipsum dolor sit amet consectetur ",(0,n.jsx)("span",{className:"text-teal-500",children:"adipisicing"})," elit. Sequi eum recusandae voluptate magni eum recusandae voluptate magni ",(0,n.jsx)("span",{className:"text-teal-500",children:"eveniet"})," cupiditate."]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-10 lg:flex-row lg:flex-wrap",children:[(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/1.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})}),(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/2.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})}),(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/3.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})}),(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/4.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})}),(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/5.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})}),(0,n.jsx)("div",{className:"card-portfolio basis-1/3 flex-1",children:(0,n.jsx)(o(),{src:"/img/portfolio/6.webp",alt:"",className:"rounded-lg object-cover",layout:"intrinsic",width:900,height:900})})]})]})]})}},9008:function(e,t,i){e.exports=i(3121)},9755:function(e,t,i){e.exports=i(3762)},8357:function(e,t,i){"use strict";i.d(t,{w_:function(){return s}});var n=i(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),l=function(){return(l=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},o=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]]);return i};function s(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,i){return n.createElement(t.tag,l({key:i},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var i,r=e.attr,a=e.size,s=e.title,c=o(e,["attr","size","title"]),d=a||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:i,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return t(e)}):t(r)}}},function(e){e.O(0,[13,617,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);