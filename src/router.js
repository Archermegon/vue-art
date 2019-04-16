import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './views/Home.vue'
import HomeIndex from './views/HomeIndex.vue'
import About from './views/About.vue'
import Social from './views/Social.vue'
import Learn from './views/Learn.vue'
import Search from './views/Search'

const router = new VueRouter({
  // 说明：路由模式分为history和hash，history使得路由更加自由
  // 但是history路由害怕刷新，目前我们的项目应该采用hash模式
  // 参照链接：https://blog.csdn.net/lla520/article/details/77894985
  routes: [{
    path: '/',
    name: 'homeIndex',
    component: HomeIndex,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      }, {
        path: '/about',
        name: 'about',
        component: About
      }, {
        path: '/social',
        name: 'social',
        component: Social
      }, {
        path: '/learn',
        name: 'learn',
        component: Learn
      }
    ]
  }, {
    path: '/search',
    component: Search
  }
  ]
})

export default router