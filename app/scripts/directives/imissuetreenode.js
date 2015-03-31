
/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueTree
 * @description
 * # imIssueTree
 */
angular.module('issueManagerApp')
  .directive('imIssueTreeNode', function () {
    'use strict';

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
    'use strict';

    var self = this;

    this.contextMenuVisible = false;
    this.toggleContextMenuVisibility = function() {
      this.contextMenuVisible = !this.contextMenuVisible;
    };

    this.childrenVisible = false;
    this.toggleChildrenVisibility = function() {
      this.childrenVisible = !this.childrenVisible;
    };

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
