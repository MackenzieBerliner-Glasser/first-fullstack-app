<template>
  <section>
    <h1>Celebs</h1>
    <ul>
      <Celeb
        v-for="(celeb, index) in celebrities"
        :key="index"
        :celeb="celeb"
      />
    </ul>
    <AddCeleb :on-add="handleAdd"/>
  </section>
</template>

<script>
import api from '../services/api.js';
import Celeb from './Celeb.vue';
import AddCeleb from './AddCeleb.vue';
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
    Celeb,
    AddCeleb
  },
  methods: {
    handleAdd(celeb) {
      return api.addCeleb(celeb)
        .then(saved => {
          this.celebrities.push(saved);
        });
    }
  }
};
</script>

<style>
ul {
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
}

</style>
