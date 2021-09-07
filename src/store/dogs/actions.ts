import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { DogsState } from "./types";

interface ServerData {
  message: string[];
}

export const actions: ActionTree<DogsState, RootState> = {
  fetchBreeds({ dispatch }) {
    return axios
      .get<ServerData>("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        const { message } = response.data;
        for (const key of Object.keys(message)) {
          dispatch("fetchImages", key);
        }
      })
      .catch(function(error: string) {
        // handle error
        console.log(error);
      });
  },
  fetchImages({ commit }, breed: { image: string }) {
    return axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => {
        const singleBreeds = {
          name: breed,
          image: response.data.message
        };
        commit("SET_DOGS_BREEDS", singleBreeds);
        commit("SET_SPINNER_LOADING", true);
      })
      .catch(function(error: string) {
        // handle error
        console.log(error);
      });
  },
  fetchCategoryImages({ commit }, breed: string) {
    return axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => {
        commit("SET_CATEGORY_IMAGES", response.data.message);
      })
      .catch(function(error: string) {
        // handle error
        console.log(error);
      });
  }
};
