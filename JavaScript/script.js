const elinput = document.querySelector(".section__input");
const elbtn = document.querySelector(".section__btn");
const elpiyoda = document.querySelector("#piyoda");
const elvelosipedist = document.querySelector("#velosipedist");
const eltaxi = document.querySelector("#taxi");
const elsamalyot = document.querySelector("#samalyot");

elbtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    elpiyoda.innerHTML = `
 ${elinput.value / 3.6} soat `;
    elvelosipedist.innerHTML = `
 ${elinput.value / 20.1} soat `;
    eltaxi.innerHTML = `
 ${elinput.value / 70} soat `;
    elsamalyot.innerHTML = `
 ${elinput.value / 800} soat `;
});
