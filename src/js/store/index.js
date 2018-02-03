import Vue from 'vue';
import Vuex from 'vuex';
Vue.use( Vuex );

import actions from './Actions';
import modules from './Modules';
import mutations from './Mutations';

import {Storage} from '../config';

export default  new Vuex.Store({
  state: {
    status: 'ready'
  },
  getters: {

    /**
     * Define o idioma do App
     */
    locale() {
      let locale = Storage.get('locale');
      if(!locale) locale = 'pt-br';

      return locale;
    }

  },
  mutations, actions, modules
});
