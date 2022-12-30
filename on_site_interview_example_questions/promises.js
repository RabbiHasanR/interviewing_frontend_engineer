// first problem

// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

async function run() {
  await sleep(500);
  console.log("hello");
  await sleep(500);
  console.log("world");
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

run();


// second problem

// create a function to turn any function into a 'promisfied' function.
// any function to be promisified will always have a callback as the last array
// the callback will always have this signature:
// function(result){}

/*
    const exampleFn = function (x, y, callback) {}
    const promisedFn = promisify(exampleFn)
    promisedFn().then(..).then(...)
*/


function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function cb(result) {
                resolve(result)
            }

            fn.apply(this, args.concat(cb))
        })
    }
}