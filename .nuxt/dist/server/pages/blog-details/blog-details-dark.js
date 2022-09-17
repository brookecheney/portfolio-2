exports.ids = [86,8,23,41,45];
exports.modules = {

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details/blog-details-dark.vue?vue&type=template&id=778429ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"circle-bg\" data-v-778429ce><div class=\"circle-color fixed\" data-v-778429ce><div class=\"gradient-circle\" data-v-778429ce></div> <div class=\"gradient-circle two\" data-v-778429ce></div></div></div> "),_c('Navbar',{ref:"navbar"}),_vm._ssrNode(" "),_c('PageHeader',{attrs:{"title":"Blog Details.","paragraph":"All the most current news and events of our creative team."}}),_vm._ssrNode(" "),_c('BlogDetails'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog-details/blog-details-dark.vue?vue&type=template&id=778429ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details/blog-details-dark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blog_details_darkvue_type_script_lang_js_ = ({
  layout: 'dark',

  head() {
    return {
      titleTemplate: '%s - Blog Details Dark'
    };
  },

  mounted() {
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
// CONCATENATED MODULE: ./pages/blog-details/blog-details-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_details_blog_details_darkvue_type_script_lang_js_ = (blog_details_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/blog-details/blog-details-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_details_blog_details_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "778429ce",
  "d277ec34"
  
)

/* harmony default export */ var blog_details_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,PageHeader: __webpack_require__(40).default,BlogDetails: __webpack_require__(85).default,Footer: __webpack_require__(24).default})


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
  "07e8e8e0"
  
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
  "738b8115"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("page-header " + (_vm.classText && _vm.classText))},[_vm._ssrNode("<div class=\"container\" data-v-1eba3886><div class=\"row justify-content-center\" data-v-1eba3886><div class=\"col-lg-7 col-md-9\" data-v-1eba3886><div class=\"cont text-center\" data-v-1eba3886><h1 class=\"mb-10 color-font\" data-v-1eba3886>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p data-v-1eba3886>"+_vm._ssrEscape(_vm._s(_vm.paragraph))+"</p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=template&id=1eba3886&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Page-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Page_headervue_type_script_lang_js_ = ({
  props: ["title", "paragraph", "classText"]
});
// CONCATENATED MODULE: ./components/Page-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Page_headervue_type_script_lang_js_ = (Page_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Page-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Page_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1eba3886",
  "6ac8413c"
  
)

/* harmony default export */ var Page_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=template&id=8711ae62&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-pg single section-padding pt-0"},[_vm._ssrNode("<div class=\"container\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"col-lg-11\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"post\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"img\" data-v-8711ae62><img src=\"/img/blog/single.jpg\" alt data-v-8711ae62></div> <div class=\"content pt-60\" data-v-8711ae62><div class=\"row justify-content-center\" data-v-8711ae62><div class=\"col-lg-10\" data-v-8711ae62><div class=\"cont\" data-v-8711ae62><h4 class=\"extra-title\" data-v-8711ae62>\n                    Priorities that will pop up in any particular month.\n                  </h4> <div class=\"spacial\" data-v-8711ae62><p data-v-8711ae62>\n                      Never ever think of giving up. Winners never quit and\n                      quitters never win. Take all negative words out of your\n                      mental dictionary and focus on the solutions with utmost\n                      conviction and patience. The battle is never lost until\n                      you've abandon your vision.\n                    </p></div> <p data-v-8711ae62>\n                    the main component of a healthy environment for self\n                    esteem is that it needs be nurturing. The main compont of\n                    a healthy environment for self esteem is that it needs be\n                    nurturing. The main component of a healthy env for self\n                    esteem The main compont be nurturing It should provide\n                    unconditional warmth. The main component of a healthy env\n                    for self esteem The main compont be nurturing It should\n                    provide unconditional\n                  </p> <h6 data-v-8711ae62>- We all intend to plan ahead.</h6> <p data-v-8711ae62>\n                    We all intend to plan ahead, but too often let the\n                    day-to-day minutia get in the way of making a calendar for\n                    the year. Sure, you can't know every detail to anticipate.\n                    Heck, you can't know half the priorities that will pop up\n                    in any particular month. But you can plan for big picture\n                    seasonality, busy-times, and events.\n                  </p> <ul data-v-8711ae62><li data-v-8711ae62><span data-v-8711ae62>01</span> Integer in volutpat libero.</li> <li data-v-8711ae62><span data-v-8711ae62>02</span> Vivamus maximus ultricies pulvinar.\n                    </li> <li data-v-8711ae62><span data-v-8711ae62>03</span> priorities that will pop up in any\n                      particular month.\n                    </li> <li data-v-8711ae62><span data-v-8711ae62>04</span> We all intend to plan ahead.</li> <li data-v-8711ae62><span data-v-8711ae62>05</span> The main component of a healthy env for\n                      self esteem.\n                    </li></ul> <div class=\"quotes text-center\" data-v-8711ae62><p data-v-8711ae62>\n                      Never ever think of giving up. Winners never quit and\n                      quitters never win. Take all negative words out of your\n                      mental dictionary and focus on the solutions with utmost\n                      conviction and patience. The battle is never lost until\n                      you've abandon your vision.\n                    </p></div> <div class=\"row\" data-v-8711ae62><div class=\"col-md-6\" data-v-8711ae62><div class=\"mb-10\" data-v-8711ae62><img src=\"/img/blog/2.jpg\" alt data-v-8711ae62></div></div> <div class=\"col-md-6\" data-v-8711ae62><div class=\"mb-10\" data-v-8711ae62><img src=\"/img/blog/3.jpg\" alt data-v-8711ae62></div></div></div> <p data-v-8711ae62>\n                    We all intend to plan ahead, but too often let the\n                    day-to-day minutia get in the way of making a calendar for\n                    the year. Sure, you can't know every detail to anticipate.\n                    Heck, you can't know half the priorities that will pop up\n                    in any particular month. But you can plan for big picture\n                    seasonality, busy-times, and events.\n                  </p> <div class=\"share-info\" data-v-8711ae62><div class=\"social\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62><i class=\"fab fa-facebook-f\" data-v-8711ae62></i></a> <a href=\"#0\" data-v-8711ae62><i class=\"fab fa-twitter\" data-v-8711ae62></i></a> <a href=\"#0\" data-v-8711ae62><i class=\"fab fa-behance\" data-v-8711ae62></i></a></div> <div class=\"tags\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62>Web</a>,<a href=\"#0\" data-v-8711ae62>Themeforest</a>,\n                      <a href=\"#0\" data-v-8711ae62>ThemesCamp</a></div></div></div> <div class=\"author\" data-v-8711ae62><div class=\"author-img\" data-v-8711ae62><img src=\"/img/blog/01.jpg\" alt data-v-8711ae62></div> <div class=\"info\" data-v-8711ae62><h6 data-v-8711ae62><span data-v-8711ae62>author :</span> Jorden Griffin</h6> <p data-v-8711ae62>\n                      the main component of a healthy environment for self\n                      esteem is that it needs be nurturing. The main compont\n                      of a healthy environment.\n                    </p> <div class=\"social\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62><i class=\"fab fa-facebook-f\" data-v-8711ae62></i></a> <a href=\"#0\" data-v-8711ae62><i class=\"fab fa-twitter\" data-v-8711ae62></i></a> <a href=\"#0\" data-v-8711ae62><i class=\"fab fa-behance\" data-v-8711ae62></i></a></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"pagination\" data-v-8711ae62>","</div>",[_vm._ssrNode("<span data-v-8711ae62><a href=\"#0\" data-v-8711ae62>Prev Post</a></span> "),_vm._ssrNode("<span class=\"icon\" data-v-8711ae62>","</span>",[_c('NuxtLink',{attrs:{"to":"/blog/blog-dark"}},[_c('i',{staticClass:"fas fa-th-large"})])],1),_vm._ssrNode(" <span class=\"text-right\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62>Next Post</a></span>")],2),_vm._ssrNode(" <div class=\"comments-area\" data-v-8711ae62><h5 data-v-8711ae62>Comments :</h5> <div class=\"item\" data-v-8711ae62><div class=\"comment-img\" data-v-8711ae62><img src=\"/img/blog/01.jpg\" alt data-v-8711ae62></div> <div class=\"info\" data-v-8711ae62><h6 data-v-8711ae62>Jorden Griffin - <span data-v-8711ae62> 6 Aug 2022</span></h6> <span class=\"replay\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62> Replay <i class=\"fas fa-reply\" data-v-8711ae62></i></a></span> <p data-v-8711ae62>\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                </p></div></div> <div class=\"item relped\" data-v-8711ae62><div class=\"comment-img\" data-v-8711ae62><img src=\"/img/blog/01.jpg\" alt data-v-8711ae62></div> <div class=\"info\" data-v-8711ae62><h6 data-v-8711ae62>Jorden Griffin - <span data-v-8711ae62> 6 Aug 2022</span></h6> <span class=\"replay\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62> Replay <i class=\"fas fa-reply\" data-v-8711ae62></i></a></span> <p data-v-8711ae62>\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                </p></div></div> <div class=\"item\" data-v-8711ae62><div class=\"comment-img\" data-v-8711ae62><img src=\"/img/blog/01.jpg\" alt data-v-8711ae62></div> <div class=\"info\" data-v-8711ae62><h6 data-v-8711ae62>Jorden Griffin - <span data-v-8711ae62> 6 Aug 2022</span></h6> <span class=\"replay\" data-v-8711ae62><a href=\"#0\" data-v-8711ae62> Replay <i class=\"fas fa-reply\" data-v-8711ae62></i></a></span> <p data-v-8711ae62>\n                  the main component of a healthy environment for self esteem\n                  is that it needs be nurturing. The main compont of a healthy\n                  environment.\n                </p></div></div></div> "),_vm._ssrNode("<div class=\"comment-form\" data-v-8711ae62>","</div>",[_vm._ssrNode("<h5 data-v-8711ae62>Add Comment :</h5> "),_vm._ssrNode("<div class=\"form\" data-v-8711ae62>","</div>",[_vm._ssrNode("<form action data-v-8711ae62>","</form>",[_vm._ssrNode("<div class=\"row\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"col-12\" data-v-8711ae62><div class=\"form-group\" data-v-8711ae62><textarea placeholder=\"Your Comment\" data-v-8711ae62></textarea></div></div> <div class=\"col-md-6\" data-v-8711ae62><div class=\"form-group\" data-v-8711ae62><input type=\"text\" placeholder=\"Your Name\" data-v-8711ae62></div></div> <div class=\"col-md-6\" data-v-8711ae62><div class=\"form-group\" data-v-8711ae62><input type=\"email\" placeholder=\"Your Email\" data-v-8711ae62></div></div> "),_vm._ssrNode("<div class=\"col-12\" data-v-8711ae62>","</div>",[_vm._ssrNode("<div class=\"form-group text-center\" data-v-8711ae62>","</div>",[_c('NuxtLink',{class:("butn " + (_vm.theme ? (_vm.theme === 'light' ? 'dark' : '') : 'light') + " curve full-width"),attrs:{"to":"#0"}},[_vm._v("\n                        Comment\n                      ")])],1)])],2)])])],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=template&id=8711ae62&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog-details/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blog_detailsvue_type_script_lang_js_ = ({
  props: ["theme"]
});
// CONCATENATED MODULE: ./components/Blog-details/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blog_detailsvue_type_script_lang_js_ = (Blog_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blog-details/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blog_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8711ae62",
  "510133dc"
  
)

/* harmony default export */ var Blog_details = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-details-dark.js.map