import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import AppLayout from './views/Layout.vue'



Vue.use(BootstrapVue)

const app = new Vue({
    ...AppLayout
})

export { app }
