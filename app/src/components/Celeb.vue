<template id="celebrity-template">
    <article class="celeb">
        <router-link :to="`/celebrities/${celeb.id}`">
        <h3>{{ celeb.name }}</h3>
        <p>{{ celeb.description }}</p>
        </router-link>
    </article>
</template>

<script>
export default {
  props: ['celeb']

};
</script>

<style scoped>
.celeb {
    border: 1px solid black;
}
</style>
