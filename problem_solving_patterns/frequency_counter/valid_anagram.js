// inputs (2 strings) are lowercase alphanumerics without spaces and special chars
// time complexity - O(n)

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false
  }

  let string1_arr = string1.split('');
  let string2_arr = string2.split('');
  let frequency_counter1 = {};
  let frequency_counter2 = {};

  for (let char of string1_arr) {
    frequency_counter1[char] = (frequency_counter1[char] || 0) + 1;
  }

  for (let char of string2_arr) {
    frequency_counter2[char] = (frequency_counter2[char] || 0) + 1;
  }

  for (char of string1_arr) {
    if (frequency_counter1[char] !== frequency_counter2[char]) {
      return false;
    }
  }

  return true;
};

// example 1
let string1 = "anagram";
let string2 = "managra";
console.log(validAnagram(string1, string2) === true);

// example 2
string1 = "cat";
string2 = "car";
console.log(validAnagram(string1, string2) === false);

// example 3
string1 = "awesome";
string2 = "awesom";
console.log(validAnagram(string1, string2) === false);

