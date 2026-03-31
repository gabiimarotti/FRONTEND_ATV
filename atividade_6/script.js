const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");

const estados = {
    normal: "bolacha.png",
    clicado: "bolacha_estrogonofe.png",
    alimentado: "feliz.png",
    fome30: "bravo30.png",
    fome60: "bravo60.png",
}

let contador = 0;
let intervalo = null;
let time_click = null;
let time_out = null;

function init_cont (){
    
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {

        contador++;
        console.log("Tempo:", contador);

        if(contador == 10){
            bicho.src = estados.fome30;
        }

        if(contador == 20){
            bicho.src = estados.fome60;
        }
    }, 1000);
}

function alimentar(){
    bicho.src = estados.clicado;
    contador = 0;
    console.log("Alimentando...");

    if (time_click) clearInterval(time_click);

    time_click = setTimeout(() => {
        bicho.src = estados.alimentado;
        console.log("Alimentado!");
        time_out = setTimeout(() => {
            bicho.src = estados.normal;
        }, 1000)
    }, 2000);
    
}

init_cont();