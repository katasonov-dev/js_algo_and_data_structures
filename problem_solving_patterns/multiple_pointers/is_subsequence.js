/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters
in the first string form a subsequence of the characters in the second string.

In other words, the function should check whether the characters in the first string appear somewhere in the second string,
without their order changing.

Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

const isSubsequence = (string_1, string_2) => {
  let arr_1 = string_1.split("");
  let arr_2 = string_2.split("");
  let j = 0;

  for (let i = 0; i < arr_2.length; i++) {
    if (arr_1[j] === arr_2[i]) {
      j++;
      if (arr_1.length == j) {
        return true;
      }
    }
  }

  return false;
}

// example 1
console.log(isSubsequence('hello', 'hello world') === true)

// example 2
console.log(isSubsequence('sing', 'sting') === true)

// example 3
console.log(isSubsequence('abc', 'abracadabra') === true)

// example 4
console.log(isSubsequence('abc', 'acb') === false)
