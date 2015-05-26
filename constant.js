/*!
 * node-const
 * https://github.com/Lellansin/node-const
 */
(function() {

  function Constant(item) {
    if (typeof item != 'object') {
      return item;
    } else if (item.___CONSTANT___) {
      return item;
    }

    // avoid circular references
    Constant.define(item, '___CONSTANT___', true);

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

    Object.preventExtensions(item);
    return item;
  }

  Constant.define = function(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: false
    });
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