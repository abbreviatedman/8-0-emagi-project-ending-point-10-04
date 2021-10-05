// This should connect the encoded words

const encode = (word, emojis) => {
  let result = []
  for(word of words){
    const finder = emojis.find(
      (emoji) => emoji.letter === word.toLowerCase()
    );
    if (finder){
      result.push(finder.symbol);
    } else{
      result.push(word)
    }
  }
  return result.join('')
}

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
