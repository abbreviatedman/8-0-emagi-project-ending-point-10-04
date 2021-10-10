//search
document.querySelector('#search form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
      .then((response) => response.json())
      .then((emojis) => {
        if (emojis.length === 0) {
          throw "Error"
        }
        const result = emojis.map((emoji) => emoji.symbol).join('')
        const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = result;
        document.querySelector('#search aside').classList.add('success')
        document.querySelector('#search aside').classList.remove('error')
      })
      .catch(() => {
        const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = `There was an error.`
        document.querySelector('#search aside').classList.add('error')
      })
    event.target.reset()
  })

//get Random
document.querySelector('#random form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    const category = event.target.randomDropdown.value
    fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
      .then((response) => response.json())
      .then((emojis) => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        console.log(randomEmoji);
        const resultArea = document.querySelector('#random aside p')
        resultArea.textContent = randomEmoji.symbol;
        document.querySelector('#random aside').classList.add('success')
        document.querySelector('#random aside').classList.remove('error')
        event.target.reset()
      })
      .catch(() => {
        const resultArea = document.querySelector('#random aside p')
        resultArea.textContent = `There was an error.`
        document.querySelector('#random aside').classList.add('error')
      })
  })

//replace 

document.querySelector('#replace form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    const userInput = event.target.replace.value
    const arrayedUserInput = userInput.split(" ")
    fetch("https://emagi-server-8-0.herokuapp.com/emojis")
      .then((response) => response.json())
      .then((emojis) => {
        if (userInput.length === 0) {
          throw "Error"
        }
        for (const eachWord of arrayedUserInput) {
          for (const eachEmoji of emojis) {
            if (eachEmoji.name === eachWord) {
              arrayedUserInput[arrayedUserInput.indexOf(eachWord)] = eachEmoji.symbol
            }
          }
        }
        const resultArea = document.querySelector('#replace aside p')
        resultArea.textContent = arrayedUserInput.join(" ")
        document.querySelector('#replace aside').classList.add('success')
        document.querySelector('#replace aside').classList.remove('error')
        event.target.reset()
      })
      .catch(() => {
        const resultArea = document.querySelector('#replace aside p')
        resultArea.textContent = `There was an error.`
        document.querySelector('#replace aside').classList.add('error')
        document.querySelector('#replace aside').classList.remove('success')
      })
  })