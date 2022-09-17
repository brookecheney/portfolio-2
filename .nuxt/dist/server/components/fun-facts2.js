exports.ids = [29];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts2/index.vue?vue&type=template&id=590fa5ca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{ref:"funFacts2",staticClass:"block-sec section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"number-sec\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"col-lg-3 col-md-6\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"item md-mb50\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<span class=\"icon pe-7s-smile\" data-v-590fa5ca></span> "),_vm._ssrNode("<h3 class=\"custom-font\" data-v-590fa5ca>","</h3>",[_c('countTo',{ref:"countUpRef1",attrs:{"startVal":0,"endVal":2400,"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])])],1),_vm._ssrNode(" <p data-splitting class=\"wow words chars splitting txt\" data-v-590fa5ca>\n              Happy Clients\n            </p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"item md-mb50\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<span class=\"icon pe-7s-portfolio\" data-v-590fa5ca></span> "),_vm._ssrNode("<h3 class=\"custom-font\" data-v-590fa5ca>","</h3>",[_c('countTo',{ref:"countUpRef2",attrs:{"startVal":0,"endVal":133,"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])])],1),_vm._ssrNode(" <p data-splitting class=\"wow txt words chars splitting\" data-v-590fa5ca>\n              Compleate Projects\n            </p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"item sm-mb50\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<span class=\"icon pe-7s-cloud-download\" data-v-590fa5ca></span> "),_vm._ssrNode("<h3 class=\"custom-font\" data-v-590fa5ca>","</h3>",[_c('countTo',{ref:"countUpRef3",attrs:{"startVal":0,"endVal":254,"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])]),_vm._ssrNode("\n              k\n            ")],2),_vm._ssrNode(" <p data-splitting class=\"wow txt words chars splitting\" data-v-590fa5ca>\n              Files Downloaded\n            </p>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-3 col-md-6\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-590fa5ca>","</div>",[_vm._ssrNode("<span class=\"icon pe-7s-medal\" data-v-590fa5ca></span> "),_vm._ssrNode("<h3 class=\"custom-font\" data-v-590fa5ca>","</h3>",[_c('countTo',{ref:"countUpRef4",attrs:{"startVal":0,"endVal":46,"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])])],1),_vm._ssrNode(" <p data-splitting class=\"wow txt words chars splitting\" data-v-590fa5ca>\n              Award Win\n            </p>")],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Fun-facts2/index.vue?vue&type=template&id=590fa5ca&scoped=true&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(23);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Fun_facts2vue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      counted: false
    };
  },

  methods: {
    startCounter() {
      this.$refs.countUpRef1.start();
      this.$refs.countUpRef2.start();
      this.$refs.countUpRef3.start();
      this.$refs.countUpRef4.start();
      this.counted = true;
    }

  },

  mounted() {
    let funFactsSection = this.$refs.funFacts2;
    window.addEventListener("scroll", () => {
      if (funFactsSection && !this.counted) {
        if (window.pageYOffset > funFactsSection.offsetTop - 200) {
          this.startCounter();
        }
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Fun-facts2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fun_facts2vue_type_script_lang_js_ = (Fun_facts2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Fun-facts2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Fun_facts2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "590fa5ca",
  "5ec4425e"
  
)

/* harmony default export */ var Fun_facts2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fun-facts2.js.map