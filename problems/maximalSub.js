/* eslint-disable no-console */

const sum = (accumulator, currentValue) => accumulator + currentValue;

const maximumSubArray = (arr, k) => {
  // store the current maximalSum array
  let maxSum = 0;

  // loop over the input arry
  for (let i = 0; i < (arr.length - k + 1); i += 1) {
    // store slice the array at i for k
    const subArr = arr.slice(i, i + k);
    // subSum the store
    const subSum = subArr.reduce(sum);
    // if subSum is great then maxSum then update
    if (subSum > maxSum) maxSum = subSum;
  }

  return maxSum;
};

console.log(maximumSubArray([2, 3, 4, 4, 5], 2));
