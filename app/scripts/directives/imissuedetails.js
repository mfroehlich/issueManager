'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueDetails
 * @description
 * # imIssueDetails
 */
angular.module('issueManagerApp')
  .directive('imIssueDetails', function () {
    return {
      restrict: 'E',
      scope: {
        /** @type {issue} */
        issue: '='
      },
      templateUrl: 'scripts/directives/imissuedetails.html',
      controller: 'IssueDetailsCtrl',
      controllerAs: 'issueDetailsCtrl',
      bindToController: true
    };
  })
  .controller('IssueDetailsCtrl', function() {
  });
