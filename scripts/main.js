// ----------Encode Phrase----------

document.querySelector("#encode-form").addEventListener("submit", (event) => {
  event.preventDefault();

  //reset css styles
  event.target.parentNode.querySelector(".result").classList.remove("success");
  event.target.parentNode.querySelector(".result").classList.remove("error");

  // target the category selection
  const text = event.target.encode.value;
  const resultArea = document.querySelector("#encode-result");

  if (!text) {
    resultArea.textContent = "Please select a specific category";
    event.target.parentNode.querySelector(".result").classList.add("error");
  } else {
    //get all the emojis json
    //Specific url to be dynamic
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) => response.json())
      .then((emojis) => {
        if (text === encode(text, emojis)) {
          resultArea.textContent = "No text had been replaced with an emoji";
          event.target.parentNode.querySelector(".result").classList.add("error");
        } else {
          const result = encode(text, emojis);
          resultArea.textContent = result;
          event.target.parentNode.querySelector(".result").classList.add("success");
        }
      })
      .catch();
  }

  event.target.reset();
});

//----------Search For Emoji by Name----------
//Query form and Add event listener

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();

  event.target.parentNode.querySelector(".result").classList.remove("error");
  event.target.parentNode.querySelector(".result").classList.remove("success");

  const term = event.target.search.value;
  const resultArea = document.querySelector("#search-result");

  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      const result = emojis.map((emojis) => emojis.symbol).join(" ");

      if (!result) {
        resultArea.textContent = `${term} cannot be found.`;
        event.target.parentNode.querySelector(".result").classList.add("error");
      } else {
        resultArea.textContent = result;
        event.target.parentNode.querySelector(".result").classList.add("success");
      }
    })
    .catch(() => {
      resultArea.textContent = `${term} cannot be found.`;
      event.target.parentNode.querySelector(".result").classList.add("error");
    });

  event.target.reset();
});

//----------Random by Category----------
//Query form and Add eventlistener
document.querySelector("#random-form").addEventListener("submit", (event) => {
  event.preventDefault();

  //reset css styles
  event.target.parentNode.querySelector(".result").classList.remove("success");
  event.target.parentNode.querySelector(".result").classList.remove("error");

  // target the category selection
  let category = event.target.category.value;
  const resultArea = document.querySelector("#random-result");

  if (category === "Select a category") {
    resultArea.textContent = "Please select a specific category";
    event.target.parentNode.querySelector(".result").classList.add("error");
  } else {
    //get all the emojis json
    //Specific url to be dynamic
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) => response.json())
      .then((emojis) => {
        if (category === "all") {
          const result = getRandom(emojis.map((emojis) => emojis.symbol));
          resultArea.textContent = result;
          event.target.parentNode.querySelector(".result").classList.add("success");
        } else {
          const result = getRandom(getCategory(category, emojis).map((emoji) => emoji.symbol));
          resultArea.textContent = result;
          event.target.parentNode.querySelector(".result").classList.add("success");
        }

        //check result
        // console.log(result);

        v;
      })
      .catch();
  }

  event.target.reset();
});

//----------Replace Text----------
//Query form and Add event listener
document.querySelector("#replace-form").addEventListener("submit", (event) => {
  event.preventDefault();

  //reset css styles
  event.target.parentNode.querySelector(".result").classList.remove("success");
  event.target.parentNode.querySelector(".result").classList.remove("error");

  // target the category selection
  const text = event.target.replace.value;
  const resultArea = document.querySelector("#replace-result");

  if (!text) {
    resultArea.textContent = "Please select a specific category";
    event.target.parentNode.querySelector(".result").classList.add("error");
  } else {
    //get all the emojis json
    //Specific url to be dynamic
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) => response.json())
      .then((emojis) => {
        if (text === replaceText(text, emojis)) {
          resultArea.textContent = "No text had been replaced with an emoji";
          event.target.parentNode.querySelector(".result").classList.add("error");
        } else {
          const result = replaceText(text, emojis);
          resultArea.textContent = result;
          event.target.parentNode.querySelector(".result").classList.add("success");
        }
      })
      .catch();
  }

  event.target.reset();
});
