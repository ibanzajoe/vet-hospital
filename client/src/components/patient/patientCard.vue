<template>
   <v-card
    class="patientCard mx-auto"
    max-width="250"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="portrait"
    >
      <v-card-title>{{pet.pet_name}} - {{pet.pet_type}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{pet.pet_dob}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <h3 class="subtitle-2">Owner</h3>
      <div>{{owner.owner_name}}</div>

      <div>{{owner.phone}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
      color="orange"
      text
      >
      Share
      </v-btn>

      <v-btn
      color="orange"
      text
      >
      Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    portrait: {
      type: String,
      default: '/images/beagle.jpeg'
    },
    owner: {
      type: Object,
      default: () => {
        return {
          owner_name: {
            type: String,
            default: 'Oscar Wild'
          },
          phone: {
            type: String,
            default: '818-497-4098'
          }
        }
      }
    },
    pet: {
      type: Object,
      default: () => {
        return {
          pet_name: {
            type: String,
            default: 'Charlie'
          },
          pet_type: {
            type: String,
            default: 'Dog'
          },
          pet_dob: {
            type: String,
            default: '12/2/2009'
          }
        }
      }
    }
  }
}
</script>
<style scoped>
.patientCard {
  cursor: pointer;
}
.patientCard:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.09), 0 8px 16px rgba(0, 0, 0, 0.18);
}
</style>