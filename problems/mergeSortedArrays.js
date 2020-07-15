/* eslint-disable no-console */

const mergeSortedArrays = (a1, a2) => {
  const opt = [];
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < a1.length + a2.length; i += 1) {
    // if arr1 pointer is greater than arr2 pointer
    if (a1[pointer1] < a2[pointer2]) {
      opt.push(a1[pointer1]);
      pointer1 += 1;
    } else {
      opt.push(a2[pointer2]);
      pointer2 += 1;
    }
  }

  return opt;
};

const a1 = [1, 3, 4, 6];
const a2 = [2, 3, 7, 9];

console.log(mergeSortedArrays(a1, a2));
