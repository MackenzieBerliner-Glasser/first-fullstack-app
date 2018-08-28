<template id="celebrity-template">
    <article>
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
export default {
  props: {
    celeb: Object
  }

};
</script>

<style scoped>
.tool {
    color: red;
}
</style>
