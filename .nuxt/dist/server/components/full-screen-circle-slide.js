exports.ids = [26];
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

/***/ 46:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"first\":\"Brooklyne's\",\"second\":\"Bows\"},\"image\":\"/img/portfolio/full/1.png\",\"sub\":\"Design\"},{\"id\":2,\"title\":{\"first\":\"Fisherman\",\"second\":\"Portrait\"},\"image\":\"/img/portfolio/full/2.jpg\",\"sub\":\"Design\"},{\"id\":3,\"title\":{\"first\":\"Tribos\",\"second\":\"Urbanas\"},\"image\":\"/img/portfolio/full/3.jpg\",\"sub\":\"Design\"},{\"id\":4,\"title\":{\"first\":\"Monsoon\",\"second\":\"in the city\"},\"image\":\"/img/portfolio/full/4.jpg\",\"sub\":\"Design\"}]");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FullScreen-circle-slide/index.vue?vue&type=template&id=6d0c5c26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"slider circle-slide showcase-carus"},[_vm._ssrNode("<div id=\"content-carousel-container-unq-1\" class=\"swiper-container\" data-v-6d0c5c26>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleSwiperReadied}},_vm._l((_vm.fullScreenData),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"full-width"},[_c('div',{staticClass:"bg-img valign",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-overlay-dark":"1"}},[_c('div',{staticClass:"caption ontop valign"},[_c('div',{staticClass:"o-hidden"},[_c('h1',{attrs:{"data-swiper-parallax":"-2000"}},[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_c('div',{staticClass:"stroke"},[_vm._v(_vm._s(slide.title.first))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(slide.title.second))])])],1)])]),_vm._v(" "),_c('div',{staticClass:"copy-cap valign"},[_c('div',{staticClass:"cap"},[_c('h1',{attrs:{"data-swiper-parallax":"-2000"}},[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_c('div',{staticClass:"stroke"},[_vm._v(_vm._s(slide.title.first))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(slide.title.second))])])],1)])])])])])}),1)],1),_vm._ssrNode(" <div class=\"txt-botm\" data-v-6d0c5c26><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-6d0c5c26><div data-v-6d0c5c26><span data-v-6d0c5c26>Next Slide</span></div> <div data-v-6d0c5c26><i class=\"fas fa-chevron-right\" data-v-6d0c5c26></i></div></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-6d0c5c26><div data-v-6d0c5c26><i class=\"fas fa-chevron-left\" data-v-6d0c5c26></i></div> <div data-v-6d0c5c26><span data-v-6d0c5c26>Prev Slide</span></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue?vue&type=template&id=6d0c5c26&scoped=true&

// EXTERNAL MODULE: ./data/fullScreen.json
var fullScreen = __webpack_require__(46);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FullScreen-circle-slide/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FullScreen_circle_slidevue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      fullScreenData: fullScreen,
      swiperOptions: {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: true,
        spaceBetween: 500,
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next"
        },
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          640: {
            spaceBetween: 0
          },
          768: {
            spaceBetween: 30
          },
          1024: {
            spaceBetween: 500
          }
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
// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullScreen_circle_slidevue_type_script_lang_js_ = (FullScreen_circle_slidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FullScreen_circle_slidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d0c5c26",
  "2b6177e3"
  
)

/* harmony default export */ var FullScreen_circle_slide = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=full-screen-circle-slide.js.map