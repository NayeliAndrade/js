export var personList = [];
import { createProduct } from "./02_createProduct.js";
import { setListeners } from "./06_setListeners.js";
(function (_ref) {
  var productCount = _ref.productCount;
  //listeners
  createProduct(productCount);
  setListeners();
})({
  productCount: 5,
  random: {
    max: 500,
    min: 100
  }
});