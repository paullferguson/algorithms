/* eslint-disable no-console */
/**
 * @param {string[]} logs
 * @return {string[]}

 I : Array of strings
 O : Array of ordered strings
 C : O(n)
 E : -

 logs = ["dig1 8","let1 art","dig2 3","let2 own","let3 art zero"]

 */

const reorderLogFiles = (logs) => {
  // array store for Let
  const arrLet = [];
  // array store for Dig
  const arrDig = [];

  // function takes in an item and an arry to place it in
  const placeInOrder = (item, arr) => {
    // remove the ID
    const insertID = item.split(' ').shift();
    const insertLine = item.slice(insertID.length);

    // console.log(item);
    // console.log(insertID, insertLine);

    if (arrLet.length) {
      // loop lines array
      for (let i = 0; i < arr.length; i += 1) {
        const currentID = arr[i].split(' ').shift();
        const currentLine = arr[i].slice(currentID.length);

        // if the lines is less that the current Let line
        if (insertLine < currentLine) {
          // insert before
          arrLet.splice(i, 0, item);
          return;
        }
        // if the lines are the same
        if (insertLine === currentLine) {
          // compare the item ID num
          if (insertID < currentID) {
            arrLet.splice(i, 0, item);
          }
          return;
        }
        if (i === arr.length - 1) {
          // push to the end
          arrLet.push(item);
        }
      }
    } else {
      arrLet.push(item);
    }
  };

  // loop over log lines
  logs.forEach((lineStr) => {
    // if line contents is not a number
    if (Number.isNaN(lineStr.split(' ')[1][0])) {
      // function place item in array
      placeInOrder(lineStr, arrLet);
      // else as per spec it must be a number
    } else {
      // push to the dig arry
      arrDig.push(lineStr);
    }
  });

  // return arry Let with arry Dig concatenated
  return arrLet.concat(arrDig);
};

console.log(reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit dig', 'let3 art zero']));
