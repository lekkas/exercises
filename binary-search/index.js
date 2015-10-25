function search(a, el) {

  function _bs_rec(lo, hi) {
    if (lo > hi)
      return -1;

    var mi = Math.floor((hi + lo) / 2);
    if (el === a[mi])
      return mi;
    else if (el > a[mi])
      return _bs_rec(mi + 1, hi);
    else
      return _bs_rec(lo, mi - 1);
  };

  return _bs_rec(0, a.length - 1);
};

module.exports = search;
