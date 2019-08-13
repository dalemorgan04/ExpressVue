import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

// const app = new Vue({
//   render: h => h(AppLayout)
// })

// Vue.component('app', {
//   template: '<div id="app">howdy</div>'
// })

const app = new Vue({
  render: h => h(AppLayout)
})

export { app }
