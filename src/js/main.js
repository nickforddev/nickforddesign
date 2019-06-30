import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Logo from '@/components/Logo'
import Readout from '@/components/Readout'
import Tooltip from '@/components/Tooltip'

import '../scss/style.scss'

Vue.config.productionTip = false

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
