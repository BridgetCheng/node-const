/*!
 * node-const
 * https://github.com/Lellansin/node-const
 */
(function() {

  function Constant(item) {
    for (var key in item) {
      if (typeof(item[key]) == 'object')
        Constant(item[key]);

      Object.defineProperty(item, key, {
        value: item[key],
        enumerable: true,
        configurable: true,
        writable: false
      });
    }

    if (typeof item == 'object')
      Object.preventExtensions(item);

    return item;
  }

  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Constant;
  }
  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return Constant;
    });
  }
  // included directly via <script> tag
  else {
    window.Constant = Constant;
  }
}());