import { MutationTree } from "vuex";
import { DogsState } from "./types";

export const mutations: MutationTree<DogsState> = {
  SET_DOGS_BREEDS(state, payload: { image: string; name: string }) {
    state.allBreeds.push({ name: payload.name, image: payload.image });
  },
  SET_CATEGORY_IMAGES(state, payload) {
    state.categoryImages = payload;
  },
  SET_SPINNER_LOADING(state, payload: boolean) {
    state.spinnerLoading = payload;
  }
};
