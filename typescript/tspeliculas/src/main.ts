interface Data {
  page:number,
  results: Results[]
}

interface Results {
  id:number,
    poster_path: string,
    title:string,
    release_date: string,
    overview: string
}

let pages: number = 1;
// aqui definimos la forma de movies
//me avisas en que linea vas porque no me aparce tus movimientos porfis
let movies:Results[] = [];
let input:HTMLInputElement | null = document.querySelector("#search");



function makeRequest(pages:number) {
  const urlApi:string = `https://api.themoviedb.org/3/movie/popular?api_key=ef39abb1c780cab951081e90b90310fd&language=en-US&page=${pages}`
  fetch(urlApi)
    .then((response) => response.json())
    .then((Data:Data) => {
      movies = Data.results;
      printInfo(movies);
    })
    .catch((err:string) => console.log("Request fail", err));
}

function printInfo(moviesData) {
  let movieContainer = document.querySelector("#movieContainer") as HTMLElement;
  movieContainer.innerHTML = "";
  const IMAGE_URL: string = "https://image.tmdb.org/t/p/w200";

  for (const i of moviesData) {
    const pelis = `
    <div class="cards">
    <img src="${IMAGE_URL}${i.poster_path}" alt="">
    <p class="title">${i.title}</p>
    <p>${i.release_date}</p>
    <p>${i.overview}</p>
    </div>
    `;
    movieContainer.innerHTML += pelis;
  }
}

function setListeners(){
  let btnPreviousClick = document.querySelector(".previous") as HTMLButtonElement;
  btnPreviousClick.addEventListener("click",previousPage);

  let btnNextClick= document.querySelector(".next") as HTMLButtonElement;
  btnNextClick.addEventListener("click",nextPage)
}

function previousPage() {
  if (pages > 1) {
    pages -= 1;
    makeRequest(pages);
  }
}

function nextPage() {
  if (pages < 500) {
    pages += 1;
    makeRequest(pages);
  }
}

function search() {
  let btnFilterTitle = document.querySelector("#filterName") as HTMLButtonElement;
  let btnFilterYear = document.querySelector("#filterYear") as HTMLButtonElement;

  btnFilterTitle.addEventListener("click", filterTitle);
  btnFilterYear.addEventListener("click", filterYear);
}

function filterTitle() {
  // aqui tambien agregamos la interfaz Results para evitar la ambiguedad
  const moviesTitle:Results[] = [];
  if (input){
    for (let i = 0; i < movies.length; i++) {
      // estabas intentando compara un string con un HTMLInputElement, entonces accedí al valor de ese elemento con el .value
      if (movies[i].title === input.value) moviesTitle.push(movies[i]);
    }
  }
  printInfo(moviesTitle);
}
/* filtra dependiendo de la condicion  */
function filterYear() {
 
  // lo mismo de la interfaz Results
  const moviesYear:Results[] = [];
  if (input){
    for (let i = 0; i < movies.length; i++) {
      let year = movies[i].release_date;
      let dataYear = year.split("-");
      // lo mismo del elemento contra string
      if (dataYear[0] === input.value) moviesYear.push(movies[i]);
    }
  }
  printInfo(moviesYear);
}

function setListenerInput(){
  if (input){
    input.addEventListener("input",function(e){
      filterTitle2(e)
    })
  }
}

function filterTitle2(e){
  console.log(e.target.value);
}

setListeners()
makeRequest(pages);
search();