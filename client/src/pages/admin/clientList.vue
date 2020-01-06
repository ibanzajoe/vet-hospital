<template>
  <div class="clientList">
    <v-row align-content="center" justify="space-between" class="px-2" >
      <v-spacer />
      <v-col justify="flex-end" cols="3">
        <v-row align-content="center" justify="end">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn class="addButton primary" v-on="on">Add New</v-btn>
            </template>
            <add-patient-modal @closeDialog="dialog = false" />
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="start">
      <template v-for="(patient, index) in patientList">
        <v-col v-if="patient.email" :key="index" sm="3">
          <patient-card :owner="{owner_name: patient.owner_first_name + ' ' + patient.owner_last_name, phone: patient.phone }"
                        :pet="{pet_name: patient.pet_name, pet_type: patient.pet_type, pet_dob: patient.pet_dob}" 
                        :portrait="patient.pet_image"
                        />
        </v-col>
      </template>
    </v-row>
    
  </div>  
</template>
<script>
import addPatientModal from '~/components/patient/addPatientModal'
import patientCard from '~/components/patient/patientCard'

export default {
  layout: 'admin-layout',
  fetch({store}) {
    return Promise.all([
      store.dispatch('getPatients')
    ])
  },
  components: {
    addPatientModal, patientCard
  },
  computed: {
    patientList () {
      return this.$store.state.patientList
    }
  },
  data () {
    return {
      dialog: false,
      hovered: false,
    }
  },
  methods: {
    
    testCreateNewPatient () {
      return this.$axios.post('/createNewPatient', {hello: 'goodbye', moron: 'hello'})
      .then( res => {
        console.log('this is the return on /createNewPatient: ', res.data)
        return res.data
      })
    }
  }
  
}
</script>
<style scoped>

</style>