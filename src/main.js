// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/Index'
import Details from './pages/Details'
import Forecast from './pages/details/Forecast'
import Count from './pages/details/count'
import Publish from './pages/details/publish'
import Analysis from './pages/details/analysis'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/', component: IndexPage},
    {path: '/details', component: Details,children:[
      {path: '/forecast',component: Forecast},
      {path: '/count',component: Count},
      {path: '/publish',component: Publish},
      {path: '/analysis',component: Analysis}

      ]}
  ]
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { Layout },
  template: '<Layout/>'
})
