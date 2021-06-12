  <template>
    <v-card
        class="mx-auto my-12"
        min-width="350"
        max-width="600"
    >

      <v-img
          height="250"
          :src="user.avatar_url"
      ></v-img>

      <a :href="`https://www.github.com/${username}`"
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

        <a :href="`https://www.github.com/${username}?tab=followers`" target="_blank">
          <div class="my-4 text-subtitle-1">
          Followers: {{ user.followers}}
          </div>
        </a>

        <div>{{ user.bio }}</div>
      </v-card-text>

    </v-card>
  </template>

<script>

import {getUserData} from '../apiCalls/apisercvices'

export default {
  name: "UserProfileCard",
  props: {
    username: String
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
   getUserData(this.username).then(res=>{
     console.log(res)
     this.user = res.data
   })
    .catch(error=>{
      console.log(error)
    })
  }
}
</script>

<style scoped>

</style>