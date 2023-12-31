import{g as se,a as oe,s as H,P as Ae,r as f,u as ae,c as X,_ as i,j as t,h as N,i as ie,p as xe,q as ye,t as ke,v as ge,l as Ee,e as Pe,w as Te,f as Oe,n as re,o as ce,G as R,T as Be,B as ee}from"./index-GuTufpVv.js";const De={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},qe=De;function Ue(n){return se("MuiCard",n)}oe("MuiCard",["root"]);const We=["className","raised"],Je=n=>{const{classes:e}=n;return ie({root:["root"]},Ue,e)},Xe=H(Ae,{name:"MuiCard",slot:"Root",overridesResolver:(n,e)=>e.root})(()=>({overflow:"hidden"})),Ge=f.forwardRef(function(e,s){const a=ae({props:e,name:"MuiCard"}),{className:h,raised:l=!1}=a,u=X(a,We),d=i({},a,{raised:l}),C=Je(d);return t.jsx(Xe,i({className:N(C.root,h),elevation:l?8:void 0,ref:s,ownerState:d},u))}),Ke=Ge;function Qe(n){return se("MuiCardContent",n)}oe("MuiCardContent",["root"]);const Ye=["className","component"],Ze=n=>{const{classes:e}=n;return ie({root:["root"]},Qe,e)},en=H("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(n,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),nn=f.forwardRef(function(e,s){const a=ae({props:e,name:"MuiCardContent"}),{className:h,component:l="div"}=a,u=X(a,Ye),d=i({},a,{component:l}),C=Ze(d);return t.jsx(en,i({as:l,className:N(C.root,h),ownerState:d,ref:s},u))}),tn=nn,sn=xe(t.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),on=xe(t.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function an(n){return se("MuiRating",n)}const rn=oe("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),T=rn,cn=["value"],ln=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function dn(n,e,s){return n<e?e:n>s?s:n}function un(n){const e=n.toString().split(".")[1];return e?e.length:0}function ne(n,e){if(n==null)return n;const s=Math.round(n/e)*e;return Number(s.toFixed(un(e)))}const pn=n=>{const{classes:e,size:s,readOnly:a,disabled:h,emptyValueFocused:l,focusVisible:u}=n,d={root:["root",`size${ye(s)}`,h&&"disabled",u&&"focusVisible",a&&"readOnly"],label:["label","pristine"],labelEmptyValue:[l&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return ie(d,an,e)},mn=H("span",{name:"MuiRating",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[{[`& .${T.visuallyHidden}`]:e.visuallyHidden},e.root,e[`size${ye(s.size)}`],s.readOnly&&e.readOnly]}})(({theme:n,ownerState:e})=>i({display:"inline-flex",position:"relative",fontSize:n.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${T.disabled}`]:{opacity:(n.vars||n).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${T.focusVisible} .${T.iconActive}`]:{outline:"1px solid #999"},[`& .${T.visuallyHidden}`]:qe},e.size==="small"&&{fontSize:n.typography.pxToRem(18)},e.size==="large"&&{fontSize:n.typography.pxToRem(30)},e.readOnly&&{pointerEvents:"none"})),Ce=H("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:n},e)=>[e.label,n.emptyValueFocused&&e.labelEmptyValueActive]})(({ownerState:n})=>i({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),fn=H("span",{name:"MuiRating",slot:"Icon",overridesResolver:(n,e)=>{const{ownerState:s}=n;return[e.icon,s.iconEmpty&&e.iconEmpty,s.iconFilled&&e.iconFilled,s.iconHover&&e.iconHover,s.iconFocus&&e.iconFocus,s.iconActive&&e.iconActive]}})(({theme:n,ownerState:e})=>i({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},e.iconActive&&{transform:"scale(1.2)"},e.iconEmpty&&{color:(n.vars||n).palette.action.disabled})),hn=H("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:n=>ke(n)&&n!=="iconActive",overridesResolver:(n,e)=>{const{iconActive:s}=n;return[e.decimal,s&&e.iconActive]}})(({iconActive:n})=>i({position:"relative"},n&&{transform:"scale(1.2)"}));function vn(n){const e=X(n,cn);return t.jsx("span",i({},e))}function ve(n){const{classes:e,disabled:s,emptyIcon:a,focus:h,getLabelText:l,highlightSelectedOnly:u,hover:d,icon:C,IconContainerComponent:$,isActive:B,itemValue:p,labelProps:A,name:S,onBlur:G,onChange:w,onClick:F,onFocus:D,readOnly:q,ownerState:c,ratingValue:v,ratingValueRounded:K}=n,V=u?p===v:p<=v,U=p<=d,z=p<=h,Q=p===K,k=ge(),j=t.jsx(fn,{as:$,value:p,className:N(e.icon,V?e.iconFilled:e.iconEmpty,U&&e.iconHover,z&&e.iconFocus,B&&e.iconActive),ownerState:i({},c,{iconEmpty:!V,iconFilled:V,iconHover:U,iconFocus:z,iconActive:B}),children:a&&!V?a:C});return q?t.jsx("span",i({},A,{children:j})):t.jsxs(f.Fragment,{children:[t.jsxs(Ce,i({ownerState:i({},c,{emptyValueFocused:void 0}),htmlFor:k},A,{children:[j,t.jsx("span",{className:e.visuallyHidden,children:l(p)})]})),t.jsx("input",{className:e.visuallyHidden,onFocus:D,onBlur:G,onChange:w,onClick:F,disabled:s,value:p,id:k,type:"radio",name:S,checked:Q})]})}const xn=t.jsx(sn,{fontSize:"inherit"}),yn=t.jsx(on,{fontSize:"inherit"});function gn(n){return`${n} Star${n!==1?"s":""}`}const Cn=f.forwardRef(function(e,s){const a=ae({name:"MuiRating",props:e}),{className:h,defaultValue:l=null,disabled:u=!1,emptyIcon:d=yn,emptyLabelText:C="Empty",getLabelText:$=gn,highlightSelectedOnly:B=!1,icon:p=xn,IconContainerComponent:A=vn,max:S=5,name:G,onChange:w,onChangeActive:F,onMouseLeave:D,onMouseMove:q,precision:c=1,readOnly:v=!1,size:K="medium",value:V}=a,U=X(a,ln),z=ge(G),[Q,k]=Ee({controlled:V,default:l,name:"Rating"}),j=ne(Q,c),Re=Pe(),[{hover:x,focus:W},E]=f.useState({hover:-1,focus:-1});let _=j;x!==-1&&(_=x),W!==-1&&(_=W);const{isFocusVisibleRef:pe,onBlur:Se,onFocus:we,ref:Fe}=Te(),[Ve,Y]=f.useState(!1),me=f.useRef(),ze=Oe(Fe,me,s),_e=o=>{q&&q(o);const r=me.current,{right:m,left:J,width:L}=r.getBoundingClientRect();let I;Re.direction==="rtl"?I=(m-o.clientX)/L:I=(o.clientX-J)/L;let y=ne(S*I+c/2,c);y=dn(y,c,S),E(M=>M.hover===y&&M.focus===y?M:{hover:y,focus:y}),Y(!1),F&&x!==y&&F(o,y)},Le=o=>{D&&D(o);const r=-1;E({hover:r,focus:r}),F&&x!==r&&F(o,r)},fe=o=>{let r=o.target.value===""?null:parseFloat(o.target.value);x!==-1&&(r=x),k(r),w&&w(o,r)},Ie=o=>{o.clientX===0&&o.clientY===0||(E({hover:-1,focus:-1}),k(null),w&&parseFloat(o.target.value)===j&&w(o,null))},Ne=o=>{we(o),pe.current===!0&&Y(!0);const r=parseFloat(o.target.value);E(m=>({hover:m.hover,focus:r}))},He=o=>{if(x!==-1)return;Se(o),pe.current===!1&&Y(!1);const r=-1;E(m=>({hover:m.hover,focus:r}))},[$e,he]=f.useState(!1),P=i({},a,{defaultValue:l,disabled:u,emptyIcon:d,emptyLabelText:C,emptyValueFocused:$e,focusVisible:Ve,getLabelText:$,icon:p,IconContainerComponent:A,max:S,precision:c,readOnly:v,size:K}),b=pn(P);return t.jsxs(mn,i({ref:ze,onMouseMove:_e,onMouseLeave:Le,className:N(b.root,h,v&&"MuiRating-readOnly"),ownerState:P,role:v?"img":null,"aria-label":v?$(_):null},U,{children:[Array.from(new Array(S)).map((o,r)=>{const m=r+1,J={classes:b,disabled:u,emptyIcon:d,focus:W,getLabelText:$,highlightSelectedOnly:B,hover:x,icon:p,IconContainerComponent:A,name:z,onBlur:He,onChange:fe,onClick:Ie,onFocus:Ne,ratingValue:_,ratingValueRounded:j,readOnly:v,ownerState:P},L=m===Math.ceil(_)&&(x!==-1||W!==-1);if(c<1){const I=Array.from(new Array(1/c));return t.jsx(hn,{className:N(b.decimal,L&&b.iconActive),ownerState:P,iconActive:L,children:I.map((y,M)=>{const Z=ne(m-1+(M+1)*c,c);return t.jsx(ve,i({},J,{isActive:!1,itemValue:Z,labelProps:{style:I.length-1===M?{}:{width:Z===_?`${(M+1)*c*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Z)})},m)}return t.jsx(ve,i({},J,{isActive:L,itemValue:m}),m)}),!v&&!u&&t.jsxs(Ce,{className:N(b.label,b.labelEmptyValue),ownerState:P,children:[t.jsx("input",{className:b.visuallyHidden,value:"",id:`${z}-empty`,type:"radio",name:z,checked:j==null,onFocus:()=>he(!0),onBlur:()=>he(!1),onChange:fe}),t.jsx("span",{className:b.visuallyHidden,children:C})]})]}))}),bn=Cn;var le={},jn=ce;Object.defineProperty(le,"__esModule",{value:!0});var be=le.default=void 0,Mn=jn(re()),O=t,Rn=(0,Mn.default)([(0,O.jsx)("circle",{cx:"4",cy:"14",r:"2"},"0"),(0,O.jsx)("path",{d:"M1.22 17.58C.48 17.9 0 18.62 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58z"},"1"),(0,O.jsx)("circle",{cx:"20",cy:"14",r:"2"},"2"),(0,O.jsx)("path",{d:"M22.78 17.58c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85zm-6.54-.93c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 17.13 6 18.21 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"},"3"),(0,O.jsx)("path",{d:"M2.48 10.86C2.17 10.1 2 9.36 2 8.6 2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4 19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26.65.31 1.18.82 1.53 1.44.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2 2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7.35-.62.88-1.13 1.52-1.44z"},"4")],"Diversity1Sharp");be=le.default=Rn;var de={},Sn=ce;Object.defineProperty(de,"__esModule",{value:!0});var je=de.default=void 0,wn=Sn(re()),Fn=t,Vn=(0,wn.default)((0,Fn.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"LanguageSharp");je=de.default=Vn;var ue={},zn=ce;Object.defineProperty(ue,"__esModule",{value:!0});var Me=ue.default=void 0,_n=zn(re()),Ln=t,In=(0,_n.default)((0,Ln.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"LaptopMac");Me=ue.default=In;const Nn="_para_1wqhi_1",Hn="_icons_1wqhi_13",$n="_boxContainer_1wqhi_19",g={para:Nn,icons:Hn,boxContainer:$n},te=({skills:n,animationComplete:e})=>t.jsx(R,{container:!0,spacing:1,margin:2,className:"container",alignItems:"flex-start",children:t.jsx(R,{item:!0,xs:12,md:12,children:t.jsx(R,{container:!0,spacing:2,children:n.map((s,a)=>t.jsx(R,{item:!0,xs:6,children:t.jsx(Ke,{style:{backgroundColor:"transparent",color:"white",border:"1px solid white",borderRadius:"20px"},children:t.jsxs(tn,{children:[t.jsxs(Be,{gutterBottom:!0,variant:"h6",component:"div",children:[s.name," ",t.jsx("span",{style:{float:"right"},children:e?`${s.proficiency}`:""})]}),t.jsx(bn,{name:"read-only",value:e?s.points:0,readOnly:!0,max:10})]})})},a))})})}),An=[{name:"HTML5",proficiency:"Intermediate",points:5},{name:"CSS3",proficiency:"Intermediate",points:5},{name:"Bootstrap",proficiency:"Professional",points:8},{name:"JQuery",proficiency:"Professional",points:8},{name:"JavaScript",proficiency:"Intermediate",points:5},{name:"React.js",proficiency:"Intermediate",points:5}],kn=[{name:"English",proficiency:"Intermediate",points:5},{name:"Urdu",proficiency:"Professional",points:8},{name:"Kashmiri",proficiency:"Professional",points:10},{name:"Hindi",proficiency:"Intermediate",points:5}],En=[{name:"Communication",proficiency:"Advanced",points:7},{name:"Teamwork",proficiency:"Expert",points:10},{name:"Problem Solving",proficiency:"Intermediate",points:5},{name:"Collaboration",proficiency:"Intermediate",points:5}],Tn=()=>{const[n,e]=f.useState(!1);return f.useEffect(()=>{(async()=>{await new Promise(a=>setTimeout(a,1e3)),e(!0)})()},[]),t.jsxs(t.Fragment,{children:[t.jsxs(ee,{className:g.boxContainer,children:[t.jsxs("h2",{children:[t.jsx(Me,{className:g.icons})," Tech Skills",t.jsx("div",{className:"customLine",children:t.jsx("span",{className:"insideCustomLine"})})]}),t.jsxs(R,{container:!0,spacing:3,alignItems:"center",children:[t.jsx(R,{item:!0,xs:8,md:10,mt:3,children:t.jsx("p",{className:g.para,children:"  I specialize in front-end development, where I leverage the latest technologies and frameworks to build responsive, user-friendly websites. My toolkit includes HTML5, CSS3, Bootstrap, and JavaScript. I'm particularly adept at harnessing the power of React.js to create seamless and interactive web applications."})}),t.jsx(R,{item:!0,xs:4,md:2,children:t.jsxs("a",{href:"./assests/cv/SalmaanMushtaq.pdf",className:"downloadCvBtn",download:"SalmaanMushtaq-Resume.pdf",children:[t.jsx("i",{className:"bi bi-download"})," Download CV"]})})]}),t.jsx(te,{skills:An,animationComplete:n})]}),t.jsxs(ee,{className:g.boxContainer,children:[t.jsxs("h2",{children:[t.jsx(be,{className:g.icons})," Soft Skills",t.jsx("div",{className:"customLine",children:t.jsx("span",{className:"insideCustomLine"})})]}),t.jsx("p",{className:g.para,children:"  My ability to communicate effectively, collaborate seamlessly, and solve problems efficiently contributes to my strong soft skills. I thrive in teamwork and consider myself an expert in fostering collaboration. With advanced communication skills, I excel in conveying ideas and concepts."}),t.jsx(te,{skills:En,animationComplete:n})]}),t.jsxs(ee,{className:g.boxContainer,children:[t.jsxs("h2",{children:[t.jsx(je,{className:g.icons})," Language Skills",t.jsx("div",{className:"customLine",children:t.jsx("span",{className:"insideCustomLine"})})]}),t.jsx("p",{className:g.para,children:"  Multilingual proficiency adds another dimension to my skills. I am proficient in English, Urdu, and Kashmiri. This enables me to effectively communicate and collaborate with diverse teams and stakeholders, facilitating a rich and inclusive work environment."}),t.jsx(te,{skills:kn,animationComplete:n})]})]})};export{Tn as default};
