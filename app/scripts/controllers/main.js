angular.module('issueManagerApp')
  .controller('MainCtrl', function (issueResource) {

    var self = this;
    this.issueModel = issueResource;
    this.selectedIssue = null;

    this.openIssueDetails = function (issue) {
      self.selectedIssue = issue;
    };

    this.closeIssueDetails = function () {
      self.selectedIssue = null;
    };

    this.deleteIssue = function (issue) {
      issueResource.deleteIssue(issue);
    };
  });