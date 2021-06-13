  <template>
    <v-card
        class="mx-auto my-12"
        min-width="350"
        max-width="600"
        v-if="show"
    >

      <v-img
          height="250"
          :src="user.avatar_url"
      ></v-img>

      <a :href="user.html_url"
         target="_blank">
        <v-card-title>{{ user.name }}</v-card-title>
      </a>

      <v-card-text>
        <v-row
            align="center"
            class="mx-0"
        >
          <div class="grey--text">
            Joined: {{ user.created_at }}
          </div>
        </v-row>

        <a :href="user.followers_url" target="_blank">
          <div class="my-4 text-subtitle-1">
          Followers: {{ user.followers}}
          </div>
        </a>

        <div>{{ user.bio }}</div>
      </v-card-text>

      <v-card-actions>
        <div class="close">
          <v-btn color="red" dark @click="removeUser(0.5)">Remove</v-btn>
        </div>
      </v-card-actions>

    </v-card>
  </template>

<script>

export default {
  name: "UserProfileCard",
  props: {
    user: Object
  },
  data() {
   return {
     show: true,
   }
  },
  methods: {
    removeUser(seconds) {
      setTimeout(() => this.show = false, seconds * 1000)
    }
  }
}
</script>

<style scoped>

</style>