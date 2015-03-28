'use strict';

describe('Directive: imIssueList', function () {

  // load the directive's module
  beforeEach(module('issueManagerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<issue-list></issue-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imIssueList directive');
  }));
});
