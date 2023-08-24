/**
 * @description
 * The "numbers" array will always contain a sole unique number.
 * Find that number and return it.
 *
 * GUARANTEES:
 * - "numbers" will never be of length 0 or 2
 * - "numbers" will contain values in the range [0; 100]
 *
 * @example
 * [1, 1, 2, 3, 2] -> 3
 *
 * @example
 * [1] -> 1
 *
 * @example
 * You can return a value like that:
 * function whatever(x) {
 *   let y = x + 1;
 *   return y
 * }
 *
 * @param {number[]} numbers
 * @return {number}
 */
function soleUnique(numbers) {

}

const tests = [
  [[91], 91],
  [[52, 60, 52], 60],
  [[84, 45, 84], 45],
  [[47, 34, 47, 47, 87, 87, 87], 34],
  [[65, 7, 32, 7, 65], 32],
  [[42, 7, 7, 57, 42, 42, 2, 2, 2], 57],
  [[11, 85, 85, 19, 19, 24, 11, 44, 85, 72, 11, 44, 24], 72],
];
for (let i = 0; i < tests.length; ++i) {
  const [input, realAnswer] = tests[i];
  console.log("test: ", input);
  const yourAnswer = soleUnique(input);
  console.log({
    yourAnswer,
    realAnswer,
    PASSING: yourAnswer === realAnswer
  })
  console.log("================")
}
