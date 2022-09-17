exports.ids = [41];
exports.modules = {

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getSiblings = e => {
  let siblings = [];

  if (!e.parentNode) {
    return siblings;
  }

  let sibling = e.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

/* harmony default export */ __webpack_exports__["a"] = (getSiblings);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=template&id=99068f48&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:_vm.nr,staticClass:"navbar navbar-expand-lg change",class:_vm.theme === 'light' ? 'light' : ''},[_vm._ssrNode("<div class=\"container\" data-v-99068f48>","</div>",[_c('NuxtLink',{staticClass:"logo",attrs:{"to":"/"}},[(_vm.theme === 'light')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-dark.png","alt":"logo"}}):(_vm.theme === 'themeD')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}}):_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}})]),_vm._ssrNode(" <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-99068f48><span class=\"icon-bar\" data-v-99068f48><i class=\"fas fa-bars\" data-v-99068f48></i></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-99068f48>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ml-auto\" data-v-99068f48>","</ul>",[_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-99068f48>","</li>",[_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-99068f48>\n            Home\n          </span> "),_vm._ssrNode("<div class=\"dropdown-menu\" data-v-99068f48>","</div>",[_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home1-dark"}},[_vm._v("\n              Main Home\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home2-dark"}},[_vm._v("\n              Creative Agency\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home5-dark"}},[_vm._v("\n              Digital Agency\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home4-dark"}},[_vm._v("\n              Business One Page\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home3-dark"}},[_vm._v("\n              Corporate Business\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home6-dark"}},[_vm._v("\n              Modern Agency\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home7-dark"}},[_vm._v("\n              Freelancer\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/homepage/home8-dark"}},[_vm._v("\n              Architecture\n            ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-99068f48>","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":"/about/about-dark"}},[_vm._v(" About ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-99068f48>","</li>",[_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-99068f48>\n            Works\n          </span> "),_vm._ssrNode("<div class=\"dropdown-menu\" data-v-99068f48>","</div>",[_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/showcase/showcase-dark"}},[_vm._v("\n              Showcase Parallax\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/showcase3/showcase3-dark"}},[_vm._v("\n              Showcase Carousel\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/showcase2/showcase2-dark"}},[_vm._v("\n              Showcase Circle\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/works/works-dark"}},[_vm._v("\n              Portfolio Masonry\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/works2/works2-dark"}},[_vm._v("\n              Portfolio Filtering\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/works3/works3-dark"}},[_vm._v("\n              Portfolio Gallery\n            ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-99068f48>","</li>",[_vm._ssrNode("<span data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link dropdown-toggle\" data-v-99068f48>\n            Blog\n          </span> "),_vm._ssrNode("<div class=\"dropdown-menu\" data-v-99068f48>","</div>",[_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/blog/blog-dark"}},[_vm._v("\n              Blog Standerd\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/blog-list/blog-list-dark"}},[_vm._v("\n              Blog List\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/blog-grid/blog-grid-dark"}},[_vm._v("\n              Blog Grid\n            ")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"dropdown-item",attrs:{"to":"/blog-details/blog-details-dark"}},[_vm._v("\n              Blog Details\n            ")])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-99068f48>","</li>",[_c('NuxtLink',{staticClass:"nav-link",attrs:{"to":"/contact/contact-dark"}},[_vm._v("\n            Contact\n          ")])],1)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=template&id=99068f48&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: e => {
      Object(getSiblings["a" /* default */])(e.target.parentElement).filter(item => item.classList.contains("show")).map(item => {
        item.classList.remove("show");

        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }

        if (item.childNodes[2]) {
          item.childNodes[2].classList.remove("show");
        }
      });
      e.target.setAttribute("aria-expanded", true);

      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];

        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: e => {
      document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    }
  }
});
// CONCATENATED MODULE: ./components/Navbar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Navbar/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "99068f48",
  "738b8115"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=navbar.js.map