import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a99921ba = () => interopDefault(import('../pages/about/about-dark.vue' /* webpackChunkName: "pages/about/about-dark" */))
const _551df739 = () => interopDefault(import('../pages/about/about-light.vue' /* webpackChunkName: "pages/about/about-light" */))
const _15a6b442 = () => interopDefault(import('../pages/blog-details/blog-details-dark.vue' /* webpackChunkName: "pages/blog-details/blog-details-dark" */))
const _4a4b97fd = () => interopDefault(import('../pages/blog-details/blog-details-light.vue' /* webpackChunkName: "pages/blog-details/blog-details-light" */))
const _e2f109ca = () => interopDefault(import('../pages/blog-grid/blog-grid-dark.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-dark" */))
const _47692b7e = () => interopDefault(import('../pages/blog-grid/blog-grid-light.vue' /* webpackChunkName: "pages/blog-grid/blog-grid-light" */))
const _908d772a = () => interopDefault(import('../pages/blog-list/blog-list-dark.vue' /* webpackChunkName: "pages/blog-list/blog-list-dark" */))
const _4d5a6a1e = () => interopDefault(import('../pages/blog-list/blog-list-light.vue' /* webpackChunkName: "pages/blog-list/blog-list-light" */))
const _7fe7d0ff = () => interopDefault(import('../pages/blog/blog-dark.vue' /* webpackChunkName: "pages/blog/blog-dark" */))
const _16f5d0dd = () => interopDefault(import('../pages/blog/blog-light.vue' /* webpackChunkName: "pages/blog/blog-light" */))
const _0996d1bd = () => interopDefault(import('../pages/contact/contact-dark.vue' /* webpackChunkName: "pages/contact/contact-dark" */))
const _79b23042 = () => interopDefault(import('../pages/contact/contact-light.vue' /* webpackChunkName: "pages/contact/contact-light" */))
const _b31420d2 = () => interopDefault(import('../pages/homepage/home1-dark.vue' /* webpackChunkName: "pages/homepage/home1-dark" */))
const _7ba8f576 = () => interopDefault(import('../pages/homepage/home1-light.vue' /* webpackChunkName: "pages/homepage/home1-light" */))
const _ca813e94 = () => interopDefault(import('../pages/homepage/home2-dark.vue' /* webpackChunkName: "pages/homepage/home2-dark" */))
const _57103806 = () => interopDefault(import('../pages/homepage/home2-light.vue' /* webpackChunkName: "pages/homepage/home2-light" */))
const _e1ee5c56 = () => interopDefault(import('../pages/homepage/home3-dark.vue' /* webpackChunkName: "pages/homepage/home3-dark" */))
const _28162a72 = () => interopDefault(import('../pages/homepage/home3-light.vue' /* webpackChunkName: "pages/homepage/home3-light" */))
const _f95b7a18 = () => interopDefault(import('../pages/homepage/home4-dark.vue' /* webpackChunkName: "pages/homepage/home4-dark" */))
const _fe4cc4f0 = () => interopDefault(import('../pages/homepage/home4-light.vue' /* webpackChunkName: "pages/homepage/home4-light" */))
const _779bb413 = () => interopDefault(import('../pages/homepage/home5-dark.vue' /* webpackChunkName: "pages/homepage/home5-dark" */))
const _15be5049 = () => interopDefault(import('../pages/homepage/home5-light.vue' /* webpackChunkName: "pages/homepage/home5-light" */))
const _6be52532 = () => interopDefault(import('../pages/homepage/home6-dark.vue' /* webpackChunkName: "pages/homepage/home6-dark" */))
const _aab9f9ec = () => interopDefault(import('../pages/homepage/home6-light.vue' /* webpackChunkName: "pages/homepage/home6-light" */))
const _602e9651 = () => interopDefault(import('../pages/homepage/home7-dark.vue' /* webpackChunkName: "pages/homepage/home7-dark" */))
const _3f87b5cb = () => interopDefault(import('../pages/homepage/home7-light.vue' /* webpackChunkName: "pages/homepage/home7-light" */))
const _54780770 = () => interopDefault(import('../pages/homepage/home8-dark.vue' /* webpackChunkName: "pages/homepage/home8-dark" */))
const _57272ee8 = () => interopDefault(import('../pages/homepage/home8-light.vue' /* webpackChunkName: "pages/homepage/home8-light" */))
const _51ce8f3f = () => interopDefault(import('../pages/project-details2/project-details2-dark.vue' /* webpackChunkName: "pages/project-details2/project-details2-dark" */))
const _fc324ac6 = () => interopDefault(import('../pages/project-details2/project-details2-light.vue' /* webpackChunkName: "pages/project-details2/project-details2-light" */))
const _2a47fc1f = () => interopDefault(import('../pages/showcase/showcase-dark.vue' /* webpackChunkName: "pages/showcase/showcase-dark" */))
const _8ec9ec86 = () => interopDefault(import('../pages/showcase/showcase-light.vue' /* webpackChunkName: "pages/showcase/showcase-light" */))
const _3fd32c1a = () => interopDefault(import('../pages/showcase2/showcase2-dark.vue' /* webpackChunkName: "pages/showcase2/showcase2-dark" */))
const _86cb532e = () => interopDefault(import('../pages/showcase2/showcase2-light.vue' /* webpackChunkName: "pages/showcase2/showcase2-light" */))
const _87fc9d1e = () => interopDefault(import('../pages/showcase3/showcase3-dark.vue' /* webpackChunkName: "pages/showcase3/showcase3-dark" */))
const _5e17feab = () => interopDefault(import('../pages/showcase3/showcase3-light.vue' /* webpackChunkName: "pages/showcase3/showcase3-light" */))
const _21d71a39 = () => interopDefault(import('../pages/works/works-dark.vue' /* webpackChunkName: "pages/works/works-dark" */))
const _9a20a23a = () => interopDefault(import('../pages/works/works-light.vue' /* webpackChunkName: "pages/works/works-light" */))
const _ddf6bb02 = () => interopDefault(import('../pages/works2/works2-dark.vue' /* webpackChunkName: "pages/works2/works2-dark" */))
const _29732f5d = () => interopDefault(import('../pages/works2/works2-light.vue' /* webpackChunkName: "pages/works2/works2-light" */))
const _54101cc2 = () => interopDefault(import('../pages/works3/works3-dark.vue' /* webpackChunkName: "pages/works3/works3-dark" */))
const _fa2c7786 = () => interopDefault(import('../pages/works3/works3-light.vue' /* webpackChunkName: "pages/works3/works3-light" */))
const _68679937 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _a99921ba,
    name: "about-about-dark"
  }, {
    path: "/about/about-light",
    component: _551df739,
    name: "about-about-light"
  }, {
    path: "/blog-details/blog-details-dark",
    component: _15a6b442,
    name: "blog-details-blog-details-dark"
  }, {
    path: "/blog-details/blog-details-light",
    component: _4a4b97fd,
    name: "blog-details-blog-details-light"
  }, {
    path: "/blog-grid/blog-grid-dark",
    component: _e2f109ca,
    name: "blog-grid-blog-grid-dark"
  }, {
    path: "/blog-grid/blog-grid-light",
    component: _47692b7e,
    name: "blog-grid-blog-grid-light"
  }, {
    path: "/blog-list/blog-list-dark",
    component: _908d772a,
    name: "blog-list-blog-list-dark"
  }, {
    path: "/blog-list/blog-list-light",
    component: _4d5a6a1e,
    name: "blog-list-blog-list-light"
  }, {
    path: "/blog/blog-dark",
    component: _7fe7d0ff,
    name: "blog-blog-dark"
  }, {
    path: "/blog/blog-light",
    component: _16f5d0dd,
    name: "blog-blog-light"
  }, {
    path: "/contact/contact-dark",
    component: _0996d1bd,
    name: "contact-contact-dark"
  }, {
    path: "/contact/contact-light",
    component: _79b23042,
    name: "contact-contact-light"
  }, {
    path: "/homepage/home1-dark",
    component: _b31420d2,
    name: "homepage-home1-dark"
  }, {
    path: "/homepage/home1-light",
    component: _7ba8f576,
    name: "homepage-home1-light"
  }, {
    path: "/homepage/home2-dark",
    component: _ca813e94,
    name: "homepage-home2-dark"
  }, {
    path: "/homepage/home2-light",
    component: _57103806,
    name: "homepage-home2-light"
  }, {
    path: "/homepage/home3-dark",
    component: _e1ee5c56,
    name: "homepage-home3-dark"
  }, {
    path: "/homepage/home3-light",
    component: _28162a72,
    name: "homepage-home3-light"
  }, {
    path: "/homepage/home4-dark",
    component: _f95b7a18,
    name: "homepage-home4-dark"
  }, {
    path: "/homepage/home4-light",
    component: _fe4cc4f0,
    name: "homepage-home4-light"
  }, {
    path: "/homepage/home5-dark",
    component: _779bb413,
    name: "homepage-home5-dark"
  }, {
    path: "/homepage/home5-light",
    component: _15be5049,
    name: "homepage-home5-light"
  }, {
    path: "/homepage/home6-dark",
    component: _6be52532,
    name: "homepage-home6-dark"
  }, {
    path: "/homepage/home6-light",
    component: _aab9f9ec,
    name: "homepage-home6-light"
  }, {
    path: "/homepage/home7-dark",
    component: _602e9651,
    name: "homepage-home7-dark"
  }, {
    path: "/homepage/home7-light",
    component: _3f87b5cb,
    name: "homepage-home7-light"
  }, {
    path: "/homepage/home8-dark",
    component: _54780770,
    name: "homepage-home8-dark"
  }, {
    path: "/homepage/home8-light",
    component: _57272ee8,
    name: "homepage-home8-light"
  }, {
    path: "/project-details2/project-details2-dark",
    component: _51ce8f3f,
    name: "project-details2-project-details2-dark"
  }, {
    path: "/project-details2/project-details2-light",
    component: _fc324ac6,
    name: "project-details2-project-details2-light"
  }, {
    path: "/showcase/showcase-dark",
    component: _2a47fc1f,
    name: "showcase-showcase-dark"
  }, {
    path: "/showcase/showcase-light",
    component: _8ec9ec86,
    name: "showcase-showcase-light"
  }, {
    path: "/showcase2/showcase2-dark",
    component: _3fd32c1a,
    name: "showcase2-showcase2-dark"
  }, {
    path: "/showcase2/showcase2-light",
    component: _86cb532e,
    name: "showcase2-showcase2-light"
  }, {
    path: "/showcase3/showcase3-dark",
    component: _87fc9d1e,
    name: "showcase3-showcase3-dark"
  }, {
    path: "/showcase3/showcase3-light",
    component: _5e17feab,
    name: "showcase3-showcase3-light"
  }, {
    path: "/works/works-dark",
    component: _21d71a39,
    name: "works-works-dark"
  }, {
    path: "/works/works-light",
    component: _9a20a23a,
    name: "works-works-light"
  }, {
    path: "/works2/works2-dark",
    component: _ddf6bb02,
    name: "works2-works2-dark"
  }, {
    path: "/works2/works2-light",
    component: _29732f5d,
    name: "works2-works2-light"
  }, {
    path: "/works3/works3-dark",
    component: _54101cc2,
    name: "works3-works3-dark"
  }, {
    path: "/works3/works3-light",
    component: _fa2c7786,
    name: "works3-works3-light"
  }, {
    path: "/",
    component: _68679937,
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
