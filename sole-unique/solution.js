/**
 * @description
 * The "numbers" array will always contain a sole unique number.
 * Find that number and return it.
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
 *   return y // return happens here
 * }
 *
 * @param {number[]} numbers
 * @return {number}
 */
function soleUnique(numbers) {

}

const tests = [
  [[47], 47],
  [[86, 57, 86, 86], 57],
  [[65, 98, 65], 98],
  [[6, 2, 72, 6, 72, 6], 2],
  [[18, 81, 18, 52, 52, 18, 52], 81],
  [[26, 1, 26, 1, 64, 33, 33], 64],
  [[62, 65, 22, 22, 30, 62, 50, 77, 50, 65, 22, 77, 65], 30],
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
