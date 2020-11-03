/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
//
//
// Input: arr = [17,18, 5, 4, 6, 1]
// Output:      [18, 6, 6, 6, 1,-1]

const replaceElements = (arr) => {
  // max
  let m = -Infinity;
  for (let i = arr.length - 1; i >= 1; i -= 1) {
    // if (current > m) m = current;
    m = Math.max(m, arr[i]);
    if (arr[i] < m) arr[i] = m;
  }
  arr.shift();
  arr.push(-1);

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
