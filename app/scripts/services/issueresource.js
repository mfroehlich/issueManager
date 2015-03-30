angular.module('issueManagerApp')
  .service('issueResource', function (uuid) {
    'use strict';

    /**
     * @param {Issue} parentIssue
     * @param {string} name
     * @param {string} description
     * @returns {Issue} the created issue.
     */
    var addIssue = function (parentIssue, name, description) {
      var issueId = uuid.generateId();

      if (!parentIssue) {
        parentIssue = rootIssue;
      }

      var issue = new Issue(parentIssue, issueId, name);
      issue.setDescription(description);

      return issue;
    };

    /**
     * @param {Issue} issue
     */
    var deleteIssue = function (issue) {
      var parent = issue.getParent();
      if (parent) {
        parent.removeChild(issue);
      }
    };

    var model = {
      /** @type {Issue} */
      root: null,

      addIssue: addIssue,
      deleteIssue: deleteIssue
    };

    var rootIssue = addIssue(null, 'ROOT', 'Description of root');
    addIssue(rootIssue, 'Issue 1', 'Description of issue 1');
    addIssue(rootIssue, 'Issue 2', 'Description of issue 2');
    addIssue(rootIssue, 'Issue 3', 'Description of issue 3');

    model.root = rootIssue;

    return model;
  });