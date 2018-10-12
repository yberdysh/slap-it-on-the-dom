document.addEventListener("DOMContentLoaded", () => {
    const hugoDiv = document.querySelector('#hugo')
    const button = document.querySelector('button')
    button.addEventListener("click", async () => {
      hugoDiv.innerHTML = ""
      // let response = await fetch('http://localhost:3000/students')
      // let people = await response.json()
      // console.log("people", people)
      //   people.forEach(person => {
      //       hugoDiv.innerHTML += `<li>${person.name}</li>`
      //   })
      fetch('http://localhost:3000/students')
      .then(res => res.json())
      .then(people => people.forEach(person => {
            hugoDiv.innerHTML += `<li>${person.name}</li>`
        }))
    })
})

