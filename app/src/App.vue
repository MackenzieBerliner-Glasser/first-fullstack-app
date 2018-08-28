<template>
  <div id="app">
      <header>
        <img alt="Vue logo" src="./assets/logo.png">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/celebrities">Celebrities</router-link>
        </nav>
    </header>
    
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
