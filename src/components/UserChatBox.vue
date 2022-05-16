<template>
  <div>
    <div v-if="message.id=='myId'">
      <div class="d-flex justify-end">
        <div class="d-flex flex-column w-300px">
          <v-card elevation="5" class="rounded-lg green accent-3 pa-2 mb-2">
            <p>{{messageContent}}</p>
          </v-card>
          <p class="text-right font-size0q8rem">{{messageDate}}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-start align-center">
        <v-avatar>
          <img :src="getUser.picture.thumbnail" :alt="getUser.name.first">
        </v-avatar>
        <div class="d-flex flex-column w-300px ml-3">
          <v-card elevation="5" class="rounded-lg green accent-3 pa-2 mb-2">
            <p>{{messageContent}}</p>
          </v-card>
          <p class="text-right font-size0q8rem">{{messageDate}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'UserChatBox',

  props : {
    message : Object
  },

  computed : {

    getUser(){
      return this.$store.getters.getUserById(this.$route.params.id);
    },

    messageContent(){
      return this.message.content;
    },

    messageDate(){
      return this.message.date;
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
  .w-300px{
    width: 150px;
  };
</style>