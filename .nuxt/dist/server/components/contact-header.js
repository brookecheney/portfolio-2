exports.ids = [22];
exports.modules = {

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
  "0ce32b5f"
  
)

/* harmony default export */ var Contact_header = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-header.js.map