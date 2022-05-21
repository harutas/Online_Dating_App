<template>
  <div>
    <v-app-bar
      app
      color="teal lighten-3"
      dark
      fixed
    >
      <v-app-bar-nav-icon v-if="isDrawerMenu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn
        v-else
        icon
        to="/"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-toolbar-title class="pl-2">{{headerText}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        to="/message-list"
      >
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>

    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
      >
        <v-list-item-group
        v-model="group"
        >
          <v-list-item to="/">
            <v-list-item-title>User List</v-list-item-title>
          </v-list-item>

          <v-list-item to="/message-list">
            <v-list-item-title>Message List</v-list-item-title>
          </v-list-item>

          <v-list-item to="/setting">
            <v-list-item-title>Setting</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name : 'Header',

  props : {
    headerText : String,
    isDrawerMenu : Boolean
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  }
}
</script>