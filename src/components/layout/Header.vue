<template>
  <header class="header">
    <div class="logo">
      <router-link :to="{ name: 'Home' }">
        <img class="img" src="../../assets/logo-viu.jpg" alt="Logo"
      /></router-link>
    </div>
    <nav class="nav">
      <router-link exact :to="{ name: 'Home' }">Home</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
@import "@/scss/mixins";
.header {
  background: #f9f9f9db;
  height: 8vh;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include respond(tab-land) {
    // width: 100%;
  }
  @include respond(phone) {
    padding: 2rem;
  }
}
.logo {
  width: 7vh;
  cursor: pointer;
  // height: 5vh;
  .img {
    width: 100%;
    height: 100%;
  }
}
.nav {
  font-size: 2rem;
  a {
    font-weight: bold;
    color: lightblue;
    text-decoration: none;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
}
.nav a.router-link-exact-active {
  color: #2c3e50;
  border-bottom: 1px solid #2c3e50;
  // color: white;
}
</style>