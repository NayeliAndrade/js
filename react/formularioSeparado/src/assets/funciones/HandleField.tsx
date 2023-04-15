import { HandleChange } from "../componentes/tools/types";

const HandleField: HandleChange = (e, set) => {
  const { name, type, checked, value } = e.target as HTMLInputElement 
    set((prev) => ({...prev, [name]: type === 'checkbox' ? name : value}))
  
  //console.log("change", name, value);
}
export default HandleField

