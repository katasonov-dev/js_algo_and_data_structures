// input is an unsorted array of ints; array may contain no values
// time complexity O(n)

const countUniqueValues = (array) => {
  if (array.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (array[j] !== undefined) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
};

// refactored solution; use 'for' loop to avoid else case and make code shorter
const countUniqueValues1 = (array) => {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j]
    }
  }

  return i + 1;
};

// example 1
let arr = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(countUniqueValues(arr) === 5);

// example 2
arr = [1, 1, 1, 1, 1];
console.log(countUniqueValues(arr) === 1);

// example 3
arr = [];
console.log(countUniqueValues(arr) === 0);

// example 4
arr = [1, 1, 2, 2, 3, 4, 4, 5];
console.log(countUniqueValues1(arr) === 5);

// example 5
arr = [1, 1, 1, 1, 1];
console.log(countUniqueValues1(arr) === 1);

// example 6
arr = [];
console.log(countUniqueValues1(arr) === 0);
