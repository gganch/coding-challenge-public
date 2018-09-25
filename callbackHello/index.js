module.exports = function callbackHello(fn, n) {
  let promise = fn();

  for (let i = 0; i < n - 1; i++) {
    promise = promise.then(fn);
  }
  return promise;
};
