<template>
  <div class="col-6 col-sm-4">
    <v-card
      elevation="2"
      class="pa-2 ma-1 hover"
      @click="toUserDetail"
    >
      <div>
        <v-img
          :src="user.picture.large"
          class="rounded-circle"
        ></v-img>
        <v-card-title
        class="ma-0  pa-0 pl-2 ellipsis font-size1rem">{{getFullName}}</v-card-title>
        <v-card-text
        class="ma-0 pa-0 pl-4 ellipsis">Age: {{user.dob.age}} / {{user.location.country}}</v-card-text>
      </div>

      <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex justify-space-between">
        <div class="col-5 pa-0 ma-2">
        <v-btn
          :to="{ name : 'user-detail', params : {id : user.login.uuid} }"
          elevation="2"
          width="100%"
        >PROFILE</v-btn>
        </div>

        <div class="col-5 pa-0 ma-2">
        <v-btn
          :to="{ name : 'chat', params : {id : user.login.uuid} }"
          elevation="2"
          width="100%"
          color="primary"
        >MESSAGE</v-btn>
        </div>

      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name : 'UserListCard',

  props : {
    user : Object
  },

  computed : {
    getFullName(){
      return this.user.name.first + " " + this.user.name.last;
    }

  },

  methods : {
    toUserDetail(){
      this.$router.push({ name : 'user-detail', params : {id : this.user.login.uuid}}, () => {});
    }
  }
}
</script>

<style scoped>
  .font-size1rem {
    font-size: 1rem;
  }

  .font-size0q8rem {
    font-size: 0.8rem;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .hover {
    cursor: pointer;
  }
</style>