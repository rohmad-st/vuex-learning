// where we assemble modules and export the store
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import favorites from './modules/favorites';
import quotes from './modules/quotes';
// import createLogger from '.././src/plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    favorites,
    quotes,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : [],
});
