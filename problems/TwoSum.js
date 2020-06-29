/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 I: Array of numbers and a target number
 O: Array indices of the two values that sum the target
 C: Non specified but try and keep O(n)
 E: -

 [2, 7, 11, 15], target = 18
     ^

 */
const twoSum = (nums, target) => {
  // build state in object and the current i eg 0 for 2
  const currentI = 0;
  const state = {};

  // add arr[0] to state
  state[nums[0]] = 0;

  // loop the arr from arr[1]
  for (let i = 1; i < nums.length; i += 1) {
    // if target subtract current equals arr[i]
    if (target - nums[currentI] === nums[i]) {
      // then current return and i
      return [currentI, i];
    }
    // add the arr[i] val to the store with a value of its index
    state[nums[i]] = i;
  }

  for (let i = 1; i < nums.length; i += 1) {
    const test = target - nums[i];
    if ({}.hasOwnProperty.call(state, test) && (i !== state[test])) {
      return [i, state[test]];
    }
  }

  return false;

  // now we have a store we can check for matches without looping over again
};

// eslint-disable-next-line no-console
console.log(twoSum([2, 7, 11, 15], 18)); // Should be [ 1, 2 ]
