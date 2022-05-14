<template>
  <div class="d-flex justify-center">
    <div class="d-flex flex-wrap col-12 col-md-8">
      <user-list-card
        v-for="user in getUsers"
        :user="user"
        :key="user.login.id"
      ></user-list-card>
    </div>
  </div>
</template>

<script>
import UserListCard from '../components/UserListCard.vue'

export default {
  data : () => ({

  }),

  created(){
    this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=30&gender=female');
  },

  computed : {
    getUsers(){
      return Object.values(this.$store.getters.getAllUsers);
    }
  },  
  
  components : {
    UserListCard
  }

}
</script>