angular.module('issueManagerApp')
  .controller('IssueCreationDialogCtrl',
  /**
   *
   * @param $modalInstance
   * @param issueResource
   * @param {Issue} parentIssue kommt aus dem resolve-Teil beim Öffnen des Dialogs
   */
    function ($modalInstance, $scope, issueResource, parentIssue, creationNotifier) {

    this.parentIssue = parentIssue;
    this.closeAfterCreation = false;

    var self = this;

    /**
     * Erzeugt ein neues Issue aus den Formulareingaben und setzt parentIssue als parent.
     */
    this.createIssue = function () {
      var issue = issueResource.addIssue(parentIssue, self.issue.name, self.issue.description);
      creationNotifier.onIssueCreate(issue);
      resetForm();
      if (!!this.closeAfterCreation) {
        $modalInstance.close();
      }
    };

    this.closeIssueCreationDialog = function () {
      $modalInstance.dismiss();
    };

    /**
     * Setzt die Benutzereingaben zurück.
     */
    var resetForm = function () {
      self.issue = {
        name: '',
        description: ''
      };

      $scope.$broadcast('im:dialog:reset');
    };

    resetForm();
  });
