/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers
have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)
*/

/*
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
  let num1_string = num1.toString();
  let num2_string = num2.toString();
  if (num1_string.length !== num2_string.length) return false;

  let frequency_counter = {};

  for (let i = 0; i < num1_string.length; i++) {
    frequency_counter[num1_string[i]] =
      (frequency_counter[num1_string[i]] || 0) + 1;
  }

  for (let i = 0; i < num2_string.length; i++) {
    if (!frequency_counter[num2_string[i]]) {
      return false;
    } else {
      frequency_counter[num2_string[i]]--;
    }
  }

  return true;
};

// example 1
console.log(sameFrequency(182, 281) === true);

// example 2
console.log(sameFrequency(34, 14) === false);

// example 3
console.log(sameFrequency(3589578, 5879385) === true);

// example 4
console.log(sameFrequency(22, 222) === false);
