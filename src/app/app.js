/* global moment:false */
import config from './app.config';

import routerConfig from './app.route';

import runBlock from './app.run';
import MainController from './main/main.controller';
import NavbarDirective from '../app/components/navbar/navbar.directive';

angular.module('quailtricks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('MainController', MainController)
  .directive('acmeNavbar', () => new NavbarDirective());
