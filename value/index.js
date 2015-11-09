module.exports = value;

function value(fn) {
  if (typeof fn === 'function')
    return value(fn());
  else
    return fn;
}
