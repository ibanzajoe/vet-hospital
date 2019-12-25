<template>
  <div class="user-info">
    <div>  
      <p class="title">{{username}}</p>
      <p class="subtitle-2">{{role}}</p>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    username: {
      type: String,
      default: 'Sarah Conner'
    },
    role: {
      type: String,
      default: 'Client'
    }
  }
}
</script>
<style scoped>
.user-info {
  padding-left: 1rem;
  display: flex;
  align-content: center;
}
p {
  margin: 0;
}
</style>