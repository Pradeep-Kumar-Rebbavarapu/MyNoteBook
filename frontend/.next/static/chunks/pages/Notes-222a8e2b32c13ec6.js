(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},655:function(e,t,r){"use strict";var o=r(5318);t.Z=void 0;var n=o(r(4938)),a=r(5893),i=(0,n.default)((0,a.jsx)("path",{d:"M8 5v14l11-7z"}),"PlayArrow");t.Z=i},5397:function(e,t,r){"use strict";var o=r(5318);t.Z=void 0;var n=o(r(4938)),a=r(5893),i=(0,n.default)((0,a.jsx)("path",{d:"m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"}),"SkipNext");t.Z=i},2709:function(e,t,r){"use strict";var o=r(5318);t.Z=void 0;var n=o(r(4938)),a=r(5893),i=(0,n.default)((0,a.jsx)("path",{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"}),"SkipPrevious");t.Z=i},4938:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(9463)},9463:function(e,t,r){"use strict";r.r(t),r.d(t,{capitalize:function(){return n.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return u},isMuiElement:function(){return d},ownerDocument:function(){return p.Z},ownerWindow:function(){return m.Z},requirePropFactory:function(){return f},setRef:function(){return h},unstable_ClassNameGenerator:function(){return R},unstable_useEnhancedEffect:function(){return g},unstable_useId:function(){return x},unsupportedProp:function(){return b},useControlled:function(){return y},useEventCallback:function(){return M.Z},useForkRef:function(){return C.Z},useIsFocusVisible:function(){return w.Z}});var o=r(8076),n=r(8216);var a=function(...e){return e.reduce(((e,t)=>null==t?e:function(...r){e.apply(this,r),t.apply(this,r)}),(()=>{}))},i=r(8169),s=r(9296);var u=function(e,t){return()=>null},c=r(7294),l=r.t(c,2);var d=function(e,t){return c.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},p=r(8038),m=r(6488);r(7462);var f=function(e,t){return()=>null},h=r(7960).Z,g=r(6600).Z;let v=0;const Z=l.useId;var x=function(e){if(void 0!==Z){const t=Z();return null!=e?e:t}return function(e){const[t,r]=c.useState(e),o=e||t;return c.useEffect((()=>{null==t&&(v+=1,r(`mui-${v}`))}),[t]),o}(e)};var b=function(e,t,r,o,n){return null};var y=function({controlled:e,default:t,name:r,state:o="value"}){const{current:n}=c.useRef(void 0!==e),[a,i]=c.useState(t);return[n?e:a,c.useCallback((e=>{n||i(e)}),[])]},M=r(9327),C=r(8031),w=r(8791);const R={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),o.Z.configure(e)}}},24:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Notes",function(){return r(7626)}])},7626:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return J},default:function(){return U}});var o=r(5893),n=r(7294);var a=r(4936),i=r(2734),s=r(7357),u=r(7462),c=r(3366),l=r(6010),d=r(7192),p=r(1496),m=r(4502),f=r(5113),h=r(8979),g=r(6087);function v(e){return(0,h.Z)("MuiCard",e)}(0,g.Z)("MuiCard",["root"]);const Z=["className","raised"],x=(0,p.ZP)(f.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var b=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCard"}),{className:n,raised:a=!1}=r,i=(0,c.Z)(r,Z),s=(0,u.Z)({},r,{raised:a}),p=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},v,t)})(s);return(0,o.jsx)(x,(0,u.Z)({className:(0,l.Z)(p.root,n),elevation:a?8:void 0,ref:t,ownerState:s},i))}));function y(e){return(0,h.Z)("MuiCardContent",e)}(0,g.Z)("MuiCardContent",["root"]);const M=["className","component"],C=(0,p.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var w=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:n,component:a="div"}=r,i=(0,c.Z)(r,M),s=(0,u.Z)({},r,{component:a}),p=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},y,t)})(s);return(0,o.jsx)(C,(0,u.Z)({as:a,className:(0,l.Z)(p.root,n),ownerState:s,ref:t},i))}));function R(e){return(0,h.Z)("MuiCardMedia",e)}(0,g.Z)("MuiCardMedia",["root","media","img"]);const j=["children","className","component","image","src","style"],N=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e,{isMediaComponent:o,isImageComponent:n}=r;return[t.root,o&&t.media,n&&t.img]}})((({ownerState:e})=>(0,u.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),S=["video","audio","picture","iframe","img"],_=["picture","img"];var z=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:a,component:i="div",image:s,src:p,style:f}=r,h=(0,c.Z)(r,j),g=-1!==S.indexOf(i),v=!g&&s?(0,u.Z)({backgroundImage:`url("${s}")`},f):f,Z=(0,u.Z)({},r,{component:i,isMediaComponent:g,isImageComponent:-1!==_.indexOf(i)}),x=(e=>{const{classes:t,isMediaComponent:r,isImageComponent:o}=e,n={root:["root",r&&"media",o&&"img"]};return(0,d.Z)(n,R,t)})(Z);return(0,o.jsx)(N,(0,u.Z)({className:(0,l.Z)(x.root,a),as:i,role:!g&&s?"img":void 0,ref:t,style:v,ownerState:Z,src:g?s||p:void 0},h,{children:n}))})),k=r(1796),P=r(7162),I=r(8216);function B(e){return(0,h.Z)("MuiIconButton",e)}var E=(0,g.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);const T=["edge","children","className","color","disabled","disableFocusRipple","size"],$=(0,p.ZP)(P.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,I.Z)(r.color)}`],r.edge&&t[`edge${(0,I.Z)(r.edge)}`],t[`size${(0,I.Z)(r.size)}`]]}})((({theme:e,ownerState:t})=>(0,u.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:(0,k.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,u.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,u.Z)({color:e.palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:(0,k.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${E.disabled}`]:{backgroundColor:"transparent",color:e.palette.action.disabled}})));var F=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:a,className:i,color:s="default",disabled:p=!1,disableFocusRipple:f=!1,size:h="medium"}=r,g=(0,c.Z)(r,T),v=(0,u.Z)({},r,{edge:n,color:s,disabled:p,disableFocusRipple:f,size:h}),Z=(e=>{const{classes:t,disabled:r,color:o,edge:n,size:a}=e,i={root:["root",r&&"disabled","default"!==o&&`color${(0,I.Z)(o)}`,n&&`edge${(0,I.Z)(n)}`,`size${(0,I.Z)(a)}`]};return(0,d.Z)(i,B,t)})(v);return(0,o.jsx)($,(0,u.Z)({className:(0,l.Z)(Z.root,i),centerRipple:!0,focusRipple:!f,disabled:p,ref:t,ownerState:v},g,{children:a}))})),O=r(9707);function W(e){return(0,h.Z)("MuiTypography",e)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],V=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,I.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,u.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),q={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},A={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var G=n.forwardRef((function(e,t){const r=(0,m.Z)({props:e,name:"MuiTypography"}),n=(e=>A[e]||e)(r.color),a=(0,O.Z)((0,u.Z)({},r,{color:n})),{align:i="inherit",className:s,component:p,gutterBottom:f=!1,noWrap:h=!1,paragraph:g=!1,variant:v="body1",variantMapping:Z=q}=a,x=(0,c.Z)(a,L),b=(0,u.Z)({},a,{align:i,color:n,className:s,component:p,gutterBottom:f,noWrap:h,paragraph:g,variant:v,variantMapping:Z}),y=p||(g?"p":Z[v]||q[v])||"span",M=(e=>{const{align:t,gutterBottom:r,noWrap:o,paragraph:n,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,I.Z)(t)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,d.Z)(s,W,i)})(b);return(0,o.jsx)(V,(0,u.Z)({as:y,ref:t,ownerState:b,className:(0,l.Z)(M.root,s)},x))})),D=r(2709),X=r(655),H=r(5397),J=!0;function U(e){var t=e.notes,r=((0,n.useContext)(a.Z).authtoken,(0,i.Z)());return(0,o.jsx)("div",{children:t.map((function(e){return(0,o.jsx)("div",{children:(0,o.jsxs)(b,{sx:{display:"flex"},children:[(0,o.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,o.jsxs)(w,{sx:{flex:"1 0 auto"},children:[(0,o.jsx)(G,{component:"div",variant:"h5",children:e.title}),(0,o.jsx)(G,{variant:"subtitle1",color:"text.secondary",component:"div",children:"Mac Miller"})]}),(0,o.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",pl:1,pb:1},children:[(0,o.jsx)(F,{"aria-label":"previous",children:"rtl"===r.direction?(0,o.jsx)(H.Z,{}):(0,o.jsx)(D.Z,{})}),(0,o.jsx)(F,{"aria-label":"play/pause",children:(0,o.jsx)(X.Z,{sx:{height:38,width:38}})}),(0,o.jsx)(F,{"aria-label":"next",children:"rtl"===r.direction?(0,o.jsx)(D.Z,{}):(0,o.jsx)(H.Z,{})})]})]}),(0,o.jsx)(z,{component:"img",sx:{width:151},image:"",alt:"Live from space album cover"})]})},e.note_id)}))})}}},function(e){e.O(0,[239,774,888,179],(function(){return t=24,e(e.s=t);var t}));var t=e.O();_N_E=t}]);