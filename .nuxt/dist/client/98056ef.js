(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{536:function(t,e,r){"use strict";r(19),r(37),r(31),r(76);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},589:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/3.jpg","sub":"Design"}]')},635:function(t,e,r){"use strict";r.r(e);r(74);var n=r(589),l=r(536),o={props:["sliderRef"],data:function(){return{showcasse1Data:n,swiperOptions:{speed:1e3,slidesPerView:1,mousewheel:!0,parallax:!0,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++)t.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}))}},mounted:function(){Object(l.a)()}},c=r(73),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{ref:t.sliderRef,staticClass:"slider showcase-full"},[r("div",{staticClass:"swiper-container parallax-slider"},[r("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions},on:{ready:t.handleSwiperReadied}},t._l(t.showcasse1Data,(function(e){return r("swiper-slide",{key:e.id,staticClass:"swiper-slide"},[r("div",{staticClass:"bg-img valign",style:"background-image: url("+e.image+")",attrs:{"data-overlay-dark":"4"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"caption"},[r("h1",[r("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[r("div",{staticClass:"stroke",attrs:{"data-swiper-parallax":"-2000"}},[t._v("\n                        "+t._s(e.title.first)+"\n                      ")]),t._v(" "),r("span",{attrs:{"data-swiper-parallax":"-5000"}},[t._v("\n                        "+t._s(e.title.second)+"\n                      ")])]),t._v(" "),r("div",{staticClass:"bord"})],1),t._v(" "),r("div",{staticClass:"discover"},[r("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[r("span",[t._v("\n                        Explore "),r("br"),t._v("\n                        More\n                      ")])])],1)])])])])])])})),1),t._v(" "),r("div",{staticClass:"txt-botm"},[r("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),r("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),r("div",{ref:"paginationRef",staticClass:"swiper-pagination dots"})])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",[t._v("Next Slide")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",[t._v("Prev Slide")])])}],!1,null,"487b3454",null);e.default=component.exports}}]);