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

    this.contextMenuButtonVisible = false;
    this.contextMenuVisible = false;
    this.childrenVisible = false;

    this.toggleChildrenVisibility = function () {
      if (self.issue.hasChildren()) {
        self.childrenVisible = !self.childrenVisible;
      }
    };

    this.getCollapseIconClass = function () {
      var className = 'glyphicon ';
      if (self.childrenVisible === true) {
        className += self.issue.hasChildren() ? 'glyphicon-folder-open' : 'glyphicon-leaf';
      }
      else {
        className += self.issue.hasChildren() ? 'glyphicon-folder-close' : 'glyphicon-leaf';
      }
      return className;
    };

    this.createIssue = function (issue) {
      self.issueNotifier.onIssueCreate(issue);
      this.childrenVisible = true;
      this.contextMenuVisible = false;
    };

    this.editIssue = function (issue) {
      self.issueNotifier.onIssueEdit(issue);
      this.contextMenuVisible = false;
    };

    this.deleteIssue = function (issue) {
      self.issueNotifier.onIssueDelete(issue);
      this.contextMenuVisible = false;
    };
  });
