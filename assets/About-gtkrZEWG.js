import{g as O,a as J,s as C,_ as s,r as a,u as Q,d as je,b as Ce,c as X,e as we,f as Se,j as n,h as B,i as Y,k as ae,P as Ae,l as Re,m as Ee,n as de,o as ce,B as G,G as v,T as j}from"./index-OVCt8pVv.js";function Me(e){return O("MuiCollapse",e)}J("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const $e=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Ne=e=>{const{orientation:o,classes:t}=e,i={root:["root",`${o}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${o}`],wrapperInner:["wrapperInner",`${o}`]};return Y(i,Me,t)},ke=C("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.orientation],t.state==="entered"&&o.entered,t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&o.hidden]}})(({theme:e,ownerState:o})=>s({height:0,overflow:"hidden",transition:e.transitions.create("height")},o.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},o.state==="entered"&&s({height:"auto",overflow:"visible"},o.orientation==="horizontal"&&{width:"auto"}),o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&{visibility:"hidden"})),Ie=C("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,o)=>o.wrapper})(({ownerState:e})=>s({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),Te=C("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,o)=>o.wrapperInner})(({ownerState:e})=>s({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),le=a.forwardRef(function(o,t){const i=Q({props:o,name:"MuiCollapse"}),{addEndListener:d,children:l,className:x,collapsedSize:u="0px",component:y,easing:N,in:m,onEnter:w,onEntered:S,onEntering:A,onExit:k,onExited:c,onExiting:h,orientation:b="vertical",style:R,timeout:g=je.standard,TransitionComponent:Z=Ce}=i,W=X(i,$e),E=s({},i,{orientation:b,collapsedSize:u}),M=Ne(E),re=we(),ie=a.useRef(),$=a.useRef(null),ee=a.useRef(),P=typeof u=="number"?`${u}px`:u,z=b==="horizontal",_=z?"width":"height";a.useEffect(()=>()=>{clearTimeout(ie.current)},[]);const U=a.useRef(null),xe=Se(t,U),I=r=>p=>{if(r){const f=U.current;p===void 0?r(f):r(f,p)}},ne=()=>$.current?$.current[z?"clientWidth":"clientHeight"]:0,he=I((r,p)=>{$.current&&z&&($.current.style.position="absolute"),r.style[_]=P,w&&w(r,p)}),me=I((r,p)=>{const f=ne();$.current&&z&&($.current.style.position="");const{duration:D,easing:H}=ae({style:R,timeout:g,easing:N},{mode:"enter"});if(g==="auto"){const se=re.transitions.getAutoHeightDuration(f);r.style.transitionDuration=`${se}ms`,ee.current=se}else r.style.transitionDuration=typeof D=="string"?D:`${D}ms`;r.style[_]=`${f}px`,r.style.transitionTimingFunction=H,A&&A(r,p)}),ge=I((r,p)=>{r.style[_]="auto",S&&S(r,p)}),fe=I(r=>{r.style[_]=`${ne()}px`,k&&k(r)}),ye=I(c),be=I(r=>{const p=ne(),{duration:f,easing:D}=ae({style:R,timeout:g,easing:N},{mode:"exit"});if(g==="auto"){const H=re.transitions.getAutoHeightDuration(p);r.style.transitionDuration=`${H}ms`,ee.current=H}else r.style.transitionDuration=typeof f=="string"?f:`${f}ms`;r.style[_]=P,r.style.transitionTimingFunction=D,h&&h(r)}),ve=r=>{g==="auto"&&(ie.current=setTimeout(r,ee.current||0)),d&&d(U.current,r)};return n.jsx(Z,s({in:m,onEnter:he,onEntered:ge,onEntering:me,onExit:fe,onExited:ye,onExiting:be,addEndListener:ve,nodeRef:U,timeout:g==="auto"?null:g},W,{children:(r,p)=>n.jsx(ke,s({as:y,className:B(M.root,x,{entered:M.entered,exited:!m&&P==="0px"&&M.hidden}[r]),style:s({[z?"minWidth":"minHeight"]:P},R),ownerState:s({},E,{state:r}),ref:xe},p,{children:n.jsx(Ie,{ownerState:s({},E,{state:r}),className:M.wrapper,ref:$,children:n.jsx(Te,{ownerState:s({},E,{state:r}),className:M.wrapperInner,children:l})})}))}))});le.muiSupportAuto=!0;const ze=le,_e=a.createContext({}),ue=_e;function De(e){return O("MuiAccordion",e)}const Ge=J("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),V=Ge,Le=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Be=e=>{const{classes:o,square:t,expanded:i,disabled:d,disableGutters:l}=e;return Y({root:["root",!t&&"rounded",i&&"expanded",d&&"disabled",!l&&"gutters"],region:["region"]},De,o)},We=C(Ae,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${V.region}`]:o.region},o.root,!t.square&&o.rounded,!t.disableGutters&&o.gutters]}})(({theme:e})=>{const o={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],o),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],o)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${V.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${V.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:o})=>s({},!o.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!o.disableGutters&&{[`&.${V.expanded}`]:{margin:"16px 0"}})),Pe=a.forwardRef(function(o,t){const i=Q({props:o,name:"MuiAccordion"}),{children:d,className:l,defaultExpanded:x=!1,disabled:u=!1,disableGutters:y=!1,expanded:N,onChange:m,square:w=!1,TransitionComponent:S=ze,TransitionProps:A}=i,k=X(i,Le),[c,h]=Re({controlled:N,default:x,name:"Accordion",state:"expanded"}),b=a.useCallback(M=>{h(!c),m&&m(M,!c)},[c,m,h]),[R,...g]=a.Children.toArray(d),Z=a.useMemo(()=>({expanded:c,disabled:u,disableGutters:y,toggle:b}),[c,u,y,b]),W=s({},i,{square:w,disabled:u,disableGutters:y,expanded:c}),E=Be(W);return n.jsxs(We,s({className:B(E.root,l),ref:t,ownerState:W,square:w},k,{children:[n.jsx(ue.Provider,{value:Z,children:R}),n.jsx(S,s({in:c,timeout:"auto"},A,{children:n.jsx("div",{"aria-labelledby":R.props.id,id:R.props["aria-controls"],role:"region",className:E.region,children:g})}))]}))}),q=Pe;function Ue(e){return O("MuiAccordionDetails",e)}J("MuiAccordionDetails",["root"]);const He=["className"],Ve=e=>{const{classes:o}=e;return Y({root:["root"]},Ue,o)},qe=C("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Fe=a.forwardRef(function(o,t){const i=Q({props:o,name:"MuiAccordionDetails"}),{className:d}=i,l=X(i,He),x=i,u=Ve(x);return n.jsx(qe,s({className:B(u.root,d),ref:t,ownerState:x},l))}),F=Fe;function Ke(e){return O("MuiAccordionSummary",e)}const Oe=J("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),T=Oe,Je=["children","className","expandIcon","focusVisibleClassName","onClick"],Qe=e=>{const{classes:o,expanded:t,disabled:i,disableGutters:d}=e;return Y({root:["root",t&&"expanded",i&&"disabled",!d&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!d&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]},Ke,o)},Xe=C(Ee,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{const t={duration:e.transitions.duration.shortest};return s({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${T.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${T.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${T.disabled})`]:{cursor:"pointer"}},!o.disableGutters&&{[`&.${T.expanded}`]:{minHeight:64}})}),Ye=C("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,o)=>o.content})(({theme:e,ownerState:o})=>s({display:"flex",flexGrow:1,margin:"12px 0"},!o.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{margin:"20px 0"}})),Ze=C("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,o)=>o.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${T.expanded}`]:{transform:"rotate(180deg)"}})),en=a.forwardRef(function(o,t){const i=Q({props:o,name:"MuiAccordionSummary"}),{children:d,className:l,expandIcon:x,focusVisibleClassName:u,onClick:y}=i,N=X(i,Je),{disabled:m=!1,disableGutters:w,expanded:S,toggle:A}=a.useContext(ue),k=b=>{A&&A(b),y&&y(b)},c=s({},i,{expanded:S,disabled:m,disableGutters:w}),h=Qe(c);return n.jsxs(Xe,s({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":S,className:B(h.root,l),focusVisibleClassName:B(h.focusVisible,u),onClick:k,ref:t,ownerState:c},N,{children:[n.jsx(Ye,{className:h.content,ownerState:c,children:d}),x&&n.jsx(Ze,{className:h.expandIconWrapper,ownerState:c,children:x})]}))}),K=en;var oe={},nn=ce;Object.defineProperty(oe,"__esModule",{value:!0});var L=oe.default=void 0,on=nn(de()),tn=n,rn=(0,on.default)((0,tn.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");L=oe.default=rn;var te={},sn=ce;Object.defineProperty(te,"__esModule",{value:!0});var pe=te.default=void 0,an=sn(de()),dn=n,cn=(0,an.default)((0,dn.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"School");pe=te.default=cn;const un=()=>{const[e,o]=a.useState(null),t=i=>(d,l)=>{o(l?i:null)};return n.jsxs(n.Fragment,{children:[n.jsx(G,{sx:{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"},children:n.jsxs(v,{container:!0,spacing:1,margin:2,className:"container",alignItems:"flex-start",children:[n.jsx(v,{item:!0,xs:12,lg:6,children:n.jsx(G,{sx:{display:"flex",justifyContent:"center"},children:n.jsx("img",{src:"./about-me.jpeg",alt:"Salmaan",loading:"lazy",className:"responsive-image",style:{maxWidth:"65%",height:"auto",boxShadow:"10px 10px 25px whiteSmoke"}})})}),n.jsxs(v,{item:!0,xs:12,lg:6,children:[n.jsxs("h2",{children:[n.jsx("i",{className:"bi bi-person-circle",style:{margin:"0"}})," ","About Me",n.jsx("div",{className:"customLine",children:n.jsx("span",{className:"insideCustomLine"})})]}),n.jsxs(G,{sx:{display:"flex",flexDirection:"column",marginTop:"15%"},children:[n.jsxs("p",{style:{lineHeight:"1.5rem",textWrap:"wrap",textAlign:"justify"},children:[" Hello there! 👋 I'm SALMAAN MUSHTAQ, a passionate web developer with a keen eye for design and a love for crafting digital experiences. Based in Kashmir -India, I thrive on turning innovative ideas into reality through the power of code.",n.jsx("br",{})," 🚀 My journey in web development began with a curiosity about how the web works, and it has since evolved into a dynamic skill set that spans HTML5, CSS3, and JavaScript. I believe in the transformative potential of technology to solve real-world problems and enhance user experiences."]}),n.jsx(G,{style:{marginTop:"6%"},children:n.jsxs("small",{children:["Share",n.jsx("strong",{children:":"}),n.jsx("a",{href:"https://www.facebook.com/your-facebook-profile",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"bi bi-facebook"})}),n.jsx("a",{href:"https://twitter.com/your-twitter-profile",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"bi bi-twitter text-white"})}),n.jsx("a",{href:"https://www.linkedin.com/in/your-linkedin-profile",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"bi bi-linkedin text-white"})}),n.jsx("a",{href:"https://github.com/your-github-profile",target:"_blank",rel:"noopener noreferrer",children:n.jsx("i",{className:"bi bi-github text-white"})})]})})]})]})]})}),n.jsxs(G,{sx:{margin:"15px",padding:"10px"},children:[n.jsxs("h2",{style:{marginLeft:"15px"},children:[n.jsx(pe,{style:{marginRight:"15px"}}),"Qualifications",n.jsx("div",{className:"customLine",children:n.jsx("span",{className:"insideCustomLine"})})]}),n.jsxs(v,{container:!0,spacing:2,justifyContent:"center",style:{margin:"3% 0%"},children:[n.jsx(v,{item:!0,xs:12,sm:6,children:n.jsxs(q,{expanded:e==="secondary",onChange:t("secondary"),sx:{backgroundColor:"inherit",color:"inherit",border:"1px solid white"},children:[n.jsx(K,{expandIcon:n.jsx(L,{sx:{color:"white"}}),"aria-controls":"secondary-education-content",id:"secondary-education-header",children:n.jsx(j,{children:"Secondary Education"})}),n.jsx(F,{children:n.jsx(j,{children:"Completed Secondary Education from JKBOSE (Jammu and Kashmir Board of School Education)."})})]})}),n.jsx(v,{item:!0,xs:12,sm:6,children:n.jsxs(q,{expanded:e==="seniorSecondary",onChange:t("seniorSecondary"),sx:{backgroundColor:"inherit",color:"inherit",border:"1px solid white"},children:[n.jsx(K,{expandIcon:n.jsx(L,{sx:{color:"white"}}),"aria-controls":"senior-secondary-education-content",id:"senior-secondary-education-header",children:n.jsx(j,{children:"Senior Secondary Education"})}),n.jsx(F,{children:n.jsx(j,{children:"Completed Senior Secondary Education from JKBOSE (Jammu and Kashmir Board of School Education), specializing in Mathematics, Economics and English."})})]})}),n.jsx(v,{item:!0,xs:12,sm:6,children:n.jsxs(q,{expanded:e==="graduation",onChange:t("graduation"),sx:{backgroundColor:"inherit",color:"inherit",border:"1px solid white"},children:[n.jsx(K,{expandIcon:n.jsx(L,{sx:{color:"white"}}),"aria-controls":"graduation-content",id:"graduation-header",children:n.jsx(j,{children:"B.Sc. Non-Medical"})}),n.jsx(F,{children:n.jsx(j,{children:"Graduated with a degree in B.Sc. Non-Medical from the University of Kashmir. Studied subjects including Mathematics, Computer Science, and Statistics. Acquired a solid foundation in mathematical principles, programming, and statistical analysis."})})]})}),n.jsx(v,{item:!0,xs:12,sm:6,children:n.jsxs(q,{expanded:e==="postGraduation",onChange:t("postGraduation"),sx:{backgroundColor:"inherit",color:"inherit",border:"1px solid white"},children:[n.jsx(K,{expandIcon:n.jsx(L,{sx:{color:"white"}}),"aria-controls":"postgraduation-content",id:"postgraduation-header",children:n.jsx(j,{children:"MCA (Master of Computer Applications)"})}),n.jsx(F,{children:n.jsx(j,{children:"Completed post-graduation in MCA from Islamic University Of Science and Technology. Specialized in programming, algorithms, database management, and operating systems. Gained expertise in software development and advanced computing concepts."})})]})})]})]})]})};export{un as default};
