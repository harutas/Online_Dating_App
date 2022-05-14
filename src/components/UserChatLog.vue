<template>
    <div>
      <div @click="toChat" :latestMessage="latestMessage" class="d-flex justify-start align-center mt-5 hover">
        <v-avatar>
          <img :src="getUser.picture.thumbnail" :alt="getUser.name.first">
        </v-avatar>
        <div class="d-flex flex-column ml-3">
          <p class="font-size0q8rem ml-3">{{userFullname}}</p>
          <p class="font-size0q8rem ml-3">{{latestMessage.content}}</p>
          <p class="font-size0q8rem ml-3">{{latestMessage.date}}</p>
        </div>
      </div>
      <v-divider inset></v-divider>
    </div>
</template>

<script>
export default {
  name : 'UserChatLog',

  props : {
    id : String, 
    messages : Array,
  },

  computed : {

    getUser(){
      return this.$store.getters.getUserById(this.id);
    },

    userFullname(){
      let user = this.$store.getters.getUserById(this.id);
      return user.name.first + " " + user.name.last;
    },

    latestMessage(){
      let message = this.$store.getters['messages/getMessagesById'](this.id);
      return message[message.length-1];
    },

  },

  methods : {
    toChat(){
      this.$router.push({ name : 'chat', params : {id : this.id} })
    }
  }
}
</script>

<style scoped>
  p {
    margin: 0;
  }
  .font-size0q8rem{
    font-size: 0.8rem;
  }

  .hover {
    cursor: pointer;
  }

</style>