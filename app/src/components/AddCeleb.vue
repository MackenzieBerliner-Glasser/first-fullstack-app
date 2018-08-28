<template id="celebrity-template">
  <section class="add-celeb">
    <h1>New Celeb</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="celeb.name">
      </label>

      <label>
        Gender:
        <input type="text" name="gender" placeholder="Gender" required
          v-model="celeb.gender">
      </label>

      <label>
        Age:
        <input type="text" name="age" placeholder="Age" required
          v-model="celeb.age">
      </label>

      <label>
        Are They A Tool?
        <input type="text" name="founded" placeholder="True/False" required
          v-model="celeb.tool">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="celeb.description"></textarea>
      </label>
      
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>

const initCeleb = () => {
  return {
    name: '',
    gender: '',
    age: '',
    tool: '',
    description: ''
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      celeb: initCeleb()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.celeb)
        .then(() => {
          this.celeb = initCeleb();
        });
    }
  }
};

</script>

<style>

.add-celeb {
  width: 300px;
  text-align: left;
  margin: auto;
}

label {
  display: block;
}
</style>