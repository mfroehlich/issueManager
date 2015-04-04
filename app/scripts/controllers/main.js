angular.module('issueManagerApp')
  .controller('MainCtrl', function (issueResource) {
    'use strict';

    var self = this;
    var rootId = issueResource.root.getId();
    this.root = new TreeNode(null, rootId);

    this.selectedIssue = null;

    this.detailsDialogVisible = false;
    this.creationDialogVisible = false;

    this.nodeNotifier = {
      onNodeCreate: function (parentNode) {
        issueResource.getIssueById(parentNode.getId())
          .then(function (issue) {
            self.selectedIssue = issue;
          });
        self.creationDialogVisible = true;
      },
      onNodeEdit: function (selectedNode) {
        issueResource.getIssueById(selectedNode.getId())
          .then(function (issue) {
            self.selectedIssue = issue;
          });
        self.creationDialogVisible = true;
        self.detailsDialogVisible = true;
      },
      onNodeDelete: function (selectedNode) {
        issueResource.deleteIssueById(selectedNode.getId());
      }
    };

    this.creationNotifier = {
      onIssueCreate: function (issue) {
        /** @type {TreeNode} */
        var node = self.root.getNodeById(issue.getParentIssueId());
        if (node) {
          issueResource.getIssueById(issue.getParentIssueId())
            .then(function (parentIssue) {
              node.updateChildren(parentIssue.getChildIssueIds());
            });
        }
      }
    };

    this.closeIssueDetails = function () {
      self.detailsDialogVisible = false;
    };

    this.closeIssueCreationDialog = function () {
      self.creationDialogVisible = false;
    };

  });