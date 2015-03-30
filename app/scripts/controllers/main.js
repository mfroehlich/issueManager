angular.module('issueManagerApp')
  .controller('MainCtrl', function (issueResource) {
    'use strict';

    var self = this;
    this.rootIssue = issueResource.root;

    this.selectedIssue = null;

    this.detailsDialogVisible = false;
    this.creationDialogVisible = false;

    this.openIssueDetails = function (issue) {
      self.detailsDialogVisible = true;
      self.selectedIssue = issue;
    };
    this.closeIssueDetails = function () {
      self.detailsDialogVisible = false;
    };

    this.openIssueCreationDialog = function (parentIssue) {
      self.selectedIssue = parentIssue;
      self.creationDialogVisible = true;
    };
    this.closeIssueCreationDialog = function() {
      self.creationDialogVisible = false;
    };

    this.deleteIssue = function (issue) {
      issueResource.deleteIssue(issue);
    };
  });