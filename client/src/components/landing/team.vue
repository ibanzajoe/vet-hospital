<template>
  <div class="about">
    <div class="title-banner">
      <h3 class="display-2 text-center">Our Team</h3>
    </div>


    <v-layout
    column
    align-center>
      <v-container class="py-10">
        <div class="about-section mt-10">
          <div class="about-image-box">
            <v-img
              src="../images/Dr-Kirszenbaum.png"
              aspect-ratio="1"
              class="about-image"
              width="100%"
              max-width="400"
              max-height="400"
            ></v-img>
            <span class="subtitle-1">Lital Kirszenbaum, DVM, MS – Owner</span>
          </div>

          <div class="about-content-box">
            <v-layout
              align-center
              justify-center
              column
            >
              <h3 class="headline">
                When I started volunteering at the Los Angeles zoo, I worked with golden lion tamarins. 
                Then, on the weekends, I began working at a veterinary clinic in North Hollywood. 
                I remember assisting the veterinarian with all of duties... 
              </h3>
            </h3>
            </v-layout>
            
          </div>
        </div>

      </v-container>


      <v-container class="py-10">
        <div class="about-section about-reverse mt-10">

          <div class="about-content-box">
            <v-layout
              align-center
              justify-center
              column
            >
              <h3 class="headline">
                Dr Pauline Perry graduated from UC Davis, School of Veterinary Medicine in 1992 and attended Loyola Marymount University for her BS in biology.
              </h3>
            </h3>
            </v-layout>
            
          </div>

          <div class="about-image-box">
            <v-img
              src="../images/Dr.-Perry-Photo-New.jpg"
              aspect-ratio="1"
              class="about-image"
              width="100%"
              max-width="400"
              max-height="400"
            ></v-img>
            <span class="subtitle-1">Pauline Perry, DVM</span>
          </div>

        </div>

      </v-container>


      <v-container class="py-10">
        <div class="about-section mt-10">
          <div class="about-image-box">
            <v-img
              src="../images/roger.jpg"
              aspect-ratio="1"
              class="about-image"
              width="100%"
              max-width="400"
              max-height="400"
            ></v-img>
            <span class="subtitle-1">Roger Koodish, RVT</span>
          </div>

          <div class="about-content-box">
            <v-layout
              align-center
              justify-center
              column
            >
              <h3 class="headline">
                Roger has been working at Pet Vet Animal Hospital as a Registered Veterinary Technician since 2005. He has worked in the veterinary field since 1998 at various hospitals in the Los Angeles area. 
              </h3>
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