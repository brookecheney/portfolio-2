exports.ids = [62];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcases-grid/index.vue?vue&type=template&id=5c528eb1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{ref:_vm.sliderRef,staticClass:"slider showcase-grid"},[_vm._ssrNode("<div id=\"content-carousel-container-unq-1\" data-v-5c528eb1>","</div>",[_c('swiper',{ref:"mySwiper",attrs:{"options":_vm.swiperOptions}},_vm._l((_vm.fullScreenData),function(slide){return _c('swiper-slide',{key:slide.id,staticClass:"swiper-slide"},[_c('div',{staticClass:"nbo-link"},[_c('NuxtLink',{attrs:{"to":"/project-details2/project-details2-dark"}},[_c('div',{staticClass:"bg-img",style:(("background-image: url(" + (slide.image) + ")")),attrs:{"data-tooltip-tit":slide.title.first + ' ' + slide.title.second,"data-tooltip-sub":slide.sub}})])],1)])}),1),_vm._ssrNode(" <div class=\"txt-botm\" data-v-5c528eb1><div class=\"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer\" data-v-5c528eb1><div data-v-5c528eb1><span data-v-5c528eb1>Next Slide</span></div> <div data-v-5c528eb1><i class=\"fas fa-chevron-right\" data-v-5c528eb1></i></div></div> <div class=\"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer\" data-v-5c528eb1><div data-v-5c528eb1><i class=\"fas fa-chevron-left\" data-v-5c528eb1></i></div> <div data-v-5c528eb1><span data-v-5c528eb1>Prev Slide</span></div></div> <div class=\"swiper-pagination dots\" data-v-5c528eb1></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Showcases-grid/index.vue?vue&type=template&id=5c528eb1&scoped=true&

// EXTERNAL MODULE: ./data/fullScreen.json
var fullScreen = __webpack_require__(46);

// EXTERNAL MODULE: ./common/removeSlashpagination.js
var removeSlashpagination = __webpack_require__(27);

// EXTERNAL MODULE: ./common/tooltipEffect.js + 1 modules
var tooltipEffect = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Showcases-grid/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Showcases_gridvue_type_script_lang_js_ = ({
  props: ["sliderRef"],

  data() {
    return {
      fullScreenData: fullScreen,
      swiperOptions: {
        slidesPerView: 4,
        speed: 1000,
        mousewheel: true,
        autoplay: true,
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        },
        navigation: {
          prevEl: ".txt-botm .swiper-button-prev",
          nextEl: ".txt-botm .swiper-button-next"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }

  },

  mounted() {
    Object(tooltipEffect["a" /* default */])();
    Object(removeSlashpagination["a" /* default */])();
  }

});
// CONCATENATED MODULE: ./components/Showcases-grid/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Showcases_gridvue_type_script_lang_js_ = (Showcases_gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Showcases-grid/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Showcases_gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5c528eb1",
  "0cd65474"
  
)

/* harmony default export */ var Showcases_grid = __webpack_exports__["default"] = (component.exports);

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

/***/ 46:
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":1,\"title\":{\"first\":\"Brooklyne's\",\"second\":\"Bows\"},\"image\":\"/img/portfolio/full/1.png\",\"sub\":\"Design\"},{\"id\":2,\"title\":{\"first\":\"Fisherman\",\"second\":\"Portrait\"},\"image\":\"/img/portfolio/full/2.jpg\",\"sub\":\"Design\"},{\"id\":3,\"title\":{\"first\":\"Tribos\",\"second\":\"Urbanas\"},\"image\":\"/img/portfolio/full/3.jpg\",\"sub\":\"Design\"},{\"id\":4,\"title\":{\"first\":\"Monsoon\",\"second\":\"in the city\"},\"image\":\"/img/portfolio/full/4.jpg\",\"sub\":\"Design\"}]");

/***/ })

};;
//# sourceMappingURL=showcases-grid.js.map