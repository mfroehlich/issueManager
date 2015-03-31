/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueList
 * @description
 * # imIssueList
 */
angular.module('issueManagerApp')
  .directive('imIssueList', function () {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /** @type {Array.<issue>} */
        issues: '=',

        /** @type {string} */
        header: '@',

        onIssueCreate: '&',
        onIssueEdit: '&',
        onIssueDelete: '&'
      },
      templateUrl: 'scripts/directives/imissuelist.html',
      controller: 'IssueListCtrl',
      controllerAs: 'issueListCtrl',
      bindToController: true
    };
  })
  .controller('IssueListCtrl', function () {
    'use strict';

    var self = this;

    this.createIssue = function (issue) {
      self.onIssueCreate({selectedIssue: issue});
    };

    this.editIssue = function (issue) {
      self.onIssueEdit({selectedIssue: issue});
    };

    this.deleteIssue = function (issue) {
      self.onIssueDelete({selectedIssue: issue});
    };
  });
