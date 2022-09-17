exports.ids = [100,14,23,27,29,32,41,56,64,74];
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

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs3/index.vue?vue&type=template&id=4031f3d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-grid section-padding position-re"},[_vm._ssrNode("<div class=\"container\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-4031f3d2><div class=\"col-lg-8 col-md-10\" data-v-4031f3d2><div class=\"sec-head text-center\" data-v-4031f3d2><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-4031f3d2>RECENT ARTICLES</h6> <h3 class=\"wow color-font\" data-v-4031f3d2>From our blogs.</h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div data-wow-delay=\".3s\" class=\"col-lg-4 wow fadeInUp\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"item bg-img\" style=\"background-image: url(/img/blog/1.jpg)\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" Aug 2022 ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":"#0"}},[_c('span',[_vm._v("by / Admin")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h6 data-v-4031f3d2>","</h6>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                The Start-Up Ultimate Guide to Make Your WordPress Journal.\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"#0"}},[_vm._v(" Read More ")])],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".6s\" class=\"col-lg-4 wow fadeInUp\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"item active bg-img\" style=\"background-image: url(/img/blog/2.jpg)\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" Aug 2022 ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":"#0"}},[_c('span',[_vm._v("by / Admin")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h6 data-v-4031f3d2>","</h6>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                The Start-Up Ultimate Guide to Make Your WordPress Journal.\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"#0"}},[_vm._v(" Read More ")])],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-wow-delay=\".9s\" class=\"col-lg-4 wow fadeInUp\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"item bg-img\" style=\"background-image: url(/img/blog/3.jpg)\" data-v-4031f3d2>","</div>",[_vm._ssrNode("<div class=\"cont\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"date",attrs:{"to":"#0"}},[_c('span',[_c('i',[_vm._v("06")]),_vm._v(" Aug 2022 ")])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"author",attrs:{"to":"#0"}},[_c('span',[_vm._v("by / Admin")])]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"tag",attrs:{"to":"#0"}},[_c('span',[_vm._v("WordPress")])])],2),_vm._ssrNode(" "),_vm._ssrNode("<h6 data-v-4031f3d2>","</h6>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("\n                The Start-Up Ultimate Guide to Make Your WordPress Journal.\n              ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"btn-more\" data-v-4031f3d2>","</div>",[_c('NuxtLink',{staticClass:"simple-btn",attrs:{"to":"#0"}},[_vm._v(" Read More ")])],1)],2)])])],2)],2),_vm._ssrNode(" <div class=\"line top right\" data-v-4031f3d2></div> <div class=\"line bottom left\" data-v-4031f3d2></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blogs3/index.vue?vue&type=template&id=4031f3d2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blogs3/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Blogs3vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Blogs3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Blogs3vue_type_script_lang_js_ = (Blogs3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Blogs3/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Blogs3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4031f3d2",
  "1ed6ebc7"
  
)

/* harmony default export */ var Blogs3 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home3-dark.vue?vue&type=template&id=54a6a384&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Navbar',{ref:"navbar"}),_vm._ssrNode(" "),_c('Intro3'),_vm._ssrNode(" "),_c('Services2'),_vm._ssrNode(" "),_c('Works2'),_vm._ssrNode(" "),_c('FunFacts2'),_vm._ssrNode(" "),_c('FullTestimonials',{attrs:{"withIMG":"/img/testim-img.jpg"}}),_vm._ssrNode(" "),_c('Team1'),_vm._ssrNode(" "),_c('Blogs3'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/homepage/home3-dark.vue?vue&type=template&id=54a6a384&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/homepage/home3-dark.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var home3_darkvue_type_script_lang_js_ = ({
  layout: "dark",

  head() {
    return {
      titleTemplate: '%s - Corporate Business Dark'
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
// CONCATENATED MODULE: ./pages/homepage/home3-dark.vue?vue&type=script&lang=js&
 /* harmony default export */ var homepage_home3_darkvue_type_script_lang_js_ = (home3_darkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/homepage/home3-dark.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  homepage_home3_darkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "54a6a384",
  "e370a7a4"
  
)

/* harmony default export */ var home3_dark = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navbar: __webpack_require__(26).default,Intro3: __webpack_require__(97).default,Services2: __webpack_require__(98).default,Works2: __webpack_require__(99).default,FunFacts2: __webpack_require__(100).default,FullTestimonials: __webpack_require__(36).default,Team1: __webpack_require__(38).default,Blogs3: __webpack_require__(101).default,Footer: __webpack_require__(24).default})


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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./common/fadeInOut.js
var opacity = 0;
var intervalID = 0;
function fadeIn(el, time) {
  setInterval(show(el), time);
}

function show(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));

  if (opacity < 1) {
    opacity = opacity + 1;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}

function fadeOut(el, time) {
  setInterval(hide(el), time);
}

function hide(el) {
  opacity = Number(window.getComputedStyle(el).getPropertyValue("opacity"));

  if (opacity > 0) {
    opacity = 0;
    el.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
// CONCATENATED MODULE: ./common/tooltipEffect.js


const tooltipEffect = () => {
  let template1 = document.createElement("div");
  template1.classList.add("div-tooltip-tit");
  document.body.appendChild(template1);
  let template2 = document.createElement("div");
  template2.classList.add("div-tooltip-sub");
  document.body.appendChild(template2);
  document.querySelectorAll("[data-tooltip-tit]").forEach(item => {
    template1 = document.querySelector(".div-tooltip-tit");
    item.addEventListener("mouseover", () => {
      template1.innerText = item.getAttribute("data-tooltip-tit");
    });
    item.addEventListener("mousemove", e => {
      fadeIn(template1, 800);
      template1.style.top = e.pageY + 10 + "px";
      template1.style.left = e.pageX + 20 + "px";
      template1.style.padding = "0px 10px";
    });
    item.addEventListener("mouseleave", () => {
      fadeOut(template1, 800);
      template1.style.padding = 0;
    });
  });
  document.querySelectorAll("[data-tooltip-sub]").forEach(item => {
    template2 = document.querySelector(".div-tooltip-sub");
    item.addEventListener("mouseover", () => {
      template2.innerText = item.getAttribute("data-tooltip-sub");
    });
    item.addEventListener("mousemove", e => {
      fadeIn(template2, 800);
      template2.style.top = e.pageY - 15 + "px";
      template2.style.left = e.pageX + 30 + "px";
      template2.style.padding = "5px 10px";
    });
    item.addEventListener("mouseleave", () => {
      fadeOut(template2, 800);
      template2.style.padding = 0;
    });
  });
};

/* harmony default export */ var common_tooltipEffect = __webpack_exports__["a"] = (tooltipEffect);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Full-testimonials/index.vue?vue&type=template&id=03d9d631&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:("testimonials " + (_vm.withIMG
      ? 'section-padding bg-img'
      : _vm.withCOLOR
      ? 'section-padding back-color'
      : _vm.noPadding
      ? ''
      : 'section-padding') + " " + (_vm.classText ? _vm.classText : '')),style:(("background-image: " + (_vm.withIMG ? 'url(' + _vm.withIMG + ')' : 'none')))},[_vm._ssrNode(((_vm.showHead)?("<div class=\"container\" data-v-03d9d631><div class=\"row justify-content-center\" data-v-03d9d631><div class=\"col-lg-8 col-md-10\" data-v-03d9d631><div class=\"sec-head text-center\" data-v-03d9d631><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-03d9d631>Testimonials</h6> <h3 class=\"wow color-font\" data-v-03d9d631>\n            We love our clients from all over the world.\n          </h3></div></div></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"container-fluid position-re\" data-v-03d9d631>","</div>",[_vm._ssrNode("<div data-wow-delay=\".5s\" class=\"row wow fadeInUp\" data-v-03d9d631>","</div>",[_vm._ssrNode("<div class=\"col-lg-12\" data-v-03d9d631>","</div>",[_c('VueSlickCarousel',_vm._b({ref:"carousel",staticClass:"slic-item",attrs:{"data-wow-delay":".5s"}},'VueSlickCarousel',_vm.settings,false),[_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('div',{staticClass:"info valign"},[_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})]),_vm._v(" "),_c('h6',{staticClass:"author-name color-font"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v(" Co-founder, Colabrio ")])])])]),_vm._v(" "),_c('p',[_vm._v("\n              I would highly recommend Vie Digital. I worked with the team on\n              an animation for our ‘Click & Collect’ service.\n            ")])])])],1)]),_vm._ssrNode(" <div class=\"arrows\" data-v-03d9d631><div class=\"container\" data-v-03d9d631><div class=\"next cursor-pointer\" data-v-03d9d631><span class=\"pe-7s-angle-right\" data-v-03d9d631></span></div> <div class=\"prev cursor-pointer\" data-v-03d9d631><span class=\"pe-7s-angle-left\" data-v-03d9d631></span></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Full-testimonials/index.vue?vue&type=template&id=03d9d631&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Full-testimonials/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Full_testimonialsvue_type_script_lang_js_ = ({
  props: ["withIMG", "withCOLOR", "noPadding", "classText", "showHead"],

  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        arrows: true,
        centerMode: true,
        autoplay: true,
        rows: 1,
        slidesToScroll: 1,
        slidesToShow: 3,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false
          }
        }]
      }
    };
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },

    showPrev() {
      this.$refs.carousel.prev();
    }

  },

  mounted() {
    document.querySelector('.slick-track').classList.remove('slick-center');
  }

});
// CONCATENATED MODULE: ./components/Full-testimonials/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Full_testimonialsvue_type_script_lang_js_ = (Full_testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Full-testimonials/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Full_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "03d9d631",
  "982a4aba"
  
)

/* harmony default export */ var Full_testimonials = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module) {

module.exports = JSON.parse("{\"teams\":[{\"id\":1,\"image\":\"/img/team/1.jpg\",\"title\":\"Stephanie Lawrence\",\"sub\":\"CEO, Colabrio Media\"},{\"id\":2,\"image\":\"/img/team/2.jpg\",\"title\":\"Alex Regelman\",\"sub\":\"CEO, Colabrio Media\"},{\"id\":3,\"image\":\"/img/team/3.jpg\",\"title\":\"Stacey Stamper\",\"sub\":\"CEO, Colabrio Media\"},{\"id\":4,\"image\":\"/img/team/4.jpg\",\"title\":\"Stephanie Lawrence\",\"sub\":\"CEO, Colabrio Media\"}],\"skills\":[{\"id\":1,\"text\":\"UI / UX Design\",\"value\":\"90%\"},{\"id\":2,\"text\":\"Apps Development\",\"value\":\"80%\"}]}");

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team1/index.vue?vue&type=template&id=742723ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team-crv section-padding"},[_vm._ssrNode("<div class=\"container\" data-v-742723ce><div class=\"row\" data-v-742723ce><div class=\"col-lg-5 valign\" data-v-742723ce><div data-wow-delay=\".5s\" class=\"content wow fadeInUp md-mb30\" data-v-742723ce><div class=\"sub-title\" data-v-742723ce><h6 data-v-742723ce>Our Staff</h6> <span data-v-742723ce></span> <span data-v-742723ce></span> <span data-v-742723ce></span></div> <h3 class=\"co-tit mb-15\" data-v-742723ce>We help to create visual strategies.</h3> <p data-v-742723ce>\n            We are Vie. We create award-winning websites, remarkable brands\n            and cutting-edge apps.Nullam imperdie.\n          </p> <div class=\"skills-box mt-40\" data-v-742723ce>"+(_vm._ssrList((_vm.teamData.skills),function(skill){return ("<div class=\"skill-item\" data-v-742723ce><h6 class=\"custom-font\" data-v-742723ce>"+_vm._ssrEscape(_vm._s(skill.text))+"</h6> <div class=\"skill-progress\" data-v-742723ce><div"+(_vm._ssrAttr("data-value",skill.value))+" class=\"progres\" data-v-742723ce></div></div></div>")}))+"</div></div></div> <div class=\"col-lg-6 offset-lg-1\" data-v-742723ce><div class=\"img-box\" data-v-742723ce><div class=\"row\" data-v-742723ce><div class=\"col-sm-6 toright\" data-v-742723ce><div class=\"full-width\" data-v-742723ce>"+(_vm._ssrList((_vm.teamData.teams.slice(0, 2)),function(team,index){return ("<div data-v-742723ce><div"+(_vm._ssrAttr("data-tooltip-tit",team.title))+(_vm._ssrAttr("data-tooltip-sub",team.sub))+(_vm._ssrClass(null,("img sizxl " + (index + 1 != _vm.teamData.teams.slice(0, 2).length
                        ? 'mb-30'
                        : null))))+" data-v-742723ce><img"+(_vm._ssrAttr("src",team.image))+" alt class=\"imago wow\" data-v-742723ce></div></div>")}))+"</div></div> <div class=\"col-sm-6 toleft valign\" data-v-742723ce><div class=\"full-width text-left\" data-v-742723ce>"+(_vm._ssrList((_vm.teamData.teams.slice(2, 4)),function(team,index){return ("<div data-v-742723ce><div"+(_vm._ssrAttr("data-tooltip-tit",team.title))+(_vm._ssrAttr("data-tooltip-sub",team.sub))+(_vm._ssrClass(null,("img sizxl " + (index + 1 != _vm.teamData.teams.slice(2, 4).length
                        ? 'mb-30'
                        : null))))+" data-v-742723ce><img"+(_vm._ssrAttr("src",team.image))+" alt=\"team image\" class=\"imago wow\" data-v-742723ce></div></div>")}))+"</div></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Team1/index.vue?vue&type=template&id=742723ce&scoped=true&

// CONCATENATED MODULE: ./common/teamSkillsProgress.js
const teamSkillsProgress = () => {
  let teamSection = document.querySelector(".team-crv");

  if (teamSection) {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".skill-progress .progres").forEach(item => {
        let myVal = item.getAttribute("data-value");

        if (window.pageYOffset > teamSection.offsetTop - 200) {
          item.style.width = myVal;
        }
      });
    });
  }
};

/* harmony default export */ var common_teamSkillsProgress = (teamSkillsProgress);
// EXTERNAL MODULE: ./common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(34);

// EXTERNAL MODULE: ./data/team.json
var team = __webpack_require__(37);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Team1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Team1vue_type_script_lang_js_ = ({
  data() {
    return {
      teamData: team
    };
  },

  mounted() {
    Object(tooltipEffect["a" /* default */])();
    common_teamSkillsProgress();
  }

});
// CONCATENATED MODULE: ./components/Team1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Team1vue_type_script_lang_js_ = (Team1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Team1/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Team1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "742723ce",
  "42d30f36"
  
)

/* harmony default export */ var Team1 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro3/index.vue?vue&type=template&id=ab146b10&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"slider-stwo valign position-re"},[_vm._ssrNode("<div class=\"container\" data-v-ab146b10><div class=\"row\" data-v-ab146b10><div class=\"col-lg-5\" data-v-ab146b10><div class=\"img\" data-v-ab146b10><img src=\"/img/slid/002.jpg\" alt data-v-ab146b10></div></div> <div class=\"col-lg-7 valign\" data-v-ab146b10><div class=\"cont\" data-v-ab146b10><div class=\"sub-title mb-5\" data-v-ab146b10><h6 data-v-ab146b10>Digital Consulting Agency</h6></div> <h1 class=\"mb-10 fw-600\" data-v-ab146b10>Unique Business Consulting.</h1> <p data-v-ab146b10>\n            We help our clients succeed by creating brand identities,\n            <br data-v-ab146b10>\n            digital experiences, and print materials.\n          </p> <ul data-v-ab146b10><li data-v-ab146b10><div data-v-ab146b10><span class=\"icon pe-7s-arc\" data-v-ab146b10><div class=\"bord\" data-v-ab146b10></div></span></div> <div class=\"cont\" data-v-ab146b10><h6 data-v-ab146b10>Branding</h6> <p data-v-ab146b10>\n                  It is a long established fact that a reader will be\n                  distracted.\n                </p></div></li> <li data-v-ab146b10><div data-v-ab146b10><span class=\"icon pe-7s-help2\" data-v-ab146b10><div class=\"bord\" data-v-ab146b10></div></span></div> <div class=\"cont\" data-v-ab146b10><h6 data-v-ab146b10>Marketing</h6> <p data-v-ab146b10>\n                  It is a long established fact that a reader will be\n                  distracted.\n                </p></div></li></ul></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Intro3/index.vue?vue&type=template&id=ab146b10&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Intro3/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Intro3vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Intro3/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Intro3vue_type_script_lang_js_ = (Intro3vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Intro3/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Intro3vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ab146b10",
  "f08b18e8"
  
)

/* harmony default export */ var Intro3 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services2/index.vue?vue&type=template&id=da484bca&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"services section-padding position-re"},[_vm._ssrNode("<div class=\"container\" data-v-da484bca>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-da484bca><div class=\"col-lg-8 col-md-10\" data-v-da484bca><div class=\"sec-head text-center\" data-v-da484bca><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-da484bca>Best Features</h6> <h3 class=\"wow color-font\" data-v-da484bca>\n            We are a new digital product development agency\n          </h3></div></div></div> <div class=\"row\" data-v-da484bca><div data-wow-delay=\".3s\" class=\"col-lg-4 wow fadeInUp\" data-v-da484bca><div class=\"step-item xtop\" data-v-da484bca><span class=\"icon pe-7s-gleam\" data-v-da484bca></span> <h6 data-v-da484bca>Digital Marketing</h6> <p data-v-da484bca>\n            Tempore corrupti temporibus fuga earum asperiores fugit\n            laudantium.\n          </p></div></div> <div data-wow-delay=\".6s\" class=\"col-lg-4 wow fadeInUp\" data-v-da484bca><div class=\"step-item xcolor\" data-v-da484bca><span class=\"icon pe-7s-phone\" data-v-da484bca></span> <h6 data-v-da484bca>Web &amp; App Development</h6> <p data-v-da484bca>\n            Tempore corrupti temporibus fuga earum asperiores fugit\n            laudantium.\n          </p></div></div> <div data-wow-delay=\".9s\" class=\"col-lg-4 wow fadeInUp\" data-v-da484bca><div class=\"step-item xbottom\" data-v-da484bca><span class=\"icon pe-7s-magic-wand\" data-v-da484bca></span> <h6 data-v-da484bca>Graphic Design</h6> <p data-v-da484bca>\n            Tempore corrupti temporibus fuga earum asperiores fugit\n            laudantium.\n          </p></div></div></div> "),_vm._ssrNode("<div class=\"smore\" data-v-da484bca>","</div>",[_c('NuxtLink',{attrs:{"to":"#0"}},[_vm._v("Discover More")]),_vm._ssrNode(" <i class=\"fas fa-long-arrow-alt-right\" data-v-da484bca></i>")],2)],2),_vm._ssrNode(" <div class=\"line top left\" data-v-da484bca></div> <div class=\"line bottom right\" data-v-da484bca></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services2/index.vue?vue&type=template&id=da484bca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Services2vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Services2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Services2vue_type_script_lang_js_ = (Services2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Services2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Services2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "da484bca",
  "e1b630f6"
  
)

/* harmony default export */ var Services2 = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works2/index.vue?vue&type=template&id=121aa81f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"work-carousel section-padding caroul position-re pb-0"},[_vm._ssrNode("<div class=\"container-fluid\" data-v-121aa81f>","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\" data-v-121aa81f><div class=\"col-lg-8 col-md-10\" data-v-121aa81f><div class=\"sec-head text-center\" data-v-121aa81f><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-121aa81f>Latest Work</h6> <h3 class=\"wow color-font\" data-v-121aa81f>\n            Our Recent Web Design &amp; <br data-v-121aa81f>\n            Some Past Projects.\n          </h3></div></div></div> "),_vm._ssrNode("<div class=\"row\" data-v-121aa81f>","</div>",[_vm._ssrNode("<div class=\"col-lg-12 no-padding\" data-v-121aa81f>","</div>",[_vm._ssrNode("<div class=\"swiper-container\" data-v-121aa81f>","</div>",[_vm._ssrNode("<div class=\"swiper-container\" data-v-121aa81f>","</div>",[_c('swiper',{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{"options":_vm.swiperOptions}},[_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",staticStyle:{"background-image":"url(/img/portfolio/curs/1.jpg)"}}),_vm._v(" "),_c('div',{staticClass:"cont bgbox"},[_c('h6',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        art & illustration\n                      ")])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        Innovation and Crafts.\n                      ")])],1)])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",staticStyle:{"background-image":"url(/img/portfolio/curs/2.jpg)"}}),_vm._v(" "),_c('div',{staticClass:"cont bgbox"},[_c('h6',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        art & illustration\n                      ")])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        Inspiring new space.\n                      ")])],1)])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",staticStyle:{"background-image":"url(/img/portfolio/curs/3.jpg)"}}),_vm._v(" "),_c('div',{staticClass:"cont bgbox"},[_c('h6',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        art & illustration\n                      ")])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        Natural plus modern.\n                      ")])],1)])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",staticStyle:{"background-image":"url(/img/portfolio/curs/4.jpg)"}}),_vm._v(" "),_c('div',{staticClass:"cont bgbox"},[_c('h6',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        art & illustration\n                      ")])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        Innovation and Crafts.\n                      ")])],1)])])]),_vm._v(" "),_c('swiper-slide',{staticClass:"swiper-slide"},[_c('div',{staticClass:"content wow fadeInUp",attrs:{"data-wow-delay":".3s"}},[_c('div',{staticClass:"item-img bg-img wow imago",staticStyle:{"background-image":"url(/img/portfolio/curs/5.jpg)"}}),_vm._v(" "),_c('div',{staticClass:"cont bgbox"},[_c('h6',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        art & illustration\n                      ")])],1),_vm._v(" "),_c('h4',[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_vm._v("\n                        Inspiring new space.\n                      ")])],1)])])])],1),_vm._ssrNode(" <div class=\"\n                swiper-button-next swiper-nav-ctrl\n                next-ctrl\n                cursor-pointer\n              \" data-v-121aa81f><i class=\"ion-ios-arrow-right\" data-v-121aa81f></i></div> <div class=\"\n                swiper-button-prev swiper-nav-ctrl\n                prev-ctrl\n                cursor-pointer\n              \" data-v-121aa81f><i class=\"ion-ios-arrow-left\" data-v-121aa81f></i></div>")],2)])])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Works2/index.vue?vue&type=template&id=121aa81f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Works2/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Works2vue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        },
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0
          }
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  }
});
// CONCATENATED MODULE: ./components/Works2/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Works2vue_type_script_lang_js_ = (Works2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Works2/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Works2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "121aa81f",
  "782121f5"
  
)

/* harmony default export */ var Works2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home3-dark.js.map