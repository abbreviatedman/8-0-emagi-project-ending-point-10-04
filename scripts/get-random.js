// A utility function to get a random emoji from the passed-in array.
const getRandom = (emojis) => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

document.querySelector("#random form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category.value;

  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => response.json())
    .then((emojis) => {
      const result = getRandom(emojis).symbol.split();
      console.log(result);
      console.log(typeof result);
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = result;
    });
});
