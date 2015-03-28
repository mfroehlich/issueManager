'use strict';

describe('Directive: imIssueCreation', function () {

  // load the directive's module
  beforeEach(module('issueManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<im-issue-creation></im-issue-creation>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imIssueCreation directive');
  }));
});
