<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-col cols="11" sm="9">
        <user-chat-log v-for="(messages, id) in getAllMessages" :messages="messages" :id="id" :key="id"></user-chat-log>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import UserChatLog from '../components/UserChatLog.vue'

export default {
  data : () => ({

  }),

  computed : {
    getAllMessages(){
      return this.$store.state.messages.messages;
    }

  },  
  
  components : {
    UserChatLog
  }

}
</script>