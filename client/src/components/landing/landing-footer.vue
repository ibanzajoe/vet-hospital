<template>
  <div class="landing-footer">
    <v-container>
      <v-row justify="space-between" class="questions footer-section">
        <v-col>
          <h3 class="display-2">
            Pet Vet Animal Hospital
          </h3>
        </v-col>

        <v-col class="questions-contact-info">
          Questions about our hospital?
          <br/>
          Call us Monday - Friday 9AM - 6PM
          <br/>
          Saturdays 9AM - 3PM
          <br/>
          Phone: (818) 346 - 2455
        </v-col>
      </v-row>
      <v-row justify="space-between" class="links footer-section">
        <v-col class="links-category">
          <p class="links-title">
            About Us
          </p>
          <ul>
            <li>
              <nuxt-link to="/about">Pet Vet Advantage</nuxt-link><br/>
            </li>
            <li>
              <nuxt-link to="/team">Our Team</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col class="links-category">
          <p class="links-title">
            New Clients
          </p>
          <ul>
            <li>
              <nuxt-link to="/newclient">Registration</nuxt-link><br/>
            </li>
            <li>
              <nuxt-link to="/insurance">Pet Insurance</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col class="links-category">
          <p class="links-title">
            Appointments
          </p>
          <a @click="$emit('scrollTo', 'appointment')">Schedule Appointment</a>
        </v-col>
        <v-col class="links-category">
          <p class="links-title">
            Our Services
          </p>
          <ul>
            <li>
              <nuxt-link to="/services">Services</nuxt-link><br/>
            </li>
            <li>
              <nuxt-link to="/store">Online Store</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col class="links-category">
          <p class="links-title">
            Connect
          </p>
          <ul>
            <li>
              <nuxt-link to="/contact">Contact</nuxt-link><br/>
            </li>
            <li>
              <nuxt-link to="/newsletter">Newsletter</nuxt-link>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row justify="space-between" class="copyright footer-section-end">
        <v-col class="copyright-links">
          <p class="copyright-text">© 2019 Pet Vet Hospital</p>
        </v-col>
        <v-col class="copyright-links">
          <nuxt-link to="/tos">Terms of Service</nuxt-link>
        </v-col>
        <v-col class="copyright-links">
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        </v-col>
        <v-col class="copyright-links">
          <nuxt-link to="/compliance">Compliance</nuxt-link>
        </v-col>
        <v-col class="copyright-links">
          
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.landing-footer {
  background-color: #001837;
  width: 100%;
  color: #ffffff;
}

.footer-section {
  border-bottom: 1px solid rgba(222,225,229,0.25);
  padding: 2rem 0;
}

.footer-section-end {
  padding-top: 2rem;
}

.questions-contact-info {
  text-align: right;
}

.links a {
  color: rgba(255,255,255,0.7);
}
.links ul {
  list-style: none;
  padding: 0;
}
.links li {
  margin-bottom: 0.5rem;
}
.copyright-links a {
  color: rgba(255,255,255,0.7);
}
</style>