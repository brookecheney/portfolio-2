exports.ids = [15];
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

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");

  if (imageUp) {
    new simpleParallax(imageUp, {
      delay: 1,
      scale: 1.1
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (thumparallax);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs4/index.vue?vue&type=template&id=0ae676be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-crv sub-bg"},[_vm._ssrNode("<div class=\"stories\" data-v-0ae676be>","</div>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-0ae676be>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0ae676be>","</div>",[_vm._ssrNode("<div class=\"col-lg-6 no-padding\" data-v-0ae676be>","</div>",[_c('swiper',{ref:"myImageSwiper",staticClass:"swiper-wrapper swiper-container swiper-img",attrs:{"options":_vm.swiperImageOptions},on:{"ready":_vm.handleSwiperReadied}},[_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"img"},[_c('img',{staticClass:"thumparallax",attrs:{"src":"/img/blog/1.jpg","alt":""}})])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"img"},[_c('img',{staticClass:"thumparallax",attrs:{"src":"/img/blog/2.jpg","alt":""}})])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"img"},[_c('img',{staticClass:"thumparallax",attrs:{"src":"/img/blog/3.jpg","alt":""}})])])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-6 no-padding valign\" data-v-0ae676be>","</div>",[_c('swiper',{staticClass:"swiper-wrapper swiper-container swiper-content",attrs:{"options":_vm.swiperTextOptions}},[_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"tags"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Trending")])],1),_vm._v(" "),_c('div',{staticClass:"info"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"far fa-clock"}),_vm._v("\n                      06 Aug 2022\n                    ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("by Alex Morgan")])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_c('h4',[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                        Create The Lifestyle You Really Desire This World\n                      ")])],1)]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('p',[_vm._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"more"},[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                      Read More\n                    ")])],1)])])]),_vm._v(" "),_c('swiper-slide',[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"tags"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Trending")])],1),_vm._v(" "),_c('div',{staticClass:"info"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"far fa-clock"}),_vm._v("\n                      06 Aug 2022\n                    ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("by Alex Morgan")])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_c('h4',[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                        List of The Best Investment Projects\n                      ")])],1)]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('p',[_vm._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"more"},[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                      Read More\n                    ")])],1)])])]),_vm._v(" "),_c('swiper-slide',[_c('div',{staticClass:"item wow fadeIn",attrs:{"data-wow-delay":".6s"}},[_c('div',{staticClass:"content"},[_c('div',{staticClass:"tags"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Trending")])],1),_vm._v(" "),_c('div',{staticClass:"info"},[_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"far fa-clock"}),_vm._v("\n                      06 Aug 2022\n                    ")]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("by Alex Morgan")])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_c('h4',[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                        World Best Business Website Company")])],1)]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('p',[_vm._v("\n                      Success is no accident. It is hard work, perseverance,\n                      learning, studying, sacrifice and most of all, love of\n                      what you are doing.\n                    ")])]),_vm._v(" "),_c('div',{staticClass:"more"},[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                      Read More\n                    ")])],1)])])])],1)],1)],2),_vm._ssrNode(" <div class=\"controls\" data-v-0ae676be><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl\" data-v-0ae676be><i class=\"fas fa-caret-up\" data-v-0ae676be></i></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl\" data-v-0ae676be><i class=\"fas fa-caret-down\" data-v-0ae676be></i></div> <div class=\"swiper-pagination\" data-v-0ae676be></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blogs4/index.vue?vue&type=template&id=0ae676be&scoped=true&

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/thumparallax.js
var thumparallax = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs4/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Blogs4vue_type_script_lang_js_ = ({
  data() {
    return {
      swiperImageOptions: {
        speed: 800,
        effect: "fade",
        spaceBetween: 0,
        loop: true,
        parallax: true,
        slidesPerView: 1,
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".swiper-pagination"
        }
      },
      swiperTextOptions: {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
          prevEl: ".controls .swiper-button-prev",
          nextEl: ".controls .swiper-button-next"
        },
        pagination: {
          type: "fraction",
          clickable: true,
          el: ".controls .swiper-pagination"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.myImageSwiper.$swiper;
    }

  },
  methods: {
    handleSwiperReadied: swiper => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          let img = swiper.slides[i].childNodes[0].childNodes[0].childNodes[0];
          img.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    }
  },

  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(thumparallax["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./components/Blogs4/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogs4vue_type_script_lang_js_ = (Blogs4vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blogs4/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogs4vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0ae676be",
  "6d541f3c"
  
)

/* harmony default export */ var Blogs4 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blogs4.js.map