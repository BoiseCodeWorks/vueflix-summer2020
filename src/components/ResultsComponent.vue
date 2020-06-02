<template>
  <div class="resultsComponent col-6">
    Movies!
    <!-- <ol>
      <li v-for="movie in movies" :key="movie.id" @click="setActiveMovie(movie)">{{movie.title}}</li>
    </ol>-->
    <poster v-for="movie in movies" :key="movie.id" :movieProp="movie" />
  </div>
</template>


<script>
import Poster from "./PosterComponent";
export default {
  name: "resultsComponent",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  methods: {
    setActiveMovie(movie) {
      this.$store.dispatch("setActiveMovie", movie);
    }
  },
  components: { Poster }
};
</script>


<style scoped>
</style>