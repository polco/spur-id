var ATTRIBUTE_NAME = 'data-spurid';
var WINDOW_NODE_ID = 'window-node';
var DOCUMENT_NODE_ID = 'document-node';

var counter = 1;

function getDOMNodeId(element, createIfNull) {
  if (element === window) { return WINDOW_NODE_ID; }
  if (element === document) { return DOCUMENT_NODE_ID; }
  if (!element || !element.getAttribute) { return; }
  var id = element.getAttribute(ATTRIBUTE_NAME);
  if (createIfNull && !id) {
    id = counter;
    counter += 1;
    element.setAttribute(ATTRIBUTE_NAME, id);
  }
  return id;
}

module.exports = {
  getDOMNodeId: getDOMNodeId
};