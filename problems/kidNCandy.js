/* eslint-disable no-console */
// GOBLINS n candies

// const goblinsAndGobstoppers

// 1) List of goblins with candy (array of int)
// 2) Extra candy (int)

// SIMPLIFIED V1

const goblinsAndCandySimple = (arr, e) => {
  let max = 0;
  const opt = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    opt.push((arr[i] += e) >= max);
  }

  return opt;
};

const arr1 = [2, 3, 5, 1, 3];
// eslint-disable-next-line max-len
const arr2 = [4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 2];
console.log(goblinsAndCandySimple(arr1, 1));

console.time('Small');
const goblinsAndCandySmall = (arr, e) => {
  const max = Math.max(...arr);
  return arr.map((bar) => bar + e >= max);
};
console.timeEnd('Small');

console.log(goblinsAndCandySmall(arr2, 1));

console.time('One');
const goblinsAndCandyOne = (a, e) => a.map((b) => b + e >= Math.max(...a));
console.timeEnd('One');

console.log(goblinsAndCandyOne(arr2, 1));
