import Route from './router/RouteBuilder';

export default [
  Route.get('Calendar', '/', 'CalendarController@index'),
  Route.get('Settings', '/configuracoes', 'SettingsController@index')
];
