### [Bit Conting - Codewars](https://www.codewars.com/kata/526571aae218b8ee490006f4)

> Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
> Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

### My solution

```js
var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
};
```

### Explanation

First, I use the method [toString(2)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString) to get the number representation in binary.
Secondly, with that representation, we can iterate in the final array to count the sum of the elements (since binary representation is given by ones and zeros).
The casting to Number in reduce method is necessary because, after the split, the type is a string.
