/**
 * @description
 * Check if a given string is a palindrome.
 * @link https://en.wikipedia.org/wiki/Palindrome
 *
 * @example
 * kebapche -> false
 * kek -> true
 * kekw -> false
 * o -> true
 * oo -> true
 *
 * @param {string} text
 * @return {boolean} Return true if text is a palindrome, false otherwise.
 */
function isPalindrome(text) {

}

const tests = [
  [`kebpache`, false],
  [`kek`, true],
  [`keek`, true],
  [`o`, true],
  [`oo`, true],
  [`meme`, false],
  [`salsa`, false],
  [`()()`, false],
  [`(())`, false],
  [`())(`, true],
  [`saippuakivikauppias`, true],
  [`saipuakivikauppias`, false],
  [`tattarrattat`, true],
  [`tattarattat`, true],
  [`tatarrattat`, false],
  [``, true]
];

for (const [input, answer] of tests) {
  const yourAnswer = isPalindrome(input);
  console.log({
    input,
    answer,
    yourAnswer,
    PASSING: yourAnswer === answer
  });
  console.log(`================`);
}
