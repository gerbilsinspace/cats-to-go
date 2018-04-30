<template>
  <div class='cat-container'>
    <md-card v-if='error'>
     <h1>{{error}}</h1>
    </md-card>
    <md-card v-for="cat in cats" :key="cat.id" v-if='cat.images.fixed_height.url'>
      <md-card-media-cover md-solid>
        <md-card-media>
          <img :src="cat.images.fixed_height.url" :alt="cat.title">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span>{{ cat.title.replace(' GIF', '') }}</span>
          </md-card-header>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'cats',
  data: () => ({
    cats: [],
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
          current.error = 'You appear to be offline, no cats for you...'
        })
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

  .md-card-header {
    padding: 0.5em 1em;
  }

  .md-card-header span {
    font-size: 1.2em;
    margin: 8px 0 0 0;
  }
</style>