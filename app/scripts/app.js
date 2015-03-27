'use strict';

/**
 * @ngdoc overview
 * @name issueManager
 * @description
 * # issueManager
 *
 * Main module of the application.
 */
angular
  .module('issueManager', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize'
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
