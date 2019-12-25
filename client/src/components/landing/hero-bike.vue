<template>
  <div class="hero-bike">
    <h3 class="hero-title">
      Your Pets Will Love You (Really)
    </h3>

    <br />
    <br />
    <br />
    <br />
    
    <button @click="$emit('scrollTo', 'appointment')" color="#FF5257" class="hero-cta-button">Get Started</button>


    <br/>
    <div class="hero-image-container">
      <v-img src="../images/joy-ride.png" />
    </div>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style scoped>
  .hero-bike {
    margin-top: 230px;
    width: 100%;
    text-align: center;
    background-color: #ffffff;
  }

  .hero-title {
    font-size: 48px;
    font-weight: 500;
  }

  .hero-cta-button {
    padding: 0 2rem;
    background-color: #FF5257;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 1rem 2rem;
  }

  .hero-image-container {
    max-width: 650px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>