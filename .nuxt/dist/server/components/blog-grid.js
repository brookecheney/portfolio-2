exports.ids = [9];
exports.modules = {

/***/ 67:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b1.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":2,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b2.jpg\",\"tags\":[\"WordPress\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":3,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b3.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":4,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b4.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":5,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b2.jpg\",\"tags\":[\"WordPress\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}},{\"id\":6,\"title\":\"How to use solid color combine with simple furnitures.\",\"image\":\"/img/blog/b3.jpg\",\"tags\":[\"WordPress\",\"Themeforest\",\"Vie\"],\"date\":{\"day\":\"07\",\"month\":\"August\"}}]");

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-grid/index.vue?vue&type=template&id=06f807f3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-pg blog section-padding pt-0"},[_vm._ssrNode("<div class=\"container\" data-v-06f807f3>","</div>",[_vm._ssrNode("<div class=\"posts\" data-v-06f807f3>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-06f807f3>","</div>",[_vm._l((_vm.blogs),function(blogItem){return _vm._ssrNode("<div class=\"col-lg-4\" data-v-06f807f3>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"item mb-80 wow fadeInUp\" data-v-06f807f3>","</div>",[_vm._ssrNode("<div class=\"img\" data-v-06f807f3><img"+(_vm._ssrAttr("src",blogItem.image))+" alt data-v-06f807f3></div> "),_vm._ssrNode("<div class=\"cont\" data-v-06f807f3>","</div>",[_vm._ssrNode("<div data-v-06f807f3>","</div>",[_vm._ssrNode("<div class=\"info\" data-v-06f807f3>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"/blog-details/blog-details-dark"}},[_c('span',[_c('i',[_vm._v(_vm._s(blogItem.date.day))]),_vm._v("\n                      "+_vm._s(blogItem.date.month)+"\n                    ")])]),_vm._ssrNode(" <span data-v-06f807f3>/</span> "),_vm._l((blogItem.tags),function(tag,index){return _c('NuxtLink',{key:index,staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v(_vm._s(tag))])])})],2),_vm._ssrNode(" "),_vm._ssrNode("<h5 data-v-06f807f3>","</h5>",[_c('NuxtLink',{attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                    "+_vm._s(blogItem.title.substr(0, 55) + "...")+"\n                  ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-06f807f3>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n                    Read More\n                  ")])],1)],2)])],2)])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pagination\" data-v-06f807f3>","</div>",[_vm._ssrNode("<span class=\"active\" data-v-06f807f3>","</span>",[_c('NuxtLink',{attrs:{"to":"blog/blog-dark"}},[_vm._v("1")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-06f807f3>","</span>",[_c('NuxtLink',{attrs:{"to":"blog/blog-dark"}},[_vm._v("2")])],1),_vm._ssrNode(" "),_vm._ssrNode("<span data-v-06f807f3>","</span>",[_c('NuxtLink',{attrs:{"to":"blog/blog-blogwindow.theme"}},[_c('i',{staticClass:"fas fa-angle-right"})])],1)],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog-grid/index.vue?vue&type=template&id=06f807f3&scoped=true&

// EXTERNAL MODULE: ./data/blogs3.json
var blogs3 = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-grid/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Blog_gridvue_type_script_lang_js_ = ({
  data() {
    return {
      blogs: blogs3
    };
  }

});
// CONCATENATED MODULE: ./components/Blog-grid/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_gridvue_type_script_lang_js_ = (Blog_gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blog-grid/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06f807f3",
  "739d590e"
  
)

/* harmony default export */ var Blog_grid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-grid.js.map