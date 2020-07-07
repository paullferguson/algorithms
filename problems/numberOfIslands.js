/* eslint-disable no-console */
/**
 * @param {character[][]} grid
 * @return {number}

 I: map of string 1 and 0
 O: Int, count of islands
 C: O(n)2
 E: 0 size grid,

 */
const numIslands = (grid) => {
  // is the grid 0 if so return 0
  if (grid.length === 0) return 0;

  // function to check surrounding plots with grid and i, j
  const check = (gridTest, i, j) => {
    const g = gridTest;
    // if off grid or sea
    if (i < 0 || i >= g.length || j < 0 || j >= g[i].length || g[i][j] === undefined || g[i][j] === '0') {
      return 0;
    }
    // set this plot to 0
    g[i][j] = '0';
    // check plot to N
    check(g, i - 1, j);
    // check plot to S
    check(g, i + 1, j);
    // check plot to E
    check(g, i, j + 1);
    // check plot to w
    check(g, i, j - 1);

    return 1;
  };

  // store our islands count
  let count = 0;
  // loop of grid row
  for (let i = 0; i < grid.length; i += 1) {
    // loop of grid cols
    for (let j = 0; j < grid[i].length; j += 1) {
      // if the plot land (1)
      if (grid[i][j] === '1') {
        // count will equal function to check surrounding plots if i, j
        count += check(grid, i, j);
      }
    }
  }

  return count;
};
const g1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

console.log(numIslands(g1), ': should = 1');

const g2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(g2), ': should = 3');
