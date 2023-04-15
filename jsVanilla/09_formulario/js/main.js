
/* 



console.log('file', file)
let inputColor = document.querySelector("#color").value;
console.log('color', color) */

function getName(){
    let inputName = document.querySelector("#name");
    inputName.addEventListener("input",(e)=>printWindow(e));
}

function getLastName(){
    let inputLastName = document.querySelector("#lastName");
    inputLastName.addEventListener("blur",(e)=>printWindow(e));
}   

function getEmail(){
    let inputEmail = document.getElementById("email");
    inputEmail.addEventListener("change",(e)=>printWindow(e));
}

function getFile(){
    let inputFile = document.querySelector("#file");
    inputFile.addEventListener("click",(e)=>printWindow(e))
}


function printWindow(e){
    let div = document.getElementById("text");
    div.innerHTML += 
    `
    <p>
        ${e.target.value}
    </p>
    `
    
    
}

getName()
getLastName()
getEmail()
getFile()
