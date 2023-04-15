let arr1 = [3, 4, 5, 6];

let modifiedArr1 = arr1.map(function(element){
    return element *3;
});

console.log(modifiedArr1); // [9, 12, 15, 18]

/* 2 */
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]


/* 3 */
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);