<template>
  <v-layout>
    <v-flex xs10 sm8 md6 offset-md3 offset-sm2 offset-xs1>
      <div class="white elevation-2">
        <v-toolbar class="cyan" dark>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>

        <div class="py-2 px-4">
          <v-text-field
            v-model="email"
            label="Email"
            outlined
          />

          <v-text-field
            v-model="password"
            label="Password"
            outlined
          />

          <pre>{{email}} / {{password}}</pre>

          <pre>{{error}}</pre>

          <v-btn @click="register">
            <span>{{regType}}</span>
          </v-btn>
        </div>


      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "login",
    layout: 'registration',
    data () {
      return {
        email: '',
        password: '',
        error: null,
        regType: 'login'
      }
    },

    methods: {
      async register() {
        try {
          await this.$axios.post('register', {email: this.email, password: this.password})
            .then(res => {
              console.log('this is the return on /register: ', res)
            })
        } catch (error) {
          this.error = error.response.data.error
        }
      },
      async login () {
        try {
          await this.$axios.post('login', {email: this.email, password: this.password})
            .then(res => {
              console.log('this is the return on /login: ', res)
            })
        } catch (error) {
          this.error = error.response.data.error
        }
      },
  }
</script>

<style scoped>

</style>
