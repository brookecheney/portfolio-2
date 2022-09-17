exports.ids = [4];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us3/index.vue?vue&type=template&id=9244f698&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"agency section-padding position-re"},[_vm._ssrNode("<div class=\"container\" data-v-9244f698>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-9244f698>","</div>",[_vm._ssrNode("<div class=\"col-lg-7\" data-v-9244f698><div class=\"imgsec md-mb50\" data-v-9244f698><div class=\"row\" data-v-9244f698><div class=\"col-md-6\" data-v-9244f698><div class=\"item\" data-v-9244f698><div data-wow-delay=\".8s\" class=\"imgone big-bord wow fadeInDown\" data-v-9244f698><img"+(_vm._ssrAttr("src",_vm.AboutUs3data.image1))+" alt class=\"thumparallax-down\" data-v-9244f698></div> <div class=\"exp\" data-v-9244f698><h2 class=\"nmb-font\" data-v-9244f698>"+_vm._ssrEscape(_vm._s(_vm.AboutUs3data.exp.nmb))+"</h2> <h6 data-v-9244f698>"+_vm._ssrEscape(_vm._s(_vm.AboutUs3data.exp.name))+"</h6></div></div></div> <div class=\"col-md-6\" data-v-9244f698><div class=\"item\" data-v-9244f698><div data-wow-delay=\".6s\" class=\"imgtwo big-bord wow fadeInUp\" data-v-9244f698><img"+(_vm._ssrAttr("src",_vm.AboutUs3data.image2))+" alt class=\"thumparallax\" data-v-9244f698></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"col-lg-5 valign\" data-v-9244f698>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-9244f698>","</div>",[_vm._ssrNode("<h4 data-splitting class=\"wow words chars splitting\" data-v-9244f698>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutUs3data.title.first)+" ")+"<br data-v-9244f698>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutUs3data.title.second)+"\n          ")+"</h4> <p data-splitting class=\"wow txt words chars splitting\" data-v-9244f698>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutUs3data.content.first)+" ")+"<br data-v-9244f698>"+_vm._ssrEscape("\n            "+_vm._s(_vm.AboutUs3data.content.second)+"\n          ")+"</p> "),_c('NuxtLink',{staticClass:"butn bord curve mt-40 wow fadeInUp",attrs:{"to":"/about/about-dark","data-wow-delay":".8s"}},[_c('span',[_vm._v(_vm._s(_vm.AboutUs3data.smallTitle))])]),_vm._ssrNode(" <br data-v-9244f698>")],2)])],2)]),_vm._ssrNode(" <div class=\"line bottom right\" data-v-9244f698></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-us3/index.vue?vue&type=template&id=9244f698&scoped=true&

// EXTERNAL MODULE: ./data/about-us3.json
var about_us3 = __webpack_require__(75);

// EXTERNAL MODULE: ./common/thumparallax.js
var thumparallax = __webpack_require__(45);

// EXTERNAL MODULE: ./common/thumparallaxDown.js
var thumparallaxDown = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us3/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var About_us3vue_type_script_lang_js_ = ({
  data() {
    return {
      AboutUs3data: about_us3
    };
  },

  mounted() {
    Object(thumparallax["a" /* default */])();
    Object(thumparallaxDown["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./components/About-us3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us3vue_type_script_lang_js_ = (About_us3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-us3/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9244f698",
  "a6c1e474"
  
)

/* harmony default export */ var About_us3 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");

  if (imageDown) {
    new simpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (thumparallaxDown);

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

/***/ 75:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"image1\":\"/img/01.jpg\",\"image2\":\"/img/02.jpg\",\"exp\":{\"nmb\":28,\"name\":\"Years Of Experience\"},\"title\":{\"first\":\"Unlimited Skills\",\"second\":\"for Super Projects.\"},\"content\":{\"first\":\"Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).\",\"second\":\"We develop creative solutions for small and big brands alike, build authentic product identities and much more.\"},\"smallTitle\":\"About Us\"}");

/***/ })

};;
//# sourceMappingURL=about-us3.js.map