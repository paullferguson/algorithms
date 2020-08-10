/* eslint-disable no-console */

function jumpingOnClouds(c) {
  // store the number of jumps
  let jumps = 0;

  // loop the arr
  for (let i = 0; i < c.length; i += 1) {
    if (c[i] + c[i + 2] === 0) {
      jumps += 1;
      i += 1;
    } else if (c[i] + c[i + 1] === 0) {
      jumps += 1;
    }
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
