document.addEventListener('click', event => {
  if (event.target.id === 'button') {
    async function fetchJoke() {
      try {
        const response = await fetch("https://icanhazdadjoke.com", {
          headers: {
            "Accept" : "application/json"
          }
        })
        const joke = await response.json()
        console.log(joke)
        var p = document.getElementById("funny")
        p.innerText = joke['joke']
      } catch(error) {
        console.error(error)
      }
    }  
      
    fetchJoke()
  }
  
  if (event.target.id === 'dog') {
    fetchGivenJoke('dog')
  }
})

async function fetchGivenJoke(search) {
  try {
    const page = Math.floor(Math.random() * 12) + 1
    console.log(page) 
    const response = await fetch(`https://icanhazdadjoke.com/search?page=${page}&limit=1&term=${search}`, {
      headers: {
        "Accept" : "application/json"
      }
    })
    const joke = await response.json()
    console.log(joke)
    var p = document.getElementById("funny")
    p.innerText = joke['results'][0]['joke']
  } catch(error) {
    console.error(error)
  }
}

