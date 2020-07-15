import Vue from 'vue'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'
import App from './App.vue'
import { store } from './store/settings'
import Board from './components/Board.vue'
import Settings from './components/Settings.vue'

Vue.config.productionTip = false

const routes = [
  { path: '/settings', component: Settings },
  { path: '/*', component: Board }
]

Vue.use(VueRouter)
Vue.use(VTooltip)

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
