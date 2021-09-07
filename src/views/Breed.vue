<template>
  <div>
    <div class="breeds-list">
      <div class="images" v-if="categoryImages.length > 0">
        <div
          class="wrapper"
          v-for="(image, index) in categoryImages"
          :key="index"
        >
          <div class="img-wrapper" @click="zoom(image)">
            <img
              :src="image"
              :alt="image"
              class="img"
              @mouseover="getImageName(image)"
            />
            <div class="overlay">
              <div class="text">{{ imageName }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="spinner">
        <base-spinner></base-spinner>
      </div>
    </div>
    <div
      v-if="selectedImage.length > 0"
      max-width="85vw"
      class="modal"
      @click.stop="selectedImage = ''"
    >
      <img :src="selectedImage" alt="" width="100%" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseSpinner from "@/components/UI/BaseSpinner.vue";

@Component({
  components: {
    BaseSpinner,
  },
})
export default class Breed extends Vue {
  mounted(): void {
    this.$store.dispatch("fetchCategoryImages", this.$route.params.name);
  }
  imageName = "";
  selectedImage = "";

  get categoryImages(): { image: string }[] {
    return this.$store.getters.GET_CATEGORY_IMAGES;
  }

  public getImageName(name: string): void {
    this.imageName = name.substring(name.lastIndexOf("/") + 1);
  }
  public zoom(image: string): void {
    this.selectedImage = image;
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.breeds-list {
  max-width: 1200px;
  margin: 50px auto;
}
.images {
  text-align: center;
  margin: auto;
}
.wrapper {
  display: inline-block;
  text-align: center;
  margin: 10px;
  &:hover {
    img {
      opacity: 0.2;
    }
    .overlay {
      opacity: 0.9;
    }
    button {
      opacity: 1;
    }
  }
}
.overlay {
  opacity: 0;
  position: absolute;
}
.img-wrapper {
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
}
img {
  height: 100%;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
}
.modal img {
  width: unset;
  margin: auto;
  height: auto;
  border-radius: 5px;
  transition: opacity 0.3s ease-in-out;
  margin-top: 20vh;
}
.text {
  font-size: 16px;
  font-weight: 700;
  color: red;
}
.modal {
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  position: fixed;
  background: rgb(25 25 25 / 65%);
}
</style>
