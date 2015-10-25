module.exports = once;

function once(fn) {
  var cnt = 0;
  var result;

  return function() {
    if (cnt === 0) {
      result = fn.apply(this, [].slice.call(arguments));
      cnt++;
    }

    return result;
  };
}
