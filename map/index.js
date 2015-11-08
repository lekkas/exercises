module.exports = map

function map(list, fn, ctx) {
  var i;

  var out = [];
  for (i = 0; i < list.length; i++) {
    out.push(fn.call(ctx, list[i], i, list));
  }

  return out;
}
