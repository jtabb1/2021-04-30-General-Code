console.log('hello');

// let count = 0;

// function recursion() {
//   // 1. Base Case: count >= 3
//   if (count >= 3) {
//     return;
//   } else {
//     console.log(count);
//     count += 1;
//     // 2. Recursive call
//     recursion();
//   }
// }

// function recursion() {
//   // 1. Base Case: count >= 3
//   if (count >= 3) {
//     return;
//   }

//   console.log(count);
//   count += 1;
//  // 2. Recursive call
//   recursion();
// }

/*
Write a recursive function arraySum that calculates the sum of an array of integers.
*/

function arraySumIterative(array) {
    let sum = 0;
    for (let el of array) {
      sum += el;
    }
    return sum;
  }
  
  function arraySum(array) {
    // base case
    if (array.length === 0) {
      return 0;
    }
    // recursive case must move towards the base case
    return array[0] + arraySum(array.slice(1));
  }
  
  const input = [1, 2, 3, 4]; // returns 10;
  console.log(arraySum(input));

  