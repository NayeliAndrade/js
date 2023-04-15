"use strict";
const axios = require("axios");

async function makeRequest(id){
  const config = {
    method: "get",
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  };
  let res = await axios(config);
  /* console.log('data', res.data) */
   return res.data
}

function numberRanbom(min,max){
	return Math.floor(Math.random() * (1 + max - min) + min)
}

async function objectData(latA = []){
	let number = numberRanbom(1,5)
	let data = await makeRequest(number);
	
	const {name,username,address:{geo:{lat}}} = data 
	console.log('lat', lat)
	
	/* console.log('name:', name)
	console.log('userName:', username)
	console.log('geo', geo) */
	let geo = data.address.geo.lat;
	latA.push(geo)
	return latA;
}

async function compareLat(){
	const latA = await objectData([]);
	const latB = await objectData(latA);
	console.log('latB', latB)
	let resta = 0;
	let suma = 0;
	if (latB[0] != latB[1]){
		resta = parseInt(latB[0]) - parseInt(latB[1]);
		console.log("r",resta);
	}else{
		suma = parseInt(latB[0]) + parseInt(latB[1]);
		console.log('suma', suma);
	}
}
compareLat()
