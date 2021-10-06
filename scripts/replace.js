// Your replace function should go here.
const replace = (sentence, emojis) => {
  return sentence.split(/\s/).map(term => {
    const emoji = newSearch(term, emojis)
    if(emoji.length === 0){
      return term
    }
    return emoji[0].symbol
   }).join(' ')
}
const newSearch = (term, emojis) => {
  return emojis.filter((emoji) => emoji.name === term.toLowerCase())
}

// console.log(replace('term', [{
//   symbol: "👽",
//   letter: "a",
//   name: "alien",
//   category: "faces",
// },]))
// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof replace === "undefined") {
  replace = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = replace;
}
