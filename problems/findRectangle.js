/* eslint-disable no-console */

// Imagine we have an image. We'll represent this image as a simple 2D array where every pixel is
// a 1 or a 0. The image you get is known to have a single rectangle of 0s on a background of 1s.

// Write a function that takes in the image and returns one of the following representations of
// the rectangle of 0's: top-left coordinate and bottom-right coordinate OR top-left
// coordinate, width, and height.

// image1 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 0, 0, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// Sample output variations (only one is necessary):

// findRectangle(image1) =>
//   x: 3, y: 2, width: 3, height: 2
//   2,3 3,5 -- row,column of the top-left and bottom-right corners

// Other test cases:

// image2 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 0],
// ]

// findRectangle(image2) =>
//   x: 6, y: 4, width: 1, height: 1
//   4,6 4,6

// image3 = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0],
// ]

// findRectangle(image3) =>
//   x: 5, y: 3, width: 2, height: 2
//   3,5 4,6

// image4 = [
//   [0, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1],
// ]

// findRectangle(image4) =>
//   x: 0, y: 0, width: 1, height: 1
//   0,0 0,0

// image5 = [
//   [0],
// ]

// findRectangle(image5) =>
//   x: 0, y: 0, width: 1, height: 1
//   0,0 0,0

// n: number of rows in the input image
// m: number of columns in the input image

const image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

const image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];

const image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

const image5 = [
  [0],
];

const findDimensions = (img, t, l) => {
  const opt = [];
  // loop the rows
  for (let i = t; i < img.length; i += 1) {
    if (i === img.length - 1) {
      opt.push(i);
    } else if (img[i][l]) {
      opt.push(i - 1);
      break;
    }
  }

  // loop the cols
  for (let j = l; j < img[t].length; j += 1) {
    if (j === img[t].length - 1) {
      opt.push(j);
    } else if (img[t][j]) {
      opt.push(j - 1);
      break;
    }
  }
  //   console.log(opt);
  return opt;
};

// func accepts the image
const findRectangle = (img) => {
  // opt
  let opt = '';
  // loop the rows
  for (let i = 0; i < img.length; i += 1) {
    // loop the cols
    for (let j = 0; j < img[i].length; j += 1) {
      // if cell has 0
      if (!img[i][j]) {
        // store the coordinate
        opt = `${i},${j}`;
        // findDimensions
        const br = findDimensions(img, i, j);
        // store second coordinate
        opt += `,${br[0]},${br[1]}`;
        break;
      }
      if (opt) break;
    }
  }
  // return opt

  return opt;
};

console.log('image1', findRectangle(image1)); // 2,3,3,5
console.log('image2', findRectangle(image2)); // 4,6,4,6
console.log('image3', findRectangle(image3)); // 3,5 4,6
console.log('image4', findRectangle(image4)); // 0,0 0,0
console.log('image5', findRectangle(image5)); // 0,0 0,0
