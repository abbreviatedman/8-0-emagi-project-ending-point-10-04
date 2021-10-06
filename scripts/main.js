document.querySelector('#search form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
      .then((response) => response.json())
      .then((emojis) => {
        console.log(emojis)
        //refactor if
        if(emojis.length === 0){
          //refactor resultArea ---> is being used 2 times
          const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = `${term} can not be found`
        document.querySelector('#search aside').classList.add('error')
        } else {
        const result = emojis.map((emoji) => emoji.symbol).join('')
        //refactor resultArea ---> is being used 2 times
        const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = result;
        document.querySelector('#search aside').classList.remove('error')
        document.querySelector('#search aside').classList.add('success')
        }
      })
      .catch(() => {
        //-----> refactor
        const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = "Please enter a word"
        document.querySelector('#search aside').classList.add('error')
      })


      event.target.reset()
  })



  document.querySelector('#random form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    const term = event.target.category.value
    let baseURL = `https://emagi-server-8-0.herokuapp.com/categories/${term}`
    console.log(term)
    if(term === 'all'){
      baseURL = "https://emagi-server-8-0.herokuapp.com/emojis"
    }
    fetch(baseURL)
    .then(response => response.json())
    .then(emojis => {
      const result = emojis.map((emoji) => emoji.symbol)
      const resultArea = document.querySelector('#random aside p')
        resultArea.textContent = getRandom(result)
        document.querySelector('#random aside').classList.remove('error')
        document.querySelector('#random aside').classList.add('success')

    })
    event.target.reset()
  })




  document.querySelector('#replace form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    const sentence = event.target.replace.value
    fetch("https://emagi-server-8-0.herokuapp.com/emojis")
    .then(response => response.json())
    .then(emojis => {
      // const result = emojis.map((emoji) => emoji.symbol)
      const resultArea = document.querySelector('#replace aside p')
      //refactor resultArea ---> is being used 2 times
      resultArea.textContent = replace(sentence, emojis)

      document.querySelector('#replace aside').classList.remove('error')
      document.querySelector('#replace aside').classList.add('success')


      if(sentence.length === 0){
        document.querySelector('#replace aside').classList.remove('success')
        document.querySelector('#replace aside').classList.add('error')
        resultArea.textContent = "Put something in the box.."
      } 
      else if(resultArea.textContent.includes(sentence)){
        document.querySelector('#replace aside').classList.remove('success')
        document.querySelector('#replace aside').classList.add('error')
        resultArea.textContent = "No emojis found"
      }
      
    })

    event.target.reset()
  })


  document.querySelector('#encode form')
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const term = event.target.encode.value
    fetch("https://emagi-server-8-0.herokuapp.com/emojis")
    .then(response => response.json())
    .then(emojis => {
      const resultArea = document.querySelector('#encode aside p')
      //refactor resultArea ---> is being used 2 times
      if(term.length === 0){
        resultArea.textContent = "No spaces in my box.."
        document.querySelector('#encode aside').classList.add('error')
        document.querySelector('#encode aside').classList.remove('success')
      } else {
        resultArea.textContent = encode(term, emojis)

        document.querySelector('#encode aside').classList.remove('error')
        document.querySelector('#encode aside').classList.add('success')
      }
      
    })
    event.target.reset()
  })