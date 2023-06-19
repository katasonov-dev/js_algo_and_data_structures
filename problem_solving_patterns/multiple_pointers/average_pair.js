/*
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Bonus Constraints:
Time: O(N)
Space: O(1)
*/

const averagePair = (arr, average) => {
  if (arr.length === 0) {
    return false;
  }

  let i = 0;
  let j = -1;

  while (j + arr.length !== 0) {
    let avg_sum = (arr[i] + arr[arr.length + j]) / 2;
    if (avg_sum === average) {
      return true;
    } else if (avg_sum < average) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

// example 1
console.log(averagePair([1, 2, 3], 2.5) === true);

// example 2
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);

// example 3
console.log(averagePair([], 4) === false);
