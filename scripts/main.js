document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  console.log(event.target, "bbbbb");
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
      const result = emojis.map((emoji) => emoji.symbol).join("");
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = result;
      document.querySelector("#search aside").classList.add("success");
    });
  event.target.reset();
});

document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category_select.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => {
      response.json().then((emojis) => {
        const result = emojis.map((emoji) => emoji.symbol).join("");
        const resultAreas = document.querySelector("#category aside p");
        resultAreas.textContent = result;
        document.querySelector("#category aside").classList.add("success");
      });
    })
    .catch(console.log);
});

document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const codes = event.target.encode.value.split(" ");
  console.log(codes, "aaaaa");
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => encode(codes, response))
    .then((emojis) => {
      console.log(emojis);
      const result = emojis; //.map((emoji) => emoji.symbol).join("");
      const resultArea = document.querySelector("#encode aside p");
      resultArea.textContent = result;
      document.querySelector("#encode aside").classList.add("success");
    });
  event.target.reset();
});

document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const replace = event.target.search.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis/${replace}`)
    .then((response) => response.json())
    .then((emojis) => {
      console.log(emojis);
      const result = emojis.map((emoji) => emoji.symbol).join("");
      const resultArea = document.querySelector("#replace aside p");
      resultArea.textContent = result;
      document.querySelector("#replace aside").classList.add("success");
    });
  event.target.reset();
});