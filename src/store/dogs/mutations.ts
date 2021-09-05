import { MutationTree } from "vuex";
import { DogsState } from "./types";

export const mutations: MutationTree<DogsState> = {
  SET_DOGS_BREEDS(state, payload: any) {
    state.allBreeds.push(payload);
  },
  SET_CATEGORY_IMAGES(state, payload: any) {
    state.categoryImages = payload;
  }
};
