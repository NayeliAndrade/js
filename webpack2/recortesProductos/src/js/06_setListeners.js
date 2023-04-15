import {getData} from "./04_getData.js"

function setListeners() {
    const form = document.querySelector(".form")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        getData()
    });
}
export {setListeners}