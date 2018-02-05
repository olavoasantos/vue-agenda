import {Storage} from '../../config';

export default {
  namespaced: true,

  state: {
    list: Storage.get('events') || {}
  },

  mutations: {
    save(state, list) {
      state.list = list;
    }
  },

  actions: {

    store({ dispatch, commit, state }, event) {
      let list = Object.assign({}, state.list);
      if(!list[event.dayCode]) list[event.dayCode] = [];
      list[event.dayCode].push(event);

      commit('save', list);
      dispatch('persist', list);
    },

    update({ dispatch, commit, state }, event) {
      let list = Object.assign({}, state.list);
      list[event.dayCode] = list[event.dayCode].map(item => {
        return (item.id === event.id) ? event : item;
      });
      
      commit('save', list);
      dispatch('persist', list);
    },

    markComplete({ dispatch }, event) {
      event.isComplete = true;
      dispatch('update', event);
    },

    markIncomplete({ dispatch }, event) {
      event.isComplete = false;
      dispatch('update', event);
    },

    destroy({ dispatch, commit, state }, event) {
      let list = Object.assign({}, state.list);
      list[event.dayCode] = list[event.dayCode].filter(item => {
        return (item.id !== event.id);
      });

      commit('save', list);
      dispatch('persist', list);
    },

    persist(context, list) {
      Storage.save('events', list);
    }
    
  }
};