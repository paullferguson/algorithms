/* eslint-disable no-console */

function sockMerchant(n, ar) {
  // sum: num of pairs, 0
  let sum = 0;
  // obj to store the sock count, {}
  const colorCounts = {};

  // loop the arr
  for (let i = 0; i < ar.length; i += 1) {
    // if in obj
    if (colorCounts[ar[i]]) {
      // iterate count
      colorCounts[ar[i]] += 1;
    } else {
      // add color to the obj and set count to 1
      colorCounts[ar[i]] = 1;
    }
  }

  // loop the ojb
  const sockCounts = Object.values(colorCounts);
  for (let i = 0; i < sockCounts.length; i += 1) {
    // divide by 2 and floor, add to the sum
    sum += Math.floor(sockCounts[i] / 2);
  }

  return sum;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
