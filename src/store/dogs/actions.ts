import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { DogsState } from "./types";

export const actions: ActionTree<DogsState, RootState> = {
  fetchBreeds({ commit, dispatch }): Promise<any> {
    return axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((response: any) => {
        console.log(response.data);

        for (const key of Object.keys(response.data.message)) {
          dispatch("fetchImages", key);
        }
      })
      .catch(function(error: any) {
        // handle error
        console.log(error);
      });
  },
  fetchImages({ commit }, breed: any) {
    return axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((response: any) => {
        const singleBreeds = {
          name: breed,
          image: response.data.message
        };
        commit("SET_DOGS_BREEDS", singleBreeds);
      })
      .catch(function(error: any) {
        // handle error
        console.log(error);
      });
  },
  fetchCategoryImages({ commit }, breed: any) {
    return axios
      .get(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response: any) => {
        console.log(response);
        commit("SET_CATEGORY_IMAGES", response.data.message);
      })
      .catch(function(error: any) {
        // handle error
        console.log(error);
      });
  }
};
