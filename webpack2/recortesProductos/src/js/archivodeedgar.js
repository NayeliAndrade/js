document.getElementById("app").innerHTML = `
  <div class="form" style="
    display: flex; 
    flex-direction: column;
  ">
    <h2>Agregar tu productuuu</h2>
    
    <label>Name</label>
    <input id="name"type="text"/>
    <label>Description</label>
    <input id="description"type="text"/>
    <input id="btnSubmit" type="button" style="margin: 15px" value="submit"/>
  </div>
`;

//#region CLASS
class Product {
  id = 0;
  name = "";
  displayName = "";
  sku = 0;
  price = 0;
  description = "";

  constructor(id, name, displayName, sku, price, description) {
    this.id = id;
    this.name = name;
    this.displayName = displayName;
    this.sku = sku;
    this.price = price;
    this.description = description;
  }
}
//#endregion CLASS

//#region FUNCTIONS
function createProducts(productCount) {
  const productList = [];
  for (let i = 0; i < productCount; i++) {
    //functionRANDOM to get product
    //
    const product = new Product(
      randomGeneric("number", { minRange: 2, maxRange: 4 }),
      randomGeneric("string", { minRange: 2, maxRange: 4 }),
      "displayName" + i,
      randomGeneric("number", { minRange: 2, maxRange: 4 }),
      randomGeneric("number", { minRange: 2, maxRange: 4 }),
      "description" + i
    );
    productList.push(product);
  }
  return productList;
}

function randomGeneric(type, { minRange, maxRange }) {
  let randomResult;

  switch (type) {
    case "number":
      randomResult =
        minRange === maxRange
          ? Math.round(
              Math.random() *
                [...new Array(maxRange)].reduce((acc, item, i) => {
                  acc += "0";
                  return acc;
                }, "1")
            )
          : Math.random() * (maxRange - minRange + 1) + minRange;
      break;
    case "string":
      randomResult = [...new Array(maxRange)].reduce((acc, item, i) => {
        acc += i;
        return acc;
      }, "Producto");
      break;

    default:
      break;
  }
  return randomResult;
}

function renderProducts(productList) {
  const containerDom = document.getElementById("container");
  if (containerDom) containerDom.remove();
  const container = createDomContainer();
  // [{a:1},{a:2}] => [[0,{a:1}], [1,{a:2}]]
  const ul = document.createElement("ul");
  for (const [i, product] of productList.entries()) {
    const li = document.createElement("li");
    li.textContent = product.displayName;
    ul.append(li);
  }
  container.append(ul);
  document.getElementById("app").appendChild(container);
}

function createDomContainer() {
  //create DOM templates
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  container.setAttribute("class", "test t");
  container.style = `
    height: auto; 
    weight: 15px; 
    border: 1px solid black;
    margin: 15px;
  `;
  container.style.backgroundColor = "aqua";

  return container;
}
//#endregion FUNCTIONS

//#region EVENTS
function setEventsDom(productList) {
  const btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.addEventListener("click", () => {
    const count = productList.length;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    console.log("count", count);
    console.log("name", name);
    const newProduct = new Product(
      count,
      name,
      "displayName" + count+2,
      count,
      count,
      description
    );
    console.log("newProduct", newProduct);
    productList.push(newProduct);
    renderProducts(productList);
  });
}
//#endregion EVENTS

(({ productCount }) => {
  const productList = [];
  //events
  setEventsDom(productList);
  //create stocked Products
  productList.push(...createProducts(productCount));
  // render Products
  renderProducts(productList);
})({ productCount: 5, randomPrice: { max: 4000, min: 1000 } });
