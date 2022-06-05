document.addEventListener("DOMContentLoaded",iniciarApp);

let gastos= [];

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

agregarGastos (texto,numero);


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

function agregarGastos(texto,numero) {
const objGastos= {
    texto,
    numero
}

gastos.push (objGastos);

mostrarGasto();
}
function mostrarGasto() {
    limpiarHTML();
gastos.forEach(gasto => {

    const resultados = document.querySelector("#resultado");
    const {texto,numero }= gasto;
    
    const nuevoli= document.createElement ("li");
    nuevoli.classList.add("nuevoli");

    nuevoli.innerHTML=`
    ${texto}: <span class="cantindadEstilo"> $ ${numero} </span>
    `;
    
resultados.appendChild(nuevoli);

    
});
mostrartotal (gastos);
}
function mostrartotal (gasto) {
let total= 0;
let cantidad=0;

gasto.forEach (objgasto => {
    total += objgasto.numero;
    cantidad++;
});



mostrarHtml (total,cantidad);
}

function mostrarHtml (total,cantidad) {
 const resultado=document.querySelector ("#resultado");
 const mostrartotal= document.createElement("div");
 mostrartotal.classList.add("mostrartotal");
 mostrartotal.textContent="Total:";
 
 const TotalSpan= document.createElement("span");
 TotalSpan.classList.add ("parrafoSpan");
 TotalSpan.textContent=`$${total}`;


 const mostrarPago=document.createElement("div");
 mostrarPago.classList.add ("mostrarTotales");
 mostrarPago.textContent="A cada uno le toca aportar: ";

 const pagoMostrar= document.createElement("span");
 pagoMostrar.classList.add ("parrafoSpan");
 pagoMostrar.textContent = `$${total/cantidad}`;

 mostrartotal.appendChild(TotalSpan); 
 mostrarPago.appendChild(pagoMostrar);

 resultado.appendChild(mostrartotal);
 resultado.appendChild(mostrarPago);


}
function limpiarHTML() {
    const resultado=document.querySelector("#resultado");
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
