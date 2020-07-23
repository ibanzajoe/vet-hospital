<template>
  <div class="patientPage">
    <v-sheet class="patientSheet" width="100%" elevation="1">
      <div class="patientDetailContainer">
        <div class="patientQuickInfo"> 
          <div class="patientImageContainer">
            
            <img :src="currentPatient.pet_image" />
            
          </div>
          <div class="patientContent">
            <p class="ContentTitle"><strong>Patient Name</strong>: {{currentPatient.pet_name}}</p>
            <p class="ContentInfo">Patient Type: {{currentPatient.pet_type}}</p>
            <p class="ContentInfo">Date of Birth: {{getDate(currentPatient.pet_dob)}}</p>
          </div>
          <div class="ownerContent">
            <p class="ContentTitle">Owner Name: {{currentPatient.owner_first_name}} {{currentPatient.owner_last_name}}</p>
            <p class="ContentInfo">Phone: {{currentPatient.phone}}</p>
            <p class="ContentInfo">Email: {{currentPatient.email}}</p>
          </div>
          <div class="addressContent">
            <p class="ContentTitle">Address:</p>
            <p class="ContentInfo">{{currentPatient.address}} {{currentPatient.address2}}</p>
            <p class="ContentInfo">{{currentPatient.city}}, {{currentPatient.state}} {{currentPatient.zip}}</p>
          </div>
        </div>
        <div class="patientNotes">
          <pre>{{currentPatient}}</pre>
        </div>
      </div>
    </v-sheet>
  </div>  
</template>
<script>

export default {
  async fetch ({route, store}) {
    console.log('this is the product id: ', route.params.id)
    return Promise.all([
      store.dispatch('getPatientById', route.params.id)
    ])
  },
  layout: 'admin-layout',
  computed: {
    currentPatient() {
      return this.$store.state.currentPatient
    }
  },
  methods: {
    getDate(date) {
      const dob = new Date(date)
      return dob.toString().substring(0, 15)
    }
  }
  
}
</script>
<style scoped>
.patientSheet {
  width: 100%;
  background-color: #ffffff;
  padding: 2rem;
}
.patientDetailContainer {
  display: flex;
  height: calc(100vh - 175px);
}
.patientDetails, .patientNotes {
  height: 100%;
  flex: 1 1;
}
.patientDetails {
  background-color:pink;
}
.patientNotes {
  background-color:darkgreen;
  height: 100%;
}
.patientQuickInfo + .patientNotes {
  margin-left: 1rem;
}
.patientQuickInfo {
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #e9e8eb;
  overflow: hidden;
}
.patientImageContainer {
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border: 1px solid #e9e8eb;
  border-radius: 1000px;
  overflow: hidden;
}
.patientImageContainer img {
  height: 100%;
  width: auto;
}
.patientContent, .ownerContent, .addressContent {
  margin-top: 1.5rem;
}
.ContentTitle {
  text-transform: capitalize;
}
.ContentTitle, .ContentInfo {
  margin: 0.25rem;
}

</style>