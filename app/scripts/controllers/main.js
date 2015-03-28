angular.module('issueManagerApp')
  .controller('MainCtrl', function (issueResource) {

    var self = this;
    this.issueModel = issueResource;
    this.selectedIssue = null;

    this.createIssue = function () {
      issueResource.addIssue(this.issue.name, this.issue.description);
      resetForm();
    };

    this.openIssueDetails = function (issue) {
      self.selectedIssue = issue;
    };
    this.closeIssueDetails = function () {
      self.selectedIssue = null;
    };

    this.deleteIssue = function (issue) {
      issueResource.deleteIssue(issue);
    };

    var resetForm = function () {
      self.issue = {
        name: '',
        description: ''
      };
    };

    resetForm();

  });