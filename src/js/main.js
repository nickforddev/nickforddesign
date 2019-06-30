import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

import App from './App.vue'
import router from './router'
import store from './store'

import Logo from '@/components/Logo'
import Readout from '@/components/Readout'
import Tooltip from '@/components/Tooltip'

import 'highlight.js/styles/atom-one-dark.css'
import '../scss/style.scss'

Vue.config.productionTip = false

Vue.use(VueHighlightJS)

const components = [
  Logo,
  Readout,
  Tooltip
]

components.map(component => {
  if (!component.name) {
    throw new Error('Missing global component name')
  }
  Vue.component(component.name, component)
})

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    window.addEventListener('keypress', e => {
      this.$store.dispatch('key_pressed', e)
    })
  }
}).$mount('#app')
