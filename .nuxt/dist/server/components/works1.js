exports.ids = [73];
exports.modules = {

/***/ 73:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"art & illustration\",\"secTex\":\"Innovation and Crafts\",\"image\":\"/img/portfolio/metro/01.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":2,\"title\":\"art & illustration\",\"secTex\":\"Inspiring new space\",\"image\":\"/img/portfolio/metro/02.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":3,\"title\":\"art & illustration\",\"secTex\":\"Natural plus modern\",\"image\":\"/img/portfolio/metro/03.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":4,\"title\":\"art & illustration\",\"secTex\":\"Innovation and Crafts\",\"image\":\"/img/portfolio/metro/04.jpg\",\"slug\":\"/project-details2/project-details2-dark\"},{\"id\":5,\"title\":\"art & illustration\",\"secTex\":\"Natural plus modern\",\"image\":\"/img/portfolio/metro/05.jpg\",\"slug\":\"/project-details2/project-details2-dark\"}]");

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works1/index.vue?vue&type=template&id=5f676e59&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"work-carousel metro position-re"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"col-lg-12 no-padding\" data-v-5f676e59>","</div>",[_vm._ssrNode("<div class=\"swiper-container\" data-v-5f676e59>","</div>",[_c('Swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.worksData),function(slide){return _c('SwiperSlide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow noraidus fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",style:(("backgroundImage: url(" + (slide.image) + ")"))}),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('h6',{staticClass:"color-font"},[_c('NuxtLink',{attrs:{"to":"#"}},[_vm._v(_vm._s(slide.title))])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                      "+_vm._s(slide.secTex)+"\n                    ")])],1)])])])}),1),_vm._ssrNode(" <div class=\"\n              swiper-button-next swiper-nav-ctrl\n              simp-next\n              cursor-pointer\n            \" data-v-5f676e59><span class=\"simple-btn right\" data-v-5f676e59>Next</span></div> <div class=\"\n              swiper-button-prev swiper-nav-ctrl\n              simp-prev\n              cursor-pointer\n            \" data-v-5f676e59><span class=\"simple-btn\" data-v-5f676e59>Prev</span></div>")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works1/index.vue?vue&type=template&id=5f676e59&scoped=true&

// EXTERNAL MODULE: ./data/works1.json
var works1 = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works1vue_type_script_lang_js_ = ({
  data() {
    return {
      worksData: works1,
      swiperOptions: {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        slidesPerView: 2,
        centeredSlides: true,
        autoPlay: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        speed: 1000,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false
          },
          991: {
            slidesPerView: 2
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  }
});
// CONCATENATED MODULE: ./components/Works1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works1vue_type_script_lang_js_ = (Works1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5f676e59",
  "c6562030"
  
)

/* harmony default export */ var Works1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=works1.js.map