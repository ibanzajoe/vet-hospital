<template>
  <v-layout
    column
    align-center
    class="landing-background"
  >
    <hero-bike @scrollTo="scrollTo" />
    <about />
    <team />
    
    <v-divider :dark="true" ></v-divider>

    <br/>

    <testimony />

    <services />





    <appointment id="appointment" />

    <landingFooter @scrollTo="scrollTo" />

  </v-layout>
</template>

<script>
import heroBike from '../components/landing/hero-bike'
import about from '../components/landing/about'
import team from '../components/landing/team'
import testimony from '../components/landing/testimony'
import services from '../components/landing/services'
import appointment from '../components/landing/appointment'
import landingFooter from '../components/landing/landing-footer'

export default {
  name: 'mainIndex',
  auth: false,
  components: {
    heroBike, about, team, testimony, services, appointment, landingFooter
  },
  methods: {
    scrollTo(id) {
      console.log('hello')
      let scrollToElement = document.getElementById(id)
      let top = scrollToElement.offsetTop
      window.scrollTo({top: top, behavior: 'smooth'})
    }
  }
}
</script>
<style scoped>
.landing-background {
  background-color: #ffffff;
}
</style>