<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <ContactHeader />
    <div class="main-content">
      <ContactForm theme="light" />
      <!-- <Footer hideBGCOLOR /> -->
    </div>
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: 'Brooklyne Cheney'
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
  },
};
</script>

<style scoped>
</style>