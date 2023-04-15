import { setListener } from "../src/setListeners";
setListener()

export function imprimir(e) {
    e.preventDefault(); 

    let prestamo = document.querySelector("#prestamo") as HTMLInputElement;
    const tazaInteres = document.querySelector("#interes") as HTMLInputElement;
    const meses = document.querySelector("#meses") as HTMLInputElement;

    let prestamoValue = parseFloat(prestamo.value );
    let tazaInterezValue = parseFloat(tazaInteres.value) / 100.0;
    let mesesValue = parseFloat(meses.value);

    

    let tazaMensual = tazaInterezValue / 12
    let pagoMensual = prestamoValue * (tazaMensual / (1 - Math.pow((1 + tazaMensual), -mesesValue)))

    if (!isNaN(prestamoValue) && !isNaN(tazaInterezValue) && !isNaN(tazaMensual)) {
        for (let i = 1; i <= mesesValue; i++) {
            let interes:number = 0
            let amortizacion:number = 0

            let contenedorTablaAmortizacion = document.querySelector(".contenedorTablaAmortizacion") as HTMLElement
            let template = document.querySelector("template")!.content
            let fragment = document.createDocumentFragment()

            template.querySelector(".tablaMeses")!.textContent = `${i}`
            template.querySelector(".tablaPago")!.textContent = `${pagoMensual.toFixed(2)}`

            interes = prestamoValue * tazaMensual
            template.querySelector(".tablaInteres")!.textContent = `${interes.toFixed(2)}`

            amortizacion = pagoMensual - interes
            template.querySelector(".tablaAmortizacion")!.textContent = `${amortizacion.toFixed(2)}`

            prestamoValue = prestamoValue - amortizacion
            template.querySelector(".tablaSaldo")!.textContent = `${prestamoValue.toFixed(2)}`
            

            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
            contenedorTablaAmortizacion.appendChild(fragment)
        }
    }else{
        alert("Ingresa numeros")
    }
}



/* function getFile(){
    let inputFile = document.querySelector("#file");
    inputFile.addEventListener("click",(e)=>printWindow(e))
} */
