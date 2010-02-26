(function() {

  exports.isNumber = function(n) {
    return typeof n == "number" || n instanceof Number;
  };

  exports.isPoint = function(p) {
    return p.length == 2 && exports.isNumber(p[0]) && exports.isNumber(p[1]);
  };

  exports.clone = function(p) {
    return p.slice(0);
  };

  exports.add = function() {
    var ret=[ 0, 0 ], len=arguments.length, i;
    for (i=0; i<len; i++) {
      ret[0] += arguments[i][0];
      ret[1] += arguments[i][1];
    }
    return ret;
  };

  exports.subtract = function() {
    var ret=[arguments[0][0], arguments[0][1]], len=arguments.length, i;
    for (i=1; i<len; i++) {
      ret[0] -= arguments[i][0];
      ret[1] -= arguments[i][1];
    }
    return ret;
  };

  exports.multiply = exports.x = function(p, k) {
    return [ k * p[0], k * p[1] ];
  };

  exports.dot = function(p1, p2) {
    return p1[0] * p2[0] + p1[1] * p2[1];
  };

  exports.length = function(p) {
    return Math.sqrt(exports.dot(p, p));
  };

  exports.unitNormal = function(p) {

  };

})();
