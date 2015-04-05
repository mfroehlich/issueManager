'use strict';

/**
 *
 * @param {uuid} parentIssueId
 * @param {uuid} id
 * @param {string} name
 * @constructor
 */
function Issue(parentIssueId, id, name) {

  /** {type {uuid} */
  this.id = id;

  /** @type {string} */
  this.name = name;

  /** @type {uuid} */
  this.parentIssueId = parentIssueId;

  /** @type {Array.<uuid>} */
  this.childIssuesIds = [];

  /** @type {string} */
  this.description = '';

  /** @type {Date} */
  this.creationTime = new Date();

  /** @type {Date} */
  this.editTime = this.creationTime;
}

/**
 * @returns {uuid}
 */
Issue.prototype.getId = function() {
  return this.id;
};
/**
 * @param {uuid} parentIssueId
 */
Issue.prototype.setParentIssueId = function(parentIssueId) {
  this.parentIssueId = parentIssueId;
};
/**
 * @returns {uuid}
 */
Issue.prototype.getParentIssueId = function() {
  return this.parentIssueId;
};

/**
 * @param {string} description
 */
Issue.prototype.setDescription = function (description) {
  this.description = description;
};
/**
 * @returns {string}
 */
Issue.prototype.getName = function() {
  return this.name;
};
/**
 * @param {string} name
 */
Issue.prototype.setName = function(name) {
  this.name = name;
};
/**
 * @param {Date} editTime
 */
Issue.prototype.setEditTime = function(editTime) {
  this.editTime = editTime;
};
/**
 * @param {uuid} childIssueId
 */
Issue.prototype.removeChildIssueId = function(childIssueId) {
  var index = this.childIssuesIds.indexOf(childIssueId);
  if (index > -1) {
    this.childIssuesIds.splice(index, 1);
  }
};
/**
 * @param {uuid} childIssueId
 */
Issue.prototype.addChildIssueId = function(childIssueId) {
  var index = this.childIssuesIds.indexOf(childIssueId);
  if (index < 0) {
    this.childIssuesIds.push(childIssueId);
  }
};
/**
 * @returns {Array.<uuid>}
 */
Issue.prototype.getChildIssueIds = function() {
  return this.childIssuesIds;
};
/**
 *
 * @returns {boolean}
 */
Issue.prototype.hasChildren = function() {
  return this.childIssuesIds.length > 0;
};