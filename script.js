const container = document.querySelector("#container");
const palabras = ["democracia", "casa", "perineo"];
const form = document.querySelector("#form");
const star = document.querySelector("#empezar");
const enviar = document.querySelector("#enviar");
const containerHidden = document.querySelector("#hidden");
const img = document.querySelector("#img");
const numVidas = document.querySelector("#numVidas");
let palabraSeleccionada = [];
let estadoPalabra = [];
let vidas= 3;
let url0 = "./img/c0.png";
let url1 = "./img/c1.png";
let url2 = "./img/c2.png";
let url3 = "./img/c3.png";

function quitarVidas(i){
    return i-=1;
} 
function mostarPalabra(list) {
    let i = Math.floor(Math.random() * list.length);
    palabraSeleccionada = list[i].split(""); 
    estadoPalabra = Array(palabraSeleccionada.length).fill("_");
    
    container.innerHTML = estadoPalabra.join(" ");
    // containerHidden.innerHTML = palabraSeleccionada.join(""); 
    console.log(palabraSeleccionada.join(""))
}

star.addEventListener("click", () => {
    const img = document.querySelector("#img");
    container.style.display ="flex";
    container.innerHTML = "";
    containerHidden.innerHTML = "";
    mostarPalabra(palabras);
    img.src=url0;
});

enviar.addEventListener("click", function () { 
    let letra = document.querySelector("#letra").value;
    let actualizado = false;
    
    for (let i = 0; i < palabraSeleccionada.length; i++) {
        if (palabraSeleccionada[i] === letra) {
            estadoPalabra[i] = letra;
            actualizado = true;
        }
    }
    
    if (!actualizado) {
        console.log("Letra incorrecta");
        vidas = quitarVidas(vidas);

        console.log(vidas);
        if (vidas <= 0) {
            muerte();
            numVidas.textContent="0";
        }else{
            mostrarImg(vidas)
        }
    }
    
    container.innerHTML = estadoPalabra.join(" ");
    document.querySelector("#letra").value = ""; // Limpiar el input después de cada intento
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("La página ha cargado completamente");
});

function muerte(){
    img.src=url3;
    container.style.display ="none";
    containerHidden.innerHTML = "La palabra era: " + palabraSeleccionada.join("");
    vidas = 3;
}

function mostrarImg($vidas){
    switch(vidas){
        case 0:
            img.src=url3;
            numVidas.textContent="0";

            break
        case 1:
            img.src=url2;
            numVidas.textContent="1";

            break
        case 2:
            img.src=url1;
            numVidas.textContent="2";
            break
        default:
            img.src=url0;
        }
}