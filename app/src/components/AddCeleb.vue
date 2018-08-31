<template>
    <section>
        <h2>Add A Celeb</h2>
        <CelebForm
            label="Add"
            :famous="famous"
            :onEdit="handleAdd"
        />
    </section>
</template>

<script>
import CelebForm from './CelebForm.vue';
import api from '../services/api';
export default {
  components: {
    CelebForm
  },
  props: {
    famous: Array
  },
  methods: {
    handleAdd(celeb) {
      return api.addCeleb(celeb)
        .then(added => {
          this.$router.push(`/neighborhoods/${added.id}`);
        });
    }
  }

};
</script>

<style>

</style>
