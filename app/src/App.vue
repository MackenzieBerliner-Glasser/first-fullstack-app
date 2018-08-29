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
  color: #87744A;
}
header {
  height: 200px;
  background-color: #F7F5CD;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  width: 300px;
}
nav a {
  text-decoration: none;
  color: #87744A;
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
}
</style>
