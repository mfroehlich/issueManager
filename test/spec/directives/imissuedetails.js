'use strict';

describe('Directive: imIssueDetails', function () {

  // load the directive's module
  beforeEach(module('issueManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<im-issue-details></im-issue-details>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imIssueDetails directive');
  }));
});
