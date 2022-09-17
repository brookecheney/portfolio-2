exports.ids = [36];
exports.modules = {

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/index.vue?vue&type=template&id=d5e4c88e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"showX"},[_vm._ssrNode("<div class=\"loading\" data-v-d5e4c88e><span data-v-d5e4c88e>L</span> <span data-v-d5e4c88e>o</span> <span data-v-d5e4c88e>a</span> <span data-v-d5e4c88e>d</span> <span data-v-d5e4c88e>i</span> <span data-v-d5e4c88e>n</span> <span data-v-d5e4c88e>g</span></div> <div id=\"preloader\" data-v-d5e4c88e></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Loading/index.vue?vue&type=template&id=d5e4c88e&scoped=true&

// CONCATENATED MODULE: ./common/loadingPace.js
const loadingPace = () => {
  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", function () {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }

  document.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });
};

/* harmony default export */ var common_loadingPace = (loadingPace);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  mounted() {
    if (window.Pace) {
      common_loadingPace();
    }
  }

});
// CONCATENATED MODULE: ./components/Loading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Loading/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d5e4c88e",
  "7e1158ad"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=loading.js.map