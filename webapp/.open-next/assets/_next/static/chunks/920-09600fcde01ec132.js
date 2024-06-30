"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[920],{42421:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},14392:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.399.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(78030).Z)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]])},57818:function(e,t,n){n.d(t,{default:function(){return l.a}});var r=n(50551),l=n.n(r)},50551:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let r=n(99920);n(57437),n(2265);let l=r._(n(40148));function o(e,t){var n;let r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};"function"==typeof e&&(r.loader=e);let o={...r,...t};return(0,l.default)({...o,modules:null==(n=o.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},40148:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let r=n(57437),l=n(2265),o=n(10912),a=n(61481);function i(e){return{default:e&&"default"in e?e.default:e}}let u={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},d=function(e){let t={...u,...e},n=(0,l.lazy)(()=>t.loader().then(i)),d=t.loading;function s(e){let i=d?(0,r.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,r.jsxs)(r.Fragment,{children:["undefined"==typeof window?(0,r.jsx)(a.PreloadCss,{moduleIds:t.modules}):null,(0,r.jsx)(n,{...e})]}):(0,r.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(l.Suspense,{fallback:i,children:u})}return s.displayName="LoadableComponent",s}},74429:function(e,t,n){n.d(t,{VY:function(){return eN},ZA:function(){return eV},JO:function(){return eI},ck:function(){return eW},wU:function(){return eA},eT:function(){return eH},__:function(){return eL},h_:function(){return e_},fC:function(){return eP},$G:function(){return eO},u_:function(){return eB},Z0:function(){return eF},xz:function(){return eR},B4:function(){return eE},l_:function(){return eD}});var r=n(2265),l=n(54887);function o(e,[t,n]){return Math.min(n,Math.max(t,e))}var a=n(78149),i=n(90976),u=n(1584),d=n(98324),s=n(87513),c=n(53938),f=n(20589),p=n(80467),v=n(53201),h=n(77683),m=n(56935),g=n(25171),w=n(71538),x=n(75137),y=n(91715),b=n(1336),S=n(57437),C=r.forwardRef((e,t)=>(0,S.jsx)(g.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));C.displayName="VisuallyHidden";var j=n(78369),M=n(49418),k=[" ","Enter","ArrowUp","ArrowDown"],T=[" ","Enter"],P="Select",[R,E,I]=(0,i.B)(P),[_,N]=(0,d.b)(P,[I,h.D7]),D=(0,h.D7)(),[V,L]=_(P),[W,H]=_(P),A=e=>{let{__scopeSelect:t,children:n,open:l,defaultOpen:o,onOpenChange:a,value:i,defaultValue:u,onValueChange:d,dir:c,name:f,autoComplete:p,disabled:m,required:g}=e,w=D(t),[x,b]=r.useState(null),[C,j]=r.useState(null),[M,k]=r.useState(!1),T=(0,s.gm)(c),[P=!1,E]=(0,y.T)({prop:l,defaultProp:o,onChange:a}),[I,_]=(0,y.T)({prop:i,defaultProp:u,onChange:d}),N=r.useRef(null),L=!x||!!x.closest("form"),[H,A]=r.useState(new Set),B=Array.from(H).map(e=>e.props.value).join(";");return(0,S.jsx)(h.fC,{...w,children:(0,S.jsxs)(V,{required:g,scope:t,trigger:x,onTriggerChange:b,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:M,onValueNodeHasChildrenChange:k,contentId:(0,v.M)(),value:I,onValueChange:_,open:P,onOpenChange:E,dir:T,triggerPointerDownPosRef:N,disabled:m,children:[(0,S.jsx)(R.Provider,{scope:t,children:(0,S.jsx)(W,{scope:e.__scopeSelect,onNativeOptionAdd:r.useCallback(e=>{A(t=>new Set(t).add(e))},[]),onNativeOptionRemove:r.useCallback(e=>{A(t=>{let n=new Set(t);return n.delete(e),n})},[]),children:n})}),L?(0,S.jsxs)(eM,{"aria-hidden":!0,required:g,tabIndex:-1,name:f,autoComplete:p,value:I,onChange:e=>_(e.target.value),disabled:m,children:[void 0===I?(0,S.jsx)("option",{value:""}):null,Array.from(H)]},B):null]})})};A.displayName=P;var B="SelectTrigger",O=r.forwardRef((e,t)=>{let{__scopeSelect:n,disabled:r=!1,...l}=e,o=D(n),i=L(B,n),d=i.disabled||r,s=(0,u.e)(t,i.onTriggerChange),c=E(n),[f,p,v]=ek(e=>{let t=c().filter(e=>!e.disabled),n=t.find(e=>e.value===i.value),r=eT(t,e,n);void 0!==r&&i.onValueChange(r.value)}),m=()=>{d||(i.onOpenChange(!0),v())};return(0,S.jsx)(h.ee,{asChild:!0,...o,children:(0,S.jsx)(g.WV.button,{type:"button",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":"none",dir:i.dir,"data-state":i.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":ej(i.value)?"":void 0,...l,ref:s,onClick:(0,a.M)(l.onClick,e=>{e.currentTarget.focus()}),onPointerDown:(0,a.M)(l.onPointerDown,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&(m(),i.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)},e.preventDefault())}),onKeyDown:(0,a.M)(l.onKeyDown,e=>{let t=""!==f.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||p(e.key),(!t||" "!==e.key)&&k.includes(e.key)&&(m(),e.preventDefault())})})})});O.displayName=B;var F="SelectValue",K=r.forwardRef((e,t)=>{let{__scopeSelect:n,className:r,style:l,children:o,placeholder:a="",...i}=e,d=L(F,n),{onValueNodeHasChildrenChange:s}=d,c=void 0!==o,f=(0,u.e)(t,d.onValueNodeChange);return(0,b.b)(()=>{s(c)},[s,c]),(0,S.jsx)(g.WV.span,{...i,ref:f,style:{pointerEvents:"none"},children:ej(d.value)?(0,S.jsx)(S.Fragment,{children:a}):o})});K.displayName=F;var U=r.forwardRef((e,t)=>{let{__scopeSelect:n,children:r,...l}=e;return(0,S.jsx)(g.WV.span,{"aria-hidden":!0,...l,ref:t,children:r||"▼"})});U.displayName="SelectIcon";var z=e=>(0,S.jsx)(m.h,{asChild:!0,...e});z.displayName="SelectPortal";var Z="SelectContent",q=r.forwardRef((e,t)=>{let n=L(Z,e.__scopeSelect),[o,a]=r.useState();return((0,b.b)(()=>{a(new DocumentFragment)},[]),n.open)?(0,S.jsx)(X,{...e,ref:t}):o?l.createPortal((0,S.jsx)(Y,{scope:e.__scopeSelect,children:(0,S.jsx)(R.Slot,{scope:e.__scopeSelect,children:(0,S.jsx)("div",{children:e.children})})}),o):null});q.displayName=Z;var[Y,G]=_(Z),X=r.forwardRef((e,t)=>{let{__scopeSelect:n,position:l="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:i,onPointerDownOutside:d,side:s,sideOffset:v,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:k,...T}=e,P=L(Z,n),[R,I]=r.useState(null),[_,N]=r.useState(null),D=(0,u.e)(t,e=>I(e)),[V,W]=r.useState(null),[H,A]=r.useState(null),B=E(n),[O,F]=r.useState(!1),K=r.useRef(!1);r.useEffect(()=>{if(R)return(0,j.Ry)(R)},[R]),(0,f.EW)();let U=r.useCallback(e=>{let[t,...n]=B().map(e=>e.ref.current),[r]=n.slice(-1),l=document.activeElement;for(let n of e)if(n===l||(null==n||n.scrollIntoView({block:"nearest"}),n===t&&_&&(_.scrollTop=0),n===r&&_&&(_.scrollTop=_.scrollHeight),null==n||n.focus(),document.activeElement!==l))return},[B,_]),z=r.useCallback(()=>U([V,R]),[U,V,R]);r.useEffect(()=>{O&&z()},[O,z]);let{onOpenChange:q,triggerPointerDownPosRef:G}=P;r.useEffect(()=>{if(R){let e={x:0,y:0},t=t=>{var n,r,l,o;e={x:Math.abs(Math.round(t.pageX)-(null!==(l=null===(n=G.current)||void 0===n?void 0:n.x)&&void 0!==l?l:0)),y:Math.abs(Math.round(t.pageY)-(null!==(o=null===(r=G.current)||void 0===r?void 0:r.y)&&void 0!==o?o:0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():R.contains(n.target)||q(!1),document.removeEventListener("pointermove",t),G.current=null};return null!==G.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}},[R,q,G]),r.useEffect(()=>{let e=()=>q(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[q]);let[X,Q]=ek(e=>{let t=B().filter(e=>!e.disabled),n=t.find(e=>e.ref.current===document.activeElement),r=eT(t,e,n);r&&setTimeout(()=>r.ref.current.focus())}),ee=r.useCallback((e,t,n)=>{let r=!K.current&&!n;(void 0!==P.value&&P.value===t||r)&&(W(e),r&&(K.current=!0))},[P.value]),et=r.useCallback(()=>null==R?void 0:R.focus(),[R]),en=r.useCallback((e,t,n)=>{let r=!K.current&&!n;(void 0!==P.value&&P.value===t||r)&&A(e)},[P.value]),er="popper"===l?$:J,el=er===$?{side:s,sideOffset:v,align:h,alignOffset:m,arrowPadding:g,collisionBoundary:x,collisionPadding:y,sticky:b,hideWhenDetached:C,avoidCollisions:k}:{};return(0,S.jsx)(Y,{scope:n,content:R,viewport:_,onViewportChange:N,itemRefCallback:ee,selectedItem:V,onItemLeave:et,itemTextRefCallback:en,focusSelectedItem:z,selectedItemText:H,position:l,isPositioned:O,searchRef:X,children:(0,S.jsx)(M.Z,{as:w.g7,allowPinchZoom:!0,children:(0,S.jsx)(p.M,{asChild:!0,trapped:P.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,a.M)(o,e=>{var t;null===(t=P.trigger)||void 0===t||t.focus({preventScroll:!0}),e.preventDefault()}),children:(0,S.jsx)(c.XB,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>P.onOpenChange(!1),children:(0,S.jsx)(er,{role:"listbox",id:P.contentId,"data-state":P.open?"open":"closed",dir:P.dir,onContextMenu:e=>e.preventDefault(),...T,...el,onPlaced:()=>F(!0),ref:D,style:{display:"flex",flexDirection:"column",outline:"none",...T.style},onKeyDown:(0,a.M)(T.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Q(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=B().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let n=e.target,r=t.indexOf(n);t=t.slice(r+1)}setTimeout(()=>U(t)),e.preventDefault()}})})})})})})});X.displayName="SelectContentImpl";var J=r.forwardRef((e,t)=>{let{__scopeSelect:n,onPlaced:l,...a}=e,i=L(Z,n),d=G(Z,n),[s,c]=r.useState(null),[f,p]=r.useState(null),v=(0,u.e)(t,e=>p(e)),h=E(n),m=r.useRef(!1),w=r.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:C,focusSelectedItem:j}=d,M=r.useCallback(()=>{if(i.trigger&&i.valueNode&&s&&f&&x&&y&&C){let e=i.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=i.valueNode.getBoundingClientRect(),r=C.getBoundingClientRect();if("rtl"!==i.dir){let l=r.left-t.left,a=n.left-l,i=e.left-a,u=e.width+i,d=Math.max(u,t.width),c=o(a,[10,window.innerWidth-10-d]);s.style.minWidth=u+"px",s.style.left=c+"px"}else{let l=t.right-r.right,a=window.innerWidth-n.right-l,i=window.innerWidth-e.right-a,u=e.width+i,d=Math.max(u,t.width),c=o(a,[10,window.innerWidth-10-d]);s.style.minWidth=u+"px",s.style.right=c+"px"}let a=h(),u=window.innerHeight-20,d=x.scrollHeight,c=window.getComputedStyle(f),p=parseInt(c.borderTopWidth,10),v=parseInt(c.paddingTop,10),g=parseInt(c.borderBottomWidth,10),w=p+v+d+parseInt(c.paddingBottom,10)+g,b=Math.min(5*y.offsetHeight,w),S=window.getComputedStyle(x),j=parseInt(S.paddingTop,10),M=parseInt(S.paddingBottom,10),k=e.top+e.height/2-10,T=y.offsetHeight/2,P=p+v+(y.offsetTop+T);if(P<=k){let e=y===a[a.length-1].ref.current;s.style.bottom="0px";let t=f.clientHeight-x.offsetTop-x.offsetHeight;s.style.height=P+Math.max(u-k,T+(e?M:0)+t+g)+"px"}else{let e=y===a[0].ref.current;s.style.top="0px";let t=Math.max(k,p+x.offsetTop+(e?j:0)+T);s.style.height=t+(w-P)+"px",x.scrollTop=P-k+x.offsetTop}s.style.margin="".concat(10,"px 0"),s.style.minHeight=b+"px",s.style.maxHeight=u+"px",null==l||l(),requestAnimationFrame(()=>m.current=!0)}},[h,i.trigger,i.valueNode,s,f,x,y,C,i.dir,l]);(0,b.b)(()=>M(),[M]);let[k,T]=r.useState();(0,b.b)(()=>{f&&T(window.getComputedStyle(f).zIndex)},[f]);let P=r.useCallback(e=>{e&&!0===w.current&&(M(),null==j||j(),w.current=!1)},[M,j]);return(0,S.jsx)(Q,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:m,onScrollButtonChange:P,children:(0,S.jsx)("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:k},children:(0,S.jsx)(g.WV.div,{...a,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...a.style}})})})});J.displayName="SelectItemAlignedPosition";var $=r.forwardRef((e,t)=>{let{__scopeSelect:n,align:r="start",collisionPadding:l=10,...o}=e,a=D(n);return(0,S.jsx)(h.VY,{...a,...o,ref:t,align:r,collisionPadding:l,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});$.displayName="SelectPopperPosition";var[Q,ee]=_(Z,{}),et="SelectViewport",en=r.forwardRef((e,t)=>{let{__scopeSelect:n,nonce:l,...o}=e,i=G(et,n),d=ee(et,n),s=(0,u.e)(t,i.onViewportChange),c=r.useRef(0);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),(0,S.jsx)(R.Slot,{scope:n,children:(0,S.jsx)(g.WV.div,{"data-radix-select-viewport":"",role:"presentation",...o,ref:s,style:{position:"relative",flex:1,overflow:"auto",...o.style},onScroll:(0,a.M)(o.onScroll,e=>{let t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:r}=d;if((null==r?void 0:r.current)&&n){let e=Math.abs(c.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,l=Math.max(parseFloat(n.style.minHeight),parseFloat(n.style.height));if(l<r){let o=l+e,a=Math.min(r,o),i=o-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=i>0?i:0,n.style.justifyContent="flex-end")}}}c.current=t.scrollTop})})})]})});en.displayName=et;var er="SelectGroup",[el,eo]=_(er),ea=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,l=(0,v.M)();return(0,S.jsx)(el,{scope:n,id:l,children:(0,S.jsx)(g.WV.div,{role:"group","aria-labelledby":l,...r,ref:t})})});ea.displayName=er;var ei="SelectLabel",eu=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,l=eo(ei,n);return(0,S.jsx)(g.WV.div,{id:l.id,...r,ref:t})});eu.displayName=ei;var ed="SelectItem",[es,ec]=_(ed),ef=r.forwardRef((e,t)=>{let{__scopeSelect:n,value:l,disabled:o=!1,textValue:i,...d}=e,s=L(ed,n),c=G(ed,n),f=s.value===l,[p,h]=r.useState(null!=i?i:""),[m,w]=r.useState(!1),x=(0,u.e)(t,e=>{var t;return null===(t=c.itemRefCallback)||void 0===t?void 0:t.call(c,e,l,o)}),y=(0,v.M)(),b=()=>{o||(s.onValueChange(l),s.onOpenChange(!1))};if(""===l)throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return(0,S.jsx)(es,{scope:n,value:l,disabled:o,textId:y,isSelected:f,onItemTextChange:r.useCallback(e=>{h(t=>{var n;return t||(null!==(n=null==e?void 0:e.textContent)&&void 0!==n?n:"").trim()})},[]),children:(0,S.jsx)(R.ItemSlot,{scope:n,value:l,disabled:o,textValue:p,children:(0,S.jsx)(g.WV.div,{role:"option","aria-labelledby":y,"data-highlighted":m?"":void 0,"aria-selected":f&&m,"data-state":f?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...d,ref:x,onFocus:(0,a.M)(d.onFocus,()=>w(!0)),onBlur:(0,a.M)(d.onBlur,()=>w(!1)),onPointerUp:(0,a.M)(d.onPointerUp,b),onPointerMove:(0,a.M)(d.onPointerMove,e=>{if(o){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}else e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,a.M)(d.onPointerLeave,e=>{if(e.currentTarget===document.activeElement){var t;null===(t=c.onItemLeave)||void 0===t||t.call(c)}}),onKeyDown:(0,a.M)(d.onKeyDown,e=>{var t;(null===(t=c.searchRef)||void 0===t?void 0:t.current)!==""&&" "===e.key||(T.includes(e.key)&&b()," "===e.key&&e.preventDefault())})})})})});ef.displayName=ed;var ep="SelectItemText",ev=r.forwardRef((e,t)=>{let{__scopeSelect:n,className:o,style:a,...i}=e,d=L(ep,n),s=G(ep,n),c=ec(ep,n),f=H(ep,n),[p,v]=r.useState(null),h=(0,u.e)(t,e=>v(e),c.onItemTextChange,e=>{var t;return null===(t=s.itemTextRefCallback)||void 0===t?void 0:t.call(s,e,c.value,c.disabled)}),m=null==p?void 0:p.textContent,w=r.useMemo(()=>(0,S.jsx)("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=f;return(0,b.b)(()=>(x(w),()=>y(w)),[x,y,w]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(g.WV.span,{id:c.textId,...i,ref:h}),c.isSelected&&d.valueNode&&!d.valueNodeHasChildren?l.createPortal(i.children,d.valueNode):null]})});ev.displayName=ep;var eh="SelectItemIndicator",em=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return ec(eh,n).isSelected?(0,S.jsx)(g.WV.span,{"aria-hidden":!0,...r,ref:t}):null});em.displayName=eh;var eg="SelectScrollUpButton",ew=r.forwardRef((e,t)=>{let n=G(eg,e.__scopeSelect),l=ee(eg,e.__scopeSelect),[o,a]=r.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(n.viewport&&n.isPositioned){let e=function(){a(t.scrollTop>0)},t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),o?(0,S.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null});ew.displayName=eg;var ex="SelectScrollDownButton",ey=r.forwardRef((e,t)=>{let n=G(ex,e.__scopeSelect),l=ee(ex,e.__scopeSelect),[o,a]=r.useState(!1),i=(0,u.e)(t,l.onScrollButtonChange);return(0,b.b)(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;a(Math.ceil(t.scrollTop)<e)},t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),o?(0,S.jsx)(eb,{...e,ref:i,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null});ey.displayName=ex;var eb=r.forwardRef((e,t)=>{let{__scopeSelect:n,onAutoScroll:l,...o}=e,i=G("SelectScrollButton",n),u=r.useRef(null),d=E(n),s=r.useCallback(()=>{null!==u.current&&(window.clearInterval(u.current),u.current=null)},[]);return r.useEffect(()=>()=>s(),[s]),(0,b.b)(()=>{var e;let t=d().find(e=>e.ref.current===document.activeElement);null==t||null===(e=t.ref.current)||void 0===e||e.scrollIntoView({block:"nearest"})},[d]),(0,S.jsx)(g.WV.div,{"aria-hidden":!0,...o,ref:t,style:{flexShrink:0,...o.style},onPointerDown:(0,a.M)(o.onPointerDown,()=>{null===u.current&&(u.current=window.setInterval(l,50))}),onPointerMove:(0,a.M)(o.onPointerMove,()=>{var e;null===(e=i.onItemLeave)||void 0===e||e.call(i),null===u.current&&(u.current=window.setInterval(l,50))}),onPointerLeave:(0,a.M)(o.onPointerLeave,()=>{s()})})}),eS=r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e;return(0,S.jsx)(g.WV.div,{"aria-hidden":!0,...r,ref:t})});eS.displayName="SelectSeparator";var eC="SelectArrow";function ej(e){return""===e||void 0===e}r.forwardRef((e,t)=>{let{__scopeSelect:n,...r}=e,l=D(n),o=L(eC,n),a=G(eC,n);return o.open&&"popper"===a.position?(0,S.jsx)(h.Eh,{...l,...r,ref:t}):null}).displayName=eC;var eM=r.forwardRef((e,t)=>{let{value:n,...l}=e,o=r.useRef(null),a=(0,u.e)(t,o),i=function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(n);return r.useEffect(()=>{let e=o.current,t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set;if(i!==n&&t){let r=new Event("change",{bubbles:!0});t.call(e,n),e.dispatchEvent(r)}},[i,n]),(0,S.jsx)(C,{asChild:!0,children:(0,S.jsx)("select",{...l,ref:a,defaultValue:n})})});function ek(e){let t=(0,x.W)(e),n=r.useRef(""),l=r.useRef(0),o=r.useCallback(e=>{let r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(l.current),""!==t&&(l.current=window.setTimeout(()=>e(""),1e3))}(r)},[t]),a=r.useCallback(()=>{n.current="",window.clearTimeout(l.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(l.current),[]),[n,o,a]}function eT(e,t,n){var r;let l=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,o=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===l.length&&(o=o.filter(e=>e!==n));let a=o.find(e=>e.textValue.toLowerCase().startsWith(l.toLowerCase()));return a!==n?a:void 0}eM.displayName="BubbleSelect";var eP=A,eR=O,eE=K,eI=U,e_=z,eN=q,eD=en,eV=ea,eL=eu,eW=ef,eH=ev,eA=em,eB=ew,eO=ey,eF=eS}}]);