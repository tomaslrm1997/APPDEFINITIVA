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

mostrarHTML();
}
function mostrarHTML() {
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
gastos = [];
}