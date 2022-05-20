<template>
  <v-container>
    <Header :isDrawerMenu="isDrawerMenu" :headerText="'Message List'" />
    <v-row class="d-flex justify-center">
      <v-col cols="11" sm="9">
        <user-chat-log v-for="(messages, id) in getAllMessages" :messages="messages" :id="id" :key="id"></user-chat-log>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from '../components/Header.vue'
import UserChatLog from '../components/UserChatLog.vue'

export default {
  data : () => ({
    isDrawerMenu : false
  }),

  computed : {
    getAllMessages(){
      return this.$store.state.messages.messages;
    }

  },  
  
  components : {
    Header,
    UserChatLog
  }

}
</script>