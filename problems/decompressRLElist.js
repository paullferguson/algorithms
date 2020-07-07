/* eslint-disable no-console */
/*

We are given a list nums of integers representing a list compressed
with run-length encoding.

Consider each adjacent pair of elements
[freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).
For each such pair, there are freq elements with value val
concatenated in a sub list. Concatenate all the sub lists from
left to right to generate the decompressed list.

Return the decompressed list.

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so
we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

I: Arry of Int (even length)
O: Arry of Int derived from the pair calculation
C: O(n)
E: if the val is negative, feq 0

[1,2,3,4]
 ^
*/

// function declaration taking in nums

const decompressRLEList = (nums) => {
  // store our output array
  let output = [];

  // loop the nums incrementing 2
  for (let i = 0; i < nums.length; i += 2) {
    // create a working arry freq long fill with the val
    // concat the working array to the output array
    output = output.concat(new Array(nums[i]).fill(nums[i + 1]));
  }

  return output;
};

console.log(decompressRLEList([1, 2, 3, 4]));
