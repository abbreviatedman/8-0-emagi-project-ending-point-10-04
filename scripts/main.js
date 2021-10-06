document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
      const result = emojis.map((emoji) => emoji.symbol).join("");
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = result;
      document.querySelector("#search aside").classList.add("success");
    });
});

document.querySelector("#random form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category.value;
  // console.log(event.target.category.value);
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
    });
});

document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.encode.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
    });
});

document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.replace.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
    });
});
