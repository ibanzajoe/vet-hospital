<template>
  <v-layout class="login-background">
    <div class="left-panel login-panel">
      <div class="left-panel-inner">
        <v-img src="/images/pet-vet-logo.jpg" max-width="270" max-height="100" style="margin: 0 auto;" />
        <br />

        <br/>
        <br/>
        <h3 class="display-1">Sign In</h3>
        
        <br />
        <br />

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

        <v-btn color="success" width="100%" large @click="doTypeReg(regType)">{{regType}}</v-btn>
        <div class="login-options">
          <p class="caption forgot-pass">Forgot Password?</p>
          <p v-if="regType == 'login'" @click="regType = 'register'" class="caption to-register">Create an Account</p>
          <p v-if="regType == 'register'" @click="regType = 'login'" class="caption to-register">Sign into your Account</p> 
        
        </div>

        <br />
        <br/>
        <br/>


        <div class="contact-us">
          <h3 class="subtitle-2" style="text-align: center;">Questions?
            <br/>
            Call (818) 346 2455
            <br />
            <br/>
            <br/>
            Visit us at:
            <br />

            19748 Sherman Way <br />
            Canoga Park, CA 91306
          </h3>
        </div>

        <br/>
        <br/>
        <div class="social-media-links">
          <v-icon>mdi-facebook</v-icon>
          <v-icon>mdi-twitter</v-icon>
          <v-icon>mdi-instagram</v-icon>
        </div>

      </div>  
    </div>
    <div class="right-panel login-panel">

    </div>

  </v-layout>
</template>

<script>
  export default {
    name: "login",
    layout: 'registration-layout',
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
        this.$store.dispatch('login', {email: this.email, password: this.password})
          .then(res => {
            console.log('user Logged In')
            this.$router.push('/account')
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
  .login-background {
    background-color: #ffffff;
    display: flex;
    
  }
  .login-panel {
    height: 100%;
  }
  .left-panel {
    flex: 0 0 425px;
    height: 100vh;
  }
  .right-panel {
    content: ' ';
    width: 100%;
    height: 100vh;
    background-image: url('/images/dog-boy.jpg');
    background-size: cover;
    background-position-x: 25%;
  }

  .left-panel-inner {
    padding: 25px;
    padding-top: 80px;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  .login-options {
    margin-top: 0.75rem;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
  .to-register {
    cursor: pointer;
    text-align: right;
  }
  .social-media-links i {
    cursor: pointer;
  }
  i + i {
    margin-left: 0.5rem;
  }

</style>
