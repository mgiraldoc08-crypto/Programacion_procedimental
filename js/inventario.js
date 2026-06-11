<input class="input" type="text" id="codigo" placeholder="Ej: PROD-123">

<input class="input" type="text" id="nombre" placeholder="Ej: Laptop Gaming">

<input class="input" type="number" id="cantidad" placeholder="0" min="0">

<select id="marca">
    <option value="">Selecciona una marca</option>
    <option>Marca A</option>
    <option>Marca B</option>
    <option>Marca C</option>
</select>

<button type="button" class="button is-link" onclick="validarProducto()">
    Guardar Producto
</button>
<script>
function validarProducto() {

    let codigo = document.getElementById("codigo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let cantidad = document.getElementById("cantidad").value;
    let marca = document.getElementById("marca").value;

    if (codigo === "") {
        alert("Ingrese el código del producto");
        return;
    }

    if (nombre === "") {
        alert("Ingrese el nombre del producto");
        return;
    }

    if (cantidad === "" || cantidad < 0) {
        alert("Ingrese una cantidad válida");
        return;
    }

    if (marca === "") {
        alert("Seleccione una marca");
        return;
    }

    alert("Producto guardado correctamente");
}
</script>