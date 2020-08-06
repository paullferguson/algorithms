/* eslint-disable no-console */
const backspaceCompare = (S, T) => {
  const maxLen = Math.max(S.length, T.length);
  const sTemp = [];
  const tTemp = [];
  for (let i = 0; i < maxLen; i += 1) {
    if (S[i] !== undefined && S[i] !== '#') {
      sTemp.push(S[i]);
    } else if (S[i] === '#') {
      sTemp.pop();
    }
    if (T[i] !== undefined && T[i] !== '#') {
      tTemp.push(T[i]);
    } else if (T[i] === '#') {
      tTemp.pop();
    }
  }
  return (sTemp.join('') === tTemp.join(''));
};

console.log(backspaceCompare('ab#c', 'ad#c'));
