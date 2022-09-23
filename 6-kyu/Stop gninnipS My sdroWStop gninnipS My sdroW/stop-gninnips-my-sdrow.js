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
