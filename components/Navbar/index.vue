<template>
  <nav :ref="nr" class="navbar navbar-expand-lg change" :class="theme === 'light' ? 'light' : ''">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <img ref="lr" src="/img/logo-dark.png" alt="logo" />
        <!-- <img ref="lr" src="/img/logo-dark.png" v-if="theme === 'light'" alt="logo" />
        <img ref="lr" src="/img/logo-light.png" v-else-if="theme === 'themeD'" alt="logo" />
        <img ref="lr" src="/img/logo-light.png" alt="logo" /> -->
      </NuxtLink>

      <button class="navbar-toggler" type="button" @click="handleMobileDropdown" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <!-- <li class="nav-item dropdown" @click="handleDropdown">
            <span class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="false">
              Home
            </span>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/homepage/home1-dark">
                Main Home
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home2-dark">
                Creative Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home5-dark">
                Digital Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home4-dark">
                Business One Page
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home3-dark">
                Corporate Business
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home6-dark">
                Modern Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home7-dark">
                Freelancer
              </NuxtLink>
              <NuxtLink class="dropdown-item" to="/homepage/home8-dark">
                Architecture
              </NuxtLink>
            </div>
          </li> -->
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/"> Home </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"  to="/about/about-light"> About </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact/contact-light">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import getSiblings from "../../common/getSiblings";
export default {
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
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
    handleMobileDropdown: (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    },
  },
};
</script>

<style scoped>

</style>