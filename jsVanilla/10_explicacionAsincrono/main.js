// dispatch = exito en el retorno
// reject = Error en la salida

/* const test = new Promise((dispatch, reject) => {
    dispatch("Hola");
  });
  
  async function data() {
    let test2 = await test;
    return test2;
  }
  data();
  
  async function get() {
    console.log(await data(), "123");
    test.then((test) => console.log(test));
  }
  get(); */

/* fetch */
/* function data(){
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=naWG3bg0ExXlZCy7WyqgNRwVQ8PPnrfOrWdNlnjF`)
    .then((response) => response.json())
    .then((data) => infoApi(data))
    .catch((err) => console.log("error",err));
    console.log(url);
}
data()

function infoApi(data){
    console.log(data);
    const {lunar,kilometers,miles} = data;

    const tem = `${lunar},${kilometers},${miles}`
    

} */
const axios = require("axios");

async function makeRequest() {
  try {
    const config = {
      method: "get",
      url: `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=naWG3bg0ExXlZCy7WyqgNRwVQ8PPnrfOrWdNlnjF`,
    };
    let res = await axios(config);
    return res.data;
  } catch (error) {
    console.log("error");
  }
}



async function data(){
    let data2 = await makeRequest();
    console.log(data2);
}
data()