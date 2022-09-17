exports.ids = [28];
exports.modules = {

/***/ 53:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"icon\":\"pe-7s-smile\",\"content\":\"People who are commited to their management tasks.\",\"value\":\"2400\"},{\"id\":2,\"icon\":\"pe-7s-portfolio\",\"content\":\"Signed projects that have been confirmed complete!\",\"value\":\"133\"},{\"id\":3,\"icon\":\"pe-7s-medal\",\"content\":\"International awards and cups for design projects.\",\"value\":\"46\"}]");

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts1/index.vue?vue&type=template&id=4967f4a0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"number-sec section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4967f4a0><div class=\"col-lg-8 col-md-10\" data-v-4967f4a0><div class=\"sec-head text-center\" data-v-4967f4a0><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-4967f4a0>FUN FACTS</h6> <h3 class=\"wow color-font\" data-v-4967f4a0>\n            Pleasure in the job puts perfection in the work.\n          </h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-4967f4a0>","</div>",_vm._l((_vm.funFactData),function(item){return _vm._ssrNode("<div class=\"col-md-4\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<div class=\"item no-bord sm-mb50\" data-v-4967f4a0>","</div>",[_vm._ssrNode("<span"+(_vm._ssrClass(null,("icon " + (item.icon))))+" data-v-4967f4a0></span> "),_vm._ssrNode("<h3 data-v-4967f4a0>","</h3>",[_c('countTo',{ref:"countUpRef",refInFor:true,attrs:{"startVal":0,"endVal":Number(item.value),"duration":3000,"autoplay":false}},[_c('span',{staticClass:"count"},[_vm._v(" ")])])],1),_vm._ssrNode(" <p data-splitting class=\"wow txt words chars splitting\" data-v-4967f4a0>"+_vm._ssrEscape("\n                  "+_vm._s(item.content)+"\n              ")+"</p>")],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Fun-facts1/index.vue?vue&type=template&id=4967f4a0&scoped=true&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(23);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: ./data/fun-fact.json
var fun_fact = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Fun-facts1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Fun_facts1vue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },

  data() {
    return {
      funFactData: fun_fact,
      counted: false
    };
  },

  methods: {
    startCounter() {
      this.$refs.countUpRef.map(item => item.start());
      this.counted = true;
    }

  },

  mounted() {
    let funFactsSection = document.querySelector(".number-sec");
    window.addEventListener("scroll", () => {
      if (funFactsSection && !this.counted) {
        if (window.pageYOffset > funFactsSection.offsetTop - 200) {
          this.startCounter();
        }
      }
    });
  }

});
// CONCATENATED MODULE: ./components/Fun-facts1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Fun_facts1vue_type_script_lang_js_ = (Fun_facts1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Fun-facts1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Fun_facts1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4967f4a0",
  "0d209651"
  
)

/* harmony default export */ var Fun_facts1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fun-facts1.js.map