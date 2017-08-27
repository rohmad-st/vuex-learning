import shop from '../../api/quote';
import * as types from '../mutations';

// initial state
const state = {
  added: [],
  favoriteStatus: null,
};

// getters
const getters = {
  favoriteStatus: state => state.favoriteStatus,
};

// actions
const actions = {
  markAsFavorite({ commit, state }, quote) {
    console.log('favoriteStatus', quote);
    const savedFavoriteItems = [...state.added];
    commit(types.MARK_AS_FAVORITE, { id: quote.id });
    shop.markAsFavorite(quote.id,
      () => commit(types.MARK_AS_FAVORITE_SUCCESS),
      () => commit(types.MARK_AS_FAVORITE_FAILURE, { savedFavoriteItems }),
    );
  },
};

// mutations
const mutations = {
  [types.MARK_AS_FAVORITE](state) {
    // clear cart
    // state.added = [];
    // state.favoriteStatus = null;
  },
  [types.MARK_AS_FAVORITE_SUCCESS](state) {
    state.checkoutStatus = 'successful';
  },
  [types.MARK_AS_FAVORITE_FAILURE](state, { savedQuoteItems }) {
    // rollback to the cart saved before sending the request
    state.added = savedQuoteItems;
    state.checkoutStatus = 'failed';
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
