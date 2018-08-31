<template id="celebrity-template">
  <section class="add-celeb">
    <h3>New Celeb</h3>
    <form @submit.prevent="handleSubmit">
      <p>*optional</p>
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="edit.name">
      </label>
      <label>
        Occupation:
        <select v-model.number="edit.fameId" required>
          <option disabled value=""> Please select a occupation </option>
        </select>
      </label>

      <label>
        Gender:
        <input type="text" name="gender" placeholder="Gender" required
          v-model="edit.gender">
      </label>

      <label>
        Age:
        <input type="text" name="age" placeholder="Age" required
          v-model="edit.age">
      </label>

      <label>
        <sup>*</sup>Are They A Tool?
        <input type="checkbox" 
          v-model="edit.tool">
      </label>

      <label>
        Description:
        <textarea name="body" rows="8" cols="40" required 
          v-model="edit.description"></textarea>
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
    celeb: Object,
    famous: Array,
    onEdit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      edit: this.celeb ? Object.assign({}, this.celeb) : initCeleb()
    };
  },
  computed: {
    editMode() {
      return !!this.celeb;
    }
  },
  methods: {
    handleSubmit() {
      this.onEdit(this.edit)
        .then(() => {
          this.edit = initCeleb();
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