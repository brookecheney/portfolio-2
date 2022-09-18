<template>
  <div>
    <Navbar ref="navbar" theme="light" />
    <PagesHeader imageLink="/img/slid/about.jpg">
      <template v-slot:title>
        Results-driven, dynamic, motivated and multilingual front-end software/web developer!
      </template>
    </PagesHeader>
    <AboutIntro />
    <Services1 oStyle="4item" />
    <VideoWithTestimonials />
    <SkillsCircle from="aboutPage" />
    <Team1 />
    <MinimalArea1 />
    <Clients1 theme="light" />
    <CallToAction />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: "light",
  head() {
    return {
      titleTemplate: '%s - About Light'
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