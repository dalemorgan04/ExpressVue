import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

Vue.component('test', {
  template: '<div>howdy</div>'
})

const app = new Vue({
  render: h => h(AppLayout)
})

export { app }
