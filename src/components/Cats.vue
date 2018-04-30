<template>
  <div class='cat-container'>
    <md-card v-if='error' class="error-card">
     <h1>{{error}}</h1>
    </md-card>
    <md-card v-for="cat in cats" :key="cat.id">
      <md-card-media-cover md-solid>
        <md-card-media>
          <img v-if='!error' :src="cat.images.fixed_height.url">
          <img v-if='cat.blobReady' :src="cat.gif">
        </md-card-media>

        <md-card-area>
          <md-card-actions>
            <md-button @click.native="saveCat(cat)">
              <span v-if="!savedCats.includes(cat.id)">Save Cat</span>
              <span v-if="savedCats.includes(cat.id)">[Saved]</span>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
import { saveData, getData } from '../utils/indexed-db.js';

export default {
  name: 'cats',
  data: () => ({
    cats: [],
    savedCats: [],
    error: false
  }),
  created () {
    this.getCats()
  },
  methods: {
    getCats () {
      const current = this
      fetch('https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cat&limit=10&offset=0&rating=G&lang=en')
        .then(function (response) {
          return response.json()
        }).then(function (catsJson) {
          current.cats = catsJson.data
        }).catch(() => {
          current.error = 'You appear to be offline, here are your saved cats...'
          getData('gifs').then(data => {
            current.savedCats = data.map(cat => cat.id)
            current.cats = data

            data.forEach(c => {
              const reader = new FileReader();
              reader.addEventListener('loadend', () => {
                const index = current.cats.findIndex(i => i.id === c.id);
                current.cats[index] = { id: c.id, gif: reader.result, blobReady: true }
                current.cats = [ ...current.cats ];
              });
              reader.readAsDataURL(c.gif);
            });
          });
        });
    },
    saveCat (cat) {
      if (this.savedCats.includes(cat.id)) {
        this.savedCats.splice(this.savedCats.indexOf(cat.id), 1)
        // removeData([cat]);
      } else {
        this.savedCats.push(cat.id)
        saveData('metadata', [cat])
        saveData('gifs', [cat].map(c => ({
          type: 'blob',
          id: c.id,
          url: c.images.fixed_height.url
        })))
      }
    }
  }
}
</script>

<style>
  .cat-container {
    margin: 0 auto;
    width: 100%;
    max-width: 1320px;
  }

  .error-card {
    width: 100%;
  }

  .md-card {
    float: left;
    margin: 0 0 2em 0;
  }

  .md-card-media-cover {
    overflow: hidden;
  }
</style>