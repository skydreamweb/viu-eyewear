import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { dogs } from './dogs' 


Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: 'Hello World'
  },
  modules: {
    dogs
  }
}

export default new Vuex.Store<RootState>(store)