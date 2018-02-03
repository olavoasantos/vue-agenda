import {Storage} from '../../config';

export default {
  namespaced: true,

  state: {
    list: Storage.get('events') || {}
  },

  mutations: {
    store(state, event) {
      if(!state.list[event.dayCode]) state.list[event.dayCode] = [];
      state.list[event.dayCode].push(event);

      Storage.save('events', state.list);
    },
    save(state, event) {
      state.list[event.dayCode] = state.list[event.dayCode].map(item => {
        return (item.id === event.id) ? event : item;
      });

      Storage.save('events', state.list);
    },
    remove(state, event) {
      state.list[event.dayCode] = state.list[event.dayCode].filter(item => {
        return (item.id !== event.id);
      });

      Storage.save('events', state.list);
    }
  },

  actions: {

    store({ commit }, event) {
      commit('store', event);
    },

    destroy({ commit }, event) {
      commit('remove', event);
    },

    update({ commit }, event) {
      commit('save', event);
    },

    markComplete({ commit }, event) {
      event.isComplete = true;
      commit('save', event);
    },

    markIncomplete({ commit }, event) {
      event.isComplete = false;
      commit('save', event);
    },
    
  }
};