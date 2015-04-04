angular.module('issueManagerApp')
  .service('issueResource', function ($q, uuid) {
    'use strict';

    var model;

    /**
     * @param {Issue} parentIssue
     * @param {string} name
     * @param {string} description
     * @returns {Issue} the created issue.
     */
    var addIssue = function (parentIssue, name, description) {
      var issueId = uuid.generateId();

      var parentIssueId = parentIssue ? parentIssue.getId() : null;
      var issue = new Issue(parentIssueId, issueId, name);
      issue.setDescription(description);

      if (parentIssue) {
        parentIssue.addChildIssueId(issueId);
      }

      model.issues[issueId] = issue;

      return issue;
    };

    var getIssueById = function (issueId) {
      var deferred = $q.defer();
      deferred.resolve(model.issues[issueId]);
      return deferred.promise;
    };

    /**
     * @param {uuid} issueId
     */
    var deleteIssueById = function (issueId) {
      var issue = model.issues[issueId];
      var parentId = issue.getParentIssueId();
      model.getIssueById(parentId)
        .then(function (parentIssue) {
          parentIssue.removeChildIssueId(issueId);
        });

      delete model.issues[issueId];
    };

    model = {
      /** @type {Issue} */
      root: null,

      /** @type {Object.<uuid, Issue>} */
      issues: {},

      addIssue: addIssue,
      deleteIssueById: deleteIssueById,
      getIssueById: getIssueById
    };

    var rootIssue = addIssue(null, 'ROOT', 'Description of root');
    addIssue(rootIssue, 'Issue 1', 'Description of issue 1');
    addIssue(rootIssue, 'Issue 2', 'Description of issue 2');
    addIssue(rootIssue, 'Issue 3', 'Description of issue 3');

    model.root = rootIssue;

    return model;
  });