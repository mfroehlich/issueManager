'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueList
 * @description
 * # imIssueList
 */
angular.module('issueManagerApp')
  .directive('imIssueList', function () {
    return {
      restrict: 'E',
      scope: {
        /** @type {Array.<issue>} */
        issues : '=',

        onIssueEdit : '&',
        onIssueDelete : '&',
      },
      templateUrl: 'scripts/directives/imissuelist.html',
      controller: 'IssueListCtrl',
      controllerAs: 'issueListCtrl',
      bindToController: true
    };
  })
  .controller('IssueListCtrl', function() {
    var self = this;
    this.editIssue = function(issue) {
      self.onIssueEdit({selectedIssue: issue});
    };

    this.deleteIssue = function(issue) {
      self.onIssueDelete({selectedIssue : issue});
    };
  });
