(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{5619:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t;var i,{src:o,sizes:a,unoptimized:f=!1,priority:g=!1,loading:b,lazyRoot:S=null,lazyBoundary:z,className:k,quality:E,width:j,height:_,style:I,objectFit:R,objectPosition:O,onLoadingComplete:L,placeholder:C="empty",blurDataURL:N}=e,P=r(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);let W=l.useContext(u.ImageConfigContext),q=l.useMemo(()=>{let e=m||W||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[W]),M=P,B=a?"responsive":"intrinsic";"layout"in M&&(M.layout&&(B=M.layout),delete M.layout);let D=A;if("loader"in M){if(M.loader){let e=M.loader;D=t=>{let{config:i}=t,n=r(t,["config"]);return e(n)}}delete M.loader}let U="";if("object"==typeof(i=o)&&(y(i)||void 0!==i.src)){let e=y(o)?o.default:o;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(N=N||e.blurDataURL,U=e.src,(!B||"fill"!==B)&&(_=_||e.height,j=j||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)))}let V=!g&&("lazy"===b||void 0===b);((o="string"==typeof o?o:U).startsWith("data:")||o.startsWith("blob:"))&&(f=!0,V=!1),h.has(o)&&(V=!1),q.unoptimized&&(f=!0);let[Z,F]=l.useState(!1),[G,H,T]=d.useIntersection({rootRef:S,rootMargin:z||"200px",disabled:!V}),J=!V||H,Q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X=!1,Y=v(j),$=v(_),ee=v(E),et=Object.assign({},I,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:O}),ei="blur"!==C||Z?{}:{backgroundSize:R||"cover",backgroundPosition:O||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(N,'")')};if("fill"===B)Q.display="block",Q.position="absolute",Q.top=0,Q.left=0,Q.bottom=0,Q.right=0;else if(void 0!==Y&&void 0!==$){let e=$/Y,i=isNaN(e)?"100%":"".concat(100*e,"%");"responsive"===B?(Q.display="block",Q.position="relative",X=!0,K.paddingTop=i):"intrinsic"===B?(Q.display="inline-block",Q.position="relative",Q.maxWidth="100%",X=!0,K.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===B&&(Q.display="inline-block",Q.position="relative",Q.width=Y,Q.height=$)}let en={src:p,srcSet:void 0,sizes:void 0};J&&(en=w({config:q,src:o,unoptimized:f,layout:B,width:Y,quality:ee,sizes:a,loader:D}));let eo=o,ea={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:M.crossOrigin},er=l.default.useLayoutEffect,el=l.useRef(L),es=l.useRef(o);l.useEffect(()=>{el.current=L},[L]),er(()=>{es.current!==o&&(T(),es.current=o)},[T,o]);let ec=n({isLazy:V,imgAttributes:en,heightInt:$,widthInt:Y,qualityInt:ee,layout:B,className:k,imgStyle:et,blurStyle:ei,loading:b,config:q,unoptimized:f,placeholder:C,loader:D,srcString:eo,onLoadingCompleteRef:el,setBlurComplete:F,setIntersection:G,isVisible:J,noscriptSizes:a},M);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:Q},X?l.default.createElement("span",{style:K},t?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,l.default.createElement(x,Object.assign({},ec))),g?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},ea))):null)};var n=i(6495).Z,o=i(2648).Z,a=i(1598).Z,r=i(7273).Z,l=a(i(7294)),s=o(i(2636)),c=i(3735),d=i(508),u=i(3341);i(4210);var f=i(2387);function g(e){return"/"===e[0]?e.slice(1):e}let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},h=new Set,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",b=new Map([["default",function(e){let{config:t,src:i,width:n,quality:o}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){let{config:t,src:i,width:n,quality:o}=e,a=new URL("".concat(t.path).concat(g(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){let{config:t,src:i,width:n,quality:o}=e,a=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(g(i))}],["akamai",function(e){let{config:t,src:i,width:n}=e;return"".concat(t.path).concat(g(i),"?imwidth=").concat(n)}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function w(e){let{config:t,src:i,unoptimized:n,layout:o,width:a,quality:r,sizes:l,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,i,n){let{deviceSizes:o,allSizes:a}=e;if(n&&("fill"===i||"responsive"===i)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t||"fill"===i||"responsive"===i)return{widths:o,kind:"w"};let r=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:r,kind:"x"}}(t,a,o,l),u=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:i,quality:r,width:e})," ").concat("w"===d?e:n+1).concat(d)).join(", "),src:s({config:t,src:i,quality:r,width:c[u]})}}function v(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function A(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",n=b.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(i))}function S(e,t,i,n,o,a){if(!e||e.src===p||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let r="decode"in e?e.decode():Promise.resolve();r.catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){let{naturalWidth:t,naturalHeight:i}=e;o.current({naturalWidth:t,naturalHeight:i})}})}let x=e=>{var{imgAttributes:t,heightInt:i,widthInt:o,qualityInt:a,layout:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,placeholder:g,loading:m,srcString:h,config:p,unoptimized:b,loader:y,onLoadingCompleteRef:v,setBlurComplete:A,setIntersection:x,onLoad:z,onError:k,isVisible:E,noscriptSizes:j}=e,_=r(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=f?"lazy":m,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,t,{decoding:"async","data-nimg":s,className:c,style:n({},d,u),ref:l.useCallback(e=>{x(e),(null==e?void 0:e.complete)&&S(e,h,s,g,v,A)},[x,h,s,g,v,A]),onLoad:e=>{let t=e.currentTarget;S(t,h,s,g,v,A),z&&z(e)},onError:e=>{"blur"===g&&A(!0),k&&k(e)}})),(f||"blur"===g)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},_,{loading:m,decoding:"async","data-nimg":s,style:d,className:c},w({config:p,src:h,unoptimized:b,layout:s,width:o,quality:a,sizes:j,loader:y})))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9755:function(e,t,i){e.exports=i(5619)}}]);