/* eslint-disable no-console */
/*

Search Insert Position

Given: sorted array and target value

Input: [1,3,5,6], 5
Output: 2

Input: [1,3,5,6], 2
Output: 1

Input: [1,3,5,6], 7
Output: 4

Input: [1,3,5,6], 0
Output: 0

I: array of sorted number and a target number
O: position in the array to insert
C: linier
E:

*/

// if the item is less than the target - skip
// if the item is the same as the target - return item
// if the item is greater then the target - return item

// Input: [1,3,5,6], 5
// Input: [1,3,5,6], 7

function search(arr, t) {
  // loop the array
  for (let i = 0; i < arr.length; i += 1) {
    // if the item is greater than of equal to target
    if (arr[i] >= t) return i;
  }
  return arr.length;
}

console.log(search([1, 3, 5, 6], 7));
