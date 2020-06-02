<template>
  <div class="PosterComp" @click="setActiveMovie(movieProp)">
    <div class="card">
      <!-- {{movieProp}} -->
      <img
        class="card-img-top"
        :src="'https://image.tmdb.org/t/p/w500' + movieProp.poster_path "
        alt
      />
      <div class="card-body">
        <h4 class="card-title">{{movieProp.title}}</h4>
        <p class="card-text">{{movieProp.overview}}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PosterComp",
  data() {
    return {};
  },
  computed: {},
  methods: {
    setActiveMovie(movie) {
      this.$store.dispatch("setActiveMovie", movie);
    }
  },
  components: {},
  //receiving of prop on child component
  props: ["movieProp"]
};
</script>


<style scoped>
</style>