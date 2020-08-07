/* eslint-disable no-param-reassign */
/* eslint-disable no-console */

const toGoatLatin = (S) => {
  let sentence = S.split(' ');

  sentence = sentence.map((word, i) => {
    const reg = /(a|e|i|o|u|A|E|I|O|U)/g;
    if (reg.test(word.charAt(0))) {
      word += 'ma';
    } else {
      const f = word.slice(0, 1);
      word = word.slice(1);
      word += `${f}ma`;
    }
    const a = new Array(i + 2).join('a');
    word += a;
    return word;
  });

  return sentence.join(' ');
};

console.log(toGoatLatin('Each word consists of lowercase and uppercase letters only'));
