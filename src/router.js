import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateTransaction from './views/CreateTransaction.vue'
import ListTransactions from './views/ListTransactions.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/transactions',
          name: 'list_transactions',
          component: ListTransactions
      },
    {
      path: '/transaction/:action',
      name: 'create_transaction',
      component: CreateTransaction
        // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
