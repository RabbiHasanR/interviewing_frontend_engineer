// Implement debounce

// setInterval() vs setTimeout()

// debounce()
// debounce()
// debounce()
// debounce()
// debounce()  // last one execute

function debounce(fn, time) {
  let setTimeoutId;
  return function () {
    if (setTimeoutId) {
      //   clearTimeout();
      return;
    }
    setTimeoutId = setTimeout(() => {
      fn.apply(this);
      setTimeoutId = null;
    }, time);
  };
}
