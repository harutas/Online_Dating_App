<template>
  <v-app>
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar
      app
      color="teal lighten-3"
      dark
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Online Dating App</v-toolbar-title>

      <v-spacer></v-spacer>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
        v-model="group"
        >
          <v-list-item to="/Online_Dating_App">
            <v-list-item-title>User List</v-list-item-title>
          </v-list-item>

          <v-list-item to="/message-list">
            <v-list-item-title>Message List</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods : {
    messageList(){
      this.$router.push('message-list')
    }
  }
};
</script>
