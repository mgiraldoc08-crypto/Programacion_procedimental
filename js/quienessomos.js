function mensaje() {
    alert("¡Gracias por tu interés! Pronto podrás reservar.");
}
function mensaje() {

    let restaurante = "Burger House";
    let horario = "Abierto";

    if (restaurante === "") {
        alert("Error: no se encontró el restaurante.");
        return;
    }

    if (horario !== "Abierto") {
        alert("Lo sentimos, en este momento no estamos atendiendo.");
        return;
    }

    alert("¡Gracias por tu interés en Burger House! Tu reserva puede ser realizada.");
}
<input class="input" type="text" id="nombreCliente" placeholder="Ingrese su nombre">

</input>

function mensaje() {

    let nombre = document.getElementById("nombreCliente").value.trim();

    if (nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return;
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }

    alert("Reserva realizada para: " + nombre);
}