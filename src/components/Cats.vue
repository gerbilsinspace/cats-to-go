<template>
  <div class='cat-container'>
    <md-card v-for="cat in cats" :key="cat.id" v-if='cat.images.original.url'>
      <md-card-media-cover md-solid>
        <md-card-media>
          <img :src="cat.images.fixed_width.url" :alt="cat.title">
        </md-card-media>


        <md-card-area>
          <md-card-header style="min-height: 50px">
            <span class="md-title">{{ cat.title }}</span>
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
    cats: []
  }),
  created () {
    this.getCats()
  },
  methods: {
    getCats () {
      const current = this
      fetch('https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cat&limit=25&offset=0&rating=G&lang=en')
        .then(function (response) {
          return response.json()
        }).then(function (catsJson) {
          current.cats = catsJson.data
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
  .cat-container {
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
  }
</style>