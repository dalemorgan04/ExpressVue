<template>
  <div
    id="app"
    class="d-flex flex-column"
  >
    <!--<app-header />
    <app-nav />-->


    <main role="main">
      <home />
    </main>

    <app-footer />
  </div>
</template>

<script>

//import AppHeader from '../components/AppHeader.vue'
//import AppNav from '../components/AppNav.vue'
import AppFooter from '../components/AppFooter.vue'
import Home from '../views/Home.vue'

export default {

    components: {
        //'app-header': AppHeader,
        //'app-nav': AppNav,
        'app-footer': AppFooter,
        'home' : Home
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
    
    #app {
        height: 100vh;
    }

    main {
        flex: 1 0 auto;
    }
</style>
