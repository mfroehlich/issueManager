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
        issue: '='
      },
      template: "<ul></ul>",
      bindToController: true,
      link: function (scope, element, attrs) {
        if (angular.isArray(scope.issue.childIssues)) {
          element.append("<im-issue-tree-node ng-repeat='child in issue.childIssues' issue='child'></im-issue-tree-node>")
          $compile(element.contents())(scope);
        }
      }
    };
  });
