<template>
  <div class="services">
    <v-container>
      <v-layout align-center justify-center column>
        <h3 class="display-3">Our Services</h3>

        <v-img class="my-5" src="../images/dog-icon.png" width="50px" />

        <p class="body-2 text-center" style="max-width: 525px; margin: 0 auto; line-height: 2;" >You'll enjoy knowing our dedicated team will do whatever is needed to keep your pets happy, healthy, and safe when you're away from home</p>

        <service-list :services="services" />

      </v-layout>
    </v-container>
  </div>
</template>
<script>
import serviceList from './services-list'
export default {
  components: {
    serviceList
  },
  data () {
    return {
      services: [
        {
          title: 'Routine Preventative Care',
          content: 'Examinations, testing, and counseling'
        },
        {
          title: 'In-House Lab',
          content: 'Out in-house laboratory allows us to perform an array of diagnoistic tests that help us care for your pet'
        },
        {
          title: 'Medical Surgical Care',
          content: 'We offer a wide variety of soft tissue and orthopedic surgeries, as well as routine sprays and neuters'
        },
        {
          title: 'Comprehensive Dental',
          content: 'We perform dental prophylaxis and dental radiographs when needed.  We always recommend regular check-ups'
        },
        {
          title: 'Parasite Control',
          content: 'We offer Frontline and Nexgard flea and tick control products.  We also offer customized parasite protection'
        },
        {
          title: 'Vaccinations',
          content: 'We believe the most important aspect of caring for your pet is vaccinating him/her against possible disease'
        }
      ]
    }
  }
}
</script>
<style scoped>
.services {
  padding: 5rem 0;
}
</style>