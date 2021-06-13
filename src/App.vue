<template>
  <v-app :style="{backgroundColor: applyColor}">
   <v-container>
     <v-main>
       <header>
         <h1>GitHub Profiles</h1>
        <v-row>
          <v-col>
            <transition name="fade">
              <div v-if="divVisible"
              >
                <span style="color: green" v-if="hours < 12">Good Morning</span>
                <span style="color: yellow" v-if="hours >= 12 && hours < 18">Good Afternoon</span>
                <span style="color: darkslategray" v-if="hours >= 18">Good Evening</span>
                <span>, User</span>
              </div>
            </transition>
          </v-col>
          <v-col class="mr-10">
            <v-btn
                @click="divVisible = !divVisible">
              <span v-if="divVisible" style="color: red">X</span>
              <span v-else>=></span>
              </v-btn>
          </v-col>
        </v-row>
       </header>
       <v-row>
         <v-col>
           <div>
             <v-text-field
                 v-model="username"
                 label="username"
                 outlined
             >
             </v-text-field>

             <v-btn @click="addUsername(username)" style="font-size: 12px" class="mr-4">Add Username</v-btn>
           </div>
         </v-col>
       </v-row>
       <UserProfileCard
           v-for="(user, i) in reversedListOfUsernames" :key="i"
           :user="user"/>
     </v-main>
   </v-container>
    <h2
        v-if="userData.length === 0"
        style="text-align: center"
    >Github Users will appear here</h2>
  </v-app>
</template>

<script>
import UserProfileCard from "./components/UserProfileCard";
import axios from "axios";

export default {
  name: 'App',
  components: {
    UserProfileCard
  },
  data() {
    return {
      username: "",
      userData: [],
      hours: new Date().getHours(),
      seconds: 0,
      divVisible: true,
      color: "#e2e300"
    }
  },
  computed: {
    reversedListOfUsernames() {
      return this.userData.slice(0).reverse()
    },
    applyColor() {
      if (this.hours < 12) {
        return this.color
      } else if (this.hours >= 12 && this.hours < 18) {
        return "#5189f7"
      } else {
        return "#1f0f7e"
      }
    }
  },
  methods: {
    addUsername(username) {
      this.getUser(username)
      this.username = ''
    },
    getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => (this.userData.push(response.data)))
    },
  },
 created() {
    setInterval(() => {
      this.seconds++
    }, 1000)
 },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
