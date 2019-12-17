<template>
  <div class="about">
    <v-layout
    column
    align-center>
      <v-container class="py-10">
        <h3 class="display-2 text-center">About Pet Vet Animal Hospital</h3>

        <div class="about-section mt-10">
          <div class="about-image-box">
            <v-img
              src="../images/dog-boy.jpg"
              aspect-ratio="1"
              class="about-image"
              max-width="400"
              max-height="400"
            ></v-img>
          </div>

          <div class="about-content-box">
            <v-layout
              align-center
              justify-center
            >
              <h3 class="headline">
              Pet Vet Animal Hospital is proud to serve Canoga Park, CA and surrounding areas.
              <br/><br/>
              We are dedicated to providing the highest level of veterinary medicine along with friendly, compassionate service.
            </h3>
            </v-layout>
            
          </div>
        </div>

      </v-container>

    </v-layout>

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

.about-section {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 3rem 0;
}
.about-image-box, .about-content-box {
  flex: 1 1 50%;
  padding: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
}
.about-image {
  border: 8px solid #000000;
}

.is-round {
  border-radius: 1000px;
}

@media screen and (max-width: 740px) {
  .about-section {
    flex-wrap: wrap;
    padding: 1rem 0;
  }
  .about-image-box, .about-content-box {
    flex: 1 1 100%;
    text-align: center;
  }
  .about-content-box {
    padding: 1rem 3rem;
  }
}

</style>