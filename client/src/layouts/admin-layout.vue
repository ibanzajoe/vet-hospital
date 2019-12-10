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
        <v-toolbar
          :clipped-left="clipped"
          app
        >
          <v-app-bar-nav-icon
            @click="mini = !mini"
          ></v-app-bar-nav-icon>

          <v-img
            src="../images/listicle_og_logo.png"
            class="grey lighten-2"
            max-width="150"
            max-height="100%"></v-img>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>


        </v-toolbar>

        <v-container>
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
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
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

</style>
