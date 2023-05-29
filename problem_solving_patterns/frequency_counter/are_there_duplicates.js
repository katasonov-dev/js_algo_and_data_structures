/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and
checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

const areThereDuplicates = (...args) => {
  let frequencyCounter = {};

  for (let i = 0; i < args.length; i++) {
    if (!!frequencyCounter[args[i]]) {
      return true;
    } else {
      frequencyCounter[args[i]] = 1;
    }
  }

  return false;
};

// example 1
console.log(areThereDuplicates(1, 2, 3) === false);

// example 2
console.log(areThereDuplicates(1, 2, 2) === true);

// example 3
console.log(areThereDuplicates("a", "b", "c", "a") === true);
