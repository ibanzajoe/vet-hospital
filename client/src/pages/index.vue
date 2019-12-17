<template>
  <v-layout
    column
    align-center
  >
    <hero @scrollTo="scrollTo" />
    <about />
    <team />
    <appointment id="appointment" />
  </v-layout>
</template>

<script>
import hero from '../components/landing/hero'
import about from '../components/landing/about'
import team from '../components/landing/team'
import appointment from '../components/landing/appointment'

export default {
  name: 'mainIndex',
  auth: false,
  components: {
    hero, about, team, appointment
  },
  methods: {
    scrollTo(id) {
      let scrollToElement = document.getElementById(id)
      let top = scrollToElement.offsetTop
      window.scrollTo({top: top, behavior: 'smooth'})
    }
  }
}
</script>
