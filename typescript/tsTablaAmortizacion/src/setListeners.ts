import { imprimir } from "../src/main";

export function setListener() {
    const form = document.querySelector("form") as HTMLFormElement
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        imprimir(e)})
}

