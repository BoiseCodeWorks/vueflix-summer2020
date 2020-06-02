<template>
  <div class="home container">
    <div class="row">
      <div class="col">
        <h1>
          MO
          <img alt="Vue logo" src="../assets/logo.png" />
          IES
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <form @submit.prevent="searchMovies">
            <input
              type="text"
              class="form-control"
              placeholder="Search for a movie"
              v-model="query"
            />
            <button type="submit" class="btn btn-primary">Search</button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- {{movies}} -->
      <results />
      <active-movie />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Results from "@/components/ResultsComponent";
import ActiveMovie from "@/components/ActiveMovieComponent";
export default {
  name: "Home",
  data() {
    return {
      query: ""
    };
  },
  //computeds automatically register listeners
  computed: {},
  components: {
    Results,
    ActiveMovie
  },
  methods: {
    searchMovies() {
      this.$store.dispatch("searchApi", this.query);
    }
  }
};
</script>
