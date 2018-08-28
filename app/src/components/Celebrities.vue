<template>
  <section>
    <h1>Celebs</h1>
    <ul>
      <Celeb />
    </ul>
  </section>
</template>

<script>
import api from '../services/api.js';
import Celeb from './Celeb.vue';
export default {
  data() {
    return {
      celebrities: null
    };
  },
  created() {
    api.getCelebrities() 
      .then(celebrities => {
        this.celebrities = celebrities;
      });
    
  },
  components: {
    Celeb
  }
};
</script>

<style>

</style>
