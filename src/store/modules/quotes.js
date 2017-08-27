import quote from '../../api/quote';
import * as types from '../mutations';

// initial state
const state = {
  all: [],
};

// getters
const getters = {
  allQuotes: state => state.all,
};

// actions
const actions = {
  getAllQuotes({ commit }) {
    quote.getQuotes((quotes) => {
      commit(types.RECEIVE_QUOTES, { quotes });
    });
  },
};

// mutations
const mutations = {
  [types.RECEIVE_QUOTES](state, { quotes }) {
    state.all = quotes;
  },

  [types.MARK_AS_FAVORITE](state, { id }) {
    // change favorite status
    const result = state.all.find(q => q.id === id);
    result.is_favorite = !result.is_favorite;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
