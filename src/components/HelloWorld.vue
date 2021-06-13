<template>
  <v-container class="background">
    <v-row grid-list-md>
      <v-card
          class="mx-auto"
          color="#ECFFF8"
          light
          min-width="340"

          v-for="(item, i) in items" :key="i"
      >
        <v-card-title>
          <v-icon
              small
              left
          >
            mdi-twitter
          </v-icon>
          <span class="text-h6 font-weight-regular">L-Note</span>
        </v-card-title>

        <v-card-text class="text-h6 font-weight-medium">
          {{ item.title }}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                  class="elevation-6"
                  alt="profile-image"
                  :src=item.src
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>

            <v-row
                align="center"
                justify="end"
            >
              <v-icon class="mr-1" @click="increaseLikes(item, item.number_of_likes)">
                mdi-heart
              </v-icon>
              <span class="subheading mr-2">{{ item.number_of_likes }}</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1">
                mdi-share-variant
              </v-icon>
              <span class="subheading">{{ item.number_of_shares }}</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'HelloWorld',
    methods: {
      increaseLikes(item, like) {
        item.number_of_likes = like + 1
      }
    },
    mounted() {
      axios
      .get("https://api.github.com/users/everybees")
          .then(response => ( this.userData = response.data))
    },
    data() {
      return {
        plans: ["The Singles", "The Curious", "The Addict"],
        message: "",
        userData: {},
        items: [
          {"title": "Something beautiful",
            "color": '#C4C4C4',
            "name": "Ellie Goulding",
            "number_of_shares": 5,
            "number_of_likes": 20,
            "src": "https://yt3.ggpht.com/ytc/AAUvwnjVtLYEGxwHKvnFJ8CZojM6CeNOIA7mNvbyvyAZKA=s900-c-k-c0x00ffffff-no-rj"
          },
          // {"title": "Skyfall",
          //   "color": '#C4C4C4',
          //   "name": "Ellie Goulding",
          //   "number_of_shares": 50,
          //   "number_of_likes": 10,
          //   "src": "https://yt3.ggpht.com/ytc/AAUvwnjVtLYEGxwHKvnFJ8CZojM6CeNOIA7mNvbyvyAZKA=s900-c-k-c0x00ffffff-no-rj"
          // },
          // {"title": "Waterfall",
          //   "color": '#232323',
          //   "name": "Adele",
          //   "number_of_shares": 15,
          //   "number_of_likes": 2,
          //   "src": "https://i.scdn.co/image/f8737f6fda048b45efe91f81c2bda2b601ae689c"
          // },
          // {"title": "Kowope",
          //   "color": '#232323',
          //   "name": "Brymo",
          //   "number_of_shares": 53,
          //   "number_of_likes": 12,
          //   "src": "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank"
          // },
        ]
      }
    }
  }
</script>

<style>
.background {
  background-image: url("https://s2.best-wallpaper.net/wallpaper/iphone/1810/Coffee-cup-top-view_iphone_320x480.jpg");
  background-size: 600px;
  height: 823px;
}
</style>
