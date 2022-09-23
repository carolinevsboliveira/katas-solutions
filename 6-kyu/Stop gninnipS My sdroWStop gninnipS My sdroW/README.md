### [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript)

> Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

### My solution

```js
function spinWords(string) {
  return string
    .split(" ")
    .map((element) => {
      const splited = element.split("");
      if (splited.length >= 5) return splited.reverse().join("");
      return splited.join("");
    })
    .join(" ");
}
```

### Explanation

> I thought that this problem has quite interesting.

So the logic is to split the words at first.
Secondly, I use a map (because it generates a new array), and in the callback fn, I checked if the element's length is bigger than 5. If the condition is true, reverse the array of letters.
Look, there is a join() between elements that serve to prevent each letter from being split.
Lastly, the join('') serves to aggregate the words again, maintaining the order of words.
