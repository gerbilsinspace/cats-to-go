<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class='md-primary'>
        <span class='md-title'>Cats To Go</span>
      </md-app-toolbar>

      <md-app-content>
        <Cats />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css' // This line here
import { createDB } from './utils/indexed-db.js';

import Cats from './components/Cats.vue'

Vue.use(VueMaterial)

createDB();

export default {
  name: 'app',
  components: {
    Cats
  }
}
</script>
