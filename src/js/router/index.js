import routes from '../routes';
import Router from 'vue-router';
import {Config, beforeEach} from './router.config';

/**
 * Módulos para modificar o título da página
 */
import trans from '../plugins/translatable/index';
import {config} from '../config';

/**
 * Inicializar o router
 */
let $router = new Router({ routes, ...Config });
$router.beforeEach((to, from, next) => {
  document.title = `${$translatable.trans(to.name)} - ${config.name}`;
  
  next();
});

export const router = $router;
export const VueRouter = Router;