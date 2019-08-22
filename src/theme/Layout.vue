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

    <div>
      <b-alert show>
        Default Alert
      </b-alert>

      <b-alert
        variant="success"
        show
      >
        Success Alert
      </b-alert>

      <b-alert
        v-model="showDismissibleAlert"
        variant="danger"
        dismissible
      >
        Dismissible Alert!
      </b-alert>

      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
        <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        />
      </b-alert>

      <b-button
        variant="info"
        class="m-1"
        @click="showAlert"
      >
        Show alert with count-down timer
      </b-button>
      <b-button
        variant="info"
        class="m-1"
        @click="showDismissibleAlert=true"
      >
        Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
      </b-button>
    </div>
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
          ],
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
}
</script>

<style lang="scss">
@import './Layout.scss';
</style>
