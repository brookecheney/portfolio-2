(window.webpackJsonp=window.webpackJsonp||[]).push([[71,41],{532:function(t,e,n){"use strict";var o=n(14),l=n(3),r=n(4),d=n(110),c=n(21),v=n(15),m=n(213),f=n(38),h=n(109),C=n(212),_=n(5),y=n(75).f,I=n(32).f,w=n(20).f,N=n(533),O=n(534).trim,V="Number",x=l.Number,S=x.prototype,k=l.TypeError,E=r("".slice),B=r("".charCodeAt),j=function(t){var e=C(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,n,o,l,r,d,c,code,v=C(t,"number");if(h(v))throw k("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=O(v),43===(e=B(v,0))||45===e){if(88===(n=B(v,2))||120===n)return NaN}else if(48===e){switch(B(v,1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+v}for(d=(r=E(v,2)).length,c=0;c<d;c++)if((code=B(r,c))<48||code>l)return NaN;return parseInt(r,o)}return+v};if(d(V,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var M,T=function(t){var e=arguments.length<1?0:x(j(t)),n=this;return f(S,n)&&_((function(){N(n)}))?m(Object(e),n,T):e},$=o?y(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;$.length>F;F++)v(x,M=$[F])&&!v(T,M)&&w(T,M,I(x,M));T.prototype=S,S.constructor=T,c(l,V,T)}},533:function(t,e,n){var o=n(4);t.exports=o(1..valueOf)},534:function(t,e,n){var o=n(4),l=n(25),r=n(16),d=n(535),c=o("".replace),v="["+d+"]",m=RegExp("^"+v+v+"*"),f=RegExp(v+v+"*$"),h=function(t){return function(e){var n=r(l(e));return 1&t&&(n=c(n,m,"")),2&t&&(n=c(n,f,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},535:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},537:function(t,e,n){},539:function(t,e,n){"use strict";n(537)},541:function(t,e,n){"use strict";n.r(e);n(532),n(31),n(214);var o={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},l=(n(539),n(73)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isOpen?n("div",[n("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[n("div",{class:t.classNames.modalVideoBody},[n("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),n("div",{class:t.classNames.modalVideoInner},[n("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[n("iframe",{attrs:{src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"fb8a83f8",null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{videoIsOpen:!1,settings:{dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1}}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},l=n(73),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"block-sec"},[n("div",{staticClass:"background bg-img pt-100 pb-0 parallaxie",staticStyle:{"background-image":"url(/img/bg-vid.jpg)"},attrs:{"data-overlay-dark":"5"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"vid-area"},[n("span",{staticClass:"text"},[t._v("Watch Video")]),t._v(" "),n("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),n("div",{staticClass:"vid-icon cursor-pointer",on:{click:t.openVideo}},[t._m(0)])],1)]),t._v(" "),n("div",{staticClass:"col-lg-5 offset-lg-1"},[n("div",{staticClass:"testim-box"},[t._m(1),t._v(" "),n("VueSlickCarousel",t._b({staticClass:"slic-item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},"VueSlickCarousel",t.settings,!1),[n("div",{staticClass:"item"},[n("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/1.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/2.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),t._v(" "),n("div",{staticClass:"item"},[n("p",[t._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"img"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:"/img/clients/3.jpg",alt:""}})])]),t._v(" "),n("div",{staticClass:"cont"},[n("div",{staticClass:"author"},[n("h6",{staticClass:"author-name"},[t._v("Alex Regelman")]),t._v(" "),n("span",{staticClass:"author-details"},[t._v("\n                        Co-founder, Colabrio\n                      ")])])])])])])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"vid"},[e("div",{staticClass:"vid-butn"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-play"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-box"},[n("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Our Clients")]),t._v(" "),n("h4",{staticClass:"wow fadeInLeft",attrs:{"data-wow-delay":".5s"}},[t._v("\n                What Client's Say?\n              ")])])}],!1,null,"cf97af86",null);e.default=component.exports;installComponents(component,{ModalVideo:n(541).default})}}]);