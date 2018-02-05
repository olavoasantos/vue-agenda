export default {
  namespaced: true,
  state: {
    isVisible: false
  },
  mutations: {
    open(state) {
      state.isVisible = true;
    },
    close(state) {
      state.isVisible = false;
    }
  },
  actions: {
    open({ commit }) {
      commit('open');
    },
    close({ dispatch, commit }) {
      commit('close');
      dispatch('calendar/deselect', null, { root: true });
    }
  }
};