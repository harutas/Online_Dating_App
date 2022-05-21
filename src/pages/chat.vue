<template>
  <v-container>
    <Header :isDrawerMenu="isDrawerMenu" :headerText="userFullname" />
    <v-row class="d-flex justify-center overflow-auto">
      <v-col cols="12" sm="8" class="pb-0">
        <user-chat-box v-for="message in getMessages" :message="message" :key="message.count"></user-chat-box>
      </v-col>
    </v-row>

    <v-footer
      app
      fixed
    >
    <v-row class="d-flex justify-center">
      <v-col cols="12" class="d-flex align-center">
        <v-text-field
          v-model="content"
          placeholder="Send Message…"
          hide-details="false"
          dense
          filled
          @keydown.enter="sendMessage"
          class="ml-2"
        ></v-text-field>
        <v-btn
          color="blue-grey"
          fab
          x-small
          dark
          @click="sendMessage"
          class="ml-2"
        >
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    </v-footer>
  </v-container>
</template>

<script>
import Header from '../components/Header.vue'
import UserChatBox from '../components/UserChatBox.vue'
import { Chat } from '../model/index'


export default {
  data : () => ({
    count : 0,
    content : "",
    isDrawerMenu : false
  }),

  methods : {
    sendMessage(){
      if (this.content === ""){
        alert("Please input Message.");
        return ;
      }
      let newMessage = new Chat(this.count, this.$route.params.id, this.content, true);
      newMessage.date = Chat.getDateString();

      this.$store.commit('messages/setMessages', newMessage);
      this.$store.dispatch('messages/replyMessage', newMessage);
      
      this.content = "";
      this.count += 2;
    }
  },

  computed : {
    getMessages(){
      return this.$store.getters['messages/getMessagesById'](this.$route.params.id);
    },

    userFullname(){
      let user = this.$store.getters.getUserById(this.$route.params.id);
      return user.name.first + " " + user.name.last;
    }
  },

  components : {
    Header,
    UserChatBox
  }

}
</script>