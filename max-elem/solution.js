/**
 * @description
 * Returns the biggest number in a non-empty array.
 *
 * GUARANTEES:
 * - the array will always have length > 0
 *
 * @example
 * [3, 1, 5] -> 5
 *
 * @example
 * [10] -> 10
 *
 * @param {number[]} numbers
 * @return {number}
 */
function maxElem(numbers) {

}

const tests = [
  [[3, 1, 5], 5],
  [[10], 10],
  [[-1, -2, -10], -1],
  [[1, 2, 3, 40, 5, 6, 7], 40],
  [[1, 42], 42],
  [[42, 1], 42],
  [[42, 42, 42], 42],
  [[69, 42, 42, -42, -69, 69], 69]
]

for (const [input, answer] of tests) {
  const yourAnswer = maxElem(input);
  console.log({
    input,
    yourAnswer,
    answer,
    PASSING: yourAnswer === answer
  });
  console.log(`============`);
}
