import "./styles.css";

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
  const personList = [];
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
    personList.push(product);
  }
  console.log("personList", personList);
  return personList;
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
  console.log("randomResult", randomResult);
  return randomResult;
}
//#endregion FUNCTIONS

//#region EVENTS

//#endregion EVENTS

(({ productCount }) => {
  //events

  //create Products
  const a = createProducts(productCount);
  // render Products
  console.log("Asdasdasd", a);
  document.getElementById("app").innerHTML = `<h2>oli</h2>`;
})({ productCount: 5, randomPrice: { max: 4000, min: 1000 } });