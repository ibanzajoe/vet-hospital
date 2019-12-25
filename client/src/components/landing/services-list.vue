<template>
  <div class="services-list">
    <v-container>
      <div class="services-grid">
        <div class="left-side">
          <service-card v-for="(service, index) in serviceLists.left" 
                        :key="index" 
                        :serviceTitle="service.title" 
                        :serviceContent="service.content" 
                        direction="right"
                        :class="{'pr-10': index == 1}"
                        />
        </div>
        <div class="center-side">

        </div>
        <div class="right-side">
          <service-card v-for="(service, index) in serviceLists.right" 
                        :key="index" 
                        :serviceTitle="service.title" 
                        :serviceContent="service.content" 
                        :class="{'pl-10': index == 1}"
                        />
        </div>
      </div>
    </v-container>
  </div>  
</template>
<script>
import serviceCard from './service-card'
export default {
  props: {
    services: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: { serviceCard },
  computed: {
    serviceLists() {
      let leftSide = this.services.slice(0, 3)
      let rightSide = this.services.slice(3, 6)
      return {left: leftSide, right: rightSide}
    }
  }
}
</script>
<style scoped>

.services-list {
  
}
.services-grid {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 325px 1fr;
  align-items: center;
}

.center-side {
  height: 450px;
  width: 325px;
  background-image: url('./corgi.png');
  background-position: center bottom;
  background-size: 100%;
}
</style>