exports.ids = [40];
exports.modules = {

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mouse-cursor/index.vue?vue&type=template&id=90db2d9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"mouse-cursor cursor-outer\" data-v-90db2d9a></div> <div class=\"mouse-cursor cursor-inner\" data-v-90db2d9a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Mouse-cursor/index.vue?vue&type=template&id=90db2d9a&scoped=true&

// CONCATENATED MODULE: ./common/cursorEffect.js
const mouseEffect = () => {
  const cursorInner = document.querySelector(".cursor-inner"),
        cursorOuter = document.querySelector(".cursor-outer");
  let n,
      i = 0,
      o = !1;

  window.onmousemove = function (s) {
    o || (cursorOuter.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), cursorInner.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
  };

  if (document.querySelector(".cursor-pointer")) {
    document.querySelector(".cursor-pointer").addEventListener("mouseenter", function () {
      cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
    });
    document.querySelector(".cursor-pointer").addEventListener("mouseleave", function () {
      cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
    }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
  }

  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      cursorInner.classList.add("cursor-hover"), cursorOuter.classList.add("cursor-hover");
    });
  });
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      cursorInner.classList.remove("cursor-hover"), cursorOuter.classList.remove("cursor-hover");
    });
  }), cursorInner.style.visibility = "visible", cursorOuter.style.visibility = "visible";
};

/* harmony default export */ var cursorEffect = (mouseEffect);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mouse-cursor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Mouse_cursorvue_type_script_lang_js_ = ({
  name: "MouseCursor",

  mounted() {
    cursorEffect();
  }

});
// CONCATENATED MODULE: ./components/Mouse-cursor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mouse_cursorvue_type_script_lang_js_ = (Mouse_cursorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Mouse-cursor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mouse_cursorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "90db2d9a",
  "657e0983"
  
)

/* harmony default export */ var Mouse_cursor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mouse-cursor.js.map