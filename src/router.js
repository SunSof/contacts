import Vue from 'vue'
import Router from 'vue-router'

import login from './components/login'
import CardList from './components/CardList'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', component: login },
    { path: '/', component: CardList },

    // otherwise redirect to home
    { path: '*', redirect: '/login' }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.token

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    })
  }

  next()
})
