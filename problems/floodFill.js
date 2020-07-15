/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}

 I: Image made of array of arrays, start col Int, start row Int, new colour Int
 O: Image made of array of arrays, now flooded
 C: O(n^2) Quadratic due to nested loops of the matrix
 E: -

 sr = 1, sc = 1, newColor = 2
 [[1,2,1],
  [1,2,0],
  [1,0,1]]

 */
const floodFill = function (image, sr, sc, newColor) {
  // store the color at given 'sr' 'sc' location
  const testColor = image[sr][sc];

  if (testColor === newColor) return image;

  // pixelCheck function takes in the lat, log, newColor, testColor
  (pixelCheck = (r, c) => {
    // if not off grid and the color matches the testColor
    if (r < 0 || c < 0 || r >= image.length || c >= image[r].length || image[r][c] !== testColor) {
    } else {
      // set the pixel to the newColor
      image[r][c] = newColor;
      // check pixel to N with pixelCheck
      pixelCheck(r - 1, c);
      // check pixel to S with pixelCheck
      pixelCheck(r + 1, c);
      // check pixel to W with pixelCheck
      pixelCheck(r, c - 1);
      // check pixel to E with pixelCheck
      pixelCheck(r, c + 1);
    }

  // close func and invoke with the start values
  })(sr, sc);

  // return the modified image
  return image;
};
