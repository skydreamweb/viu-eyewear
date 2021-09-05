import { GetterTree } from "vuex";
import { RootState } from "../types";
import { DogsState } from "./types";

export const getters: GetterTree<DogsState, RootState> = {
  GET_DOGS_BREEDS(state) {
    return state.allBreeds;
  },
  GET_CATEGORY_IMAGES(state) {
    return state.categoryImages;
  }
};
