(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{14:function(e,t,o){e.exports={header:"Header_header__9UKQE",header__nav:"Header_header__nav__2BvLA",header__nav_list:"Header_header__nav_list__uMpbg",scalingItems:"Header_scalingItems__3PHck",active_dropdown:"Header_active_dropdown__e15NC",burger_menu:"Header_burger_menu__KyEsk",active_burger:"Header_active_burger__Iyc94",slideShow:"Header_slideShow__38VlK"}},160:function(e,t,o){},190:function(e,t,o){},195:function(e,t,o){"use strict";o.r(t);var a=o(11),n=o(13),i="SK/APP/INITIALIZED_SUCCESS",c={initialized:!1,links:[{text:"About",dataScroll:"about"},{text:"Portfolio",dataScroll:"portfolio"},{text:"Technologies stack",dataScroll:"technologies-stack"},{text:"Contacts",dataScroll:"contacts"}],sites:[{title:"Gambling Quiz",url:"https://react-iq-quiz-app.herokuapp.com/"},{title:"Todo List",url:"https://reactjs-todo-lists-app.herokuapp.com/#/"},{title:"Pizza E-Shop",url:"https://react-pizza-eshop.herokuapp.com/#/"},{title:"Budget Calculation App",url:"https://oleg-irchishyn.github.io/React-Budget-App/"},{title:"Library E-Shop",url:"https://oleg-irchishyn.github.io/E-shop/"},{title:"Smile Expo's New Design",url:"https://oleg-irchishyn.github.io/smile-expo-proto/web/"},{title:"Diamon Drilling Services Landing Page",url:"http://almaz-ok.kiev.ua/index_eng.html"},{title:"Fjord Landing",url:"https://oleg-irchishyn.github.io/Fjord_Landing_Staging/"},{title:"Up Real Estate Landing",url:"https://oleg-irchishyn.github.io/UP_Real_Staging/"}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type===i?Object(n.a)(Object(n.a)({},e),{},{initialized:!0}):e},r=o(70),l=o(197),d=Object(a.b)({app:s,form:l.a}),u=[r.a],p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.c,_=Object(a.d)(d,p(a.a.apply(void 0,u)));window.__store__=_;var h=_,b=o(0),j=o.n(b),m=o(17),f=o.n(m),g=(o(160),o(73)),O=o.n(g),x=o(74),v=o.n(x),w=o(19),S=o(4),y=o(26),k=o(30),N=o(14),E=o.n(N),P=o(3),A=o.n(P),C=o(76),I=function(e){return e.app.links},L=function(e){return e.app.sites},T=o(1),H=Object(a.c)(Object(w.b)((function(e){return{links:I(e)}}),{}))((function(e){var t=e.links,o=j.a.useState(!1),a=Object(k.a)(o,2),n=a[0],i=a[1],c=j.a.useState(!1),s=Object(k.a)(c,2),r=s[0],l=s[1],d=j.a.useRef(null),u=j.a.useCallback((function(e,t){i(!e),l(!t)}),[n,r]),p=j.a.useCallback((function(e){(e.path||e.composedPath&&e.composedPath()).includes(d.current)||u(n,r)}),[n,r]);return j.a.useEffect((function(){return document.body.addEventListener("click",p),function(){document.body.removeEventListener("click",p)}}),[p]),Object(T.jsx)("section",{className:A()(E.a.header),children:Object(T.jsxs)("div",{className:A()(E.a.header__nav),children:[Object(T.jsxs)("div",{onClick:function(){return u(n,r)},className:A()(E.a.burger_menu,Object(y.a)({},E.a.active_burger,n)),children:[Object(T.jsx)("span",{}),Object(T.jsx)("span",{}),Object(T.jsx)("span",{})]}),Object(T.jsx)("ul",{ref:d,className:A()(E.a.header__nav_list,Object(y.a)({},E.a.active_dropdown,r)),children:t.map((function(e,t){var o=e.text,a=e.dataScroll;return Object(T.jsx)("li",{children:Object(T.jsx)(C.Link,{to:a,spy:!0,smooth:!0,offset:-80,duration:500,delay:0,onClick:function(){return u(n,r)},children:o})},"".concat(o,"_").concat(t))}))})]})})})),F=o(20),z=o.n(F),B=o(81),D=o(80),R=(o(174),j.a.memo((function(){return Object(T.jsxs)("section",{id:"about",className:A()(z.a.about),children:[Object(T.jsx)("div",{className:A()(z.a.about__top_content,"container"),children:Object(T.jsx)(B.a,{steps:["HI, Pleasure to meet you \ud83d\udc4b",1e3,"I am Oleg, a Front-end developer with experience in Vanilla JS and ReactJS \ud83d\udc96",1e3,"Below, you may find more info about me and my projects \ud83d\udc47",1e3,"Hope, you will enjoy them \ud83d\ude0e",1e3],loop:1,wrapper:"div"})}),Object(T.jsxs)("div",{className:A()(z.a.about__bottom_content,"container"),children:[Object(T.jsx)(M,{}),Object(T.jsxs)(D.a,{children:[Object(T.jsx)("p",{children:" Outsource company or a product one is not a concern to me."}),Object(T.jsx)("p",{children:"I am looking for the company, that would give me an opportunity to grow and learn. "}),Object(T.jsxs)("p",{children:[" ","The most important moment for me is communication within the development team and clients."," "]}),Object(T.jsx)("p",{children:"Bad management causes a lot of issues, as well as bad code. "}),Object(T.jsxs)("p",{children:["Whether I will be coding websites or web services, all I want is to sharpen my skills and learn JS and ReactJS on real projects."," "]}),Object(T.jsx)("p",{children:"The end goal is to become an outstanding developer, who will participate in difficult projects, which will bring profit to a company and satisfaction to me."})]})]})]})}))),J=o.p+"static/media/img_1.f6b826dd.jpg",K=o.p+"static/media/img_2.df1c9989.jpg",M=function(){var e=j.a.useState(0),t=Object(k.a)(e,2),o=t[0],a=t[1],n=j.a.useMemo((function(){return[J,K]}),[]),i=j.a.useCallback((function(){return o<n.length?a(o+1):a(0),o}),[]);return j.a.useEffect((function(){setInterval(i,1e4)}),[]),Object(T.jsx)("div",{className:A()(z.a.images_slideShow),children:Object(T.jsx)("img",{src:n[o],alt:"my images"})})},U=(o.p,o(53),o(77)),V=o.n(U),q=(o(190),o(191),o(192),function(e){var t=e.onClick;return Object(T.jsx)("div",{onClick:t,className:"slider-left-arrow",children:Object(T.jsx)("i",{className:"fa  fa-angle-left"})})}),W=function(e){var t=e.onClick;return Object(T.jsx)("div",{onClick:t,className:"slider-right-arrow",children:Object(T.jsx)("i",{className:"fa fa-angle-right"})})},Q=function(e){var t=e.sliderSites,o={dots:!1,infinite:!0,autoplay:!0,autoplaySpeed:1e4,pauseOnHover:!0,pauseOnFocus:!0,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"60px",prevArrow:Object(T.jsx)(q,{}),nextArrow:Object(T.jsx)(W,{}),responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(T.jsx)(V.a,Object(n.a)(Object(n.a)({},o),{},{className:A()("portfolio__list"),children:t.map((function(e,t){var o=e.title;e.url;return Object(T.jsx)(G,{item:e},"".concat(o,"_").concat(t))}))}))},X=o(78),G=function(e){var t=e.item,o=t.title,a=t.url;return Object(T.jsx)("div",{className:A()("item"),children:Object(T.jsx)(X.a,{title:o,href:a,rel:"nofollow",className:A()("item__link"),children:Object(T.jsxs)("span",{children:[" ",o]})})})},Z=j.a.memo((function(e){var t=e.sites;return Object(T.jsxs)("div",{className:O.a.App,children:[Object(T.jsx)(H,{}),Object(T.jsx)(R,{}),Object(T.jsx)("section",{id:"portfolio",className:A()(v.a.portfolio),children:Object(T.jsx)(Q,{sliderSites:t})})]})})),Y=Object(a.c)(Object(w.b)((function(e){return{sites:L(e)}})),S.d)(Z),$=o(51),ee=(o(194),function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,198)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;o(e),a(e),n(e),i(e),c(e)}))});f.a.render(Object(T.jsx)(j.a.StrictMode,{children:Object(T.jsx)($.a,{basename:"/my-portfolio",children:Object(T.jsx)(w.a,{store:h,children:Object(T.jsx)(Y,{})})})}),document.getElementById("root")),ee()},20:function(e,t,o){e.exports={about:"About_about__3LuBN",about__top_content:"About_about__top_content__1WoMU",about__bottom_content:"About_about__bottom_content__2EpCs",images_slideShow:"About_images_slideShow__2ABIh",slideShow:"About_slideShow__15V_9"}},53:function(e,t,o){e.exports={preLoaderWrapper:"Preloader_preLoaderWrapper__jamlK",slideShow:"Preloader_slideShow__20-v2"}},73:function(e,t,o){e.exports={App:"App_App__3PKaq",slideShow:"App_slideShow__PzS_l"}},74:function(e,t,o){e.exports={portfolio:"PortFolio_portfolio__3V9qw",slideShow:"PortFolio_slideShow__3EarF"}}},[[195,1,2]]]);
//# sourceMappingURL=main.f101df9f.chunk.js.map