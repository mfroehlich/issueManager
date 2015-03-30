'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueTree
 * @description
 * # imIssueTree
 */
angular.module('issueManagerApp')
  .directive('imIssueTreeNode', function () {
    return {
      restrict: 'E',
      scope: {
        /** @type {Issue} */
        issue: '=',

        issueNotifier: '='
      },
      templateUrl: 'scripts/directives/imissuetreenode.html',
      controller: 'IssueTreeNodeCtrl',
      controllerAs: 'issueTreeNodeCtrl',
      bindToController: true
    };
  })
  .controller('IssueTreeNodeCtrl', function () {

    var self = this;

    this.createIssue = function (issue) {
      self.issueNotifier.onIssueCreate(issue);
    };

    this.editIssue = function (issue) {
      self.issueNotifier.onIssueEdit(issue);
    };

    this.deleteIssue = function (issue) {
      self.issueNotifier.onIssueDelete(issue);
    };
  });
