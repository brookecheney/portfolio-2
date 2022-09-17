import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19aa065d = () => interopDefault(import('../pages/about/about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _950b7182 = () => interopDefault(import('../pages/about/about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _b6f5e0ce = () => interopDefault(import('../pages/blog-details/blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _f3ff34fa = () => interopDefault(import('../pages/blog-details/blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _1bf83855 = () => interopDefault(import('../pages/blog-grid/blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _061b5772 = () => interopDefault(import('../pages/blog-grid/blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _452a01a5 = () => interopDefault(import('../pages/blog-list/blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _0c0c9612 = () => interopDefault(import('../pages/blog-list/blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _78a2228e = () => interopDefault(import('../pages/blog/blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _4c126a63 = () => interopDefault(import('../pages/blog/blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _bfc98812 = () => interopDefault(import('../pages/contact/contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _05a07636 = () => interopDefault(import('../pages/contact/contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _60fe561d = () => interopDefault(import('../pages/homepage/home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _58afef7f = () => interopDefault(import('../pages/homepage/home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _5547c73c = () => interopDefault(import('../pages/homepage/home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _24d6bb80 = () => interopDefault(import('../pages/homepage/home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _4991385b = () => interopDefault(import('../pages/homepage/home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _fb0d55fe = () => interopDefault(import('../pages/homepage/home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _3ddaa97a = () => interopDefault(import('../pages/homepage/home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _175e07c2 = () => interopDefault(import('../pages/homepage/home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _32241a99 = () => interopDefault(import('../pages/homepage/home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _a77a8afa = () => interopDefault(import('../pages/homepage/home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _266d8bb8 = () => interopDefault(import('../pages/homepage/home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _41276d44 = () => interopDefault(import('../pages/homepage/home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _1ab6fcd7 = () => interopDefault(import('../pages/homepage/home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _53e7bff6 = () => interopDefault(import('../pages/homepage/home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _0f006df6 = () => interopDefault(import('../pages/homepage/home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _6af0d2c6 = () => interopDefault(import('../pages/homepage/home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _1732c20e = () => interopDefault(import('../pages/project-details2/project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _3250c223 = () => interopDefault(import('../pages/project-details2/project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _315abfd9 = () => interopDefault(import('../pages/showcase/showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _d83e857a = () => interopDefault(import('../pages/showcase/showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _6d87272d = () => interopDefault(import('../pages/showcase2/showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _457d7f22 = () => interopDefault(import('../pages/showcase2/showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _49726eab = () => interopDefault(import('../pages/showcase3/showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _7ebee8b1 = () => interopDefault(import('../pages/showcase3/showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _df649d1a = () => interopDefault(import('../pages/works/works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _134bfee9 = () => interopDefault(import('../pages/works/works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _3c325339 = () => interopDefault(import('../pages/works2/works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _3808d43a = () => interopDefault(import('../pages/works2/works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _fdb4bb4e = () => interopDefault(import('../pages/works3/works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _3d722ac3 = () => interopDefault(import('../pages/works3/works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _78e7423d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

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
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
