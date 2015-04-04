/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imTree
 * @description
 * # imTree
 */
angular.module('issueManagerApp')
  .directive('imTree', function () {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /** @type {TreeNode} */
        node: '=',

        nodeNotifier: '='
      },
      templateUrl: 'scripts/directives/imtree.html',
      controller: 'TreeCtrl',
      controllerAs: 'treeCtrl',
      bindToController: true
    };
  })
  .controller('TreeCtrl', function ($scope, issueResource) {
    'use strict';

    var self = this;
    /** @type {TreeNode} */
    var node = self.node;

    issueResource.getIssueById(node.getId())
      .then(
      /** @param {Issue} issue */
        function (issue) {
        var issueName = issue.getName();
        node.setName(issueName);
        var childIssueIds = issue.getChildIssueIds();
        node.updateChildren(childIssueIds);
      });

    this.contextMenuButtonVisible = false;
    this.contextMenuVisible = false;
    this.childrenVisible = false;

    this.toggleChildrenVisibility = function () {
      if (self.node.hasChildren()) {
        self.childrenVisible = !self.childrenVisible;
      }
    };

    this.getCollapseIconClass = function () {
      var className = 'glyphicon ';
      if (self.childrenVisible === true) {
        className += self.node.hasChildren() ? 'glyphicon-folder-open' : 'glyphicon-leaf';
      }
      else {
        className += self.node.hasChildren() ? 'glyphicon-folder-close' : 'glyphicon-leaf';
      }
      return className;
    };

    this.createNode = function (node) {
      self.nodeNotifier.onNodeCreate(node);
      this.childrenVisible = true;
      this.contextMenuVisible = false;
    };

    this.editNode = function (node) {
      self.nodeNotifier.onNodeEdit(node);
      this.contextMenuVisible = false;
    };

    /**
     * @param {TreeNode} node
     */
    this.deleteNode = function (node) {
      node.getParentNode().removeChild(node);
      self.nodeNotifier.onNodeDelete(node);
      this.contextMenuVisible = false;
    };
  });
