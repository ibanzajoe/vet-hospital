<template>
  <div class="user-portrait">
    <v-img class="user-image" :src="userimage" height="75px" width="75px" />
  </div>  
</template>
<script>
export default {
  props: {
    userimage: {
      type: String,
      default: '../images/cat-clipart.png'
    }
  }
}
</script>
<style scoped>
.user-portrait {
  border-radius: 1000px;
  background-color: #e9e8eb;
  overflow: hidden;
}
</style>