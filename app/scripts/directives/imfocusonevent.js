angular.module('issueManagerApp')
  .directive('imFocusOnEvent', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attr) {
        var eventName = attr.imFocusOnEvent;
        scope.$on(eventName, function (event) {
          elem[0].focus();
        });
      }
    };
  });
