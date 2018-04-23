<template>
  <div>
    <md-card v-for="cat in cats" :key="cat.title" v-if='cat.images/original.url'>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:1">
          <img :src="cat.images.original.url" :alt="cat.title">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ cat.title }}</span>
            <span class="md-subhead">{{ cat.type }}</span>
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
      fetch('https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cats&limit=25&offset=0&rating=G&lang=en')
        .then(function (response) {
          return response.json()
        }).then(function (catsJson) {
          current.cats = catsJson.data
        });
    }
  }
}
</script>
