// let strings = ['h', 'e', 'l', 'l', 'o']

// function join(arr){
//   let str = '';
//    arr.forEach(function(x){
//     str += x
//   })
//   return str;
// }

// join(strings)


const people = [
{name: "Jordan", age: 26},
{name: "Jackie", age: 22},
{name: "McKenzie", age: 22}
]


let button = document.querySelector('button')
button.addEventListener('click', function(event){
  let jackie = document.getElementById("jackie")
  people.forEach(function(person) {
  jackie.innerHTML += `<li> ${person.name} </li>`
  });
})
// let jackie = document.getElementById("jackie")
//   people.forEach(function(person) {
//   jackie.innerHTML += `<li> ${person.name} </li>`
//  });
