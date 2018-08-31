<template>
  <section>
    <h1>Celebs</h1>
    <ul>
      <li
        v-for="celeb in celebrities"
        :key="celeb.id">
        <router-link :to="`/celebrities/${celeb.id}`">
          <p>{{celeb.name}}</p>
          <p>{{celeb.occupation}}</p>
        </router-link>
      </li>
    </ul>
    <p>
      <router-link to="/celebrities/add">Add A Celeb</router-link>
    </p>
  </section>
</template>

<script>
import api from '../services/api.js';
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
