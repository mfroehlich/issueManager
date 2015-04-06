angular.module('issueManagerApp')
  .controller('MainCtrl', function ($modal, issueResource) {
    'use strict';

    var self = this;
    var rootId = issueResource.root.getId();
    this.root = new TreeNode(null, rootId);

    this.selectedIssue = null;

    this.detailsDialogVisible = false;

    var creationNotifier = {
      onIssueCreate: /** @param {Issue} issue */
        function (issue) {
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

    this.nodeNotifier = {
      onNodeCreate: /** @param {TreeNode} parentNode */
        function (parentNode) {
        var parentId = parentNode.getId();
        openCreateIssueDialog(parentId);
      },
      onNodeEdit: function (selectedNode) {
        issueResource.getIssueById(selectedNode.getId())
          .then(function (issue) {
            self.selectedIssue = issue;
          });
        self.detailsDialogVisible = true;
      },
      onNodeDelete: function (selectedNode) {
        issueResource.deleteIssueById(selectedNode.getId());
      }
    };

    this.editNotifier = {
      onIssueEdit: /** @param {Issue} issue */
        function (issue) {
        /** @type {TreeNode} */
        var node = self.root.getNodeById(issue.getId());
        if (node) {
          node.setName(issue.getName());
        }
      }
    };

    var openCreateIssueDialog = function(parentId) {
      var modalInstance = $modal.open({
        templateUrl: 'views/issuecreationdialog.html',
        controller: 'IssueCreationDialogCtrl',
        controllerAs: 'issueCreationDialogCtrl',
        size: 'lg',
        resolve: {
          parentIssue : function() {
            return issueResource.getIssueById(parentId);
          },
          creationNotifier: function() {
            return creationNotifier;
          }
        }
      })
    };

    this.closeIssueDetails = function () {
      self.detailsDialogVisible = false;
    };
  });