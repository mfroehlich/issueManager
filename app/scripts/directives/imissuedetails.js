/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueDetails
 * @description
 * # imIssueDetails
 */
angular.module('issueManagerApp')
  .directive('imIssueDetails', function () {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /** @type {Issue} */
        issue: '='
      },
      templateUrl: 'scripts/directives/imissuedetails.html',
      controller: 'IssueDetailsCtrl',
      controllerAs: 'issueDetailsCtrl',
      bindToController: true
    };
  })
  .controller('IssueDetailsCtrl', function () {
  });
