<template>
  <v-app>
   <v-container>
     <v-main>
       <header>
         <h1>GitHub Profiles</h1>
         <p style="color: green" v-if="hours < 12">Good Morning</p>
         <p style="color: yellow" v-if="hours >= 12 && hours < 18">Good Afternoon</p>
         <p style="color: darkslategray" v-if="hours >= 18">Good Evening</p>
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

             <v-btn @click="removeUsername(username)" class="mr-4">Remove Username</v-btn>
             <v-btn @click="addUsername(username)" class="mr-4">Add Username</v-btn>
           </div>
         </v-col>
       </v-row>
       <UserProfileCard
           v-for="(user, i) in reversedListOfUsernames" :key="i"
           :user="user"/>
     </v-main>
   </v-container>
    <h3
        v-if="userData.length === 0"
        style="text-align: center"
    >Enter a github username</h3>
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
      hours: new Date().getHours()
    }
  },
  computed: {
    reversedListOfUsernames() {
      return this.userData.slice(0).reverse()
    }
  },
  methods: {
    addUsername(username) {
      this.getUser(username)
      this.username = ''
    },
    removeUsername(username) {
      return username
    },
    getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => (this.userData.push(response.data)))
    }
  },
};
</script>
