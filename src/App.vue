<template>
  <v-app>
   <v-container>
     <v-main>
       <header>
         <h1>GitHub Profiles</h1>
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
             <p>{{ username }}</p>
             <v-btn @click="removeUsername(username)" class="mr-4">Remove Username</v-btn>
             <v-btn @click="addUsername(username)" class="mr-4">Add Username</v-btn>
           </div>
         </v-col>
       </v-row>
       <UserProfileCard
           v-for="(username, i) in reversedListOfUsernames" :key="i" :username="username"/>
     </v-main>
   </v-container>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import UserProfileCard from "./components/UserProfileCard";

export default {
  name: 'App',
  components: {
    UserProfileCard
  },
  data() {
    return {
      usernames: ['everybees', 'kolokodess', 'iamr0b0tx'],
      username: ""
    }
  },
  computed: {
    reversedListOfUsernames() {
      return this.usernames.slice(0).reverse();
    }
  },
  methods: {
    addUsername(username) {
      this.usernames.push(username)
      this.username = ''
    },
    removeUsername(username) {
      const index = this.usernames.indexOf(username)
      console.log(index, this.usernames)
      if (index > -1) {
        this.usernames.splice(index, 1)
      }
    }
  },
};
</script>
