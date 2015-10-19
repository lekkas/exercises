function flatten(a) {
  var f = [];
  if (arguments.length > 1) {
    f = arguments[1];
  }

  for (var i = 0; i < a.length; i++) {
    if (!Array.isArray(a[i])) {
      f.push(a[i]);
    } else {
      flatten(a[i], f);
    }
  }
  return f;
};

module.exports = flatten;
