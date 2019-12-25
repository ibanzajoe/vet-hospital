<template>
  <div class="team">
    <v-layout align-center justify-center column>
      <v-container>
        <h3 class="display-1 text-center">
          Meet Our
          <br/>
          Expert Teams
        </h3>

        <p class="body-2 text-center py-3" style="line-height: 2; max-width: 750px; margin: 0 auto;">
          Blended value empower communities, we must stand up empathetic circular boots

          <br />
          on the ground.  Segmentation, targeted concreate academic blended value.

        </p>

        <div class="team-portraits">
          <template v-for="(member, index) in teams">
            <team-portrait :key="index" :image="member.image" :caption="member.caption" />
          </template>
        </div>
      </v-container>

      
    </v-layout>
  </div>
</template>
<script>
import teamPortrait from './team-portrait'
export default {
  components: {
    teamPortrait
  },
  data () {
    return {
      teams: [
        {
          image: '../images/Dr-Kirszenbaum.png',
          caption: {
            name: 'Lital Kirszenbaum',
            title: 'DVM, MS - Owner',
            role: 'Owner, Pet Doctor'
          }
        },
        {
          image: '../images/Dr.-Perry-Photo-New.jpg',
          caption: {
            name: 'Pauline Perry',
            title: 'DVM',
            role: 'Pet Doctor'
          }
        },
        {
          image: '../images/roger.jpg',
          caption: {
            name: 'Roger Koodish',
            title: 'RVT',
            role: 'Technician'
          }
        },
        {
          image: '../images/shaun-300x300.jpg',
          caption: {
            name: 'Shaun Cunningham',
            title: 'RVT',
            role: 'Technician'
          }
        }
      ]
    }
  }
}
</script>
<style scoped>

.team {
  width: 100%;
  height: 100%;
}

.title-banner {

}

.team-portraits {
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5rem 1rem;
  width: 100%;
}

.portrait-container {
  flex: 1 1 25%;
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

@media screen and (max-width: 768px) {

  .portrait-container {
    flex: 1 1 50%;
  }


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