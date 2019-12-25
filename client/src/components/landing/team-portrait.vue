<template>
  <div class="portrait-container">
    <div class="portrait-image">
      <v-img :src="image" 
             max-height="400px" 
             max-width="275px"
             position="center center"
             aspect-ratio="0.75"
              />
    </div>

    <div class="portrait-info">
      <span :class="{'body-2 font-weight-medium': $vuetify.breakpoint. smAndDown, 'title': $vuetify.breakpoint. mdAndUp}" >{{caption.name}}</span>
      <p class="mt-2" 
        :class="{'caption': $vuetify.breakpoint. smAndDown, 'body-1': $vuetify.breakpoint. mdAndUp}"
       >{{caption.role}}</p>
    </div>

  </div>  
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: null
    },
    caption: {
      name: 'Amanda Hugankiss',
      role: 'Pet Doctor'
    }
  }
}
</script>
<style scoped>
.portrait-container {
  text-align: center;
  padding: 1rem;
}
.v-image {
  margin: 0 auto;
}

.portrait-info {
  padding: 1rem;
  min-height: 150px;
}
</style>