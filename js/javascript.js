document.addEventListener("DOMContentLoaded",iniciarApp);

function iniciarApp () {
document.querySelector("#formulario").addEventListener("submit",valorsubmit);
}

function valorsubmit(e) {
e.preventDefault();
const texto =document.querySelector("#texto").value;
const numero = parseInt(document.querySelector("#numero").value);

if (texto === "" || isNaN(numero)) {
mostrarAlerta("Los valores no son válidos.");
return;

}


}    

function mostrarAlerta(mensaje){

const errormensaje= document.querySelector(".errormensaje");

if (!errormensaje) {

const resultado = document.querySelector("#formulario");

const divmensaje = document.createElement ("p");
divmensaje.classList.add ("errormensaje");
 divmensaje.textContent=mensaje

 resultado.appendChild(divmensaje);

setTimeout(() => {
    
divmensaje.remove();
}, 2000);

}
}
