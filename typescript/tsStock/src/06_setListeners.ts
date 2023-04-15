import {getData} from "../src/04_getData"

function setListeners() {
    const form = document.querySelector(".form") as HTMLFormElement
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        getData()
    });
}
export {setListeners}
