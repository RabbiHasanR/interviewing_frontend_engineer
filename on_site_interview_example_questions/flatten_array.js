// Without using .flat(), create a function to flatten an array

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10];
// flatten(exampleArray); // [1,2,3,4,5,6,7,8,9,10]

function flatten(arr) {
  const newArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);

  return newArray;
}

const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(exampleArray));
