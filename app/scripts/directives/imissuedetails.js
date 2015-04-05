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
        issue: '=',

        editNotifier: '='
      },
      templateUrl: 'scripts/directives/imissuedetails.html',
      controller: 'IssueDetailsCtrl',
      controllerAs: 'issueDetailsCtrl',
      bindToController: true
    };
  })
  .controller('IssueDetailsCtrl', function ($scope, $window, issueResource) {
    var self = this;

    this.saveIssue = function () {
      var issue = self.issue;
      issueResource.updateIssue(issue);
      self.editNotifier.onIssueEdit(issue);
    };
  });
