module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-intro","2":"components/about-us1","3":"components/about-us2","4":"components/about-us3","5":"components/about-us4","6":"components/about-us5","7":"components/about-us6","8":"components/blog-details","9":"components/blog-grid","10":"components/blog-listed","11":"components/blog-standerd","12":"components/blogs1","13":"components/blogs2","14":"components/blogs3","15":"components/blogs4","16":"components/call-to-action","17":"components/case-study","18":"components/clients1","19":"components/clients2","20":"components/contact-archo","21":"components/contact-form","22":"components/contact-header","23":"components/footer","24":"components/footer-arch","25":"components/freelancre-intro","26":"components/full-screen-circle-slide","27":"components/full-testimonials","28":"components/fun-facts1","29":"components/fun-facts2","30":"components/intro-with-slider","31":"components/intro2","32":"components/intro3","33":"components/intro4","34":"components/intro5","35":"components/latest-news","36":"components/loading","37":"components/minimal-area1","38":"components/minimal-area2","39":"components/modal-video","40":"components/mouse-cursor","41":"components/navbar","42":"components/navbar-arch","43":"components/navbar-full-menu","44":"components/next-project","45":"components/page-header","46":"components/pages-header","47":"components/portfolio","48":"components/project-description","49":"components/project-details2-header","50":"components/project-gallery","51":"components/project-introduction","52":"components/project-video","53":"components/s-contact-form","54":"components/scroll-to-top","55":"components/services1","56":"components/services2","57":"components/services3","58":"components/services4","59":"components/services5","60":"components/services6","61":"components/showcases-full-screen","62":"components/showcases-grid","63":"components/skills-circle","64":"components/team1","65":"components/team2","66":"components/team3","67":"components/testimonials-archo","68":"components/video","69":"components/video-with-testimonials","70":"components/works-header","71":"components/works-style1","72":"components/works-style2","73":"components/works1","74":"components/works2","75":"components/works3","76":"components/works4","77":"components/works5","78":"components/works6","79":"layouts/arch-dark","80":"layouts/arch-light","81":"layouts/dark","82":"layouts/default","83":"layouts/light","84":"pages/about/about-dark","85":"pages/about/about-light","86":"pages/blog-details/blog-details-dark","87":"pages/blog-details/blog-details-light","88":"pages/blog-grid/blog-grid-dark","89":"pages/blog-grid/blog-grid-light","90":"pages/blog-list/blog-list-dark","91":"pages/blog-list/blog-list-light","92":"pages/blog/blog-dark","93":"pages/blog/blog-light","94":"pages/contact/contact-dark","95":"pages/contact/contact-light","96":"pages/homepage/home1-dark","97":"pages/homepage/home1-light","98":"pages/homepage/home2-dark","99":"pages/homepage/home2-light","100":"pages/homepage/home3-dark","101":"pages/homepage/home3-light","102":"pages/homepage/home4-dark","103":"pages/homepage/home4-light","104":"pages/homepage/home5-dark","105":"pages/homepage/home5-light","106":"pages/homepage/home6-dark","107":"pages/homepage/home6-light","108":"pages/homepage/home7-dark","109":"pages/homepage/home7-light","110":"pages/homepage/home8-dark","111":"pages/homepage/home8-light","112":"pages/index","113":"pages/project-details2/project-details2-dark","114":"pages/project-details2/project-details2-light","115":"pages/showcase/showcase-dark","116":"pages/showcase/showcase-light","117":"pages/showcase2/showcase2-dark","118":"pages/showcase2/showcase2-light","119":"pages/showcase3/showcase3-dark","120":"pages/showcase3/showcase3-light","121":"pages/works/works-dark","122":"pages/works/works-light","123":"pages/works2/works2-dark","124":"pages/works2/works2-light","125":"pages/works3/works3-dark","126":"pages/works3/works3-light"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("tsparticles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-slick-carousel");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
module.exports = __webpack_require__(22);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutIntro", function() { return AboutIntro; });
__webpack_require__.d(components_namespaceObject, "AboutUs1", function() { return AboutUs1; });
__webpack_require__.d(components_namespaceObject, "AboutUs2", function() { return AboutUs2; });
__webpack_require__.d(components_namespaceObject, "AboutUs3", function() { return AboutUs3; });
__webpack_require__.d(components_namespaceObject, "AboutUs4", function() { return AboutUs4; });
__webpack_require__.d(components_namespaceObject, "AboutUs5", function() { return AboutUs5; });
__webpack_require__.d(components_namespaceObject, "AboutUs6", function() { return AboutUs6; });
__webpack_require__.d(components_namespaceObject, "BlogDetails", function() { return BlogDetails; });
__webpack_require__.d(components_namespaceObject, "BlogGrid", function() { return BlogGrid; });
__webpack_require__.d(components_namespaceObject, "BlogStanderd", function() { return BlogStanderd; });
__webpack_require__.d(components_namespaceObject, "BlogListed", function() { return BlogListed; });
__webpack_require__.d(components_namespaceObject, "Blogs1", function() { return Blogs1; });
__webpack_require__.d(components_namespaceObject, "Blogs2", function() { return Blogs2; });
__webpack_require__.d(components_namespaceObject, "Blogs3", function() { return Blogs3; });
__webpack_require__.d(components_namespaceObject, "Blogs4", function() { return Blogs4; });
__webpack_require__.d(components_namespaceObject, "CallToAction", function() { return CallToAction; });
__webpack_require__.d(components_namespaceObject, "CaseStudy", function() { return CaseStudy; });
__webpack_require__.d(components_namespaceObject, "Clients1", function() { return Clients1; });
__webpack_require__.d(components_namespaceObject, "Clients2", function() { return Clients2; });
__webpack_require__.d(components_namespaceObject, "ContactArcho", function() { return ContactArcho; });
__webpack_require__.d(components_namespaceObject, "ContactForm", function() { return ContactForm; });
__webpack_require__.d(components_namespaceObject, "ContactHeader", function() { return ContactHeader; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "FooterArch", function() { return FooterArch; });
__webpack_require__.d(components_namespaceObject, "FreelancreIntro", function() { return FreelancreIntro; });
__webpack_require__.d(components_namespaceObject, "FullTestimonials", function() { return FullTestimonials; });
__webpack_require__.d(components_namespaceObject, "FullScreenCircleSlide", function() { return FullScreenCircleSlide; });
__webpack_require__.d(components_namespaceObject, "FunFacts1", function() { return FunFacts1; });
__webpack_require__.d(components_namespaceObject, "FunFacts2", function() { return FunFacts2; });
__webpack_require__.d(components_namespaceObject, "IntroWithSlider", function() { return IntroWithSlider; });
__webpack_require__.d(components_namespaceObject, "Intro2", function() { return Intro2; });
__webpack_require__.d(components_namespaceObject, "Intro3", function() { return Intro3; });
__webpack_require__.d(components_namespaceObject, "Intro4", function() { return Intro4; });
__webpack_require__.d(components_namespaceObject, "Intro5", function() { return Intro5; });
__webpack_require__.d(components_namespaceObject, "LatestNews", function() { return LatestNews; });
__webpack_require__.d(components_namespaceObject, "Loading", function() { return Loading; });
__webpack_require__.d(components_namespaceObject, "MinimalArea1", function() { return MinimalArea1; });
__webpack_require__.d(components_namespaceObject, "MinimalArea2", function() { return MinimalArea2; });
__webpack_require__.d(components_namespaceObject, "ModalVideo", function() { return ModalVideo; });
__webpack_require__.d(components_namespaceObject, "MouseCursor", function() { return MouseCursor; });
__webpack_require__.d(components_namespaceObject, "Navbar", function() { return Navbar; });
__webpack_require__.d(components_namespaceObject, "NavbarFullMenu", function() { return NavbarFullMenu; });
__webpack_require__.d(components_namespaceObject, "NextProject", function() { return NextProject; });
__webpack_require__.d(components_namespaceObject, "PageHeader", function() { return PageHeader; });
__webpack_require__.d(components_namespaceObject, "PagesHeader", function() { return PagesHeader; });
__webpack_require__.d(components_namespaceObject, "Portfolio", function() { return Portfolio; });
__webpack_require__.d(components_namespaceObject, "ProjectDescription", function() { return ProjectDescription; });
__webpack_require__.d(components_namespaceObject, "ProjectDetails2Header", function() { return ProjectDetails2Header; });
__webpack_require__.d(components_namespaceObject, "ProjectGallery", function() { return ProjectGallery; });
__webpack_require__.d(components_namespaceObject, "ProjectIntroduction", function() { return ProjectIntroduction; });
__webpack_require__.d(components_namespaceObject, "ProjectVideo", function() { return ProjectVideo; });
__webpack_require__.d(components_namespaceObject, "SContactForm", function() { return SContactForm; });
__webpack_require__.d(components_namespaceObject, "ScrollToTop", function() { return ScrollToTop; });
__webpack_require__.d(components_namespaceObject, "Services1", function() { return Services1; });
__webpack_require__.d(components_namespaceObject, "Services2", function() { return Services2; });
__webpack_require__.d(components_namespaceObject, "Services3", function() { return Services3; });
__webpack_require__.d(components_namespaceObject, "Services4", function() { return Services4; });
__webpack_require__.d(components_namespaceObject, "Services5", function() { return Services5; });
__webpack_require__.d(components_namespaceObject, "Services6", function() { return Services6; });
__webpack_require__.d(components_namespaceObject, "ShowcasesFullScreen", function() { return ShowcasesFullScreen; });
__webpack_require__.d(components_namespaceObject, "ShowcasesGrid", function() { return ShowcasesGrid; });
__webpack_require__.d(components_namespaceObject, "SkillsCircle", function() { return SkillsCircle; });
__webpack_require__.d(components_namespaceObject, "Team1", function() { return Team1; });
__webpack_require__.d(components_namespaceObject, "Team2", function() { return Team2; });
__webpack_require__.d(components_namespaceObject, "Team3", function() { return Team3; });
__webpack_require__.d(components_namespaceObject, "TestimonialsArcho", function() { return TestimonialsArcho; });
__webpack_require__.d(components_namespaceObject, "Video", function() { return Video; });
__webpack_require__.d(components_namespaceObject, "VideoWithTestimonials", function() { return VideoWithTestimonials; });
__webpack_require__.d(components_namespaceObject, "WorksHeader", function() { return WorksHeader; });
__webpack_require__.d(components_namespaceObject, "WorksStyle1", function() { return WorksStyle1; });
__webpack_require__.d(components_namespaceObject, "WorksStyle2", function() { return WorksStyle2; });
__webpack_require__.d(components_namespaceObject, "Works1", function() { return Works1; });
__webpack_require__.d(components_namespaceObject, "Works2", function() { return Works2; });
__webpack_require__.d(components_namespaceObject, "Works3", function() { return Works3; });
__webpack_require__.d(components_namespaceObject, "Works4", function() { return Works4; });
__webpack_require__.d(components_namespaceObject, "Works5", function() { return Works5; });
__webpack_require__.d(components_namespaceObject, "Works6", function() { return Works6; });
__webpack_require__.d(components_namespaceObject, "NavbarArch", function() { return NavbarArch; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(7);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(4);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(8);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _19aa065d = () => interopDefault(__webpack_require__.e(/* import() | pages/about/about-dark */ 84).then(__webpack_require__.bind(null, 143)));

const _950b7182 = () => interopDefault(__webpack_require__.e(/* import() | pages/about/about-light */ 85).then(__webpack_require__.bind(null, 144)));

const _b6f5e0ce = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-details/blog-details-dark */ 86).then(__webpack_require__.bind(null, 145)));

const _f3ff34fa = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-details/blog-details-light */ 87).then(__webpack_require__.bind(null, 146)));

const _1bf83855 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-grid/blog-grid-dark */ 88).then(__webpack_require__.bind(null, 147)));

const _061b5772 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-grid/blog-grid-light */ 89).then(__webpack_require__.bind(null, 148)));

const _452a01a5 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-list/blog-list-dark */ 90).then(__webpack_require__.bind(null, 149)));

const _0c0c9612 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-list/blog-list-light */ 91).then(__webpack_require__.bind(null, 150)));

const _78a2228e = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-dark */ 92).then(__webpack_require__.bind(null, 151)));

const _4c126a63 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/blog-light */ 93).then(__webpack_require__.bind(null, 152)));

const _bfc98812 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact/contact-dark */ 94).then(__webpack_require__.bind(null, 153)));

const _05a07636 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact/contact-light */ 95).then(__webpack_require__.bind(null, 154)));

const _60fe561d = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home1-dark */ 96).then(__webpack_require__.bind(null, 155)));

const _58afef7f = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home1-light */ 97).then(__webpack_require__.bind(null, 156)));

const _5547c73c = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home2-dark */ 98).then(__webpack_require__.bind(null, 157)));

const _24d6bb80 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home2-light */ 99).then(__webpack_require__.bind(null, 158)));

const _4991385b = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home3-dark */ 100).then(__webpack_require__.bind(null, 159)));

const _fb0d55fe = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home3-light */ 101).then(__webpack_require__.bind(null, 160)));

const _3ddaa97a = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home4-dark */ 102).then(__webpack_require__.bind(null, 161)));

const _175e07c2 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home4-light */ 103).then(__webpack_require__.bind(null, 162)));

const _32241a99 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home5-dark */ 104).then(__webpack_require__.bind(null, 163)));

const _a77a8afa = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home5-light */ 105).then(__webpack_require__.bind(null, 164)));

const _266d8bb8 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home6-dark */ 106).then(__webpack_require__.bind(null, 165)));

const _41276d44 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home6-light */ 107).then(__webpack_require__.bind(null, 166)));

const _1ab6fcd7 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home7-dark */ 108).then(__webpack_require__.bind(null, 167)));

const _53e7bff6 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home7-light */ 109).then(__webpack_require__.bind(null, 168)));

const _0f006df6 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home8-dark */ 110).then(__webpack_require__.bind(null, 169)));

const _6af0d2c6 = () => interopDefault(__webpack_require__.e(/* import() | pages/homepage/home8-light */ 111).then(__webpack_require__.bind(null, 170)));

const _1732c20e = () => interopDefault(__webpack_require__.e(/* import() | pages/project-details2/project-details2-dark */ 113).then(__webpack_require__.bind(null, 171)));

const _3250c223 = () => interopDefault(__webpack_require__.e(/* import() | pages/project-details2/project-details2-light */ 114).then(__webpack_require__.bind(null, 172)));

const _315abfd9 = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase/showcase-dark */ 115).then(__webpack_require__.bind(null, 173)));

const _d83e857a = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase/showcase-light */ 116).then(__webpack_require__.bind(null, 174)));

const _6d87272d = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase2/showcase2-dark */ 117).then(__webpack_require__.bind(null, 175)));

const _457d7f22 = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase2/showcase2-light */ 118).then(__webpack_require__.bind(null, 176)));

const _49726eab = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase3/showcase3-dark */ 119).then(__webpack_require__.bind(null, 177)));

const _7ebee8b1 = () => interopDefault(__webpack_require__.e(/* import() | pages/showcase3/showcase3-light */ 120).then(__webpack_require__.bind(null, 178)));

const _df649d1a = () => interopDefault(__webpack_require__.e(/* import() | pages/works/works-dark */ 121).then(__webpack_require__.bind(null, 179)));

const _134bfee9 = () => interopDefault(__webpack_require__.e(/* import() | pages/works/works-light */ 122).then(__webpack_require__.bind(null, 180)));

const _3c325339 = () => interopDefault(__webpack_require__.e(/* import() | pages/works2/works2-dark */ 123).then(__webpack_require__.bind(null, 181)));

const _3808d43a = () => interopDefault(__webpack_require__.e(/* import() | pages/works2/works2-light */ 124).then(__webpack_require__.bind(null, 182)));

const _fdb4bb4e = () => interopDefault(__webpack_require__.e(/* import() | pages/works3/works3-dark */ 125).then(__webpack_require__.bind(null, 183)));

const _3d722ac3 = () => interopDefault(__webpack_require__.e(/* import() | pages/works3/works3-light */ 126).then(__webpack_require__.bind(null, 184)));

const _78e7423d = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 112).then(__webpack_require__.bind(null, 185)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about/about-dark",
    component: _19aa065d,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _950b7182,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _b6f5e0ce,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _f3ff34fa,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _1bf83855,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _061b5772,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _452a01a5,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _0c0c9612,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _78a2228e,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _4c126a63,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _bfc98812,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _05a07636,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _60fe561d,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _58afef7f,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _5547c73c,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _24d6bb80,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _4991385b,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _fb0d55fe,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _3ddaa97a,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _175e07c2,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _32241a99,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _a77a8afa,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _266d8bb8,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _41276d44,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _1ab6fcd7,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _53e7bff6,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _0f006df6,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _6af0d2c6,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _1732c20e,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _3250c223,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _315abfd9,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _d83e857a,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _6d87272d,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _457d7f22,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _49726eab,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _7ebee8b1,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _df649d1a,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _134bfee9,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _3c325339,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _3808d43a,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _fdb4bb4e,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _3d722ac3,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _78e7423d,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(17)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6c341036"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(18)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "b470502c"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js






const _37768f57 = () => __webpack_require__.e(/* import() | layouts/arch-dark */ 79).then(__webpack_require__.bind(null, 186)).then(m => sanitizeComponent(m.default || m));

const _9060dd56 = () => __webpack_require__.e(/* import() | layouts/arch-light */ 80).then(__webpack_require__.bind(null, 187)).then(m => sanitizeComponent(m.default || m));

const _2d22906c = () => __webpack_require__.e(/* import() | layouts/dark */ 81).then(__webpack_require__.bind(null, 188)).then(m => sanitizeComponent(m.default || m));

const _77a3b2e0 = () => __webpack_require__.e(/* import() | layouts/light */ 83).then(__webpack_require__.bind(null, 189)).then(m => sanitizeComponent(m.default || m));

const _6f6c098b = () => __webpack_require__.e(/* import() | layouts/default */ 82).then(__webpack_require__.bind(null, 190)).then(m => sanitizeComponent(m.default || m));

let resolvedLayouts = {};
const layouts = {
  "_arch-dark": _37768f57,
  "_arch-light": _9060dd56,
  "_dark": _2d22906c,
  "_light": _77a3b2e0,
  "_default": _6f6c098b
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    async errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        await this.loadLayout(errorLayout);
        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;

      let _layout = '_' + layout;

      this.layout = resolvedLayouts[_layout];
      return this.layout;
    },

    loadLayout(layout) {
      const undef = !layout;
      const nonexistent = !(layouts['_' + layout] || resolvedLayouts['_' + layout]);

      let _layout = '_' + (undef || nonexistent ? 'default' : layout);

      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout]);
      }

      return layouts[_layout]().then(Component => {
        resolvedLayouts[_layout] = Component;
        delete layouts[_layout];
        return resolvedLayouts[_layout];
      }).catch(e => {
        if (this.$nuxt) {
          return this.$nuxt.error({
            statusCode: 500,
            message: e.message
          });
        }
      });
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutIntro = () => __webpack_require__.e(/* import() | components/about-intro */ 1).then(__webpack_require__.bind(null, 83)).then(c => wrapFunctional(c.default || c));
const AboutUs1 = () => __webpack_require__.e(/* import() | components/about-us1 */ 2).then(__webpack_require__.bind(null, 91)).then(c => wrapFunctional(c.default || c));
const AboutUs2 = () => __webpack_require__.e(/* import() | components/about-us2 */ 3).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c));
const AboutUs3 = () => __webpack_require__.e(/* import() | components/about-us3 */ 4).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const AboutUs4 = () => __webpack_require__.e(/* import() | components/about-us4 */ 5).then(__webpack_require__.bind(null, 109)).then(c => wrapFunctional(c.default || c));
const AboutUs5 = () => __webpack_require__.e(/* import() | components/about-us5 */ 6).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const AboutUs6 = () => __webpack_require__.e(/* import() | components/about-us6 */ 7).then(__webpack_require__.bind(null, 116)).then(c => wrapFunctional(c.default || c));
const BlogDetails = () => __webpack_require__.e(/* import() | components/blog-details */ 8).then(__webpack_require__.bind(null, 85)).then(c => wrapFunctional(c.default || c));
const BlogGrid = () => __webpack_require__.e(/* import() | components/blog-grid */ 9).then(__webpack_require__.bind(null, 86)).then(c => wrapFunctional(c.default || c));
const BlogStanderd = () => __webpack_require__.e(/* import() | components/blog-standerd */ 11).then(__webpack_require__.bind(null, 88)).then(c => wrapFunctional(c.default || c));
const BlogListed = () => __webpack_require__.e(/* import() | components/blog-listed */ 10).then(__webpack_require__.bind(null, 87)).then(c => wrapFunctional(c.default || c));
const Blogs1 = () => __webpack_require__.e(/* import() | components/blogs1 */ 12).then(__webpack_require__.bind(null, 93)).then(c => wrapFunctional(c.default || c));
const Blogs2 = () => __webpack_require__.e(/* import() | components/blogs2 */ 13).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const Blogs3 = () => __webpack_require__.e(/* import() | components/blogs3 */ 14).then(__webpack_require__.bind(null, 101)).then(c => wrapFunctional(c.default || c));
const Blogs4 = () => __webpack_require__.e(/* import() | components/blogs4 */ 15).then(__webpack_require__.bind(null, 62)).then(c => wrapFunctional(c.default || c));
const CallToAction = () => __webpack_require__.e(/* import() | components/call-to-action */ 16).then(__webpack_require__.bind(null, 35)).then(c => wrapFunctional(c.default || c));
const CaseStudy = () => __webpack_require__.e(/* import() | components/case-study */ 17).then(__webpack_require__.bind(null, 119)).then(c => wrapFunctional(c.default || c));
const Clients1 = () => __webpack_require__.e(/* import() | components/clients1 */ 18).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const Clients2 = () => __webpack_require__.e(/* import() | components/clients2 */ 19).then(__webpack_require__.bind(null, 103)).then(c => wrapFunctional(c.default || c));
const ContactArcho = () => __webpack_require__.e(/* import() | components/contact-archo */ 20).then(__webpack_require__.bind(null, 123)).then(c => wrapFunctional(c.default || c));
const ContactForm = () => __webpack_require__.e(/* import() | components/contact-form */ 21).then(__webpack_require__.bind(null, 90)).then(c => wrapFunctional(c.default || c));
const ContactHeader = () => __webpack_require__.e(/* import() | components/contact-header */ 22).then(__webpack_require__.bind(null, 89)).then(c => wrapFunctional(c.default || c));
const Footer = () => __webpack_require__.e(/* import() | components/footer */ 23).then(__webpack_require__.bind(null, 24)).then(c => wrapFunctional(c.default || c));
const FooterArch = () => __webpack_require__.e(/* import() | components/footer-arch */ 24).then(__webpack_require__.bind(null, 124)).then(c => wrapFunctional(c.default || c));
const FreelancreIntro = () => __webpack_require__.e(/* import() | components/freelancre-intro */ 25).then(__webpack_require__.bind(null, 111)).then(c => wrapFunctional(c.default || c));
const FullTestimonials = () => __webpack_require__.e(/* import() | components/full-testimonials */ 27).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c));
const FullScreenCircleSlide = () => __webpack_require__.e(/* import() | components/full-screen-circle-slide */ 26).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c));
const FunFacts1 = () => __webpack_require__.e(/* import() | components/fun-facts1 */ 28).then(__webpack_require__.bind(null, 60)).then(c => wrapFunctional(c.default || c));
const FunFacts2 = () => __webpack_require__.e(/* import() | components/fun-facts2 */ 29).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const IntroWithSlider = () => __webpack_require__.e(/* import() | components/intro-with-slider */ 30).then(__webpack_require__.bind(null, 48)).then(c => wrapFunctional(c.default || c));
const Intro2 = () => __webpack_require__.e(/* import() | components/intro2 */ 31).then(__webpack_require__.bind(null, 94)).then(c => wrapFunctional(c.default || c));
const Intro3 = () => __webpack_require__.e(/* import() | components/intro3 */ 32).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const Intro4 = () => __webpack_require__.e(/* import() | components/intro4 */ 33).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c));
const Intro5 = () => __webpack_require__.e(/* import() | components/intro5 */ 34).then(__webpack_require__.bind(null, 115)).then(c => wrapFunctional(c.default || c));
const LatestNews = () => __webpack_require__.e(/* import() | components/latest-news */ 35).then(__webpack_require__.bind(null, 122)).then(c => wrapFunctional(c.default || c));
const Loading = () => __webpack_require__.e(/* import() | components/loading */ 36).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const MinimalArea1 = () => __webpack_require__.e(/* import() | components/minimal-area1 */ 37).then(__webpack_require__.bind(null, 84)).then(c => wrapFunctional(c.default || c));
const MinimalArea2 = () => __webpack_require__.e(/* import() | components/minimal-area2 */ 38).then(__webpack_require__.bind(null, 107)).then(c => wrapFunctional(c.default || c));
const ModalVideo = () => __webpack_require__.e(/* import() | components/modal-video */ 39).then(__webpack_require__.bind(null, 31)).then(c => wrapFunctional(c.default || c));
const MouseCursor = () => __webpack_require__.e(/* import() | components/mouse-cursor */ 40).then(__webpack_require__.bind(null, 55)).then(c => wrapFunctional(c.default || c));
const Navbar = () => __webpack_require__.e(/* import() | components/navbar */ 41).then(__webpack_require__.bind(null, 26)).then(c => wrapFunctional(c.default || c));
const NavbarFullMenu = () => __webpack_require__.e(/* import() | components/navbar-full-menu */ 43).then(__webpack_require__.bind(null, 43)).then(c => wrapFunctional(c.default || c));
const NextProject = () => __webpack_require__.e(/* import() | components/next-project */ 44).then(__webpack_require__.bind(null, 130)).then(c => wrapFunctional(c.default || c));
const PageHeader = () => __webpack_require__.e(/* import() | components/page-header */ 45).then(__webpack_require__.bind(null, 40)).then(c => wrapFunctional(c.default || c));
const PagesHeader = () => __webpack_require__.e(/* import() | components/pages-header */ 46).then(__webpack_require__.bind(null, 82)).then(c => wrapFunctional(c.default || c));
const Portfolio = () => __webpack_require__.e(/* import() | components/portfolio */ 47).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c));
const ProjectDescription = () => __webpack_require__.e(/* import() | components/project-description */ 48).then(__webpack_require__.bind(null, 128)).then(c => wrapFunctional(c.default || c));
const ProjectDetails2Header = () => __webpack_require__.e(/* import() | components/project-details2-header */ 49).then(__webpack_require__.bind(null, 125)).then(c => wrapFunctional(c.default || c));
const ProjectGallery = () => __webpack_require__.e(/* import() | components/project-gallery */ 50).then(__webpack_require__.bind(null, 127)).then(c => wrapFunctional(c.default || c));
const ProjectIntroduction = () => __webpack_require__.e(/* import() | components/project-introduction */ 51).then(__webpack_require__.bind(null, 126)).then(c => wrapFunctional(c.default || c));
const ProjectVideo = () => __webpack_require__.e(/* import() | components/project-video */ 52).then(__webpack_require__.bind(null, 129)).then(c => wrapFunctional(c.default || c));
const SContactForm = () => __webpack_require__.e(/* import() | components/s-contact-form */ 53).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c));
const ScrollToTop = () => __webpack_require__.e(/* import() | components/scroll-to-top */ 54).then(__webpack_require__.bind(null, 56)).then(c => wrapFunctional(c.default || c));
const Services1 = () => __webpack_require__.e(/* import() | components/services1 */ 55).then(__webpack_require__.bind(null, 39)).then(c => wrapFunctional(c.default || c));
const Services2 = () => __webpack_require__.e(/* import() | components/services2 */ 56).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const Services3 = () => __webpack_require__.e(/* import() | components/services3 */ 57).then(__webpack_require__.bind(null, 80)).then(c => wrapFunctional(c.default || c));
const Services4 = () => __webpack_require__.e(/* import() | components/services4 */ 58).then(__webpack_require__.bind(null, 108)).then(c => wrapFunctional(c.default || c));
const Services5 = () => __webpack_require__.e(/* import() | components/services5 */ 59).then(__webpack_require__.bind(null, 112)).then(c => wrapFunctional(c.default || c));
const Services6 = () => __webpack_require__.e(/* import() | components/services6 */ 60).then(__webpack_require__.bind(null, 117)).then(c => wrapFunctional(c.default || c));
const ShowcasesFullScreen = () => __webpack_require__.e(/* import() | components/showcases-full-screen */ 61).then(__webpack_require__.bind(null, 131)).then(c => wrapFunctional(c.default || c));
const ShowcasesGrid = () => __webpack_require__.e(/* import() | components/showcases-grid */ 62).then(__webpack_require__.bind(null, 132)).then(c => wrapFunctional(c.default || c));
const SkillsCircle = () => __webpack_require__.e(/* import() | components/skills-circle */ 63).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const Team1 = () => __webpack_require__.e(/* import() | components/team1 */ 64).then(__webpack_require__.bind(null, 38)).then(c => wrapFunctional(c.default || c));
const Team2 = () => __webpack_require__.e(/* import() | components/team2 */ 65).then(__webpack_require__.bind(null, 96)).then(c => wrapFunctional(c.default || c));
const Team3 = () => __webpack_require__.e(/* import() | components/team3 */ 66).then(__webpack_require__.bind(null, 120)).then(c => wrapFunctional(c.default || c));
const TestimonialsArcho = () => __webpack_require__.e(/* import() | components/testimonials-archo */ 67).then(__webpack_require__.bind(null, 121)).then(c => wrapFunctional(c.default || c));
const Video = () => __webpack_require__.e(/* import() | components/video */ 68).then(__webpack_require__.bind(null, 95)).then(c => wrapFunctional(c.default || c));
const VideoWithTestimonials = () => __webpack_require__.e(/* import() | components/video-with-testimonials */ 69).then(__webpack_require__.bind(null, 47)).then(c => wrapFunctional(c.default || c));
const WorksHeader = () => __webpack_require__.e(/* import() | components/works-header */ 70).then(__webpack_require__.bind(null, 50)).then(c => wrapFunctional(c.default || c));
const WorksStyle1 = () => __webpack_require__.e(/* import() | components/works-style1 */ 71).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c));
const WorksStyle2 = () => __webpack_require__.e(/* import() | components/works-style2 */ 72).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c));
const Works1 = () => __webpack_require__.e(/* import() | components/works1 */ 73).then(__webpack_require__.bind(null, 92)).then(c => wrapFunctional(c.default || c));
const Works2 = () => __webpack_require__.e(/* import() | components/works2 */ 74).then(__webpack_require__.bind(null, 99)).then(c => wrapFunctional(c.default || c));
const Works3 = () => __webpack_require__.e(/* import() | components/works3 */ 75).then(__webpack_require__.bind(null, 106)).then(c => wrapFunctional(c.default || c));
const Works4 = () => __webpack_require__.e(/* import() | components/works4 */ 76).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c));
const Works5 = () => __webpack_require__.e(/* import() | components/works5 */ 77).then(__webpack_require__.bind(null, 113)).then(c => wrapFunctional(c.default || c));
const Works6 = () => __webpack_require__.e(/* import() | components/works6 */ 78).then(__webpack_require__.bind(null, 118)).then(c => wrapFunctional(c.default || c));
const NavbarArch = () => __webpack_require__.e(/* import() | components/navbar-arch */ 42).then(__webpack_require__.bind(null, 114)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(6);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(2);

// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/particles.vue/dist/particles.vue.js



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let particles_vue_Particles = class Particles extends external_vue_default.a {
  mounted() {
    this.$nextTick(() => {
      var _a;

      if (!this.id) {
        throw new Error("Prop 'id' is required!");
      }

      if (this.particlesInit) {
        this.particlesInit(external_tsparticles_["tsParticles"]);
      }

      const cb = container => {
        this.container = container;

        if (this.container && this.particlesLoaded) {
          this.particlesLoaded(this.container);
        }
      };

      if (this.url) {
        external_tsparticles_["tsParticles"].loadJSON(this.id, this.url).then(cb);
      } else {
        external_tsparticles_["tsParticles"].load(this.id, (_a = this.options) !== null && _a !== void 0 ? _a : {}).then(cb);
      }
    });
  }

  beforeDestroy() {
    var _a;

    (_a = this.container) === null || _a === void 0 ? void 0 : _a.destroy();
  }

};

__decorate([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], particles_vue_Particles.prototype, "id", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "options", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "url", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "particlesLoaded", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "particlesInit", void 0);

particles_vue_Particles = __decorate([external_vue_property_decorator_["Component"]], particles_vue_Particles);
var script = particles_vue_Particles;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  const options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  let hook;

  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}
/* script */


const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    attrs: {
      id: _vm.id
    }
  });
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

const VueParticles = {
  install: (vue, options) => {
    vue.component('Particles', __vue_component__);
  }
};

// CONCATENATED MODULE: ./plugins/particles.js


external_vue_default.a.use(VueParticles);
// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(14);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(19);

// CONCATENATED MODULE: ./plugins/vueAwesomeSwiper.js



external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(9);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.css
var vue_slick_carousel = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css
var vue_slick_carousel_theme = __webpack_require__(21);

// CONCATENATED MODULE: ./plugins/vueSlickCarousel.js




external_vue_default.a.use(external_vue_slick_carousel_default.a);
external_vue_default.a.component("VueSlickCarousel", external_vue_slick_carousel_default.a);
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./vue-scrollto.js (mode: 'client')

 // Source: ../plugins/particles.js (mode: 'all')

 // Source: ../plugins/vueAwesomeSwiper.js (mode: 'all')

 // Source: ../plugins/vueSlickCarousel.js (mode: 'all')

 // Source: ../plugins/vueEllipseProgress.js (mode: 'client')

 // Source: ../plugins/vueTyper.js (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Vie ",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "keywords",
        "name": "keywords",
        "content": "Nuxtjs Vue Template vie onepage themeforest"
      }, {
        "hid": "description",
        "name": "description",
        "content": "vie - Onepage Multi-Purpose Vue Nuxtjs Template"
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
      }],
      "script": [{
        "src": "\u002Fjs\u002Fwow.min.js"
      }, {
        "src": "\u002Fjs\u002Fisotope.pkgd.min.js"
      }, {
        "src": "\u002Fjs\u002Fpace.min.js"
      }, {
        "src": "\u002Fjs\u002Fsplitting.min.js"
      }, {
        "src": "\u002Fjs\u002FsimpleParallax.min.js"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/particles.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/particles.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vueAwesomeSwiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vueAwesomeSwiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vueSlickCarousel.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vueSlickCarousel.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map