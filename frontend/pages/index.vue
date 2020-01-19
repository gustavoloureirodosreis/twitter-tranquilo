<template>
  <home :tweets="tweets" />
</template>

<script>

import home from '~/components/Home.vue'
import api from '~api'

export default {
  components: {
    home
  },
  data () {
    return {}
  },
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  asyncData () {
    return api.list_tweets().then(result => {
      return {
        tweets: result
      }
    })
  }
}
</script>

<style>
</style>
