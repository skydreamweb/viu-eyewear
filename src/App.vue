<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheHeader from "./components/layout/Header";
import TheFooter from "./components/layout/Footer";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
