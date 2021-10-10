// You encode function should go here.
const encode = (term, emojis) => {
  if (term.length === 0) {
    throw "No input entered"
  }
  //for each letter replace it with the emoji that has the same first letter
  const arr = [];
  let splitTerm = term.split("")
  for (const letter of splitTerm) {
    const find = emojis.find((emoji) => emoji.letter === letter.toLowerCase())
    if (find) {
      arr.push(find.symbol)
    } else {
      arr.push(letter)
    }
  }
  return arr.join("")
}

// emojis.find(({letter}) => letter === )

// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof encode === "undefined") {
  encode = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = encode;
}
