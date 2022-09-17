exports.ids = [124,23,41,70,72];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works2/works2-light.vue?vue&type=template&id=a2eafe2c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"circle-bg\" data-v-a2eafe2c><div class=\"circle-color fixed\" data-v-a2eafe2c><div class=\"gradient-circle\" data-v-a2eafe2c></div> <div class=\"gradient-circle two\" data-v-a2eafe2c></div></div></div> "),_c('Navbar',{ref:"navbar",attrs:{"lr":"logoRef","theme":"light"}}),_vm._ssrNode(" "),_c('WorksHeader',{ref:"fixedSlider"}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-a2eafe2c>","</div>",[_c('WorksStyle2',{attrs:{"grid":3,"filterPosition":"center"}}),_vm._ssrNode(" "),_c('Footer')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/works2/works2-light.vue?vue&type=template&id=a2eafe2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/works2/works2-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var works2_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Works 2 Light'
    };
  },

  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }

    var navbar = this.$refs.navbar.$el;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/works2/works2-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var works2_works2_lightvue_type_script_lang_js_ = (works2_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/works2/works2-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  works2_works2_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a2eafe2c",
  "43a5a52c"
  
)

/* harmony default export */ var works2_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,WorksHeader: __webpack_require__(50).default,WorksStyle2: __webpack_require__(64).default,Footer: __webpack_require__(24).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=template&id=2e8392e9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{class:("" + (!_vm.hideBGCOLOR ? 'sub-bg' : ''))},[_vm._ssrNode("<div class=\"container\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9><div class=\"item md-mb50\" data-v-2e8392e9><div class=\"title\" data-v-2e8392e9><h5 data-v-2e8392e9>Contact Us</h5></div> <ul data-v-2e8392e9><li data-v-2e8392e9><span class=\"icon pe-7s-map-marker\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Officeal Address</h6> <p data-v-2e8392e9>504 White St . Dawsonville, GA 30534 , New York</p></div></li> <li data-v-2e8392e9><span class=\"icon pe-7s-mail\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Email Us</h6> <p data-v-2e8392e9>support@gmail.com</p></div></li> <li data-v-2e8392e9><span class=\"icon pe-7s-call\" data-v-2e8392e9></span> <div class=\"cont\" data-v-2e8392e9><h6 data-v-2e8392e9>Call Us</h6> <p data-v-2e8392e9>+87986451666</p></div></li></ul></div></div> "),_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"item md-mb50\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"title\" data-v-2e8392e9><h5 data-v-2e8392e9>Recent News</h5></div> "),_vm._ssrNode("<ul data-v-2e8392e9>","</ul>",[_vm._ssrNode("<li data-v-2e8392e9>","</li>",[_vm._ssrNode("<div class=\"img\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":"/img/blog/1.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm-post\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('p',[_vm._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),_vm._v(" "),_c('span',{staticClass:"date"},[_vm._v("14 sep 2022")])])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-2e8392e9>","</li>",[_vm._ssrNode("<div class=\"img\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('img',{attrs:{"src":"/img/blog/2.jpg","alt":""}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm-post\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#"}},[_c('p',[_vm._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),_vm._v(" "),_c('span',{staticClass:"date"},[_vm._v("14 sep 2022")])])],1)],2),_vm._ssrNode(" <li data-v-2e8392e9><div class=\"subscribe\" data-v-2e8392e9><input type=\"text\" placeholder=\"Type Your Email\" data-v-2e8392e9> <span class=\"subs pe-7s-paper-plane\" data-v-2e8392e9></span></div></li>")],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-4\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"item\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-2e8392e9><img src=\"/img/logo-light.png\" alt=\"logo\" data-v-2e8392e9></div> "),_vm._ssrNode("<div class=\"social\" data-v-2e8392e9>","</div>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-facebook-f"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-twitter"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-instagram"})]),_vm._ssrNode(" "),_c('NuxtLink',{attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-youtube"})])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"copy-right\" data-v-2e8392e9>","</div>",[_vm._ssrNode("<p data-v-2e8392e9>","</p>",[_vm._ssrNode("\n              © 2022, Vie Template. Made with passion by\n              "),_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("ThemesCamp")]),_vm._ssrNode(".\n            ")],2)])],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=template&id=2e8392e9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  props: ['hideBGCOLOR']
});
// CONCATENATED MODULE: ./components/Footer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e8392e9",
  "7cfd2cd8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


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
  "2d2401c9"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;

  if (grid.length >= 1) {
    grid.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items"
      });
    });
  }

  var gridMons = document.querySelectorAll(".gallery-mons");

  if (gridMons.length >= 1) {
    gridMons.forEach(item => {
      iso = new Isotope(item, {
        itemSelector: ".items",
        masonry: {
          columnWidth: ".width2"
        }
      });
    });
  }

  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }

      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({
        filter: filterValue
      });
    });
    var buttonGroups = document.querySelectorAll(".filtering");

    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }

        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (initIsotope);

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-header/index.vue?vue&type=template&id=18cdfddc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[_vm._ssrNode("<div class=\"container\" data-v-18cdfddc><div class=\"row justify-content-center\" data-v-18cdfddc><div class=\"col-lg-7 col-md-9 static\" data-v-18cdfddc><div class=\"capt mt-50\" data-v-18cdfddc><div class=\"parlx text-center\" data-v-18cdfddc><h1 class=\"color-font\" data-v-18cdfddc>amazing works</h1> <p data-v-18cdfddc>\n              Creativity involves breaking out of expected &amp; repeatable\n              patterns in order to look at things in different way than ever\n              before.\n            </p></div> <div class=\"bactxt custom-font valign\" data-v-18cdfddc><span class=\"full-width\" data-v-18cdfddc>Works</span></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works-header/index.vue?vue&type=template&id=18cdfddc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Works_headervue_type_script_lang_js_ = ({
  props: ['sliderRef']
});
// CONCATENATED MODULE: ./components/Works-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works_headervue_type_script_lang_js_ = (Works_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "18cdfddc",
  "3d5dc071"
  
)

/* harmony default export */ var Works_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-style2/index.vue?vue&type=template&id=b3e5e8de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:((_vm.grid ? (_vm.grid === 3 ? 'three-column' : null) : null) + " portfolio section-padding pb-70")},[_vm._ssrNode(((!_vm.hideFilter)?("<div class=\"container\" data-v-b3e5e8de><div class=\"row justify-content-center\" data-v-b3e5e8de><div class=\"col-lg-8 col-md-10\" data-v-b3e5e8de><div class=\"sec-head text-center\" data-v-b3e5e8de><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-b3e5e8de>Portfolio</h6> <h3 class=\"wow color-font\" data-v-b3e5e8de>\n            Our Recent Web Design &amp; <br data-v-b3e5e8de>\n            Some Past Projects.\n          </h3></div></div></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"container\" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-b3e5e8de>","</div>",[_vm._ssrNode(((!_vm.hideFilter)?("<div"+(_vm._ssrClass(null,("filtering " + (_vm.filterPosition === 'center'
            ? 'text-center'
            : _vm.filterPosition === 'left'
            ? 'text-left'
            : 'text-right') + " col-12")))+" data-v-b3e5e8de><div class=\"filter\" data-v-b3e5e8de><span data-filter=\"*\" class=\"active\" data-v-b3e5e8de> All </span> <span data-filter=\".brand\" data-v-b3e5e8de>Branding</span> <span data-filter=\".web\" data-v-b3e5e8de>Mobile App</span> <span data-filter=\".graphic\" data-v-b3e5e8de>Creative</span></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"gallery full-width\" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/1.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>Creativity Demand</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/2.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>Through The Breaking</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/3.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>Create With Creatives</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items graphic wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/4.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>Energies of Love</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items web wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/5.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>See It Yourself</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".4s\""+(_vm._ssrClass(null,((_vm.grid === 3
              ? 'col-lg-4 col-md-6'
              : _vm.grid === 2
              ? 'col-md-6'
              : 'col-12') + " items brand wow fadeInUp")))+" data-v-b3e5e8de>","</div>",[_vm._ssrNode("<div class=\"item-img\" data-v-b3e5e8de>","</div>",[_c('NuxtLink',{staticClass:"imago wow",attrs:{"to":"/project-details2/project-details2-dark"}},[_c('img',{attrs:{"src":"/img/portfolio/portfolio/1/6.jpg","alt":"image"}}),_vm._v(" "),_c('div',{staticClass:"item-img-overlay"})])],1),_vm._ssrNode(" <div class=\"cont\" data-v-b3e5e8de><h6 data-v-b3e5e8de>Blast From The Past</h6> <span data-v-b3e5e8de><a href=\"#0\" data-v-b3e5e8de>Design</a>, <a href=\"#0\" data-v-b3e5e8de>WordPress</a></span></div>")],2)],2)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works-style2/index.vue?vue&type=template&id=b3e5e8de&scoped=true&

// EXTERNAL MODULE: ./common/initIsotope.js
var initIsotope = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works-style2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Works_style2vue_type_script_lang_js_ = ({
  props: ["grid", "filterPosition", "hideFilter"],

  mounted() {
    setTimeout(() => {
      Object(initIsotope["a" /* default */])();
    }, 1000);
  }

});
// CONCATENATED MODULE: ./components/Works-style2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works_style2vue_type_script_lang_js_ = (Works_style2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works-style2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works_style2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b3e5e8de",
  "cb9824f6"
  
)

/* harmony default export */ var Works_style2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=works2-light.js.map