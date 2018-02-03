import {Storage} from '../config';

export default {

  /**
   * init
   * ---
   * Aciona rotina de inicialização do App.
   * @param Function  { dispatch }
   */
  init({ dispatch }) {
    dispatch('calendar/init');
    dispatch('responsive/init');
  },

  /**
   * destroy
   * ---
   * Aciona rotina de destruição do App.
   * @param {Function}  { dispatch }
   */
  destroy({ dispatch }) {
    dispatch('responsive/destroy');
  },

  /**
   * setStatus
   * ---
   * Aciona a rotina de modificação do status do App.
   * @param {Function}  { commit }
   * @param {String}    status      Novo status
   */
  setStatus({ commit }, status) {
    commit('setStatus', status);
  },

  /**
   * locale
   * ---
   * Define o idioma do App e armazena no localStorage.
   * @refactor  Tem muita responsabilidade (não tem que
   *            saber que a info é armazenada
   *            em localStoragem).
   * @param Function  { commit }
   * @param String    locale      Código do idioma
   */
  locale({ commit }, locale) {
    commit('setLocale', locale);
    Storage.save('locale', locale);
  }
  
}