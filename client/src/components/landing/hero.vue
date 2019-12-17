<template>
  <div class="hero">
    <video autoplay loop preload="auto" muted>
      <source src="../../static/images/shutterstock_v18085474-1.mp4" type="video/mp4" />
    </video>
    <div class="hero-content">
      <h3 class="display-1">Welcome to Pet Vet Animal Hospital</h3>
      <v-btn @click="$emit('scrollTo', 'appointment')" color="#5ebcf3" class="mt-5" large>Schedule an Appointment Today!</v-btn>
    </div>
  </div>
</template>
<script>
export default {
    name: 'hero',
    methods: {
      
    }
}
</script>
<style scoped>

.hero {
  position: relative;
  margin-top: 4rem;
}
.hero video {
  width: 100%;
}
.hero-content {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  padding: 2rem 1.5rem;
  border-radius: 15px;
  background-color: rgb(233,232,235, 0.85);
  transform: translateX(-50%);
  text-align: center;
}
.hero-content h3 {
  text-align: center;
  color: #000000;
}
.hero-content button {
  background-color: #5ebcf3;
  color: #ffffff;
}

@media screen and (max-width: 1200px) {
  .hero-content {
    position: relative;
    bottom: auto; left: auto;
    max-width: 400px;
    margin: 0 auto;
    margin-top: -5rem;
    transform: none;
    padding: 1rem;
  }
}

</style>