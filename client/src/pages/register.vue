<template>
  <v-layout>
    <v-flex xs10 sm8 md6 offset-md3 offset-sm2 offset-xs1>
      <div class="white elevation-2">
        <v-toolbar class="cyan" dark>
          <v-toolbar-title>Registration</v-toolbar-title>
          <v-spacer />
          <v-btn v-if="regType == 'login'" @click="regType = 'register'">Register</v-btn>
          <v-btn v-if="regType == 'register'" @click="regType = 'login'">Login</v-btn>
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
          <pre>{{error}}</pre>

          <v-btn @click="doTypeReg(regType)">{{regType}}</v-btn>
        </div>



      </div>

      <div class="card">
        this is the store state
        <pre>{{manStore}}</pre>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: "register",
    layout: 'registration',
    auth: false,
    data () {
      return {
        email: '',
        password: '',
        error: null,
        regType: 'login'
      }
    },
    computed: {
      manStore() {
        return this.$store.state.store.token
      }
    },
    methods: {
      doTypeReg (type) {
        console.log('this is type: ', type)
        return type == 'register' ? this.register() : this.login()
      },
      async register() {
        try {
          await this.$axios.post('register', {email: this.email, password: this.password})
            .then(res => {
              console.log('this is the return on /register: ', res)
              this.$store.dispatch('store/setToken', res.data.token)
              this.$store.dispatch('store/setUser', res.data.user)
            })
        } catch (error) {
          this.error = error.response.data.error
        }
      },
      login () {
        this.$store.dispatch('store/login', {email: this.email, password: this.password})
          .then(res => {
            console.log('user Logged In')
          })
          .catch( err => {
            this.error = err.response.data
          })
      },
      async product() {
        try {
          await this.$axios.get('product')
            .then((res) => {
              console.log('this is res: ', res)
            })
        } catch (error) {
          this.error = error
        }
      }
    }
  }
</script>

<style scoped>

</style>
