"use strict";
const array = [];

const axios = require("axios");

(async function ({counter}) {
  /* console.log(counter); */
  counterUser({ counter }); /* envio de datos */
})({ counter: 2 }); /* parametro1 */ /* segundo contexto */ /* enviarlos */

//#region request
async function makeRequest(id) {
  /* const config = {
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`, */
    
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {
      // ✅ set Accept-Encoding header
      headers: {'Accept-Encoding': 'gzip,deflate,compress'}, 
  });
  
 
  return res.data.address.geo.lat;
}
//#endregion request

function numberRanbom(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

async function counterUser({counter}) {
  console.log({counter});
  for (let i = 0; i < counter; i++) {
    let lat = await makeRequest(numberRanbom(1, 5));
    array.push(lat)
    console.log(array);
    mayorMenor(array)
    console.log("lat", lat);
  }
}

function mayorMenor(array,lat){
  array.sort(lat)
  let mayor = 0;
  let menor = array[0];
  
  for (let i = 0; i < array.length; i++){
    if ((array[i]*-1) > mayor){
      mayor = array[i]
    }
    if (menor < array){
    }
  }
  console.log("Este numero es mayor",mayor);
  console.log("Este numero es menor",menor);
}