export default {
  namespaced: true,
  state: {
    width: null,
    height: null,
    breakpoints: {
      xs: 480,
      sm: 736,
      md: 980,
      lg: 1280,
      xl: 1690,
    }
  },
  getters: {
    isBelowMd(state) {
      return (
        state.width <= state.breakpoints.md
      );
    },
    isBelowSm(state) {
      return (
        state.width <= state.breakpoints.sm
      );
    },
  },
  mutations: {
    resize(state) {
      state.width = document.documentElement.clientWidth;
      state.height = document.documentElement.clientHeight;
    }
  },
  actions: {
    init({ commit }) {
      window.addEventListener('resize', e => commit('resize'));
      commit('resize');
    },
    destroy({ commit }) {
      window.removeEventListener('resize', e => commit('resize'));
    }
  }
};