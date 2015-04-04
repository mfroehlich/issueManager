/**
 * @ngdoc directive
 * @name issueManagerApp.directive:imTreeChildren
 * @description
 * # imTreeChildren
 */
angular.module('issueManagerApp')
  .directive('imTreeChildren', function ($compile) {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        /** @type {TreeNode} */
        node: '=',

        nodeNotifier: '='
      },
      template: '<ul></ul>',
      bindToController: true,
      link: function (scope, element) {
        if (angular.isArray(scope.node.getChildren())) {
          element.append('<im-tree ng-repeat="childNode in node.getChildren() | orderBy : \'name\'" node="childNode" node-notifier="nodeNotifier"></im-tree>');
          $compile(element.contents())(scope);
        }
      }
    };
  });
