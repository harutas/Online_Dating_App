<template>
  <div>
    <v-app-bar
      app
      color="teal lighten-3"
      dark
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{headerText}}</v-toolbar-title>
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name : 'Header',

  props : {
    headerText : String
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