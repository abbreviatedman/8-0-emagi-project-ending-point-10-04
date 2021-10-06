// Your replace function should go here.

const replaceText = (text, emojis) => {
  const textArray = text.split(" ");
  const result = textArray.map((word) => {
    const found = emojis.find((emoji) => word.toLowerCase().includes(emoji.name));
    if (found) {
      word = word.toLowerCase().replace(found.name, found.symbol);
    }
    return word;
  });

  return result.join(" ");
};
// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof replaceText === "undefined") {
  replaceText = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = replaceText;
}