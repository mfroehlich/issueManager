/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueCreation
 * @description
 * # imIssueCreation
 */
angular.module('issueManagerApp')
  .directive('imIssueCreation', function () {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /** @type {Issue} */
        parentIssue: '='
      },
      templateUrl: 'scripts/directives/imissuecreation.html',
      controller: 'IssueCreationCtrl',
      controllerAs: 'issueCreationCtrl',
      bindToController: true
    };
  })
  .controller('IssueCreationCtrl', function(issueResource) {

    var self = this;

    this.createIssue = function () {
      issueResource.addIssue(self.parentIssue, self.issue.name, self.issue.description);
      resetForm();
    };

    var resetForm = function () {
      self.issue = {
        name: '',
        description: ''
      };
    };

    resetForm();

  });
