/* eslint-disable no-console */
// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

/*
Arr of int pairs, find the single item

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

I : Arr of int
O : int
C : O(n)
E :

[4,1,2,1,2]
 ^()
*/

// set up function with arr as argument
const singleNumber = (nums) => {
  // store our counts
  const counts = {};

  // loop items of the arr
  for (let i = 0; i < nums.length; i += 1) {
    // if in store
    if (counts[nums[i]]) {
      // iterate
      counts[nums[i]] += 1;
    } else {
      // add item to the obj with count of 1
      counts[nums[i]] = 1;
    }
  }

  // search the obj for the value of 1
  const keyArr = Object.keys(counts);
  const valArr = Object.values(counts);
  for (let i = 0; i < keyArr.length; i += 1) {
    if (valArr[i] === 1) return keyArr[i];
  }

  return 0;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
