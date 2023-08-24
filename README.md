## How do I test my code
Run the `solution.js` files.

## Where do I write code
In the `solution.js` files.

## Where is ze description
In comments above the function the `solution.js` files.

## Returning stuff

```js
function whatever(x) {
  let y = x + 1;
  return y; // this is how you return
}

// whatever you returned will go into "result"
let result = whatever(3);

console.log(result);

function allLessThan5(numbers) {
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 5) {
      // stop execution of this function and give the result "false"
      return false;
    }
  }

  return true;
}

// the loop in "allLessThan5" will stop when
// it reaches i = 2 (10) and the return happens
let lessThan5 = allLessThan5([1, 2, 10, 5]);
```

## Order
1. [min-elem](./min-elem/solution.js)
1. [max-elem](./max-elem/solution.js)
1. [sole-unique](./sole-unique/solution.js)
1. [sole-duplicate](./sole-duplicate/solution.js)
1. [is-palindrome](./is-palindrome/solution.js)
