/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/

const maxSubarraySum = (array, num) => {
  if (num > array.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
};

// example 1
console.log(maxSubarraySum([100, 200, 300, 400], 2) === 700);

// example 2
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) === 39);

// example 3
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) === 5);

// example 4
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) === 5);

// example 5
console.log(maxSubarraySum([2, 3], 3) === null);
