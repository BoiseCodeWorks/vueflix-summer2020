<template>
  <div class="activeMovie col-6">
    <p>ActiveMovieComp</p>
    <!-- setting the prop through databinding :propName="propValue"  -->
    <poster :movieProp="activeMovie" />
  </div>
</template>


<script>
import Poster from "./PosterComponent.vue";
export default {
  name: "activeMovie",
  data() {
    return {};
  },
  computed: {
    activeMovie() {
      return this.$store.state.activeMovie;
    }
  },
  methods: {},
  components: { Poster }
};
</script>


<style scoped>
</style>