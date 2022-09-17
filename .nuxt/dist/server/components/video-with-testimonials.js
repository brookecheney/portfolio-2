exports.ids = [69,39];
exports.modules = {

/***/ 28:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fb8a83f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=template&id=fb8a83f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isOpen)?_c('div',[_vm._ssrNode("<div tabIndex=\"-1\" role=\"dialog\""+(_vm._ssrAttr("aria-label",_vm.aria.openMessage))+(_vm._ssrClass(null,_vm.classNames.modalVideo))+" data-v-fb8a83f8><div"+(_vm._ssrClass(null,_vm.classNames.modalVideoBody))+" data-v-fb8a83f8><button"+(_vm._ssrAttr("aria-label",_vm.aria.dismissBtnMessage))+(_vm._ssrClass(null,_vm.classNames.modalVideoCloseBtn))+" data-v-fb8a83f8></button> <div"+(_vm._ssrClass(null,_vm.classNames.modalVideoInner))+" data-v-fb8a83f8><div"+(_vm._ssrClass(null,_vm.classNames.modalVideoIframeWrap))+(_vm._ssrStyle(null,{ 'padding-bottom': _vm.paddingBottom }, null))+" data-v-fb8a83f8><iframe"+(_vm._ssrAttr("src",_vm.fullVideoUrl))+" frameBorder=\"0\""+(_vm._ssrAttr("allowFullScreen",_vm.allowFullScreen))+" tabIndex=\"-1\" data-v-fb8a83f8></iframe></div></div></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=template&id=fb8a83f8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modal-video/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Modal_videovue_type_script_lang_js_ = ({
  props: {
    videoId: String,
    channel: String,
    isOpen: Boolean,
    youtube: {
      type: Object,
      default: function () {
        return {
          autoplay: 1,
          cc_load_policy: 1,
          color: null,
          controls: 1,
          disablekb: 0,
          enablejsapi: 0,
          end: null,
          fs: 1,
          h1: null,
          iv_load_policy: 1,
          list: null,
          listType: null,
          loop: 0,
          modestbranding: null,
          origin: null,
          playlist: null,
          playsinline: null,
          rel: 0,
          showinfo: 1,
          start: 0,
          wmode: "transparent",
          theme: "dark"
        };
      }
    },
    ratio: {
      type: String,
      default: "16:9"
    },
    vimeo: {
      type: Object,
      default: function () {
        return {
          api: false,
          autopause: true,
          autoplay: true,
          byline: true,
          callback: null,
          color: null,
          height: null,
          loop: false,
          maxheight: null,
          maxwidth: null,
          player_id: null,
          portrait: true,
          title: true,
          width: null,
          xhtml: false
        };
      }
    },
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    animationSpeed: {
      type: Number,
      default: 300
    },
    classNames: {
      type: Object,
      default: function () {
        return {
          modalVideoEffect: "modal-video-effect",
          modalVideo: "modal-video",
          modalVideoClose: "modal-video-close",
          modalVideoBody: "modal-video-body",
          modalVideoInner: "modal-video-inner",
          modalVideoIframeWrap: "modal-video-movie-wrap",
          modalVideoCloseBtn: "modal-video-close-btn"
        };
      }
    },
    aria: {
      type: Object,
      default: function () {
        return {
          openMessage: "Modal video opened",
          dismissBtnMessage: "Close the modal video"
        };
      }
    }
  },
  methods: {
    getQueryString(obj) {
      let url = "";

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + "=" + obj[key] + "&";
          }
        }
      }

      return url.substr(0, url.length - 1);
    },

    getYoutubeUrl(youtube, videoId) {
      const query = this.getQueryString(youtube);
      return "//www.youtube.com/embed/" + videoId + "?" + query;
    },

    getVimeoUrl(vimeo, videoId) {
      const query = this.getQueryString(vimeo);
      return "//player.vimeo.com/video/" + videoId + "?" + query;
    },

    getPadding(ratio) {
      const arr = ratio.split(":");
      const width = Number(arr[0]);
      const height = Number(arr[1]);
      const padding = height * 100 / width;
      return padding + "%";
    }

  },
  computed: {
    fullVideoUrl() {
      if (this.channel === "youtube") {
        return this.getYoutubeUrl(this.youtube, this.videoId);
      } else if (this.channel === "vimeo") {
        return this.getVimeoUrl(this.vimeo, this.videoId);
      }
    },

    paddingBottom() {
      return this.getPadding(this.ratio);
    }

  },
  watch: {
    isOpen: {
      handler: function (val) {
        this.$nextTick(() => {
          if (typeof this.$refs.closeBtn !== "undefined") {
            this.$refs.closeBtn.focus();
          }
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./components/Modal-video/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Modal_videovue_type_script_lang_js_ = (Modal_videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Modal-video/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Modal_videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fb8a83f8",
  "831c0250"
  
)

/* harmony default export */ var Modal_video = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=template&id=cf97af86&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"block-sec"},[_vm._ssrNode("<div data-overlay-dark=\"5\" class=\"background bg-img pt-100 pb-0 parallaxie\" style=\"background-image: url(/img/bg-vid.jpg)\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"col-lg-6\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"vid-area\" data-v-cf97af86>","</div>",[_vm._ssrNode("<span class=\"text\" data-v-cf97af86>Watch Video</span> "),_c('ModalVideo',{attrs:{"channel":_vm.videoChannel,"videoId":_vm.videoId,"isOpen":_vm.videoIsOpen},on:{"update:isOpen":function($event){_vm.videoIsOpen=$event},"update:is-open":function($event){_vm.videoIsOpen=$event}}}),_vm._ssrNode(" <div class=\"vid-icon cursor-pointer\" data-v-cf97af86><a class=\"vid\" data-v-cf97af86><div class=\"vid-butn\" data-v-cf97af86><span class=\"icon\" data-v-cf97af86><i class=\"fas fa-play\" data-v-cf97af86></i></span></div></a></div>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-5 offset-lg-1\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"testim-box\" data-v-cf97af86>","</div>",[_vm._ssrNode("<div class=\"head-box\" data-v-cf97af86><h6 data-wow-delay=\".5s\" class=\"wow fadeIn\" data-v-cf97af86>Our Clients</h6> <h4 data-wow-delay=\".5s\" class=\"wow fadeInLeft\" data-v-cf97af86>\n                What Client's Say?\n              </h4></div> "),_c('VueSlickCarousel',_vm._b({staticClass:"slic-item wow fadeInUp",attrs:{"data-wow-delay":".5s"}},'VueSlickCarousel',_vm.settings,false),[_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/1.jpg","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/2.jpg","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Co-founder, Colabrio\n                      ")])])])])]),_vm._v(" "),_c('div',{staticClass:"item"},[_c('p',[_vm._v("\n                  Nulla metus metus ullamcorper vel tincidunt sed euismod nibh\n                  volutpat velit class aptent taciti sociosqu ad litora.\n                ")]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('div',{staticClass:"img"},[_c('div',{staticClass:"img-box"},[_c('img',{attrs:{"src":"/img/clients/3.jpg","alt":""}})])]),_vm._v(" "),_c('div',{staticClass:"cont"},[_c('div',{staticClass:"author"},[_c('h6',{staticClass:"author-name"},[_vm._v("Alex Regelman")]),_vm._v(" "),_c('span',{staticClass:"author-details"},[_vm._v("\n                        Co-founder, Colabrio\n                      ")])])])])])])],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=template&id=cf97af86&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Video_with_testimonialsvue_type_script_lang_js_ = ({
  data() {
    return {
      videoIsOpen: false,
      settings: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  },

  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }

  },
  computed: {
    videoChannel: function () {
      return "vimeo";
    },
    videoId: function () {
      return "127203262";
    }
  }
});
// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Video_with_testimonialsvue_type_script_lang_js_ = (Video_with_testimonialsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Video-with-testimonials/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Video_with_testimonialsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cf97af86",
  "3a81a4f4"
  
)

/* harmony default export */ var Video_with_testimonials = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ModalVideo: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=video-with-testimonials.js.map