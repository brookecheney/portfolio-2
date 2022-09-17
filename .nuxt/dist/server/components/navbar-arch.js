exports.ids = [42];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar-arch/index.vue?vue&type=template&id=51804cef&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{ref:_vm.nr,staticClass:"navbar navbar-expand-lg"},[_vm._ssrNode("<div class=\"container\" data-v-51804cef>","</div>",[_c('NuxtLink',{staticClass:"logo",attrs:{"to":"/"}},[(_vm.theme === 'light')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-dark.png","alt":"logo"}}):(_vm.theme === 'themeD')?_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}}):_c('img',{ref:"lr",attrs:{"src":"/img/logo-light.png","alt":"logo"}})]),_vm._ssrNode(" <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-51804cef><span class=\"icon-bar\" data-v-51804cef><i class=\"fas fa-bars\" data-v-51804cef></i></span></button> "),_vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-51804cef>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav ml-auto\" data-v-51804cef>","</ul>",[_vm._ssrNode("<li class=\"nav-item dropdown\" data-v-51804cef><span data-toggle=\"dropdown\" data-scroll-nav=\"0\" class=\"nav-link dropdown-toggle\" data-v-51804cef>\n            Home\n          </span> <div class=\"dropdown-menu\" data-v-51804cef><a href=\"homepage/home1-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Main Home\n            </a> <a href=\"homepage/home2-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Creative Agency\n            </a> <a href=\"homepage/home5-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Digital Agency\n            </a> <a href=\"homepage/home4-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Business One Page\n            </a> <a href=\"homepage/home3-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Corporate Business\n            </a> <a href=\"homepage/home6-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Modern Agency\n            </a> <a href=\"homepage/home7-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Freelancer\n            </a> <a href=\"homepage/home8-dark\" class=\"dropdown-item\" data-v-51804cef>\n              Architecture\n            </a></div></li> "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#about'),expression:"'#about'"}],staticClass:"nav-link"},[_vm._ssrNode("About ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#works'),expression:"'#works'"}],staticClass:"nav-link"},[_vm._ssrNode(" Works ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#team'),expression:"'#team'"}],staticClass:"nav-link"},[_vm._ssrNode(" Team ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#testimonials'),expression:"'#testimonials'"}],staticClass:"nav-link"},[_vm._ssrNode(" Testimonials ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#blogs'),expression:"'#blogs'"}],staticClass:"nav-link"},[_vm._ssrNode(" Blog ")])]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-51804cef>","</li>",[_c('a',{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:('#contact'),expression:"'#contact'"}],staticClass:"nav-link"},[_vm._ssrNode(" Contact ")])])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/navbar-arch/index.vue?vue&type=template&id=51804cef&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar-arch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navbar_archvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/navbar-arch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navbar_archvue_type_script_lang_js_ = (navbar_archvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/navbar-arch/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_navbar_archvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "51804cef",
  "5907b3c4"
  
)

/* harmony default export */ var navbar_arch = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ })

};;
//# sourceMappingURL=navbar-arch.js.map