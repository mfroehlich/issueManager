'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imCloseButton
 * @description
 * # imCloseButton
 */
angular.module('issueManagerApp')
  .directive('imCloseButton', function () {
    return {
      restrict: 'E',
      scope: {
        onClick : '&'
      },
      template: '<div><button type="button" class="close" ng-click="closeButtonCtrl.onClick()"><span>&times;</span></button></div>',
      controller: 'CloseButtonCtrl',
      controllerAs: 'closeButtonCtrl',
      bindToController: true
    };
  })
  .controller('CloseButtonCtrl', function() {
  });
