'use strict';

/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imIssueTreeChildren
 * @description
 * # imIssueTreeChildren
 */
angular.module('issueManagerApp')
  .directive('imIssueTreeChildren', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        /** @type {Issue} */
        issue: '=',

        issueNotifier: '='
      },
      template: "<ul></ul>",
      bindToController: true,
      link: function (scope, element, attrs) {
        if (angular.isArray(scope.issue.childIssues)) {
          element.append("<im-issue-tree-node ng-repeat='child in issue.childIssues' issue='child' issue-notifier='issueNotifier'></im-issue-tree-node>")
          $compile(element.contents())(scope);
        }
      }
    };
  });
