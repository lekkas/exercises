module.exports = map

function map(list, fn) {
  var i;

  var out = [];
  for (i = 0; i < list.length; i++) {
    out.push(fn(list[i], i, list));
  }

  return out;
}
