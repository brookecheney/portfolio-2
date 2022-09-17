exports.ids = [30];
exports.modules = {

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

/***/ 44:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"Original Solutions\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/02.jpg\"},{\"id\":2,\"title\":\"Digital Design Awards\",\"content\":\"If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.\",\"image\":\"/img/slid/03.jpg\"},{\"id\":3,\"title\":\"Business value through digital products\",\"content\":\"\",\"image\":\"/img/slid/01.jpg\"}]");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=template&id=4cfe7b5d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"slider slider-prlx fixed-slider text-center"},[_vm._ssrNode("<div class=\"swiper-container parallax-slider\" data-v-4cfe7b5d>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleSwiperReadied}},_vm._l((_vm.intro1Data),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"bg-img valign",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-overlay-dark":"6"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-lg-8 col-md-10"},[_c('div',{staticClass:"caption center mt-30"},[_c('h1',{staticClass:"color-font"},[_vm._v(_vm._s(slide.title))]),_vm._v(" "),(slide.content)?_c('p',[_vm._v("\n                    "+_vm._s(slide.content)+"\n                  ")]):_vm._e(),_vm._v(" "),_c('NuxtLink',{staticClass:"butn bord curve mt-30",attrs:{"to":"#"}},[_c('span',[_vm._v("Look More")])])],1)])])])])])}),1),_vm._ssrNode(" <div class=\"setone setwo\" data-v-4cfe7b5d><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-4cfe7b5d><i class=\"fas fa-chevron-right\" data-v-4cfe7b5d></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-4cfe7b5d><i class=\"fas fa-chevron-left\" data-v-4cfe7b5d></i></div></div> <div class=\"swiper-pagination top botm\" data-v-4cfe7b5d></div> "),_vm._ssrNode("<div class=\"social-icon\" data-v-4cfe7b5d>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-facebook-f"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-twitter"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-behance"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#"}},[_c('i',{staticClass:"fab fa-pinterest-p"})])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=template&id=4cfe7b5d&scoped=true&

// EXTERNAL MODULE: ./data/intro1.json
var intro1 = __webpack_require__(44);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro-with-slider/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Intro_with_slidervue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      intro1Data: intro1,
      swiperOptions: {
        speed: 1000,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        parallax: true,
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination"
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
// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro_with_slidervue_type_script_lang_js_ = (Intro_with_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Intro-with-slider/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro_with_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4cfe7b5d",
  "082be238"
  
)

/* harmony default export */ var Intro_with_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=intro-with-slider.js.map