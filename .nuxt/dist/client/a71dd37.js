(window.webpackJsonp=window.webpackJsonp||[]).push([[124,25,43,72,73],{529:function(t,e,o){"use strict";o.r(e);var r={props:["hideBGCOLOR"]},n=o(73),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{class:t.hideBGCOLOR?"":"sub-bg"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[t._m(0),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),o("ul",[o("li",[o("div",{staticClass:"img"},[o("NuxtLink",{attrs:{to:"#"}},[o("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),o("div",{staticClass:"sm-post"},[o("NuxtLink",{attrs:{to:"#"}},[o("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),o("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),o("li",[o("div",{staticClass:"img"},[o("NuxtLink",{attrs:{to:"#"}},[o("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),o("div",{staticClass:"sm-post"},[o("NuxtLink",{attrs:{to:"#"}},[o("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),o("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item"},[t._m(3),t._v(" "),o("div",{staticClass:"social"},[o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-twitter"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-instagram"})]),t._v(" "),o("NuxtLink",{attrs:{to:"#0"}},[o("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),o("div",{staticClass:"copy-right"},[o("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),o("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-4"},[o("div",{staticClass:"item md-mb50"},[o("div",{staticClass:"title"},[o("h5",[t._v("Contact Us")])]),t._v(" "),o("ul",[o("li",[o("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Officeal Address")]),t._v(" "),o("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Email Us")]),t._v(" "),o("p",[t._v("support@gmail.com")])])]),t._v(" "),o("li",[o("span",{staticClass:"icon pe-7s-call"}),t._v(" "),o("div",{staticClass:"cont"},[o("h6",[t._v("Call Us")]),t._v(" "),o("p",[t._v("+87986451666")])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title"},[o("h5",[t._v("Recent News")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("div",{staticClass:"subscribe"},[o("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),t._v(" "),o("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:o(529).default})},530:function(t,e,o){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var o=t.parentNode.firstChild;o;)1===o.nodeType&&o!==t&&e.push(o),o=o.nextSibling;return e}},531:function(t,e,o){"use strict";o.r(e);o(47),o(48),o(19);var r=o(530),n={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(r.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},l=o(73),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[o("div",{staticClass:"container"},[o("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?o("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,o("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),o("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[o("ul",{staticClass:"navbar-nav ml-auto"},[o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[o("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),o("div",{staticClass:"dropdown-menu"},[o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),o("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),o("li",{staticClass:"nav-item"},[o("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-bar"},[e("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},532:function(t,e,o){"use strict";var r=o(14),n=o(3),l=o(4),c=o(110),d=o(21),v=o(15),m=o(213),f=o(38),_=o(109),C=o(212),h=o(5),k=o(75).f,w=o(32).f,x=o(20).f,N=o(533),L=o(534).trim,y="Number",E=n.Number,j=E.prototype,S=n.TypeError,I=l("".slice),A=l("".charCodeAt),$=function(t){var e=C(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,o,r,n,l,c,d,code,v=C(t,"number");if(_(v))throw S("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=L(v),43===(e=A(v,0))||45===e){if(88===(o=A(v,2))||120===o)return NaN}else if(48===e){switch(A(v,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+v}for(c=(l=I(v,2)).length,d=0;d<c;d++)if((code=A(l,d))<48||code>n)return NaN;return parseInt(l,r)}return+v};if(c(y,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var W,D=function(t){var e=arguments.length<1?0:E($(t)),o=this;return f(j,o)&&h((function(){N(o)}))?m(Object(e),o,D):e},T=r?k(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;T.length>M;M++)v(E,W=T[M])&&!v(D,W)&&x(D,W,w(E,W));D.prototype=j,j.constructor=D,d(n,y,D)}},533:function(t,e,o){var r=o(4);t.exports=r(1..valueOf)},534:function(t,e,o){var r=o(4),n=o(25),l=o(16),c=o(535),d=r("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),_=function(t){return function(e){var o=l(n(e));return 1&t&&(o=d(o,m,"")),2&t&&(o=d(o,f,"")),o}};t.exports={start:_(1),end:_(2),trim:_(3)}},535:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},543:function(t,e,o){"use strict";o(19),o(37),o(74),o(532);var r=0;function n(t,time){setInterval(function(t){(r=Number(window.getComputedStyle(t).getPropertyValue("opacity")))<1?(r+=1,t.style.opacity=r):clearInterval(0)}(t),time)}function l(t,time){setInterval(function(t){(r=Number(window.getComputedStyle(t).getPropertyValue("opacity")))>0?(r=0,t.style.opacity=r):clearInterval(0)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){n(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){l(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){n(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){l(e,800),e.style.padding=0}))}))}},560:function(t,e,o){"use strict";o.r(e);var r={props:["sliderRef"]},n=o(73),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("header",{ref:t.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-7 col-md-9 static"},[o("div",{staticClass:"capt mt-50"},[o("div",{staticClass:"parlx text-center"},[o("h1",{staticClass:"color-font"},[t._v("amazing works")]),t._v(" "),o("p",[t._v("\n              Creativity involves breaking out of expected & repeatable\n              patterns in order to look at things in different way than ever\n              before.\n            ")])]),t._v(" "),o("div",{staticClass:"bactxt custom-font valign"},[o("span",{staticClass:"full-width"},[t._v("Works")])])])])])])}],!1,null,"18cdfddc",null);e.default=component.exports},637:function(t,e,o){"use strict";o.r(e);var r=o(543),n={mounted:function(){Object(r.a)()}},l=o(73),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"works section-padding pb-70"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row lg-space"},[o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/1.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/3.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/4.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6 valign"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/2/5.jpg",alt:""}})])])],1)]),t._v(" "),o("div",{staticClass:"col-lg-4 col-md-6"},[o("div",{staticClass:"item"},[o("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[o("div",{staticClass:"img",attrs:{"data-tooltip-tit":"Work image","data-tooltip-sub":"Design"}},[o("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:""}})])])],1)])])])])}),[],!1,null,"a595b24c",null);e.default=component.exports},690:function(t,e,o){"use strict";o.r(e);var r={layout:"light",head:function(){return{titleTemplate:"%s - Works Light"}},mounted:function(){if(this.$refs.fixedSlider.$el&&this.$refs.MainContent){var t=this.$refs.fixedSlider.$el.offsetHeight;this.$refs.MainContent.style.marginTop=t+"px"}var e=this.$refs.navbar.$el;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}},n=o(73),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._v(" "),o("Navbar",{ref:"navbar",attrs:{lr:"logoRef",theme:"light"}}),t._v(" "),o("WorksHeader",{ref:"fixedSlider"}),t._v(" "),o("div",{ref:"MainContent",staticClass:"main-content"},[o("WorksStyle1"),t._v(" "),o("Footer")],1)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"circle-bg"},[o("div",{staticClass:"circle-color fixed"},[o("div",{staticClass:"gradient-circle"}),t._v(" "),o("div",{staticClass:"gradient-circle two"})])])}],!1,null,"78defe1a",null);e.default=component.exports;installComponents(component,{Navbar:o(531).default,WorksHeader:o(560).default,WorksStyle1:o(637).default,Footer:o(529).default})}}]);