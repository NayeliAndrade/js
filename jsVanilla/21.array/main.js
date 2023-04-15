const people = [
    {
        name: "Juan",
        lastname: "Villanueva",
        age: 30,
    },
    {
        name: "Luis",
        lastname: "Sandoval",
        age: 27,
    },
    {
        name: "Diana",
        lastname: "Ruiz",
        age: 29,
    },
    
];

const app = document.getElementById("app");
const output = document.getElementById("output");
let result = ``;
let index = null;

const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  output.innerHTML = selector(people);
});


function selector(xs) {
  if (index === null || index === (xs.length -1)) {
    index = 0
  }else{
    index = index + 1;
  }
  result = xs[index].name;
  return result;
}
