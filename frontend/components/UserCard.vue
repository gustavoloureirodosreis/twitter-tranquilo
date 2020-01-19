/* eslint-disable */
<template>
  <v-card color="cyan dark-2" class="white-text">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{user.username}}</div>
            <div>{{user.last_tweet}}</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-avatar size="125" color="grey ligthen-4">
            <img :src="user.avatar">
          </v-avatar>
          <div v-if="logged_user">
            <v-btn v-if="!user.ifollow" :loading="loading" block class="success" @click="follow()">Seguir</v-btn>
            <v-btn v-if="user.ifollow" :loading="loading" block class="error" @click="unfollow()">Deixar de Seguir</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>

import api from '~api'
import Snacks from '~/helpers/Snacks.js'

export default {
  props: ['user'],
  data () {
    return {
      loading: false,
      snackbar: false,
      snackmessage: '',
      snackcolor: 'success'
    }
  },
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  methods: {
    follow () {
      this.loading = true
      api.follow(this.user.username).then(() => {
        this.user.ifollow = true
        this.loading = false
        Snacks.show(this.$store, {text: 'Você está seguindo ' + this.user.username})
      })
    },
    unfollow () {
      this.loading = true
      api.unfollow(this.user.username).then(() => {
        this.user.ifollow = false
        this.loading = false
        Snacks.show(this.$store, {text: 'Você deixou de seguir ' + this.user.username, color: 'error', timeout: 3000})
      })
    }
  }
}
</script>

<style>
</style>
