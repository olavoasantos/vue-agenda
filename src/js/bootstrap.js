import Vue from 'vue';

/**
 * Inicialização da Store (Vuex)
 */
import Store from "./store";
Vue.prototype.$store = Store;

/**
 * Inicialização do Router (vue-router)
 */
import {VueRouter, router} from './router';
Vue.use(VueRouter);

/**
 * Inicialização do sistema de tradução
 */
import translatable from './plugins/translatable/index';
Vue.prototype.$translations = translatable(Store.getters.locale);
Vue.prototype.$trans = translatable(Store.getters.locale).trans;
window.$translatable = translatable(Store.getters.locale);

/**
 * Exporta configurações do Vue
 */
export default {
  el: "#app",
  router,
  mounted() {
    // Dispara rotina de inicialização da Store
    this.$store.dispatch('init');
  },
  beforeDestroy() {
    // Dispara rotina de destruição da Store
    this.$store.dispatch('destroy');
  }
}
