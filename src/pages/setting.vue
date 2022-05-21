<template>
  <div>
    <Header :isDrawerMenu="isDrawerMenu" :headerText="'Setting'"/>
    <v-container
      class="d-flex align-center flex-column px-0"
      fluid
    >
      <h1 class="grey--text darken-2">Select Your Gender</h1>
      <v-radio-group class="justify-center" v-model="gender" row>
        <v-radio
          v-for="gender in genderOption"
          :key="gender"
          :label="`${gender}`"
          :value="gender"
        ></v-radio>
      </v-radio-group>
      <v-btn @click="fetchUsers(gender)">Find Your Partner!</v-btn>
    </v-container>

  </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
  data(){
    return {
      isDrawerMenu : true,
      genderOption : ["Man", "Woman", "Decline to state"]
    }
  },

  computed : {

    gender : {
      get(){
        return this.$store.getters.getGender
      },
      set(value){
        this.$store.commit('setGender', value);
      }
    }
  },

  methods : {
    fetchUsers(gender){
      this.$store.commit('messages/resetMessages');
      if (gender === "Man"){
        this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=30&gender=female');
      } else if (gender === "Woman") {
        this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=30&gender=male');
      } else {
        this.$store.dispatch('fetchUsers', 'https://randomuser.me/api/?results=30');
      }
      this.$router.push('/');
    },

    setGender(gender){
      this.$store.commit('setGender', gender);
    }
  },

  components : {
    Header
  }
}
</script>