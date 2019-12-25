<template>
  <div class="about">
    <v-layout
    column
    align-center>
      <v-container class="pt-10">
        <div class="header-icon">
          <v-img src="../images/mouse-icon.png" max-height="60px" max-width="60px" />
        </div>

        <h3 class="display-2 text-center" style="line-height: 1.35;">Meet Professional
          <br />
          Care You Can Trust
        </h3>

        <br />

        <p class="body-2 text-center" style="line-height: 2; max-width: 750px; margin: 0 auto;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet efficitur tortor, nec laculis neque.  Nullam pharetra tempus lorem eget efficitur.  Mauris vel orci congue, vulputate libero ac, pretium eros. Quisque sit amet tellus viverra, imperdiet diam sit amet, bibendum neque. Nunc eget tincidunt est.  Mauris risus risus, vehicula id ultrices vel, egestas quis justo. Proin cursus purus sit amet libero tempus, ullamcorper imperdiet risus lacinia.
        </p>

        <div class="business-cards">
          <template v-for="(image, index) in businessImages" >
            <div class="business-card" :key="index">
              <v-img :src="image" max-height="100px" max-width="250px" />
            </div>
          </template>
        </div>

      </v-container>

    </v-layout>

  </div>
</template>
<script>
export default {
    name: 'about',
    data () {
      return {
        businessImages: [
          '../images/business-startuphaus.png',
          '../images/business-hesahot.png',
          '../images/business-studio.png',
          '../images/business-theone.png'
        ]
      }
    }
}
</script>
<style scoped>

.about {
  width: 100%;
  height: 100%;
}

.header-icon {
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
}

.business-cards {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5rem 0;
  flex-wrap: wrap;
}

.business-card {
  flex: 1 1 20%;
  display: flex;
  justify-content: center;
  align-content: center;
}

@media screen and (max-width: 740px) {
  
}

</style>