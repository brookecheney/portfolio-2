exports.ids = [95,21,22,23,41];
exports.modules = {

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/contact-light.vue?vue&type=template&id=64658d6a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar",attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('ContactHeader'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"main-content\" data-v-64658d6a>","</div>",[_c('ContactForm',{attrs:{"theme":"light"}}),_vm._ssrNode(" <div class=\"map\" data-v-64658d6a><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29695.671230259337!2d2.3558151621751584!3d48.86295242559001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z2YXYqtit2YEg2KfZhNmE2YjZgdix!5e0!3m2!1sar!2seg!4v1642786626975!5m2!1sar!2seg\" width=\"100%\" height=\"100%\" loading=\"lazy\" data-v-64658d6a></iframe></div> "),_c('Footer',{attrs:{"hideBGCOLOR":""}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact/contact-light.vue?vue&type=template&id=64658d6a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact/contact-light.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contact_lightvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Contact Light'
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
// CONCATENATED MODULE: ./pages/contact/contact-light.vue?vue&type=script&lang=js&
 /* harmony default export */ var contact_contact_lightvue_type_script_lang_js_ = (contact_lightvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/contact/contact-light.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contact_contact_lightvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "64658d6a",
  "315996ac"
  
)

/* harmony default export */ var contact_light = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,ContactHeader: __webpack_require__(89).default,ContactForm: __webpack_require__(90).default,Footer: __webpack_require__(24).default})


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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const particlesConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ __webpack_exports__["a"] = (particlesConfig);

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const particlesBlackConfig = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "/img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 1.8,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.4,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
/* harmony default export */ __webpack_exports__["a"] = (particlesBlackConfig);

/***/ }),

/***/ 70:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":{\"first\":\"Let's talk\",\"second\":\"about your project.\"},\"content\":\"Feel free to ask me any question or let’s do to talk about our future collaboration.\"}");

/***/ }),

/***/ 71:
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":1,\"title\":\"Let's Talk.\",\"email\":\"Email@example.com\",\"phone\":\"+4.930.705.5448\",\"location\":{\"first\":\"295 Witting Streets Suite 666,\",\"second\":\"Melbourne, Australia\"}}");

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-header/index.vue?vue&type=template&id=745c942b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"pages-header circle-bg valign position-re"},[_vm._ssrNode("<div class=\"container\" data-v-745c942b><div class=\"row justify-content-center\" data-v-745c942b><div class=\"col-lg-9 col-md-11\" data-v-745c942b><div class=\"capt\" data-v-745c942b><div class=\"text-center\" data-v-745c942b><h1 class=\"color-font mb-10 fw-700\" data-v-745c942b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentHeaderData.title.first)+" ")+"<br data-v-745c942b>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentHeaderData.title.second)+"\n            ")+"</h1> <p data-v-745c942b>"+_vm._ssrEscape(_vm._s(_vm.contentHeaderData.content))+"</p></div></div></div></div></div> "),_c('Particles',{attrs:{"id":"particles-js","options":_vm.theme === 'light' ? _vm.particlesBlackConfig : _vm.particlesConfig}}),_vm._ssrNode(" <div class=\"circle-color\" data-v-745c942b><div class=\"gradient-circle\" data-v-745c942b></div> <div class=\"gradient-circle two\" data-v-745c942b></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contact-header/index.vue?vue&type=template&id=745c942b&scoped=true&

// EXTERNAL MODULE: ./data/contact-header.json
var contact_header = __webpack_require__(70);

// EXTERNAL MODULE: ./config/particle-config.js
var particle_config = __webpack_require__(51);

// EXTERNAL MODULE: ./config/pr-s-black.js
var pr_s_black = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-header/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Contact_headervue_type_script_lang_js_ = ({
  props: ["theme"],

  data() {
    return {
      contentHeaderData: contact_header,
      particlesConfig: particle_config["a" /* default */],
      particlesBlackConfig: pr_s_black["a" /* default */]
    };
  },

  mounted() {
    setTimeout(() => {
      if (document.querySelector("#particles-js canvas")) {
        document.querySelector("#particles-js canvas").style.position = "unset";
      }
    }, 500);
  }

});
// CONCATENATED MODULE: ./components/Contact-header/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contact_headervue_type_script_lang_js_ = (Contact_headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Contact-header/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contact_headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "745c942b",
  "2619b813"
  
)

/* harmony default export */ var Contact_header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-form/index.vue?vue&type=template&id=fd4febec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-fd4febec>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-fd4febec>","</div>",[_vm._ssrNode("<div class=\"col-lg-6\" data-v-fd4febec><div class=\"form md-mb50\" data-v-fd4febec><h4 class=\"fw-700 color-font mb-50\" data-v-fd4febec>Get In Touch.</h4> <form id=\"contact-form\" data-v-fd4febec><div class=\"messages\" data-v-fd4febec></div> <div class=\"controls\" data-v-fd4febec><div class=\"form-group\" data-v-fd4febec><input id=\"form_name\" type=\"text\" name=\"name\" placeholder=\"Name\" required=\"required\" data-v-fd4febec></div> <div class=\"form-group\" data-v-fd4febec><input id=\"form_email\" type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\" data-v-fd4febec></div> <div class=\"form-group\" data-v-fd4febec><textarea id=\"form_message\" name=\"message\" placeholder=\"Message\" rows=\"4\" required=\"required\" data-v-fd4febec></textarea></div> <button type=\"submit\""+(_vm._ssrClass(null,("butn " + (_vm.theme === 'light' ? 'dark': 'bord'))))+" data-v-fd4febec><span data-v-fd4febec>Send Message</span></button></div></form></div></div> "),_vm._ssrNode("<div class=\"col-lg-5 offset-lg-1\" data-v-fd4febec>","</div>",[_vm._ssrNode("<div class=\"cont-info\" data-v-fd4febec>","</div>",[_vm._ssrNode("<h4 class=\"fw-700 color-font mb-50\" data-v-fd4febec>Contact Info.</h4> <h3 data-splitting class=\"wow\" data-v-fd4febec>"+_vm._ssrEscape(_vm._s(_vm.contentFormData.title))+"</h3> "),_vm._ssrNode("<div class=\"item mb-40\" data-v-fd4febec>","</div>",[_vm._ssrNode("<h5 data-v-fd4febec>","</h5>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v(_vm._s(_vm.contentFormData.email))])],1),_vm._ssrNode(" <h5 data-v-fd4febec>"+_vm._ssrEscape(_vm._s(_vm.contentFormData.phone))+"</h5>")],2),_vm._ssrNode(" <h3 data-splitting class=\"wow\" data-v-fd4febec>Visit Us.</h3> <div class=\"item\" data-v-fd4febec><h6 data-v-fd4febec>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentFormData.location.first)+"\n              ")+"<br data-v-fd4febec>"+_vm._ssrEscape("\n              "+_vm._s(_vm.contentFormData.location.second)+"\n            ")+"</h6></div> "),_vm._ssrNode("<div class=\"social mt-50\" data-v-fd4febec>","</div>",[_c('NuxtLink',{staticClass:"icon",attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-facebook-f"})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"icon",attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-twitter"})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"icon",attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-pinterest"})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"icon",attrs:{"to":"#0"}},[_c('i',{staticClass:"fab fa-behance"})])],2)],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Contact-form/index.vue?vue&type=template&id=fd4febec&scoped=true&

// EXTERNAL MODULE: ./data/contact-form.json
var contact_form = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Contact-form/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Contact_formvue_type_script_lang_js_ = ({
  props: ["theme"],

  data() {
    return {
      contentFormData: contact_form
    };
  }

});
// CONCATENATED MODULE: ./components/Contact-form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Contact_formvue_type_script_lang_js_ = (Contact_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Contact-form/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Contact_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fd4febec",
  "cf610f6c"
  
)

/* harmony default export */ var Contact_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-light.js.map