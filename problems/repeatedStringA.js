/* eslint-disable no-console */

function repeatedString(s, n) {
  // occurrences of 'a' in string s
  const reg = /a/g;
  const aMatch = s.match(reg);

  // Bail if no 'a'
  if (aMatch) {
    const aCount = s.match(reg).length;
    // work out the number of repeated s
    const sets = Math.floor(n / s.length);

    const remain = n % s.length;
    if (remain) {
      const aRemain = s.slice(0, remain);
      const aRemainMatch = aRemain.match(reg);
      const aRemainCount = aRemainMatch ? aRemainMatch.length : 0;
      return sets * aCount + aRemainCount;
    }
    return sets * aCount;
  }
  return 0;
}

console.log(repeatedString('gfcaaaecbg', 547602));
