<template>
  <div :userDetail="userDetail">
    <div class="d-flex flex-column align-center mt-5">
      <v-img :src="userDetail.picture.large" class="col-5 col-sm-3" alt=""></v-img>
      <div class="d-flex justify-center">
      <v-btn to="/Online_Dating_App/" class="my-3 mr-3">Back</v-btn>
      <v-btn :to="{name : 'chat', params : {id : $route.params.id} }" class="my-3" color="primary">Message</v-btn>
      </div>
      <div class="col-11 col-sm-9">
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ userDetail.name.first }}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{{ userDetail.gender }}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{{ userDetail.dob.age }}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{{ userDetail.location.country }}</td>
            </tr>
            <tr>
              <td>State</td>
              <td>{{ userDetail.location.state }}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{{ userDetail.location.city }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ userDetail.email }}</td>
            </tr>

          </tbody>
        </template>
      </v-simple-table>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  data : () => ({

  }),

  created(){
    
  },


  computed : {
    userDetail(){
      return this.$store.getters.getUserById(this.$route.params.id);
    }
  },  

}
</script>