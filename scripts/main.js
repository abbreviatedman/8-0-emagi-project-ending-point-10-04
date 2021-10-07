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
  const term = event.target.encode.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!term.length) {
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = "Please enter a value to replace.";
        document.querySelector("#encode aside").classList.add("error");
      } else {
        const result = encode(term, emojis);
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = result;
        document.querySelector("#encode aside").classList.remove("error");
        document.querySelector("#encode aside").classList.add("success");
        event.target.reset();
      }
    });

  document
    .querySelector("#replace form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const category = event.target.replace.value;
      fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
        .then((response) => response.json())
        .then((emojis) => {
          console.log(emojis);
        });
    });
});
