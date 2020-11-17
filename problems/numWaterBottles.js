/* eslint-disable no-console */
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}

 I: Int: number of starting bottles, Int: exchange rate
 O: Int: Max of drinkable bottles
 C: O(E log)
 E: Ex > Bot

 */
const numWaterBottles = function (numBottles, numExchange) {
  // store val to output
  let output = numBottles;
  // copy numBottle
  let working = numBottles;

  // while the working amount modulo exchange
  while (working >= numExchange) {
    const current = Math.floor(working / numExchange);
    output += current;
    working = current + (working % numExchange);
  }
  return output;
};

console.log(numWaterBottles(9, 3));
