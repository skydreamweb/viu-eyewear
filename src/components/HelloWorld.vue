<template>
  <div class="breeds-list">
    <div class="images">
      <div class="wrapper" v-for="(breed, index) in breeds" :key="index">
        <div class="img-wrapper">
          <router-link :to="'/' + breed.name"
            ><img :src="breed.image" :alt="breed.name" class="img"
          /></router-link>
        </div>
        <div class="btn-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  mounted(): void {
    if (this.$store.getters.GET_DOGS_BREEDS.length === 0) {
      this.$store.dispatch("fetchBreeds");
    }
  }
  get breeds(): unknown {
    return this.$store.getters.GET_DOGS_BREEDS;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
.breeds-list {
  margin: 50px auto auto 100px;
}
.images {
  text-align: center;
  margin: auto;
}
.wrapper {
  display: inline-block;
  text-align: center;
  margin: 10px;
}
.wrapper:hover img {
  opacity: 0.5;
}
.wrapper:hover button {
  opacity: 1;
}
.img-wrapper {
  display: inline-block;
  height: 250px;
}
img {
  height: 100%;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
}
.btn-wrapper {
  height: 0;
  position: relative;
  bottom: 50px;
}
.addBtn {
  opacity: 0;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #2c3e50;
  color: #ffffff;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}
/*button.addBtn.disabled {*/
/*background-color: darkgreen;*/
/*}*/
</style>
