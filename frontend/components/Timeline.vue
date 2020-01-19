<template>
  <v-list three-line>
    <template v-for="tweet in sortedTweets">
      <v-list-item :key="tweet.id">
        <v-list-item-avatar>
          <v-img :src="tweet.author_avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <router-link :to="{name: 'user-username', params:{username: tweet.author_username}}">{{tweet.author_name}}</router-link>  /
            {{tweet.author_username}} /
            {{tweet.created_at | timeago}}
          </v-list-item-title>
          <v-list-item-subtitle>{{tweet.text}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="tweet.id+1" />
    </template>
  </v-list>
</template>

<script>
export default {
  props: ['tweets'],
  data () {
    return {}
  },
  computed: {
    sortedTweets () {
      return this.tweets.concat().sort((t1, t2) => new Date(t2.created_at) - new Date(t1.created_at))
    }
  }
}
</script>

<style>
</style>
