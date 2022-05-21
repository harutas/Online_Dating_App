<template>
  <div class="d-flex justify-center">
    <Header :isDrawerMenu="isDrawerMenu" :headerText="'Online Dating App'"/>
    <v-row class="d-flex flex-wrap col-12 col-md-8">
      <user-list-card
        v-for="user in getUsers"
        :user="user"
        :key="user.login.id"
      ></user-list-card>
    </v-row>
  </div>
</template>

<script>
import UserListCard from '../components/UserListCard.vue'
import Header from '../components/Header.vue'

export default {
  data : () => ({
    isDrawerMenu : true
  }),

  created(){
    if (Object.keys(this.$store.getters.getAllUsers).length == 0){
      this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=30');
    }
  },

  computed : {
    getUsers(){
      return Object.values(this.$store.getters.getAllUsers);
    }
  },  
  
  components : {
    Header,
    UserListCard
  }

}
</script>