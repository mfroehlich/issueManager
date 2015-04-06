'use strict';

/**
 * @ngdoc overview
 * @name issueManagerApp
 * @description
 * # issueManagerApp
 *
 * Main module of the application.
 */
angular
  .module('issueManagerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
