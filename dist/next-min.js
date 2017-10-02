(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.min = function (inArray) {
    return Math.min.apply(null,inArray);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.min;
  }

}());
