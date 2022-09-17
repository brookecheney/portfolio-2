exports.ids = [111,7,17,20,23,24,34,35,42,60,66,67,78];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar-arch/index.vue?vue&type=template&id=51804cef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:_vm.nr,staticClass:"navbar navbar-expand-lg"},[_vm._ssrNode("<div class=\"container\" data-v-51804cef>","</div>",[_c('NuxtLink',{staticClass:"logo",attrs:{"to":"/"}},[(_vm.theme === 'light')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-dark.png","alt":"logo"}}):(_vm.theme === 'themeD')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}}):_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}})]),_vm._ssrNode(" <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-51804cef><span class=\"icon-bar\" data-v-51804cef><i class=\"fas fa-bars\" data-v-51804cef></i></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-51804cef>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ml-auto\" data-v-51804cef>","</ul>",[_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-51804cef><span data-toggle=\"dropdown\" data-scroll-nav=\"0\" class=\"nav-link dropdown-toggle\" data-v-51804cef>\n            Home\n          </span> <div class=\"dropdown-menu\" data-v-51804cef><a href=\"homepage/home1-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Main Home\n            </a> <a href=\"homepage/home2-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Creative Agency\n            </a> <a href=\"homepage/home5-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Digital Agency\n            </a> <a href=\"homepage/home4-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Business One Page\n            </a> <a href=\"homepage/home3-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Corporate Business\n            </a> <a href=\"homepage/home6-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Modern Agency\n            </a> <a href=\"homepage/home7-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Freelancer\n            </a> <a href=\"homepage/home8-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Architecture\n            </a></div></li> "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#about'),expression:"'#about'"}],staticClass:"nav-link"},[_vm._ssrNode("About ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#works'),expression:"'#works'"}],staticClass:"nav-link"},[_vm._ssrNode(" Works ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#team'),expression:"'#team'"}],staticClass:"nav-link"},[_vm._ssrNode(" Team ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#testimonials'),expression:"'#testimonials'"}],staticClass:"nav-link"},[_vm._ssrNode(" Testimonials ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#blogs'),expression:"'#blogs'"}],staticClass:"nav-link"},[_vm._ssrNode(" Blog ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#contact'),expression:"'#contact'"}],staticClass:"nav-link"},[_vm._ssrNode(" Contact ")])])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/navbar-arch/index.vue?vue&type=template&id=51804cef&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar-arch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navbar_archvue_type_script_lang_js_ = ({
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: e => {
      Object(getSiblings["a" /* default */])(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
        item.classList.remove("show");

        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }

        if (item.childNodes[2]) {
          item.childNodes[2].classList.remove("show");
        }
      });
      e.target.setAttribute("aria-expanded", true);

      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];

        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: e => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    }
  }
});
// CONCATENATED MODULE: ./components/navbar-arch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navbar_archvue_type_script_lang_js_ = (navbar_archvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/navbar-arch/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_navbar_archvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51804cef",
  "7de78390"
  
)

/* harmony default export */ var navbar_arch = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro5/index.vue?vue&type=template&id=6b1b547e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"slider arch-slider",attrs:{"id":"arch-slider"}},[_vm._ssrNode("<div class=\"swiper-container parallax-slider\" data-v-6b1b547e>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleSwiperReadied}},_vm._l((_vm.intro5Data),function(slide,index){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"bg-img valign",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-overlay-dark":"6"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6"},[_c('div',{staticClass:"caption mt-30"},[_c('h5',[_vm._v("0"+_vm._s(index + 1)+" .")]),_vm._v(" "),_c('h1',[(typeof slide.title === 'object')?_c('div',[_vm._v("\n                      "+_vm._s(slide.title.first)+" "),_c('br'),_vm._v("\n                      "+_vm._s(slide.title.second)+"\n                    ")]):_c('div',[_vm._v("\n                      "+_vm._s(slide.title)+"\n                    ")])]),_vm._v(" "),(slide.content)?_c('p',[_vm._v(_vm._s(slide.content))]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 valign"},[_c('div',{staticClass:"explore"},[_c('a',{attrs:{"href":"#0"}},[_vm._v("\n                    Explore Project\n                    "),_c('i',{staticClass:"ion-chevron-right"})])])])])])])])}),1),_vm._ssrNode(" <div class=\"setting\" data-v-6b1b547e><div class=\"controls\" data-v-6b1b547e><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-6b1b547e><i class=\"ion-chevron-right\" data-v-6b1b547e></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-6b1b547e><i class=\"ion-chevron-left\" data-v-6b1b547e></i></div></div> <div class=\"swiper-pagination\" data-v-6b1b547e></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Intro5/index.vue?vue&type=template&id=6b1b547e&scoped=true&

// EXTERNAL MODULE: ./data/intro5.json
var intro5 = __webpack_require__(77);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Intro5vue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      intro5Data: intro5,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".setting .swiper-button-prev",
          nextEl: ".setting .swiper-button-next"
        },
        parallax: true,
        pagination: {
          clickable: true,
          el: ".setting .swiper-pagination"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  },
  methods: {
    handleSwiperReadied: swiper => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    }
  },

  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(fadeWhenScroll["a" /* default */])(document.querySelectorAll(".fixed-slider .caption"));
  }

});
// CONCATENATED MODULE: ./components/Intro5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro5vue_type_script_lang_js_ = (Intro5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Intro5/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6b1b547e",
  "6b1c59c2"
  
)

/* harmony default export */ var Intro5 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us6/index.vue?vue&type=template&id=cd5d0fa6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-ar section-padding",attrs:{"id":"about"}},[_vm._ssrNode("<div class=\"container\" data-v-cd5d0fa6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cd5d0fa6>","</div>",[_vm._ssrNode("<div class=\"col-lg-6 valign\" data-v-cd5d0fa6><div class=\"img\" data-v-cd5d0fa6><div class=\"bg-img bg-fixed hero-bg\" style=\"background-image: url(/img/arch/hero.jpg)\" data-v-cd5d0fa6></div> <div class=\"exp valign text-center\" data-v-cd5d0fa6><div class=\"full-width\" data-v-cd5d0fa6><h2 class=\"bg-img bg-fixed\" style=\"background-image: url(/img/arch/hero.jpg)\" data-v-cd5d0fa6>\n                25\n              </h2> <p data-v-cd5d0fa6>Years Of Experience</p></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-6 valign\" data-v-cd5d0fa6>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-cd5d0fa6>","</div>",[_vm._ssrNode("<h6 class=\"sub-title main-color ls10 text-u\" data-v-cd5d0fa6>About Us</h6> <h3 data-v-cd5d0fa6>Best Designers Architectures for You.</h3> <p data-v-cd5d0fa6>\n            Architecture bibendum pharetra eleifend. Suspendisse vel volutpat\n            purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes,\n            nec condimentum ipsum consequat. Mauris vitae consequat nibh,\n            vitae interdum sit amet bibendum nisl.\n          </p> "),_c('NuxtLink',{staticClass:"butn bord mt-30",attrs:{"to":"/about/about-dark"}},[_c('span',[_vm._v("About Us")])])],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-us6/index.vue?vue&type=template&id=cd5d0fa6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us6/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var About_us6vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/About-us6/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us6vue_type_script_lang_js_ = (About_us6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-us6/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cd5d0fa6",
  "653678d5"
  
)

/* harmony default export */ var About_us6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services6/index.vue?vue&type=template&id=de2be642&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"serv-arch"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-de2be642><div class=\"row justify-content-center\" data-v-de2be642><div class=\"col-lg col-md-6 item bg-img\" style=\"background-image: url(/img/arch/s2.jpg)\" data-v-de2be642><h6 class=\"numb\" data-v-de2be642>01</h6> <h5 data-v-de2be642>Architecture</h5> <p data-v-de2be642>\n          We provide all equipment and services, etc and ensure a safe and\n          secure project site.\n        </p> <a href=\"#0\" class=\"custom-font more main-color\" data-v-de2be642> Read More </a></div> <div class=\"col-lg col-md-6 item bg-img\" style=\"background-image: url(/img/arch/s1.jpg)\" data-v-de2be642><h6 class=\"numb\" data-v-de2be642>02</h6> <h5 data-v-de2be642>Interior Design</h5> <p data-v-de2be642>\n          We provide all equipment and services, etc and ensure a safe and\n          secure project site.\n        </p> <a href=\"#0\" class=\"custom-font more main-color\" data-v-de2be642> Read More </a></div> <div class=\"col-lg col-md-6 item bg-img\" style=\"background-image: url(/img/arch/s3.jpg)\" data-v-de2be642><h6 class=\"numb\" data-v-de2be642>03</h6> <h5 data-v-de2be642>3D Modeling</h5> <p data-v-de2be642>\n          We provide all equipment and services, etc and ensure a safe and\n          secure project site.\n        </p> <a href=\"#0\" class=\"custom-font more main-color\" data-v-de2be642> Read More </a></div> <div class=\"col-lg col-md-6 item bg-img\" style=\"background-image: url(/img/arch/s4.jpg)\" data-v-de2be642><h6 class=\"numb\" data-v-de2be642>04</h6> <h5 data-v-de2be642>Furniture Design</h5> <p data-v-de2be642>\n          We provide all equipment and services, etc and ensure a safe and\n          secure project site.\n        </p> <a href=\"#0\" class=\"custom-font more main-color\" data-v-de2be642> Read More </a></div> <div class=\"col-lg col-md-6 item bg-img\" style=\"background-image: url(/img/arch/s5.jpg)\" data-v-de2be642><h6 class=\"numb\" data-v-de2be642>05</h6> <h5 data-v-de2be642>Urban Design</h5> <p data-v-de2be642>\n          We provide all equipment and services, etc and ensure a safe and\n          secure project site.\n        </p> <a href=\"#0\" class=\"custom-font more main-color\" data-v-de2be642> Read More </a></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services6/index.vue?vue&type=template&id=de2be642&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services6/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Services6vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Services6/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services6vue_type_script_lang_js_ = (Services6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Services6/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "de2be642",
  "46bdf556"
  
)

/* harmony default export */ var Services6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works6/index.vue?vue&type=template&id=a5bd439a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"portfolio po-arch section-padding pb-70",attrs:{"id":"works"}},[_vm._ssrNode("<div class=\"container\" data-v-a5bd439a><div class=\"row justify-content-center\" data-v-a5bd439a><div class=\"col-lg-8 col-md-10\" data-v-a5bd439a><div class=\"sec-head text-center\" data-v-a5bd439a><h2 data-wow-delay=\".3s\" class=\"wow fadeIn\" data-v-a5bd439a>Projects</h2></div></div></div></div> "),_vm._ssrNode("<div class=\"container\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"filtering col-12\" data-v-a5bd439a><div data-wow-delay=\".5s\" class=\"filter custom-font wow fadeIn\" data-v-a5bd439a><span data-filter=\"*\" class=\"active\" data-v-a5bd439a> All </span> <span data-filter=\".brand\" data-v-a5bd439a>Interior</span> <span data-filter=\".web\" data-v-a5bd439a>Architecture</span> <span data-filter=\".graphic\" data-v-a5bd439a>Residential</span></div></div> "),_vm._ssrNode("<div class=\"gallery full-width\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items graphic lg-mr wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/1.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>BUGANVILLA HOUSE</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/2.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>The Concept</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/5.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>Private House</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items web graphic wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/3.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>Floating House Messinia</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items brand wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/4.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>IN THE PINE FOREST</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\" class=\"col-md-6 items brand wow fadeInUp\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-a5bd439a>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/arch/work/6.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"cont\" data-v-a5bd439a>","</div>",[_vm._ssrNode("<h5 data-v-a5bd439a>VILLAS IN SOCHI</h5> "),_vm._ssrNode("<span class=\"tags main-color custom-font\" data-v-a5bd439a>","</span>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Arch")]),_vm._ssrNode(",\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Interior")])],2)],2)],2)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works6/index.vue?vue&type=template&id=a5bd439a&scoped=true&

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works6/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works6vue_type_script_lang_js_ = ({
  mounted() {
    Object(initIsotope["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./components/Works6/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works6vue_type_script_lang_js_ = (Works6vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works6/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works6vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a5bd439a",
  "f56724a6"
  
)

/* harmony default export */ var Works6 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Case-study/index.vue?vue&type=template&id=6763a43f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"case-study"},[_vm._ssrNode("<div id=\"content-carousel-container-unq-1\" data-swiper=\"container\" class=\"swiper-container\" data-v-6763a43f>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.caseStudyData),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide bg-img",style:(("background-image: url(" + (slide.image) + ") ")),attrs:{"data-overlay-dark":"7"}},[_c('div',{staticClass:"container d-flex align-items-end"},[_c('div',{staticClass:"cont"},[_c('NuxtLink',{attrs:{"to":"#"}},[_c('span',[_vm._v("Case Study")]),_vm._v(" "),_c('h6',{staticClass:"main-color"},[_vm._v(_vm._s(slide.date))]),_vm._v(" "),_c('h4',[_vm._v(_vm._s(slide.title))])])],1)])])}),1),_vm._ssrNode(" <div class=\"controls\" data-v-6763a43f><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-6763a43f><i class=\"fas fa-chevron-right\" data-v-6763a43f></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-6763a43f><i class=\"fas fa-chevron-left\" data-v-6763a43f></i></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Case-study/index.vue?vue&type=template&id=6763a43f&scoped=true&

// EXTERNAL MODULE: ./data/case-study.json
var case_study = __webpack_require__(78);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Case-study/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Case_studyvue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      caseStudyData: case_study,
      swiperOptions: {
        speed: 1000,
        effect: "fade",
        navigation: {
          prevEl: ".controls .swiper-button-prev",
          nextEl: ".controls .swiper-button-next"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  },

  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(fadeWhenScroll["a" /* default */])(document.querySelectorAll(".fixed-slider .caption"));
  }

});
// CONCATENATED MODULE: ./components/Case-study/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Case_studyvue_type_script_lang_js_ = (Case_studyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Case-study/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Case_studyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6763a43f",
  "34077ca5"
  
)

/* harmony default export */ var Case_study = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team3/index.vue?vue&type=template&id=44ca754a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"team section-padding",attrs:{"id":"team"}},[_vm._ssrNode("<div class=\"container\" data-v-44ca754a><div class=\"row justify-content-center\" data-v-44ca754a><div class=\"col-lg-8 col-md-10\" data-v-44ca754a><div class=\"sec-head text-center\" data-v-44ca754a><h2 data-wow-delay=\".3s\" class=\"wow fadeIn\" data-v-44ca754a>Our Team</h2></div></div></div></div> <div class=\"container\" data-v-44ca754a><div class=\"row\" data-v-44ca754a><div class=\"col-lg-4\" data-v-44ca754a><div class=\"item cir md-mb50\" data-v-44ca754a><div class=\"img\" data-v-44ca754a><img src=\"/img/team/a1.jpg\" alt data-v-44ca754a> <div id=\"circle\" data-v-44ca754a><svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enableBackground=\"new 0 0 300 300\" xmlSpace=\"preserve\" data-v-44ca754a><defs data-v-44ca754a><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-44ca754a></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-44ca754a></circle> <g data-v-44ca754a><use xlink:href=\"#circlePath\" fill=\"none\" data-v-44ca754a></use> <text fill=\"#c5a47e\" class=\"custom-font\" data-v-44ca754a><textPath xlink:href=\"#circlePath\" data-v-44ca754a>\n                      CEO Manager - CEO Manager - CEO Manager -\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-44ca754a><h6 class=\"ls3\" data-v-44ca754a>Ryan Hicks</h6> <span class=\"main-color fw-600\" data-v-44ca754a>Client Manager</span></div></div></div></div> <div class=\"col-lg-4\" data-v-44ca754a><div class=\"item cir md-mb50\" data-v-44ca754a><div class=\"img\" data-v-44ca754a><img src=\"/img/team/a2.jpg\" alt data-v-44ca754a> <div id=\"circle\" data-v-44ca754a><svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enableBackground=\"new 0 0 300 300\" xmlSpace=\"preserve\" data-v-44ca754a><defs data-v-44ca754a><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-44ca754a></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-44ca754a></circle> <g data-v-44ca754a><use xlink:href=\"#circlePath\" fill=\"none\" data-v-44ca754a></use> <text fill=\"#c5a47e\" class=\"custom-font\" data-v-44ca754a><textPath xlink:href=\"#circlePath\" data-v-44ca754a>\n                      Interior Designer Interior Designer Interior Designer\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-44ca754a><h6 class=\"ls3\" data-v-44ca754a>Ryan Hicks</h6> <span class=\"main-color fw-600\" data-v-44ca754a>Client Manager</span></div></div></div></div> <div class=\"col-lg-4\" data-v-44ca754a><div class=\"item cir sm-mb50\" data-v-44ca754a><div class=\"img\" data-v-44ca754a><img src=\"/img/team/a3.jpg\" alt data-v-44ca754a> <div id=\"circle\" data-v-44ca754a><svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enableBackground=\"new 0 0 300 300\" xmlSpace=\"preserve\" data-v-44ca754a><defs data-v-44ca754a><path id=\"circlePath\" d=\" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 \" data-v-44ca754a></path></defs> <circle cx=\"150\" cy=\"100\" r=\"75\" fill=\"none\" data-v-44ca754a></circle> <g data-v-44ca754a><use xlink:href=\"#circlePath\" fill=\"none\" data-v-44ca754a></use> <text fill=\"#c5a47e\" class=\"custom-font\" data-v-44ca754a><textPath xlink:href=\"#circlePath\" data-v-44ca754a>\n                      Landscape Designer Landscape Designer Landscape Designer\n                    </textPath></text></g></svg></div> <div class=\"info\" data-v-44ca754a><h6 class=\"ls3\" data-v-44ca754a>Ryan Hicks</h6> <span class=\"main-color fw-600\" data-v-44ca754a>Client Manager</span></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Team3/index.vue?vue&type=template&id=44ca754a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team3/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Team3vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Team3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Team3vue_type_script_lang_js_ = (Team3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Team3/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Team3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "44ca754a",
  "061a76b3"
  
)

/* harmony default export */ var Team3 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials-archo/index.vue?vue&type=template&id=efebce18&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"testimonials section-padding position-re",attrs:{"id":"testimonials"}},[_vm._ssrNode("<div class=\"container\" data-v-efebce18><div class=\"row justify-content-center\" data-v-efebce18><div class=\"col-lg-8 col-md-10\" data-v-efebce18><div class=\"sec-head text-center\" data-v-efebce18><h2 data-wow-delay=\".3s\" class=\"wow fadeIn\" data-v-efebce18>Testimonials</h2></div></div></div></div> "),_vm._ssrNode("<div class=\"container-fluid position-re\" data-v-efebce18>","</div>",[_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"row wow fadeInUp\" data-v-efebce18>","</div>",[_vm._ssrNode("<div class=\"col-lg-12\" data-v-efebce18>","</div>",[_c('VueSlickCarousel',_vm._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},'VueSlickCarousel',_vm.settings,false),[_c('div',{staticClass:"item"},[_c('div',{staticClass:"info inf-lrg valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('div',{staticClass:"valign"},[_c('p',{staticClass:"fz-20 fw-200"},[_vm._v("\n                I would highly recommend Vie Digital. I worked with the team\n                on an animation for our 'Click & Collect'\n                service.\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info inf-lrg valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('div',{staticClass:"valign"},[_c('p',{staticClass:"fz-20 fw-200"},[_vm._v("\n                I would highly recommend Vie Digital. I worked with the team\n                on an animation for our 'Click & Collect'\n                service.\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info inf-lrg valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('div',{staticClass:"valign"},[_c('p',{staticClass:"fz-20 fw-200"},[_vm._v("\n                I would highly recommend Vie Digital. I worked with the team\n                on an animation for our 'Click & Collect'\n                service.\n              ")])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info inf-lrg valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('div',{staticClass:"valign"},[_c('p',{staticClass:"fz-20 fw-200"},[_vm._v("\n                I would highly recommend Vie Digital. I worked with the team\n                on an animation for our 'Click & Collect'\n                service.\n              ")])])])])],1)]),_vm._ssrNode(" <div class=\"arrows\" data-v-efebce18><div class=\"container\" data-v-efebce18><div class=\"next cursor-pointer\" data-v-efebce18><span class=\"pe-7s-angle-right\" data-v-efebce18></span></div> <div class=\"prev cursor-pointer\" data-v-efebce18><span class=\"pe-7s-angle-left\" data-v-efebce18></span></div></div></div>")],2),_vm._ssrNode(" <div class=\"line-v top\" data-v-efebce18></div> <div class=\"line-v bottom\" data-v-efebce18></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Testimonials-archo/index.vue?vue&type=template&id=efebce18&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonials-archo/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Testimonials_archovue_type_script_lang_js_ = ({
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        rows: 1,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }]
      }
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },

    showPrev() {
      this.$refs.carousel.prev();
    }

  },

  mounted() {
    document.querySelector(".slick-track").classList.remove("slick-center");
  }

});
// CONCATENATED MODULE: ./components/Testimonials-archo/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testimonials_archovue_type_script_lang_js_ = (Testimonials_archovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Testimonials-archo/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testimonials_archovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "efebce18",
  "2102f78e"
  
)

/* harmony default export */ var Testimonials_archo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Latest-news/index.vue?vue&type=template&id=86b11f5e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog section-padding",attrs:{"id":"blogs"}},[_vm._ssrNode("<div class=\"container\" data-v-86b11f5e><div class=\"row justify-content-center\" data-v-86b11f5e><div class=\"col-lg-8 col-md-10\" data-v-86b11f5e><div class=\"sec-head text-center\" data-v-86b11f5e><h2 data-wow-delay=\".3s\" class=\"wow fadeIn\" data-v-86b11f5e>Latest News</h2></div></div></div> <div class=\"row\" data-v-86b11f5e><div class=\"col-lg-6\" data-v-86b11f5e><div data-wow-delay=\".3s\" class=\"item md-mb50 wow fadeInUp\" data-v-86b11f5e><div class=\"img\" data-v-86b11f5e><img src=\"/img/arch/blog/1.jpg\" alt data-v-86b11f5e></div> <div class=\"cont\" data-v-86b11f5e><div data-v-86b11f5e><div class=\"info\" data-v-86b11f5e><a href=\"#0\" class=\"date\" data-v-86b11f5e><span data-v-86b11f5e><i data-v-86b11f5e>06</i> August </span></a> <span data-v-86b11f5e>/</span> <a href=\"#0\" class=\"tag\" data-v-86b11f5e><span class=\"main-color\" data-v-86b11f5e>Architecture</span></a></div> <h5 data-v-86b11f5e><a href=\"#0\" data-v-86b11f5e>\n                  How to use solid color combine with simple furnitures.\n                </a></h5> <div class=\"btn-more\" data-v-86b11f5e><a href=\"#0\" class=\"simple-btn main-color\" data-v-86b11f5e> Read More </a></div></div></div></div></div> <div class=\"col-lg-6\" data-v-86b11f5e><div data-wow-delay=\".5s\" class=\"item md-mb50 wow fadeInUp\" data-v-86b11f5e><div class=\"img\" data-v-86b11f5e><img src=\"/img/arch/blog/2.jpg\" alt data-v-86b11f5e></div> <div class=\"cont\" data-v-86b11f5e><div data-v-86b11f5e><div class=\"info\" data-v-86b11f5e><a href=\"#0\" class=\"date\" data-v-86b11f5e><span data-v-86b11f5e><i data-v-86b11f5e>06</i> August </span></a> <span data-v-86b11f5e>/</span> <a href=\"#0\" class=\"tag\" data-v-86b11f5e><span class=\"main-color\" data-v-86b11f5e>Architecture</span></a></div> <h5 data-v-86b11f5e><a href=\"#0\" data-v-86b11f5e>\n                  How to use solid color combine with simple furnitures.\n                </a></h5> <div class=\"btn-more\" data-v-86b11f5e><a href=\"#0\" class=\"simple-btn main-color\" data-v-86b11f5e> Read More </a></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Latest-news/index.vue?vue&type=template&id=86b11f5e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Latest-news/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Latest_newsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Latest-news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Latest_newsvue_type_script_lang_js_ = (Latest_newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Latest-news/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Latest_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "86b11f5e",
  "4e5da556"
  
)

/* harmony default export */ var Latest_news = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-archo/index.vue?vue&type=template&id=22a3b888&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-sec style2 section-padding position-re bg-img",staticStyle:{"background-image":"url(/img/patrn1.png)"},attrs:{"id":"contact"}},[_vm._ssrNode("<div class=\"container\" data-v-22a3b888><div class=\"row justify-content-center\" data-v-22a3b888><div class=\"col-lg-8 col-md-10\" data-v-22a3b888><div class=\"sec-head text-center\" data-v-22a3b888><h2 data-wow-delay=\".3s\" class=\"wow fadeIn\" data-v-22a3b888>Contact Us</h2></div></div></div> <div class=\"row justify-content-center\" data-v-22a3b888><div class=\"col-lg-10\" data-v-22a3b888><div data-wow-delay=\".5s\" class=\"form wow fadeInUp\" data-v-22a3b888><form id=\"contact-form\" data-v-22a3b888><div class=\"messages\" data-v-22a3b888></div> <div class=\"controls\" data-v-22a3b888><div class=\"row\" data-v-22a3b888><div class=\"col-lg-4\" data-v-22a3b888><div class=\"form-group\" data-v-22a3b888><input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\" data-v-22a3b888></div></div> <div class=\"col-lg-4\" data-v-22a3b888><div class=\"form-group\" data-v-22a3b888><input id=\"form_email\" type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\" data-v-22a3b888></div></div> <div class=\"col-lg-4\" data-v-22a3b888><div class=\"form-group\" data-v-22a3b888><input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\" data-v-22a3b888></div></div> <div class=\"col-12\" data-v-22a3b888><div class=\"form-group\" data-v-22a3b888><textarea id=\"form_message\" name=\"message\" placeholder=\"Message\" rows=\"4\" required=\"required\" data-v-22a3b888></textarea></div></div> <div class=\"col-12\" data-v-22a3b888><div class=\"text-center\" data-v-22a3b888><a href=\"#0\" class=\"butn light mt-30 full-width\" data-v-22a3b888><h6 class=\"ls3 text-u\" data-v-22a3b888>Send Massege</h6></a></div></div></div></div></form></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contact-archo/index.vue?vue&type=template&id=22a3b888&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-archo/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Contact_archovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Contact-archo/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contact_archovue_type_script_lang_js_ = (Contact_archovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Contact-archo/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contact_archovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22a3b888",
  "232eaaae"
  
)

/* harmony default export */ var Contact_archo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer-arch/index.vue?vue&type=template&id=61fde016&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"sub-bg"},[_vm._ssrNode("<div class=\"container\" data-v-61fde016><div class=\"row\" data-v-61fde016><div class=\"col-lg-4\" data-v-61fde016><div class=\"item md-mb50\" data-v-61fde016><div class=\"title\" data-v-61fde016><h5 data-v-61fde016>Contact Us</h5></div> <ul data-v-61fde016><li data-v-61fde016><span class=\"icon pe-7s-map-marker\" data-v-61fde016></span> <div class=\"cont\" data-v-61fde016><h6 data-v-61fde016>Officeal Address</h6> <p data-v-61fde016>504 White St . Dawsonville, GA 30534 , New York</p></div></li> <li data-v-61fde016><span class=\"icon pe-7s-mail\" data-v-61fde016></span> <div class=\"cont\" data-v-61fde016><h6 data-v-61fde016>Email Us</h6> <p data-v-61fde016>support@gmail.com</p></div></li> <li data-v-61fde016><span class=\"icon pe-7s-call\" data-v-61fde016></span> <div class=\"cont\" data-v-61fde016><h6 data-v-61fde016>Call Us</h6> <p data-v-61fde016>+87986451666</p></div></li></ul></div></div> <div class=\"col-lg-4\" data-v-61fde016><div class=\"item md-mb50\" data-v-61fde016><div class=\"title\" data-v-61fde016><h5 data-v-61fde016>Recent News</h5></div> <ul data-v-61fde016><li data-v-61fde016><div class=\"img\" data-v-61fde016><img src=\"/img/blog/1.jpg\" alt data-v-61fde016></div> <div class=\"sm-post\" data-v-61fde016><p data-v-61fde016>\n                  The Start-Up Ultimate Guide to Make Your WordPress Journal.\n                </p> <span class=\"date main-color\" data-v-61fde016>14 sep 2022</span></div></li> <li data-v-61fde016><div class=\"img\" data-v-61fde016><img src=\"/img/blog/2.jpg\" alt data-v-61fde016></div> <div class=\"sm-post\" data-v-61fde016><p data-v-61fde016>\n                  The Start-Up Ultimate Guide to Make Your WordPress Journal.\n                </p> <span class=\"date main-color\" data-v-61fde016>14 sep 2022</span></div></li> <li data-v-61fde016><div class=\"subscribe\" data-v-61fde016><input type=\"text\" placeholder=\"Type Your Email\" data-v-61fde016> <span class=\"subs pe-7s-paper-plane back-color\" data-v-61fde016></span></div></li></ul></div></div> <div class=\"col-lg-4\" data-v-61fde016><div class=\"item\" data-v-61fde016><div class=\"logo\" data-v-61fde016><img src=\"{appData.lightLogo}\" alt data-v-61fde016></div> <div class=\"social\" data-v-61fde016><a href=\"#0\" data-v-61fde016><i class=\"fab fa-facebook-f\" data-v-61fde016></i></a> <a href=\"#0\" data-v-61fde016><i class=\"fab fa-twitter\" data-v-61fde016></i></a> <a href=\"#0\" data-v-61fde016><i class=\"fab fa-instagram\" data-v-61fde016></i></a> <a href=\"#0\" data-v-61fde016><i class=\"fab fa-youtube\" data-v-61fde016></i></a></div> <div class=\"copy-right\" data-v-61fde016><p data-v-61fde016>\n              © 2022, Vie Template. Made with passion by\n              <a href=\"#0\" class=\"main-color\" data-v-61fde016> ThemesCamp </a>\n              .\n            </p></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer-arch/index.vue?vue&type=template&id=61fde016&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer-arch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footer_archvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer-arch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footer_archvue_type_script_lang_js_ = (Footer_archvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer-arch/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footer_archvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61fde016",
  "b3c8daf6"
  
)

/* harmony default export */ var Footer_arch = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home8-light.vue?vue&type=template&id=e1eb35c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavbarArch',{ref:"navbar"}),_vm._ssrNode(" "),_c('Intro5'),_vm._ssrNode(" "),_c('AboutUs6'),_vm._ssrNode(" "),_c('Services6'),_vm._ssrNode(" "),_c('Works6'),_vm._ssrNode(" "),_c('CaseStudy'),_vm._ssrNode(" "),_c('Team3'),_vm._ssrNode(" "),_c('TestimonialsArcho'),_vm._ssrNode(" "),_c('LatestNews'),_vm._ssrNode(" "),_c('ContactArcho'),_vm._ssrNode(" "),_c('FooterArch')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/homepage/home8-light.vue?vue&type=template&id=e1eb35c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home8-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home8_lightvue_type_script_lang_js_ = ({
  layout: "arch-light",

  head() {
    return {
      titleTemplate: '%s - Architecture Light'
    };
  },

  head: {
    link: [{
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
    }]
  },

  mounted() {
    var navbar = this.$refs.navbar.$el,
        logo = this.$refs.navbar.$refs.lr;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        logo.setAttribute("src", "/img/logo-dark.png");
        navbar.classList.add("nav-scroll");
      } else {
        logo.setAttribute("src", "/img/logo-light.png");
        navbar.classList.remove("nav-scroll");
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/homepage/home8-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home8_lightvue_type_script_lang_js_ = (home8_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/homepage/home8-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_home8_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "921ba7c2"
  
)

/* harmony default export */ var home8_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavbarArch: __webpack_require__(114).default,Intro5: __webpack_require__(115).default,AboutUs6: __webpack_require__(116).default,Services6: __webpack_require__(117).default,Works6: __webpack_require__(118).default,CaseStudy: __webpack_require__(119).default,Team3: __webpack_require__(120).default,TestimonialsArcho: __webpack_require__(121).default,LatestNews: __webpack_require__(122).default,ContactArcho: __webpack_require__(123).default,FooterArch: __webpack_require__(124).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=template&id=2e8392e9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:("" + (!_vm.hideBGCOLOR ? 'sub-bg' : ''))},[_vm._ssrNode("<div class=\"container\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9><div class=\"item md-mb50\" data-v-2e8392e9><div class=\"title\" data-v-2e8392e9><h5 data-v-2e8392e9>Contact Us</h5></div> <ul data-v-2e8392e9><li data-v-2e8392e9><span class=\"icon pe-7s-map-marker\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Officeal Address</h6> <p data-v-2e8392e9>504 White St . Dawsonville, GA 30534 , New York</p></div></li> <li data-v-2e8392e9><span class=\"icon pe-7s-mail\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Email Us</h6> <p data-v-2e8392e9>support@gmail.com</p></div></li> <li data-v-2e8392e9><span class=\"icon pe-7s-call\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Call Us</h6> <p data-v-2e8392e9>+87986451666</p></div></li></ul></div></div> "),_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"item md-mb50\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-2e8392e9><h5 data-v-2e8392e9>Recent News</h5></div> "),_vm._ssrNode("<ul data-v-2e8392e9>","</ul>",[_vm._ssrNode("<li data-v-2e8392e9>","</li>",[_vm._ssrNode("<div class=\"img\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":"/img/blog/1.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm-post\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('p',[_vm._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),_vm._v(" "),_c('span',{staticClass:"date"},[_vm._v("14 sep 2022")])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e8392e9>","</li>",[_vm._ssrNode("<div class=\"img\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":"/img/blog/2.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm-post\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('p',[_vm._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),_vm._v(" "),_c('span',{staticClass:"date"},[_vm._v("14 sep 2022")])])],1)],2),_vm._ssrNode(" <li data-v-2e8392e9><div class=\"subscribe\" data-v-2e8392e9><input type=\"text\" placeholder=\"Type Your Email\" data-v-2e8392e9> <span class=\"subs pe-7s-paper-plane\" data-v-2e8392e9></span></div></li>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-2e8392e9><img src=\"/img/logo-light.png\" alt=\"logo\" data-v-2e8392e9></div> "),_vm._ssrNode("<div class=\"social\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-facebook-f"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-twitter"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-instagram"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-youtube"})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copy-right\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<p data-v-2e8392e9>","</p>",[_vm._ssrNode("\n              © 2022, Vie Template. Made with passion by\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("ThemesCamp")]),_vm._ssrNode(".\n            ")],2)])],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=template&id=2e8392e9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  props: ['hideBGCOLOR']
});
// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e8392e9",
  "7cfd2cd8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getSiblings = e => {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

/* harmony default export */ __webpack_exports__["a"] = (getSiblings);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const removeSlashFromBagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (removeSlashFromBagination);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (initIsotope);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (fadeWhenScroll);

/***/ }),

/***/ 77:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"first\":\"Private\",\"second\":\"Houses Turnkey\"},\"content\":\"We developed strong relationships with contractors and specialist companies offering discounted prices.\",\"image\":\"/img/arch/slid/1.jpg\"},{\"id\":2,\"title\":\"Dustin Villa, Spain\",\"content\":\"We developed strong relationships with contractors and specialist companies offering discounted prices.\",\"image\":\"/img/arch/slid/3.jpg\"},{\"id\":3,\"title\":{\"first\":\"Innovative\",\"second\":\"Architectures\"},\"content\":\"We developed strong relationships with contractors and specialist companies offering discounted prices.\",\"image\":\"/img/arch/slid/2.jpg\"}]");

/***/ }),

/***/ 78:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"image\":\"/img/arch/slid/3.jpg\",\"title\":\"FLOATING HOUSE MESSINIA\",\"date\":\"14 Sep 2022\"},{\"id\":2,\"image\":\"/img/arch/slid/2.jpg\",\"title\":\"IN THE PINE FOREST\",\"date\":\"14 Sep 2022\"},{\"id\":3,\"image\":\"/img/arch/slid/1.jpg\",\"title\":\"BUGANVILLA HOUSE\",\"date\":\"14 Sep 2022\"}]");

/***/ })

};;
//# sourceMappingURL=home8-light.js.map