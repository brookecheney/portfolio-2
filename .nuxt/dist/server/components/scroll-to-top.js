exports.ids = [54];
exports.modules = {

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Scroll-to-top/index.vue?vue&type=template&id=7aa31b2b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-wrap cursor-pointer"},[_vm._ssrNode("<svg width=\"100%\" height=\"100%\" viewBox=\"-1 -1 102 102\" class=\"progress-circle svg-content\" data-v-7aa31b2b><path d=\"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\" data-v-7aa31b2b></path></svg>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Scroll-to-top/index.vue?vue&type=template&id=7aa31b2b&scoped=true&

// CONCATENATED MODULE: ./common/scrollToTop.js
const scrollToTop = () => {
  let progressPath = document.querySelector(".progress-wrap path");
  let pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

  const updateProgress = function () {
    let scroll = window.pageYOffset;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = pathLength - scroll * pathLength / height;
    progressPath.style.strokeDashoffset = progress;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress);
  let progressWrap = document.querySelector(".progress-wrap");
  let offset = 150;
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > offset) {
      progressWrap.classList.add("active-progress");
    } else {
      document.querySelector(".progress-wrap").classList.remove("active-progress");
    }
  });
  progressWrap.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return false;
  });
};

/* harmony default export */ var common_scrollToTop = (scrollToTop);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Scroll-to-top/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Scroll_to_topvue_type_script_lang_js_ = ({
  mounted() {
    common_scrollToTop();
  }

});
// CONCATENATED MODULE: ./components/Scroll-to-top/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Scroll_to_topvue_type_script_lang_js_ = (Scroll_to_topvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Scroll-to-top/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Scroll_to_topvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7aa31b2b",
  "1dc45434"
  
)

/* harmony default export */ var Scroll_to_top = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=scroll-to-top.js.map