module.exports = memoize

function memoize(fn) {
  var memo = {};
  var that = this;
  return function() {
    var args = [].slice.call(arguments);
    if (!memo[args]) {
      result = fn.apply(that, args);
      memo[args] = result;
    }
    return memo[args];
  }
}
