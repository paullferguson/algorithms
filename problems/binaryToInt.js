/* eslint-disable no-console */
/*
  take an array of [0,0,0,1] and return the binary int
                    ^

  I: Arr of 1 || 0
  O: Int representing the binary
  C: O(N) , O(1)
  E: Length of 0
*/

const binaryToInt = (arr) => {
  // store the sum starting 0
  let sum = 0;

  // loop backwards
  for (let i = arr.length - 1; i >= 0; i - 1) {
    if (arr[i]) {
      const exp = arr.length - i - 1;
      sum += 2 ** exp;
    }
  }
  return sum;
};

console.log(binaryToInt([1, 1, 0, 1])); // 13
