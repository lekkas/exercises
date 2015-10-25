module.exports = sort;

// Quicksort
function sort(a) {

  function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  };

  function partition(a, lo, hi) {
    var pivotIdx = hi;
    var pivot = a[pivotIdx];
    var lastHigh = lo;

    for (var i = lo; i < hi; i++) {
      if (a[i] < a[pivotIdx]) {
        swap(a, i, lastHigh);
        lastHigh++;
      }
    }

    swap(a, pivotIdx, lastHigh);
    return lastHigh;
  };

  function quicksort(a, lo, hi) {
    if (lo < hi) {
      var p = partition(a, lo, hi);
      quicksort(a, lo, p - 1);
      quicksort(a, p + 1, hi);
    }
  };

  quicksort(a, 0, a.length - 1);
  return a;
};


