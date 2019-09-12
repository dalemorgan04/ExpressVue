<template>
  <header>
    <app-nav /> 
  </header>
</template>

<script>
import AppNav from '../components/AppNav.vue'

    
export default {

    components: {
        'app-nav': AppNav
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
    @import './AppHeader.scss';
</style>
