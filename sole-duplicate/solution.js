/**
 * @description
 * Finds the single number that is includes twice in "numbers".
 * All the other values will be present only once.
 *
 * GUARANTEES:
 * - there will always be a number that is repeated twice
 * - every other number will be unique
 * - "numbers" will never have length of 1 or 0
 *
 * @example
 * [3, 1, 2, 3] -> 3
 *
 * @example
 * [1, 10, 10, 2, 8] -> 10
 *
 * @example
 * Return a value like that:
 * function whatever(x) {
 *   let y = x + 1;
 *   return y;
 * }
 *
 * @param {number[]} numbers
 * @return {number}
 */
function soleDuplicate(numbers) {

}

const tests = [
  [[3, 1, 2, 3], 3],
  [[1, 10, 10, 2], 8],
  [[33, 42, 69, 9, 17, 99, 81, 22, 17], 17],
  [[8, 3, 4, 5, 6, 7, 9, 8], 8],
  [[42, 42], 42],
  [[1, 2, 3, 4, 10, 11, 12, 13, 99, 99, 14, 15], 99],
  [[100, 100, 1, 2], 100],
  [[1, 2, 100, 100], 100]
];

for (const [input, answer] of tests) {
  console.log(`Input: `, input);
  const yourAnswer = soleDuplicate(input);
  console.log({
    yourAnswer,
    answer,
    PASSING: yourAnswer === answer
  })
  console.log(`===============`);
}
