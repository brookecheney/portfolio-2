exports.ids = [17];
exports.modules = {

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

/***/ 78:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"image\":\"/img/arch/slid/3.jpg\",\"title\":\"FLOATING HOUSE MESSINIA\",\"date\":\"14 Sep 2022\"},{\"id\":2,\"image\":\"/img/arch/slid/2.jpg\",\"title\":\"IN THE PINE FOREST\",\"date\":\"14 Sep 2022\"},{\"id\":3,\"image\":\"/img/arch/slid/1.jpg\",\"title\":\"BUGANVILLA HOUSE\",\"date\":\"14 Sep 2022\"}]");

/***/ })

};;
//# sourceMappingURL=case-study.js.map