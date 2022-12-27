// Implement debounce

// setInterval() vs setTimeout()


// debounce()
// debounce()
// debounce()
// debounce()
// debounce()  // last one execute



function debounce(fn, time) {
  return function () {
    if (setTimeoutId) {
      clearTimeout();
    }
    setTimeoutId = setTimeout(() => {
      fn.apply(this);
    }, time);
  };
}
