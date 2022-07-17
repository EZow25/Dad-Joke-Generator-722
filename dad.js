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
})