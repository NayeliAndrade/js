export const personList = [];
import {createProduct} from "./02_createProduct.js";
import { setListeners } from "./06_setListeners.js";

(({ productCount }) => {
    //listeners
    createProduct(productCount);
    setListeners()
})({ productCount: 5, random: { max: 500, min: 100 } });