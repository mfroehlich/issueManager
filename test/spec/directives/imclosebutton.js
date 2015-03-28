'use strict';

describe('Directive: imCloseButton', function () {

  // load the directive's module
  beforeEach(module('issueManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<im-close-button></im-close-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imCloseButton directive');
  }));
});
