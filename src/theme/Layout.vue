<template>
  <div>
    <app-header />
    <section class="main-section section">
      <div class="container content">
        <div class="columns">
          <div
            v-for="post in posts"
            :key="post.id"
            class="column is-one-third"
          >
            <div class="card">
              <div class="card-content">
                <h3>{{ post.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
export default {
    components: { 'app-header': AppHeader },
    data () {
      return {
          posts: [
              {id: 1, name: 'Dale'},
              {id: 2, name: 'Kat'}
          ]
      }
    }
}
</script>

<style lang="scss">
@import './Layout.scss';
</style>
