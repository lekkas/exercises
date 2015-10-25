module.exports = curry;

function curry(fn) {

  return inner_curry([]);

  function inner_curry(args) {
    if (args.length === fn.length) {
      return fn.apply(null, args);
    } else {
      return function() {
        return inner_curry(args.concat([].slice.apply(arguments)));
      }
    }
  };
};
