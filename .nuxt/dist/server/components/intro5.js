exports.ids = [34];
exports.modules = {

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
  "9cf84de4"
  
)

/* harmony default export */ var Intro5 = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=intro5.js.map