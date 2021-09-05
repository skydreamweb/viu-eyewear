<template>
  <div class="home">
    <h1>{{ helloName }}</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  get helloName(): string {
    return this.$store.state.dogs.breedsName;
  }
}
</script>
