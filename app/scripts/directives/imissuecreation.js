'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueCreation
 * @description
 * # imIssueCreation
 */
angular.module('issueManagerApp')
  .directive('imIssueCreation', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/imissuecreation.html',
      controller: 'IssueCreationCtrl',
      controllerAs: 'issueCreationCtrl',
      bindToController: true
    };
  })
  .controller('IssueCreationCtrl', function(issueResource) {

    var self = this;

    this.createIssue = function () {
      issueResource.addIssue(this.issue.name, this.issue.description);
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
