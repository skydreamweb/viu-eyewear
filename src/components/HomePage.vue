<template>
  <div class="breeds-list">
    <div v-if="loadingSpinner" class="images">
      <div class="wrapper" v-for="(breed, index) in breeds" :key="index">
        <div class="img-wrapper">
          <router-link :to="'/' + breed.name"
            ><img :src="breed.image" :alt="breed.name" class="img"
          /></router-link>
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <base-spinner></base-spinner>
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
export default class HomePage extends Vue {
  created(): void {
    if (this.$store.getters.GET_DOGS_BREEDS.length === 0) {
      this.$store.dispatch("fetchBreeds");
    }
  }
  get breeds(): { image: string; name: string }[] {
    return this.$store.getters.GET_DOGS_BREEDS;
  }
  get loadingSpinner(): boolean {
    return this.$store.getters.GET_SPINNER_LOADING;
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}
.breeds-list {
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
      opacity: 0.5;
    }

    button {
      opacity: 1;
    }
  }
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
.spinner {
  height: 65vh;
}
</style>
