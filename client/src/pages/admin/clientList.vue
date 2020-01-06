<template>
  <div class="clientList">
    <v-row align-content="center" justify="space-between" class="px-2" >
      <v-col>
        Hello
      </v-col>
      <v-col justify="flex-end" cols="3">
        <v-row align-content="center" justify="end">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on }">
              <v-btn class="addButton primary" v-on="on">Add New</v-btn>
            </template>
            <add-patient-modal @createNewPatient="createNewPatient($event)" />
          </v-dialog>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <pre>{{patientList}}</pre>
    </v-row>

    <v-btn @click="testCreateNewPatient">test</v-btn>


    
    
  </div>  
</template>
<script>
import addPatientModal from '~/components/patient/addPatientModal'

export default {
  layout: 'admin-layout',
  fetch({store}) {
    return Promise.all([
      store.dispatch('getPatients')
    ])
  },
  components: {
    addPatientModal
  },
  computed: {
    patientList () {
      return this.$store.state.patientList
    }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    createNewPatient(payload) {
      this.$store.dispatch('createNewPatient', {payload})
        .then(res => {
          console.log('this is the return on /createnewPatient: ', res)
        })
    },
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