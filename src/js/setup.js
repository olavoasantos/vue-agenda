import Vue from 'vue';

/**
 * Declaração dos componentes globais
 */
Vue.component('o-layout', require('./assets/views/Layout/Layout.vue'));

/**
 * Declaração dos filtros globais
 */
Vue.filter('untilForHumans', require('./assets/filters/untilForHumans'));
Vue.filter('capitalize', require('./assets/filters/capitalize'));
Vue.filter('ordinal', require('./assets/filters/ordinal'));

/**
 * Declaração de directives
 */
import vClickOutside from 'vue-click-outside';
Vue.directive('click-outside', vClickOutside);

/**
 * Declaração de extensões do Vue
 */
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);
