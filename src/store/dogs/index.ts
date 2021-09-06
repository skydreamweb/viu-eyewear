import { Module } from "vuex";
import { RootState } from "../types";
import { DogsState } from "./types";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const state: DogsState = {
  breedsName: "Dalibor",
  allBreeds: [],
  categoryImages: [],
  spinnerLoading: false
};

export const dogs: Module<DogsState, RootState> = {
  state,
  actions,
  mutations,
  getters
};
