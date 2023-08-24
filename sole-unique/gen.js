const rnd_int = (low, high) => Math.random() * (high - low) + low | 0
const rnd_elem = xs => xs[rnd_int(0, xs.length)]

const shuff = (xs, times) => {
  while (times--) {
    const a = rnd_int(0, xs.length - 1)
    const b = rnd_int(0, xs.length - 1)

    ;[xs[a], xs[b]] = [xs[b], xs[a]]
  }
}

const gen = (count, low = 0, high = 100) => {
  const nums = Array.from({ length: count >> 1 }, () => rnd_int(0, high)).flatMap(
    x => Array.from({ length: rnd_int(2, 4) }, () => x)
  )

  shuff(nums, nums.length)

  const not_included = Array
    .from({ length: high - low + 1 }, (_, i) => low + i)
    .filter(n => !nums.includes(n))

  const unique = rnd_elem(not_included)

  const pos = rnd_int(0, count)
  nums.splice(pos, 0, unique)

  return [nums, unique]
}

const write_template = () => {
  const fs = require(`fs`)

  const tests = [1, 3, 3, 4, 5, 6, 10].map(count => gen(count))

  fs.writeFileSync(
    `./solution.js`,
`/**
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
${tests.map(
  ([input, answer]) => `  [[${input.join(`, `)}], ${answer}],`
).join(`\n`)}
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
`
  )
}

write_template()
