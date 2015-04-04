/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueCreation
 * @description
 * # imIssueCreation
 */
angular.module('issueManagerApp')
  .directive('imIssueCreation', function () {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /**
         * Das Issue, für das ein neues Kind-Issue erstellt werden soll.
         * Das erzeugte Issue bekommt parentIssue als parent gesetzt.
         * @type {Issue}
         */
        parentIssue: '=',

        creationNotifier: '='
      },
      templateUrl: 'scripts/directives/imissuecreation.html',
      controller: 'IssueCreationCtrl',
      controllerAs: 'issueCreationCtrl',
      bindToController: true
    };
  })
  .controller('IssueCreationCtrl', function(issueResource) {
    'use strict';

    var self = this;

    /**
     * Erzeugt ein neues Issue aus den Formulareingaben und setzt parentIssue als parent.
     */
    this.createIssue = function () {
      var issue = issueResource.addIssue(self.parentIssue, self.issue.name, self.issue.description);
      self.creationNotifier.onIssueCreate(issue);
      resetForm();
    };

    /**
     * Setzt die Benutzereingaben zurück.
     */
    var resetForm = function () {
      self.issue = {
        name: '',
        description: ''
      };
    };

    resetForm();
  });
