angular.module('issueManagerApp')
  .controller('MainCtrl', function (issueResource) {
    'use strict';

    var self = this;
    this.rootIssue = issueResource.root;

    this.selectedIssue = null;

    this.detailsDialogVisible = false;
    this.creationDialogVisible = false;

    this.issueNotifier = {
      onIssueCreate: function (parentIssue) {
        self.selectedIssue = parentIssue;
        self.creationDialogVisible = true;
      },
      onIssueEdit: function (issue) {
        self.detailsDialogVisible = true;
        self.selectedIssue = issue;
      },
      onIssueDelete: function (issue) {
        issueResource.deleteIssue(issue);
      }
    };

    this.closeIssueDetails = function () {
      self.detailsDialogVisible = false;
    };

    this.closeIssueCreationDialog = function () {
      self.creationDialogVisible = false;
    };

  });