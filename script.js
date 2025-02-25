const container = document.querySelector(".container");
const palabras = ["democracia", "casa", "perineo"];
const form = document.querySelector("#form");
const star = document.querySelector("#empezar");
const enviar = document.querySelector("#enviar");
const containerHidden = document.querySelector("#hidden");
let palabraSeleccionada = [];
let estadoPalabra = [];

function mostarPalabra(list) {
    let i = Math.floor(Math.random() * list.length);
    palabraSeleccionada = list[i].split(""); 
    estadoPalabra = Array(palabraSeleccionada.length).fill("_");

    container.innerHTML = estadoPalabra.join(" ");
    containerHidden.innerHTML = palabraSeleccionada.join(""); // Para depuración
}

star.addEventListener("click", () => {
    container.innerHTML = "";
    containerHidden.innerHTML = "";
    mostarPalabra(palabras);
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
    }

    container.innerHTML = estadoPalabra.join(" ");
    document.querySelector("#letra").value = ""; // Limpiar el input después de cada intento
});
