(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),l=c(15),i=c.n(l),a=(c(23),c(17)),o=(c(24),c(4)),j=function(){return Object(s.jsx)("div",{className:"h-screen flex justify-center items-center bg-yellow-300",children:Object(s.jsx)("h1",{className:"uppercase font-black lg:text-9xl md:text-7xl sm:text-5xl text-3xl",children:" About Page"})})},d=function(e){var t=e.toggle;return Object(s.jsxs)("nav",{className:"flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono",role:"navigation",children:[Object(s.jsx)(o.b,{to:"/",className:"pl-8",children:"EGG"}),Object(s.jsx)("div",{className:"pl-4 pr-4 cursor-pointer md:hidden",onClick:t,children:Object(s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),Object(s.jsxs)("div",{className:"pr-8 md:block hidden ",children:[Object(s.jsx)(o.b,{className:"p-4",to:"/",children:"Home"}),Object(s.jsx)(o.b,{className:"p-4",to:"/Menu",children:"Menu"}),Object(s.jsx)(o.b,{className:"p-4",to:"/About",children:"about"}),Object(s.jsx)(o.b,{className:"p-4",to:"/Contact",children:"Contact"})]})]})},b=function(){return Object(s.jsx)("div",{className:"flex justify-center items-center h-16 bg-black text-white",children:Object(s.jsx)("p",{children:"Copyright  2021 EGG All rights reserved."})})},x=c(2);var m=function(){return Object(s.jsxs)("div",{className:"bg-white h-screen flex flex-col justify-center items-center",children:[Object(s.jsx)("h1",{className:"lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14",children:"EGGCELENT"}),Object(s.jsxs)(o.b,{className:"py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300  transition duration-300 ease-in-out flex font-medium items-center animate-bounce",children:["Order Now",Object(s.jsx)("svg",{className:"w-6 h-6 ml-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})]})]})},h=c.p+"static/media/egg1.6f91b989.jpg",u=c.p+"static/media/egg2.2a1ae88e.jpg",O=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"menu-card",children:[Object(s.jsx)("img",{src:h,alt:"egg",className:"h-full rounded mb-20 shadow"}),Object(s.jsxs)("div",{className:"center-content",children:[Object(s.jsx)("h2",{className:"text-2xl mb-2",children:"Egg Muffins"}),Object(s.jsx)("p",{className:" mb-2",children:"Crispy,Delicious, and nutritious"}),Object(s.jsx)("span",{children:"$16"})]})]}),Object(s.jsxs)("div",{className:"menu-card",children:[Object(s.jsx)("img",{src:u,alt:"egg",className:"h-full rounded mb-20 shadow"}),Object(s.jsxs)("div",{className:"center-content",children:[Object(s.jsx)("h2",{className:"text-2xl mb-2",children:"Egg Ommels"}),Object(s.jsx)("p",{className:" mb-2",children:"Crispy,Delicious, and nutritious"}),Object(s.jsx)("span",{children:"$19"})]})]})]})},g=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m,{}),Object(s.jsx)(O,{})]})},p=function(){return Object(s.jsx)("div",{className:"h-screen flex justify-center items-center bg-green-300",children:Object(s.jsx)("h1",{className:" uppercase font-black lg:text-9xl md:text-7xl sm:text-5xl text-3xl",children:" Menu Page"})})},f=function(e){var t=e.isOpen,c=e.toggle;return Object(s.jsxs)("div",{className:t?"grid grid-rows-4 text-center items-center bg-yellow-500":"hidden",onClick:c,children:[Object(s.jsx)(o.b,{className:"p-4",to:"/",children:"Home"}),Object(s.jsx)(o.b,{className:"p-4",to:"/Menu",children:"Menu"}),Object(s.jsx)(o.b,{className:"p-4",to:"/About",children:"About"}),Object(s.jsx)(o.b,{className:"p-4",to:"/Contact",children:"Contact"})]})};var N=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],l=function(){r(!c)};return Object(n.useEffect)((function(){var e=function(){window.innerWidth>768&&c&&(r(!1),console.log("i resize"))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{toggle:l}),Object(s.jsx)(f,{isOpen:c,toggle:l}),Object(s.jsxs)(x.c,{children:[Object(s.jsx)(x.a,{path:"/",exact:!0,component:g}),Object(s.jsx)(x.a,{path:"/menu",component:p}),Object(s.jsx)(x.a,{path:"/About",component:j})]}),Object(s.jsx)(b,{})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),r(e),l(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(o.a,{children:Object(s.jsx)(N,{})})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.868946af.chunk.js.map