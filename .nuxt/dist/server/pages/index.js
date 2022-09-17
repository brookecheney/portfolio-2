exports.ids = [112,26,43];
exports.modules = {

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=894720fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavbarFullMenu',{attrs:{"theme":"light"}}),_vm._ssrNode(" "),_c('FullScreenCircleSlide')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=894720fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: "light",

  head() {
    return {
      titleTemplate: '%s - Showcase 2 Light'
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "894720fa",
  "a812d960"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NavbarFullMenu: __webpack_require__(43).default,FullScreenCircleSlide: __webpack_require__(65).default})


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

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const removeSlashFromBagination = () => {
  if (document.querySelectorAll(".swiper-pagination")) {
    document.querySelectorAll(".swiper-pagination").forEach(item => {
      item.innerHTML = item.innerHTML.replace(" / ", "");
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (removeSlashFromBagination);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const fadeWhenScroll = element => {
  window.addEventListener("scroll", () => {
    var scrolled = window.pageYOffset;

    if (element) {
      element.forEach(item => {
        item.style.transform = "translate3d(0, " + -(scrolled * 0.2) + "px, 0)";
        item.style.opacity = 1 - scrolled / 600;
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (fadeWhenScroll);

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar-full-menu/index.vue?vue&type=template&id=113f96cd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"navi\""+(_vm._ssrClass(null,("topnav " + (_vm.theme ? (_vm.theme === 'light' ? 'light' : '') : ''))))+" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"logo\" data-v-113f96cd>","</div>",[_c('NuxtLink',{attrs:{"to":"#0"}},[(_vm.theme === 'light')?_c('img',{attrs:{"src":"/img/logo-dark.png","alt":"logo"}}):_c('img',{attrs:{"src":"/img/logo-light.png","alt":"logo"}})])],1),_vm._ssrNode(" <div class=\"menu-icon\" data-v-113f96cd><span class=\"icon\" data-v-113f96cd><i data-v-113f96cd></i> <i data-v-113f96cd></i></span> <span data-splitting class=\"text\" data-v-113f96cd><span class=\"menu-text\" data-v-113f96cd>Menu</span></span></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"hamenu\" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"col-lg-9 col-md-8\" data-v-113f96cd>","</div>",[_vm._ssrNode("<div class=\"menu-links\" data-v-113f96cd>","</div>",[_vm._ssrNode("<ul class=\"main-menu\" data-v-113f96cd>","</ul>",[_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd><span class=\"link dmenu\" data-v-113f96cd><span class=\"nm\" data-v-113f96cd>01.</span>Home\n                    <i class=\"fas fa-angle-right\" data-v-113f96cd></i></span></div> "),_vm._ssrNode("<div class=\"sub-menu\" data-v-113f96cd>","</div>",[_vm._ssrNode("<ul data-v-113f96cd>","</ul>",[_vm._ssrNode("<li data-v-113f96cd><div class=\"o-hidden\" data-v-113f96cd><span class=\"sub-link back\" data-v-113f96cd><i class=\"pe-7s-angle-left\" data-v-113f96cd></i> Go Back\n                        </span></div></li> "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home1-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("01.")]),_vm._v("Main Home\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home2-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("02.")]),_vm._v("Creative Agency\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home5-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("03.")]),_vm._v("Digital Agency\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home4-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("04.")]),_vm._v("Business One Page\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home3-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("05.")]),_vm._v("Corporate\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home6-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("06.")]),_vm._v("Modern Agency\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home7-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("07.")]),_vm._v("Freelancer\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/homepage/home8-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("08.")]),_vm._v("Architecture\n                        ")])],1)])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"link",attrs:{"to":"/about/about-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("02.")]),_vm._v("About Us\n                  ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd><span class=\"link dmenu\" data-v-113f96cd><span class=\"nm\" data-v-113f96cd>03.</span>Works\n                    <i class=\"fas fa-angle-right\" data-v-113f96cd></i></span></div> "),_vm._ssrNode("<div class=\"sub-menu\" data-v-113f96cd>","</div>",[_vm._ssrNode("<ul data-v-113f96cd>","</ul>",[_vm._ssrNode("<li data-v-113f96cd><div class=\"o-hidden\" data-v-113f96cd><span class=\"sub-link back\" data-v-113f96cd><i class=\"pe-7s-angle-left\" data-v-113f96cd></i> Go Back\n                        </span></div></li> "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/showcase/showcase-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("01.")]),_vm._v("ShowCase Parallax\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/showcase3/showcase3-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("02.")]),_vm._v("ShowCase Carousel\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/showcase2/showcase2-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("03.")]),_vm._v("ShowCase Circle\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/works/works-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("04.")]),_vm._v("Portfolio Masonry\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/works2/works2-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("05.")]),_vm._v("Portfolio Filtering\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/works3/works3-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("06.")]),_vm._v("Portfolio Gallery\n                        ")])],1)])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd><span class=\"link dmenu\" data-v-113f96cd><span class=\"nm\" data-v-113f96cd>04.</span>Blogs\n                    <i class=\"fas fa-angle-right\" data-v-113f96cd></i></span></div> "),_vm._ssrNode("<div class=\"sub-menu\" data-v-113f96cd>","</div>",[_vm._ssrNode("<ul data-v-113f96cd>","</ul>",[_vm._ssrNode("<li data-v-113f96cd><div class=\"o-hidden\" data-v-113f96cd><span class=\"sub-link back\" data-v-113f96cd><i class=\"pe-7s-angle-left\" data-v-113f96cd></i> Go Back\n                        </span></div></li> "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/blog/blog-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("01.")]),_vm._v("Blog Standerd\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/blog-list/blog-list-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("02.")]),_vm._v("Blog List\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/blog-grid/blog-grid-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("03.")]),_vm._v("Blog Grid\n                        ")])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"sub-link",attrs:{"to":"/blog-details/blog-details-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("04.")]),_vm._v("Blog Details\n                        ")])],1)])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-113f96cd>","</li>",[_vm._ssrNode("<div class=\"o-hidden\" data-v-113f96cd>","</div>",[_c('NuxtLink',{staticClass:"link",attrs:{"to":"/contact/contact-dark"}},[_c('span',{staticClass:"nm"},[_vm._v("05.")]),_vm._v("Contact\n                  ")])],1)])],2)])]),_vm._ssrNode(" <div class=\"col-lg-3 col-md-4\" data-v-113f96cd><div class=\"cont-info\" data-v-113f96cd><div class=\"item\" data-v-113f96cd><h6 data-v-113f96cd>Phone :</h6> <p data-v-113f96cd>+03 762-2367-723</p></div> <div class=\"item\" data-v-113f96cd><h6 data-v-113f96cd>Address :</h6> <p data-v-113f96cd>541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io</p></div> <div class=\"item\" data-v-113f96cd><h6 data-v-113f96cd>Email :</h6> <p data-v-113f96cd><a href=\"#0\" data-v-113f96cd>Vie_website@gmail.com</a></p></div></div></div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar-full-menu/index.vue?vue&type=template&id=113f96cd&scoped=true&

// EXTERNAL MODULE: ./common/getSiblings.js
var getSiblings = __webpack_require__(25);

// CONCATENATED MODULE: ./common/animateElement.js
const animateElement = (el, to) => {
  function draw() {
    el.style.left = to;
  }

  draw();
};

/* harmony default export */ var common_animateElement = (animateElement);
// CONCATENATED MODULE: ./common/delay.js
const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

/* harmony default export */ var common_delay = (delay);
// CONCATENATED MODULE: ./common/initFullNavbarMenu.js




const initFullNavbarMenu = () => {
  function noScroll() {
    window.scrollTo(0, 0);
  }

  var open = false,
      navDark = document.querySelector(".topnav.dark"),
      logoChan = document.querySelector(".topnav.dark .logo img"),
      menuIcon = document.querySelector(".topnav .menu-icon"),
      menuText = document.querySelector(".topnav .menu-icon .text");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      document.querySelector(".hamenu").classList.toggle("open");

      if (open) {
        common_animateElement(document.querySelector(".hamenu"), "0px");
        menuText.classList.add("open");

        if (navDark) {
          navDark.classList.add("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", "/img/logo-light.png");
        }

        window.addEventListener("scroll", noScroll);
      } else {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        menuText.classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", "/img/logo-dark.png");
        }

        window.removeEventListener("scroll", noScroll);
      }
    });
    document.querySelectorAll(".main-menu a").forEach(item => {
      item.addEventListener("click", () => {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        menuText.classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", "/img/logo-dark.png");
        }

        window.removeEventListener("scroll", noScroll);
      });
    });
  }

  document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item => {
    item.addEventListener("mouseenter", function () {
      this.style.opacity = "1";
      Object(getSiblings["a" /* default */])(this).forEach(item => {
        item.style.opacity = ".5";
      });
    });
    item.addEventListener("mouseleave", function () {
      document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item2 => {
        item2.style.opacity = "1";
      });
    });
  });

  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        Object(getSiblings["a" /* default */])(this.parentNode.parentNode).forEach(item => {
          item.childNodes[2] ? item.childNodes[2].classList.remove("sub-open") : "";
        });
        this.parentNode.parentNode.childNodes[2].classList.add("sub-open");
      });
    });
  }

  if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.remove("gosub");
        document.querySelector(".main-menu").classList.remove("sub-open");
      });
    });
  }
};

/* harmony default export */ var common_initFullNavbarMenu = (initFullNavbarMenu);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar-full-menu/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbar_full_menuvue_type_script_lang_js_ = ({
  props: ["theme"],

  mounted() {
    common_initFullNavbarMenu();
  }

});
// CONCATENATED MODULE: ./components/Navbar-full-menu/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbar_full_menuvue_type_script_lang_js_ = (Navbar_full_menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Navbar-full-menu/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbar_full_menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "113f96cd",
  "3bf8e4e5"
  
)

/* harmony default export */ var Navbar_full_menu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"first\":\"Brooklyne's\",\"second\":\"Bows\"},\"image\":\"/img/portfolio/full/1.png\",\"sub\":\"Design\"},{\"id\":2,\"title\":{\"first\":\"Fisherman\",\"second\":\"Portrait\"},\"image\":\"/img/portfolio/full/2.jpg\",\"sub\":\"Design\"},{\"id\":3,\"title\":{\"first\":\"Tribos\",\"second\":\"Urbanas\"},\"image\":\"/img/portfolio/full/3.jpg\",\"sub\":\"Design\"},{\"id\":4,\"title\":{\"first\":\"Monsoon\",\"second\":\"in the city\"},\"image\":\"/img/portfolio/full/4.jpg\",\"sub\":\"Design\"}]");

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FullScreen-circle-slide/index.vue?vue&type=template&id=6d0c5c26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"slider circle-slide showcase-carus"},[_vm._ssrNode("<div id=\"content-carousel-container-unq-1\" class=\"swiper-container\" data-v-6d0c5c26>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions},on:{"ready":_vm.handleSwiperReadied}},_vm._l((_vm.fullScreenData),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"full-width"},[_c('div',{staticClass:"bg-img valign",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-overlay-dark":"1"}},[_c('div',{staticClass:"caption ontop valign"},[_c('div',{staticClass:"o-hidden"},[_c('h1',{attrs:{"data-swiper-parallax":"-2000"}},[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_c('div',{staticClass:"stroke"},[_vm._v(_vm._s(slide.title.first))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(slide.title.second))])])],1)])]),_vm._v(" "),_c('div',{staticClass:"copy-cap valign"},[_c('div',{staticClass:"cap"},[_c('h1',{attrs:{"data-swiper-parallax":"-2000"}},[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_c('div',{staticClass:"stroke"},[_vm._v(_vm._s(slide.title.first))]),_vm._v(" "),_c('span',[_vm._v(_vm._s(slide.title.second))])])],1)])])])])])}),1)],1),_vm._ssrNode(" <div class=\"txt-botm\" data-v-6d0c5c26><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-6d0c5c26><div data-v-6d0c5c26><span data-v-6d0c5c26>Next Slide</span></div> <div data-v-6d0c5c26><i class=\"fas fa-chevron-right\" data-v-6d0c5c26></i></div></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-6d0c5c26><div data-v-6d0c5c26><i class=\"fas fa-chevron-left\" data-v-6d0c5c26></i></div> <div data-v-6d0c5c26><span data-v-6d0c5c26>Prev Slide</span></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue?vue&type=template&id=6d0c5c26&scoped=true&

// EXTERNAL MODULE: ./data/fullScreen.json
var fullScreen = __webpack_require__(46);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/fadeWhenScroll.js
var fadeWhenScroll = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FullScreen-circle-slide/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FullScreen_circle_slidevue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      fullScreenData: fullScreen,
      swiperOptions: {
        speed: 1000,
        mousewheel: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1,
        autoplay: true,
        spaceBetween: 500,
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next"
        },
        breakpoints: {
          0: {
            spaceBetween: 0
          },
          640: {
            spaceBetween: 0
          },
          768: {
            spaceBetween: 30
          },
          1024: {
            spaceBetween: 500
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  },
  methods: {
    handleSwiperReadied: swiper => {
      setTimeout(() => {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
        }
      });
    }
  },

  mounted() {
    Object(removeSlashpagination["a" /* default */])();
    Object(fadeWhenScroll["a" /* default */])(document.querySelectorAll(".fixed-slider .caption"));
  }

});
// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FullScreen_circle_slidevue_type_script_lang_js_ = (FullScreen_circle_slidevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/FullScreen-circle-slide/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FullScreen_circle_slidevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6d0c5c26",
  "5a56fa17"
  
)

/* harmony default export */ var FullScreen_circle_slide = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map