import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { dogs } from "./dogs";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    dogs
  }
};

export default new Vuex.Store<RootState>(store);
