import { Product } from "./01_clase";
export const personList:Product[] = [];
import {createProduct} from "./02_createProduct";
import { setListeners } from "./06_setListeners";


(({ productCount }) => {
    //listeners
    createProduct(productCount);
    setListeners()
})({ productCount: 5, random: { max: 500, min: 100 } });
