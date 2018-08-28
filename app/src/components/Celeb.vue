<template>
    <article>
        <h3>{{ celeb.name }}</h3>
        <p>Gender:{{ celeb.gender }}</p>
        <p>Age:{{ celeb.age }}</p>
        <p> {{ celeb.description }}</p>
    </article>
</template>

<script>
export default {
  props: {
    celeb: Object
  }

};
</script>

<style>

</style>
