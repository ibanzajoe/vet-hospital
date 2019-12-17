<template>
  <div class="about">
    <div class="title-banner">
      <h3 class="display-2 text-center">Set an Appointment!</h3>
    </div>


    <v-layout
    column
    align-center>
      <v-container class="py-10">
        <!-- Calendly inline widget begin -->
          <div class="calendly-inline-widget" data-url="https://calendly.com/ibanzajoe/60min" style="min-width:320px;height:630px;"></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
        <!-- Calendly inline widget end -->

      </v-container>
    </v-layout>

    <div class="empty-box">

    </div>

  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.about {
  width: 100%;
  height: 100%;
}

.title-banner {
  background-color: #5ebcf3;
  padding: 2rem 0;
}

.about-section {
  display: flex;
  align-content: center;
  justify-content: center;
}
.about-image-box, .about-content-box {
  flex: 1 1 50%;
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.about-image-box {
  flex-direction: column;
  align-items: center;
}
.about-image {
  border: 8px solid #000000;
}

.is-round {
  border-radius: 1000px;
}

.for-desktop {
  display: none;
}
.for-mobile {
  display: flex;
}

.empty-box {
  height: 300px;
  
}

@media screen and (max-width: 740px) {
  .about-section {
    flex-wrap: wrap;
  }
  .about-image-box, .about-content-box {
    flex: 1 1 100%;
    text-align: center;
  }
  .about-content-box {
    padding: 1rem 3rem;
  }
  .for-desktop {
    display: flex;
  }
  .for-mobile {
    display: none;
  }
}

</style>