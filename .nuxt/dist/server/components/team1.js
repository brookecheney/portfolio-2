exports.ids = [64];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=team1.js.map