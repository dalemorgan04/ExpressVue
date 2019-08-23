<template>
  <div id="app">
    <app-header />
    <app-nav />
    <section class="main-section section" />
    <app-footer />
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue'
import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'

export default {

    components: {
        'app-header': AppHeader,
        'app-nav': AppNav,
        'app-footer' : AppFooter
    },
    data () {
        return {}
    },
    methods: {}

}
</script>

<style lang="scss">
    @import './Theme.scss';
    @import 'node_modules/bootstrap/scss/bootstrap';
    @import 'node_modules/bootstrap-vue/src/index.scss';
</style>
