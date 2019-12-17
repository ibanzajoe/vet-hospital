<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      style="padding: 0 2rem;"
    >
      <v-img
          src="../images/pet-vet-logo.jpg"
          class="grey lighten-2"
          max-width="150"
          max-height="100%"></v-img>

      <v-spacer></v-spacer>

      <v-btn href="/login" nuxt outlined color="primary">
        Login
      </v-btn>

    </v-app-bar>
    
  
    <nuxt />
    
    
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
