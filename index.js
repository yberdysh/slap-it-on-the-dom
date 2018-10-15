let students = [
    { "name": "Jordan", "age": 26 },
    { "name": "Jackie", "age": 22 },
    { "name": "McKenzie", "age": 22 }
  ]

// document.addEventListener("DOMContentLoaded", () => {
//  const button = document.getElementsByTagName("button")[0]
//   const div = document.getElementById('steven')
//     button.addEventListener("click",function(){
//       div.innerHTML = "";
//       // debugger;
//       // console.log("DIV", div)
//       // console.log("innerHTML", typeof div.innerHTML)
//       // console.log("innerHTML", div.innerHTML === "")
//       students.forEach(function(student){
//       // debugger;
//       console.log(student.name)
//       div.innerHTML += `<li>
//       ${student.name}
//     </li>`
//     // let li = document.createElement("li")
//     // li.innerText = student.name
//     // div.append(li)
//     })
//   })
// })

// async await
document.addEventListener("DOMContentLoaded", () => {
 const button = document.getElementsByTagName("button")[0]
  const div = document.getElementById('steven')
    button.addEventListener("click",function(){
      div.innerHTML = "";
      fetch("http://localhost:3000/students")
      .then(res => res.json())
      .then(students => {
      students.forEach(function(student){
      // debugger;
      console.log(student.name)
      div.innerHTML += `<li>
      ${student.name}
    </li>`
    // let li = document.createElement("li")
    // li.innerText = student.name
    // div.append(li)
    })

      })
      // console.log(stuff)
  })
})
