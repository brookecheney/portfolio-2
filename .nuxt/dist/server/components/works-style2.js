exports.ids = [72];
exports.modules = {

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
//# sourceMappingURL=works-style2.js.map