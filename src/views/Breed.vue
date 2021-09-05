<template>
  <div class="breeds-list">
    <div class="images">
      <div
        class="wrapper"
        v-for="(image, index) in categoryImages"
        :key="index"
      >
        <div class="img-wrapper">
          <img :src="image" :alt="image" class="img" />
        </div>
        <div class="btn-wrapper"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Breed extends Vue {
  mounted(): void {
    this.$store.dispatch("fetchCategoryImages", this.$route.params.name);
  }
  get categoryImages(): unknown {
    return this.$store.getters.GET_CATEGORY_IMAGES;
  }
}
</script>

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
