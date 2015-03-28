angular.module('issueManagerApp').service('issueResource', function () {

  /**
   * @param {string} name
   * @param {string} description
   */
  var addIssue = function(name, description) {
    var issue = new Issue(name, description);
    model.issues.push(issue);
  };

  /**
   * @param {issue} issue
   */
  var deleteIssue = function (issue) {
    var index = model.issues.indexOf(issue);
    if (index > -1) {
      model.issues.splice(index, 1);
    }
  };

  var model = {
    /** @type {Array.<Issue>}*/
    issues: [
      new Issue('Issue1', 'Beschreibung1'),
      new Issue('Issue2', 'Beschreibung2'),
      new Issue('Issue3', 'Beschreibung3')
    ],

    addIssue : addIssue,
    deleteIssue: deleteIssue
  };

  return model;
});