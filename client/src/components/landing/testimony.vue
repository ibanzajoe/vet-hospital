<template>
  <div class="testimony">
    <v-layout align-center justify-center column>
      <v-container>
        <h3 class="display-1 text-center">
          Our Testimonials
        </h3>

        <p class="body-2 text-center py-3" style="line-height: 2; max-width: 750px; margin: 0 auto;">
          Blended value empower communities, we must stand up empathetic circular boots

          <br />
          on the ground.  Segmentation, targeted concreate academic blended value.

        </p>

        <v-layout align-center justify-center>
          <template v-for="(testimony, index) in testimonies">
            <testimony-card :testimony="testimony" :key="index" />
          </template>
        </v-layout>
      </v-container>



    </v-layout>
  </div>
</template>
<script>
import testimonyCard from './testimony-card'
export default {
  components: {
    testimonyCard
  },
  data() {
    return {
      testimonies: [
        {
          userImage: '../images/roger.jpg',
          username: 'Roger',
          role: 'Technician',
          content: 'Citizen centered triple bottom line move the needle strategize problem solvers the resistance commitment bandwidth strategize.  Social innovation strategize, black lives matter catalyze thought leader shine empathetic.'
        },
        {
          userImage: '../images/roger.jpg',
          username: 'Roger',
          role: 'Technician',
          content: 'Citizen centered triple bottom line move the needle strategize problem solvers the resistance commitment bandwidth strategize.  Social innovation strategize, black lives matter catalyze thought leader shine empathetic.'
        },
        {
          userImage: '../images/roger.jpg',
          username: 'Roger',
          role: 'Technician',
          content: 'Citizen centered triple bottom line move the needle strategize problem solvers the resistance commitment bandwidth strategize.  Social innovation strategize, black lives matter catalyze thought leader shine empathetic.'
        }
      ]
    }
  }
}
</script>
<style scoped>
.testimony {
  width: 100%;
  background-image: url('./cat-background.jpg');
  background-position: center;
  background-size: 100%;
  padding: 5rem 0;
}
.testimonial-section {
  height: 500px;
  width: 100%;
  position: relative;
}
.testimony-card + .testimony-card {
  margin-left: 1rem;
}
</style>