exports.ids = [6];
exports.modules = {

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us5/index.vue?vue&type=template&id=11bf9138&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about-cr"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-11bf9138><div class=\"row\" data-v-11bf9138><div class=\"col-lg-6 img md-mb50\" data-v-11bf9138><img src=\"/img/intro/4.jpg\" alt data-v-11bf9138></div> <div class=\"col-lg-5 valign\" data-v-11bf9138><div class=\"cont full-width\" data-v-11bf9138><h3 class=\"color-font\" data-v-11bf9138>UI / UX Designer</h3> <h5 class=\"co-tit mb-15\" data-v-11bf9138>We help to create visual strategies.</h5> <p data-v-11bf9138>\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          </p> <div class=\"skills-box mt-40\" data-v-11bf9138><div class=\"skill-item\" data-v-11bf9138><h5 class=\"fz-14 mb-15\" data-v-11bf9138>UI / UX Design</h5> <div class=\"skill-progress\" data-v-11bf9138><div data-value=\"90%\" class=\"progres\" data-v-11bf9138></div></div></div> <div class=\"skill-item\" data-v-11bf9138><h5 class=\"fz-14 mb-15\" data-v-11bf9138>Apps Development</h5> <div class=\"skill-progress\" data-v-11bf9138><div data-value=\"80%\" class=\"progres\" data-v-11bf9138></div></div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/About-us5/index.vue?vue&type=template&id=11bf9138&scoped=true&

// CONCATENATED MODULE: ./common/aboutSkillsProgress.js
const aboutSkillsProgress = () => {
  let skillInAbout = document.querySelector(".about-cr .skills-box");

  if (skillInAbout) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > document.querySelector(".about-cr").offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ var common_aboutSkillsProgress = (aboutSkillsProgress);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/About-us5/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var About_us5vue_type_script_lang_js_ = ({
  mounted() {
    common_aboutSkillsProgress();
  }

});
// CONCATENATED MODULE: ./components/About-us5/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_About_us5vue_type_script_lang_js_ = (About_us5vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/About-us5/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_About_us5vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "11bf9138",
  "5f5c73d8"
  
)

/* harmony default export */ var About_us5 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about-us5.js.map