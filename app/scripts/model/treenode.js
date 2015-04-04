/**
 * @param {TreeNode} parent
 * @param {uuid} id
 * @constructor
 */
function TreeNode(parent, id) {
  /** @type {TreeNode} */
  this.parent = parent;
  /** @type {uuid} */
  this.id = id;
  /** @type {string} */
  this.name = '';
  /** @type {Array.<TreeNode>} */
  this.children = [];
}

/**
 * @returns {TreeNode}
 */
TreeNode.prototype.getParentNode = function() {
  return this.parent;
};
TreeNode.prototype.setId = function (id) {
  this.id = id;
};
TreeNode.prototype.getId = function () {
  return this.id;
};
TreeNode.prototype.setName = function (name) {
  this.name = name;
};

/**
 * @param {Array.<uuid>} childrenIds
 */
TreeNode.prototype.updateChildren = function (childrenIds) {

  if (!childrenIds) {
    return;
  }
  // Kopie erzeugen, dass das Original nicht verändert wird!
  var newChildrenIds = childrenIds.slice();

  var self = this;

  var childrenToBeRemoved = [];
  this.children.forEach(function (currentNode) {
    var currentId = currentNode.getId();
    var indexOfCurrentIdInNewIds = newChildrenIds.indexOf(currentId);
    if (indexOfCurrentIdInNewIds < 0) {
      childrenToBeRemoved.push(currentNode);
    }
    else {
      newChildrenIds.splice(indexOfCurrentIdInNewIds, 1);
    }
  });

  newChildrenIds.forEach(function (newChildId) {
    self.children.push(new TreeNode(self, newChildId));
  });

  childrenToBeRemoved.forEach(function (childToBeRemoved) {
    var index = self.children.indexOf(childToBeRemoved);
    self.children.splice(index, 1);
  });
};

/**
 * @param {TreeNode} childNode
 */
TreeNode.prototype.removeChild = function (childNode) {
  var childrenIds = this.children.map(function(child) {
    return child.getId();
  });
  var index = childrenIds.indexOf(childNode.getId());
  childrenIds.splice(index, 1);
  this.updateChildren(childrenIds);
};

TreeNode.prototype.getChildren = function () {
  return this.children;
};

TreeNode.prototype.hasChildren = function () {
  return this.children.length > 0;
};

TreeNode.prototype.getNodeById = function (id) {
  if (this.id === id) {
    return this;
  }
  else {
    var node;
    for (var i = 0; i < this.children.length; i++) {
      node = this.children[i].getNodeById(id);
      if (node) {
        return node;
      }
    }
    return node;
  }
};