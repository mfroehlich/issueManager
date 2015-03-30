/**
 *
 * @param {Issue} parentIssue
 * @param {uuid} id
 * @param {string} name
 * @constructor
 */
function Issue(parentIssue, id, name) {
  'use strict';

  /** {type {uuid} */
  this.id = id;

  /** @type {string} */
  this.name = name;

  /** @type {Issue} */
  this.parentIssue = parentIssue;

  /** @type {Array.<issue>} */
  this.childIssues = [];

  /** @type {string} */
  this.description = '';

  /** @type {Date} */
  this.creationTime = new Date();

  /** @type {Date} */
  this.editTime = this.creationTime;

  if (parentIssue) {
    parentIssue.addChild(this);
  }
}

/**
 * @param {Issue} newParent
 */
Issue.prototype.setParent = function(newParent) {
  var oldParent = this.getParent();
  if (oldParent !== newParent) {
    this.parentIssue = newParent;
    newParent.addChild(this);
    if (oldParent) {
      oldParent.removeChild(this);
    }
  }
};

/**
 *
 * @returns {Issue}
 */
Issue.prototype.getParent = function() {
  return this.parentIssue;
};

/**
 *
 * @param {Issue} child
 */
Issue.prototype.removeChild = function(child) {
  var index = this.childIssues.indexOf(child);
  if (index > -1) {
    this.childIssues.splice(index, 1);
  }
};

/**
 *
 * @param {Issue} child
 */
Issue.prototype.addChild = function(child) {
  var index = this.childIssues.indexOf(child);
  if (index < 0) {
    this.childIssues.push(child);
    child.setParent(this);
  }
};

/**
 * @param {string} description
 */
Issue.prototype.setDescription = function (description) {
  this.description = description;
};