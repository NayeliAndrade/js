/* tener un array borrar los numeros repetidos */
const array = [1, 2, 3, 4, 6, 6, 1, 9, 1, 3]

const removeRepeated=()=>{
    const output = []
    for (let i = 0; i < array.length; i++) {
        array.sort()
        /* console.log(array); */
        if (array[i] != array[i + 1]) {
            output.push(array[i])
        }
    }
    return output
}
console.log(removeRepeated());
