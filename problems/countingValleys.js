/* eslint-disable no-console */

function countingValleys(n, s) {
  // store height, 0
  let height = 0;
  // store valleyCount, 0
  let valleyCount = 0;
  // store is isValley, false
  let isValley = false;

  // loop the string
  for (let i = 0; i < s.length; i += 1) {
    // if D decrements height
    if (s.charAt(i) === 'D') {
      height -= 1;
    }
    // if U increment height
    if (s.charAt(i) === 'U') {
      height += 1;
    }

    // if height < 0 and valley false
    if (height < 0 && !isValley) {
      // set is valley to true
      isValley = true;
    } else if (height >= 0 && isValley) { // if height > 0 and valley true
      // set valley false
      isValley = false;
      // increment valleyCount
      valleyCount += 1;
    }
  }

  return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));
