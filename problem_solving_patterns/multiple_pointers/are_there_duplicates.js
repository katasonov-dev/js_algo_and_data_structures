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
  let i = 0;
  args.sort();

  for (let j = 1; j <= args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    } else {
      i++;
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
