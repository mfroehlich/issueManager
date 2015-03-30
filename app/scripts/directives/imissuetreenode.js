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

        onIssueCreate: '&',
        onIssueEdit: '&',
        onIssueDelete: '&'
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
      self.onIssueCreate({selectedIssue: issue});
    };

    this.editIssue = function (issue) {
      self.onIssueEdit({selectedIssue: issue});
    };

    this.deleteIssue = function (issue) {
      self.onIssueDelete({selectedIssue: issue});
    };

  });
