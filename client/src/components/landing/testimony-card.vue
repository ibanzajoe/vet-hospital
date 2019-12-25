<template>
  <div class="testimony-card">
    <usercard :userImage="testimony.userImage" :username="testimony.username" :role="testimony.role" />
    <p class="subtitle-1 mt-5">{{testimony.content}}</p>
  </div>  
</template>
<script>
import usercard from '../../components/user-card'
export default {
  props: {
    testimony: {
      userImage: {
        type: String,
        default: '../images/cat-clipart.png'
      },
      username: {
        type: String,
        default: 'Sarah Conner'
      },
      role: {
        type: String,
        default: 'CEO'
      },
      content: {
        type: String,
        default: 'Citizen centered triple bottom line move the needle strategize problem solvers the resistance commitment bandwidth strategize.  Social innovation strategize, black lives matter catalyze thought leader shine empathetic.'
      }
    }
  },
  components: {
    usercard
  }
}
</script>
<style scoped>
.testimony-card {
  padding: 1.5rem;
  background-color: rgba(254, 253, 249, 0.70);

}
</style>