<template>
  <article class="celeb">
    <h3>{{ celeb.name }}</h3>
    <p>Gender:{{ celeb.gender }}</p>
    <p>Age:{{ celeb.age }}</p>
    <p v-if="celeb.tool === true"
      :class="{ tool: celeb.tool === true }">
      <strong>TOOL ALERT!!</strong>
    </p>
    <p>{{ celeb.description }}</p>
  </article>
</template>

<script>
import api from '../services/api';
export default {
  data() {
    return {
      celeb: null,
    };
  },
  created() {
    api.getCelebById(this.$route.params.id)
      .then(celeb => {
        this.celeb = celeb;
      });
  }
};
</script>

<style>
.tool {
    color: red;
}
</style>
