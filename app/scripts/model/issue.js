
function Issue(name, description) {

  /** {type {uuid}
  * TODO mfroehlich id muss gesetzt werden bei der Erzeugung des Objekts. */
  this.id = null;

  /** @type {string} */
  this.name = name;

  /** @type {string} */
  this.description = description;

  /** @type {Date} */
  this.creationTime = new Date();

  /** @type {Date} */
  this.editTime = this.creationTime;
}