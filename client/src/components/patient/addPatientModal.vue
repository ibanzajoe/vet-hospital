<template>
  <v-sheet class="addPatientModal">
    <div v-if="card_position == 1" class="addPatientCard is_one">
      <h3>Owner Information</h3>
      <v-form>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.email" label="Owner Email" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.password" label="Password" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.owner_first_name" label="First Name" outlined hide-details />
          </v-col>
          <v-col>
            <v-text-field v-model="payload.owner_last_name" label="Last Name" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.address" label="Address" outlined hide-details />
          </v-col>
          <v-col sm="4" >
            <v-text-field v-model="payload.address2" label="Suite/Apt" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.city" label="City" outlined hide-details />
          </v-col>
          <v-col>
            <v-text-field v-model="payload.state" label="State" outlined hide-details />
          </v-col>
          <v-col>
            <v-text-field v-model="payload.zip" label="Zip" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-spacer />
          <v-col sm="5">
            <v-btn @click="card_position++" class="primary">Pet Information</v-btn>
          </v-col>
        </v-row>
      </v-form>
      
    </div>
    <div v-if="card_position == 2" class="addPatientCard is_two">
      <h3>Pet Information</h3>
      <v-form>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.pet_name" label="Pet Name" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-text-field v-model="payload.pet_type" label="Pet Type" outlined hide-details />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col>
            <v-menu
              v-model="dateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="payload.pet_dob"
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar-clock"
                  readonly
                  outlined
                  hide-details
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="payload.pet_dob" @input="dateMenu = false"></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-form>
      <v-row dense>
        <v-col>
          <v-btn @click="card_position--" class="primary">Back</v-btn>
        </v-col>
        
        <v-spacer />
        <v-col>
          <v-btn @click="card_position++" class="primary">Upload Image</v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-if="card_position == 3" class="addPatientCard is_three">
      <h3>Pet Image Upload</h3>
      <v-row justify="center" dense>

        <v-btn v-if="!this.payload.pet_image" class="primary">
          <file-upload
            :single_select="true"
            @files="handleFile($event)"
          />
        </v-btn>

        <div v-else class="image_window">
          <v-img :src="this.payload.pet_image" />
        </div>

      </v-row>
      

      <v-row dense>
        <v-btn @click="card_position--" class="primary">Prev</v-btn>
        <v-btn @click="$emit('createNewPatient', payload)" class="primary">Finish</v-btn>
      </v-row>

      
    </div>

  </v-sheet>  
</template>
<script>
import fileUpload from '~/components/utility/file-upload'
export default {
  components: {
    fileUpload
  },
  data () {
    return {
      card_position: 1,
      dateMenu: false,
      payload: {
        email: '',
        password: '',
        phone: '',
        owner_first_name: '',
        owner_last_name: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        pet_name: '',
        pet_type: '',
        pet_dob: '',
        pet_image: ''
      }
    }
  },
  methods: {
    handleFile(file) {
      console.log('this is the file: ', file)
      this.payload.pet_image = file[0].url
    }
  }
}
</script>
<style scoped>
.addPatientCard {
  min-height: 200px;
  min-width: 75%;
  padding: 2rem;
}

.image_window {
  width: 300px;
  height: auto;
  padding: 1rem;
}
</style>