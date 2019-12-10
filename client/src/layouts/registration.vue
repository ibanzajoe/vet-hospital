<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title>What</v-toolbar-title>


      <v-spacer />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list v-if="!$store.state.store.isUserLoggedIn">
          <v-list-item>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list v-else>
          <v-list-item>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>


    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>



  </v-app>
</template>

<script>
  export default {
    name: "registration",
    data () {
      return {
        items: [
          {
            title: 'login',
          },
          {
            title: 'register'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
