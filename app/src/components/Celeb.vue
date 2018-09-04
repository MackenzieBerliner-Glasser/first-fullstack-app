<template id="celeb-template">
  <div v-if="celeb">
    <article v-if="!editing">
      <h3>{{ celeb.name }}</h3>
      <p>Gender:{{ celeb.gender }}</p>
      <p>Age:{{ celeb.age }}</p>
      <p v-if="celeb.tool === true"
      :class="{ tool: celeb.tool === true }">
      <strong>TOOL ALERT!!</strong>
      </p>
      <p>{{ celeb.description }}</p>
      <p>
        <button @click="handleRemove">Remove This Celeb</button>
      </p>
    </article>
    <CelebForm 
      v-else 
      label="Update"
      :celeb="celeb"
      :famous="famous"
      :onEdit="handleUpdate"
    />
    <button @click="editing = !editing">{{ editing ? 'Cancel' : 'edit' }}</button>
  </div>
</template>

<script>
import CelebForm from './CelebForm';
import api from '../services/api';

export default {
  props: {
    famous: Array
  },
  data() {
    return {
      celeb: null,
      editing: false
    };
  },
  components: {
    CelebForm
  },
  created() {
    api.getCeleb(this.$route.params.id)
      .then(celeb => {
        this.celeb = celeb;
      });
  },
  computed: {
    fame() {
      if(!this.celeb || !this.famous) {
        return null;
      }

      const { fameId } = this.celeb;
      return this.famous.find(f => f.id === fameId);
    },
  },
  methods: {
    handleRemove() {
      if(!confirm(`Are you sure you want to remove ${this.celeb.name}?`)) {
        return;
      }

      return api.removeCeleb(this.celeb.id)
        .then(() => {
          this.$router.push('/celebrities');
        });
    },
    handleUpdate(toUpdate) {
      return api.updateCeleb(toUpdate)
        .then(updated => {
          this.celeb = updated;
          this.editing = false;
        });
    }
  }
};

</script>

<style scoped>

h3 {
  margin: 40px 0 0;
}

.tool {
  color: red;
}

</style>
