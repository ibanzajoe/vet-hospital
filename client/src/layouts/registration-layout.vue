<template>
  <v-app>
    <v-content>
      
      <nuxt />
      
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
