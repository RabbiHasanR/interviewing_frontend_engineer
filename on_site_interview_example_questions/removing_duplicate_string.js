// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

//  First Solution

// function removingDuplicates(str) {
//   let results = [];

//   str.split(" ").forEach((i) => {
//     if (!results.includes(i)) {
//       results.push(i);
//     }
//   });

//   return results.join(' ');
// }

// Second Solution
function removingDuplicates(str) {
  const arr = str.split(" ");
  const set = new Set(arr);
  const newString = [...set].join(" ");

  return newString;
}

const str = "This is is a test test string";
console.log(removingDuplicates(str));
