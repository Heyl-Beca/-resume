function load (component) {
  // const m = resolve => require([`views/${component}`], resolve)
  // console.log(m)
  return resolve => require([`views/${component}`], resolve)
}

const routes = [
  {
    path: '/',
    redirect: {
      path: '/login'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: load('login/Login'),
    meta: {
      title: '登陆'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: load('home'),
    meta: {
      title: '首页'
    }
  }
]
export default routes

// import Vue from 'vue'
// import Router from 'vue-router'
// // import Home from '../views/Home.vue'
// // import Login from '@/views/login/Login'

// Vue.use(Router)
// // constantRouterMap
// export default new Router(
//   {
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes: [
//       {
//         path: '/',
//         redirect: '/login',
//         hidden: true
//       },
//       {
//         path: '/login',
//         name: '登陆页面',
//         hidden: true,
//         component: resolve => require(['../views/login/Login.vue'], resolve)
//         // component: Login
//       }
//     ]
//   }
// )

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router
