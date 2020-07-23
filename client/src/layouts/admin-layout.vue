<template>
  <v-app>
    <v-layout style="height: 100vh;">
      <v-navigation-drawer
        v-model="drawer"
        permanent
        clipped
        dark
        :mini-variant.sync="mini"
        width="216"
        height="100%"
        id="left-menu"
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <v-app-bar
          clipped-left
        >
          <v-app-bar-nav-icon
            @click="mini = !mini"
          ></v-app-bar-nav-icon>

          <v-img
            src="../images/pet-vet-logo.jpg"
            class="grey lighten-2 vet-logo"
            max-width="150"
            max-height="100%"
            @click="$router.push('/')"></v-img>

          <v-spacer></v-spacer>

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn 
                v-on="on"
                icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item style="cursor: pointer;">
                <v-list-item-title>Log Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        </v-app-bar>

        <v-container fluid>
          <nuxt />
        </v-container>
      </v-content>
    </v-layout>

  </v-app>
</template>

<script>
  export default {
    name: "admin-layout.vue",
    data () {
      return {
        clipped: false,
        drawer: true,
        mini: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-calendar-clock',
            title: 'Calendar',
            to: '/account/calendar'
          },
          {
            icon: 'mdi-apps',
            title: 'Clients',
            to: '/admin/clientList'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style scoped>
  .vet-logo {
    cursor: pointer;
  }
</style>
