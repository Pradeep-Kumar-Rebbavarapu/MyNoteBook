(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{6737:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/Signup",function(){return t(1096)}])},4339:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),a=(t(7294),t(2175));function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){s(e,r,t[r])}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function l(e){e.ringcolor,e.label;var r=e.name,t=(e.className,o(e,["ringcolor","label","name","className"]));return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.gN,i({name:r},t,{children:function(r){var t=r.field;r.form,r.meta;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",i({id:e.id},t,{className:e.className,type:e.type}))})}})),(0,n.jsx)("div",{id:"error",className:"text-red-500",children:(0,n.jsx)(a.Bc,{name:r})})]})}},1096:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(4051),a=t.n(n),s=t(5893),i=t(7294),o=t(2175),l=t(4339),c=t(4231),u=t(1664),d=t.n(u),m=t(2132),p="/_next/static/media/Signup2.680278e0.png",f=t(1163);function x(e,r,t,n,a,s,i){try{var o=e[s](i),l=o.value}catch(c){return void t(c)}o.done?r(l):Promise.resolve(l).then(n,a)}var h=function(){var e=(0,i.useState)(!1),r=(e[0],e[1]),t=(0,f.useRouter)(),n=c.Ry({email:c.Z_().email("Invalid Email Format").required("Required").min(5,"Atleast 5 characters required"),password:c.Z_().required("Required").matches(/^(?=.{6,})/,"Must Contain 6 Characters").matches(/^(?=.*[a-z])(?=.*[A-Z])/,"Must Contain One Uppercase, One Lowercase").matches(/^(?=.*[!@#\$%\^&\*])/,"Must Contain One Special Case Character").matches(/^(?=.{6,20}$)\D*\d/,"Must Contain One Number"),username:c.Z_().required("Required").min(5,"Atleast 5 characters required"),confirm_password:c.Z_().required("Required").oneOf([c.iH("password"),null],"Passwords must match")}),u=function(){var e,n=(e=a().mark((function e(n){var s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,fetch("https://my-notebook-my-notebook.herokuapp.com/api/v1/Signup/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.username,password:n.password,email:n.email})});case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,201===s.status?(t.push("/"),(0,m.Am)("Signed Up Succesfully",{position:m.Am.POSITION.TOP_LEFT})):(i.username&&(0,m.Am)("A user with that username already exists.",{position:m.Am.POSITION.TOP_LEFT}),i.error?(0,m.Am)("User Already Exists with the given Email",{position:m.Am.POSITION.TOP_LEFT}):(0,m.Am)("Signup Unsuccesfull",{position:m.Am.POSITION.TOP_LEFT})),r(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),(0,m.Am)("Signup Unsuccesfull",{position:m.Am.POSITION.TOP_LEFT});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),function(){var r=this,t=arguments;return new Promise((function(n,a){var s=e.apply(r,t);function i(e){x(s,n,a,i,o,"next",e)}function o(e){x(s,n,a,i,o,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,s.jsx)("div",{style:{backgroundImage:"url(".concat(p,")")},className:" bg-center bg-no-repeat bg-cover",children:(0,s.jsx)(o.J9,{initialValues:{email:"",password:"",username:"",confirm_password:""},validationSchema:n||function(e){var r={};return isNaN(e.password)&&(r.password="Password Must be A Mix Of Alphabets and Numbers"),r},onSubmit:function(e){u(e)},children:function(e){return(0,s.jsx)(o.l0,{children:(0,s.jsx)("section",{className:"text-gray-600 body-font ",children:(0,s.jsx)("div",{className:"container px-4 py-24 mx-auto flex flex-wrap items-center max-w-[800px]",children:(0,s.jsxs)("div",{className:" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0",children:[(0,s.jsx)("h2",{className:"text-gray-900 text-lg font-medium title-font mb-5",children:"Sign Up"}),(0,s.jsxs)("div",{className:"relative mb-4",children:[(0,s.jsx)("label",{htmlFor:"full-name",className:"leading-7 text-sm text-gray-600",children:"Username"}),(0,s.jsx)(l.Z,{type:"text",id:"full-name",name:"username",className:"w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,s.jsxs)("div",{className:"relative mb-4",children:[(0,s.jsx)("label",{htmlFor:"email",className:"leading-7 text-sm text-gray-600",children:"Email"}),(0,s.jsx)(l.Z,{type:"email",id:"email",name:"email",className:"w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,s.jsxs)("div",{className:"relative mb-4",children:[(0,s.jsx)("label",{htmlFor:"password",className:"leading-7 text-sm text-gray-600",children:"Password"}),(0,s.jsx)(l.Z,{type:"password",id:"password",name:"password",className:"w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,s.jsxs)("div",{className:"relative mb-4",children:[(0,s.jsx)("label",{htmlFor:"confirm_password",className:"leading-7 text-sm text-gray-600",children:"Confirm Password"}),(0,s.jsx)(l.Z,{type:"password",id:"confirm_password",name:"confirm_password",className:"w-full bg-white rounded border-emerald-600 border-2 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"})]}),(0,s.jsxs)("div",{className:"sm:flex my-2 ",children:[(0,s.jsx)("button",{type:"reset",className:"text-white bg-emerald-500 border-0 py-2 text-xs px-7 focus:orose-none hover:bg-emerald-600 rounded sm:text-lg",children:"Reset"}),(0,s.jsx)("div",{className:"sm:hidden my-3"}),(0,s.jsx)("button",{disabled:!e.isValid||!e.dirty,type:"submit",className:"text-white bg-emerald-500 border-0 py-2 px-4 focus:outline-none hover:bg-emerald-600 rounded text-xs sm:text-lg sm:mx-2 ",children:"Signup"})]}),(0,s.jsxs)("p",{className:"text-xs text-gray-500 mt-3",children:["Already Have An Account ",(0,s.jsx)(d(),{className:"",href:"/auth/Login",children:(0,s.jsx)("a",{className:"text-emerald-500",children:"Login"})})]})]})})})})}})})}}},function(e){e.O(0,[332,774,888,179],(function(){return r=6737,e(e.s=r);var r}));var r=e.O();_N_E=r}]);