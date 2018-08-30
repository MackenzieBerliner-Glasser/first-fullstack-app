<template>
  <section>
    <h1>Celebs</h1>
    <ul>
      <li
        v-for="celeb in celebrities"
        :key="celeb.id">
        <router-link :to="` /neighborhoods/${celeb.id}`">
          <p>{{celeb.name}}</p>
          <p>{{celeb.occupation}}</p>
        </router-link>
      </li>
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
  list-style-type: none;
}

li {
  border: 1px solid black;
  margin: 2px;
}

a {
  text-decoration: none;
  color: initial;
}

</style>
