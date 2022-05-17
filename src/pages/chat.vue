<template>
  <div>
    <Header :isDrawerMenu="isDrawerMenu" :headerText="userFullname" />
    <div class="pt-3 pb-60px px-5">
      <v-row class="d-flex justify-center overflow-auto">
        <v-col cols="12" sm="8">
          <user-chat-box v-for="message in getMessages" :message="message" :key="message.count"></user-chat-box>
        </v-col>
      </v-row>
    </div>

    <v-footer
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
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import UserChatBox from '../components/UserChatBox.vue'
import { getDateString } from '../model/index'


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
      let newMessages = {
        id : this.$route.params.id,
        messages : []
      }
      let myMessage = {
        count : this.count,
          id : "myId",
          content : this.content,
          date : getDateString()
        }
      this.count++;

      let partnerMessage = {
          count : this.count, 
          id : this.$route.params.id,
          content : "Hello~~",
          date : getDateString()
        }
      this.count++;

      newMessages.messages.push(myMessage, partnerMessage);
      this.$store.commit('messages/setMessages', newMessages);
      this.content = "";
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

<style scoped>
  .pb-60px {
    padding-bottom: 60px;
  }
</style>