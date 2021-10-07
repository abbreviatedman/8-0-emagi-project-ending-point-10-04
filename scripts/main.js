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
    })
    .catch((error) => {
      if (!term) {
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = `${error} cannot be found!`;
        document.querySelector("#search aside").classList.add("error");
      }
    });
});

// ***********Categories***************

document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const categoryUrl = "https://emagi-server-8-0.herokuapp.com/categories/";
  const category = event.target.category.value;
  fetch(categoryUrl + category)
    .then((response) => response.json())
    .then(displayCategory)
    .catch(console.log);

  if (event.target.category.value === "All") {
    fetch("https://emagi-server-8-0.herokuapp.com/emojis")
      .then((response) => response.json())
      .then(displayCategory)
      .catch(error);
  } else if (event.target.category.value === "default") {
    document.querySelector("#category aside").classList.add("error");
    document.querySelector("#category aside p").textContent =
      "Choose a category";
  }
  event.target.reset();
});

// if (document.querySelector("#category aside").style.background = "var(--color-green)") {
//   document.querySelector("#category aside").style.background = "var(--color-red)"
//  }

const displayCategory = (emojis) => {
  const getEmoji = emojis.map((emoji) => emoji.symbol);
  document.querySelector("#category aside p").textContent = getRandom(getEmoji);
  document.querySelector("#category aside").classList.add("success");
  return getEmoji;
};

// ***************Replace********************
const emojiURL = "https://emagi-server-8-0.herokuapp.com/emojis";
document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.replaced.value;
  fetch(emojiURL)
    .then((response) => response.json())
    .then((emojis) => {
      document.querySelector("#replace aside p").textContent = replace2(
        input,
        emojis
      );
      document.querySelector("#replace aside").classList.remove("error");
      document.querySelector("#replace aside").classList.add("success");
    })
    .catch((error) => {
      if (!input) {
        document.querySelector("#replace aside p").textContent =
          "Please Enter Something";
        document.querySelector("#replace aside").classList.add("error");
        document.querySelector("#replace aside").classList.remove("success");
      }
    });
  event.target.reset();
});
const replace2 = (words, db) => {
  // :rainrain"rainrainRaining
  if (words.length === 0) {
    throw "No input";
  }

  const find = db.find((emoji) => words.toLowerCase().includes(emoji.name));
  const split = words.split(" ");
  const arr = [];
  const punctuation = "`~!@#$%^&*()_-+=|}{][?/><,.;:'\"";
  for (const letter of split) {
    if (find) {
      arr.push(letter.toLowerCase().replace(find.name, find.symbol));
    }
    if (arr.includes(punctuation)) {
      const find2 = db.find((emoji) => emoji.name === letter.toLowerCase());
      if (find2) {
        arr.push(find.symbol);
      } else {
        arr.push(letter);
      }
      return arr;
    }
  }

  console.log(arr);
  return arr;
};

//******************** Encode ********************

document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.encoded.value;
  fetch("https://emagi-server-8-0.herokuapp.com/emojis")
    .then((response) => response.json())
    .then((emojis) => {
      document.querySelector("#encode aside p").textContent = encode(
        input,
        emojis
      );
      document.querySelector("#encode aside").classList.add("success");
    })
    .catch((error) => {
      if (!input) {
        document.querySelector("#encode aside p").textContent =
          "Please Enter Something";
        document.querySelector("#encode aside").classList.add("error");
        document.querySelector("#encode aside").classList.remove("success");
      }
    });
});
