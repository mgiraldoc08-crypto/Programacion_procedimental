function guardarRegistro() {

    let fecha = document.getElementById("fecha").value;
    let concepto = document.getElementById("concepto").value.trim();
    let tipo = document.getElementById("tipo").value;
    let valor = document.getElementById("valor").value;

    // Validaciones
    if (fecha === "") {
        alert("La fecha es obligatoria");
        return;
    }

    if (concepto === "") {
        alert("El concepto es obligatorio");
        return;
    }

    if (concepto.length < 3) {
        alert("El concepto debe tener al menos 3 caracteres");
        return;
    }

    if (valor === "" || valor <= 0) {
        alert("Ingrese un valor mayor que 0");
        return;
    }

    // Continúa el código para guardar...
}if (!fecha || !concepto || !valor) {
    alert("Todos los campos son obligatorios");
    return;
}

if (isNaN(valor) || Number(valor) <= 0) {
    alert("El valor debe ser un número positivo");
    return;
}

if (concepto.length < 3 || concepto.length > 100) {
    alert("El concepto debe tener entre 3 y 100 caracteres");
    return;
}