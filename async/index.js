function sequence(list) {
  var count = 0;

  function cb(err, data) {
    if (count < list.length) {
      list[count++](cb, data);
    } else {
      return function(f) { f(err, data); }
    }
  }

  if (!Array.isArray(list)) {
    return function(f) { f("Not Array", null); }
  }

  return cb(null);
}

function parallel(list) {
  return function(f) {f();}
}

function race(list) {return function(f) {f();}}

module.exports.sequence = sequence;
module.exports.parallel = parallel;
module.exports.race = race;
