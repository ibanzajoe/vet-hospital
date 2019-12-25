<template>
  <div class="user-card">
    <div class="user-card-header">
      <user-portrait :userImage="userImage" />
      <user-info :username="username" :role="role" />
    </div>
  </div>  
</template>
<script>
import userPortrait from './user-portrait'
import userInfo from './user-info'
export default {
  props: {
    userImage: {
      type: String,
      default: null
    },
    username: {
      type: String,
      default: 'Roger'
    },
    role: {
      type: String,
      default: 'Tech'
    }
  },
  components: {
    userPortrait, userInfo
  }
}
</script>
<style scoped>
.user-card {
  width: 100%;
}
.user-card-header {
  display: flex;
  align-content: center;
  width: 100%;
}
.user-portrait {
  flex: 0 0 60px;
  height: 60px;
  border-radius: 1000px;
  border: 1px solid #e9e8eb;
}
.user-info {
  flex: 1 1;
}
</style>