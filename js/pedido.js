<script>
    let pedido = [];
    let total = 0;

    function formatearMoneda(valor) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(valor);
    }

    function agregarAlPedido(nombre, precio) {
        pedido.push({ nombre, precio });
        total += precio;
        actualizarInterfaz();
    }

    function actualizarInterfaz() {
        const lista = document.getElementById('lista-pedido');
        const totalTxt = document.getElementById('total-final');

        if (pedido.length === 0) {
            lista.innerHTML = '<p class="has-text-grey">No has agregado productos</p>';
        } else {
            lista.innerHTML = '<ul>';

            pedido.forEach((item) => {
                lista.innerHTML += `
                    <li class="is-flex is-justify-content-space-between mb-1">
                        <span>${item.nombre}</span>
                        <strong>${formatearMoneda(item.precio)}</strong>
                    </li>`;
            });

            lista.innerHTML += '</ul>';
        }

        totalTxt.innerText = formatearMoneda(total);
    }

    function finalizarPedido() {

        let cantidadProductos = pedido.length;

        if (cantidadProductos === 0) {
            alert("Debes agregar al menos una salchipapa.");
            return;
        }

        if (total <= 0) {
            alert("El total del pedido no es válido.");
            return;
        }

        let mensaje = "🍟 *NUEVO PEDIDO - SALCHIPAPA WARRIOR* \n\n";

        pedido.forEach(item => {
            mensaje += `• ${item.nombre}: ${formatearMoneda(item.precio)}\n`;
        });

        mensaje += `\n💰 *TOTAL: ${formatearMoneda(total)}*`;

        let encodedMessage = encodeURIComponent(mensaje);

        window.open(`https://wa.me/573000000000?text=${encodedMessage}`);
    }
</script>