AOS.init();


document.addEventListener('DOMContentLoaded', () => {
    // Fecha objetivo: 10 de agosto del año actual
    const objetivo = new Date(new Date().getFullYear(), 7, 10);

    function actualizarContador() {
        const ahora = new Date();
        const tiempoRestante = countdown(ahora, objetivo);

        const dias = tiempoRestante.days;
        const horas = tiempoRestante.hours;
        const minutos = tiempoRestante.minutes;
        const segundos = tiempoRestante.seconds;

        document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

        document.getElementById('contador').innerHTML = `
            <div class="contador_template">
                <div class="bloque_contador">
                    <div class="numero">${dias}</div>
                    <div class="text_contador">DÍAS</div>
                </div>
                <div class="bloque_contador">
                    <div class="numero">${horas}</div>
                    <div class="text_contador">HORAS</div>
                </div>
                <div class="bloque_contador">
                    <div class="numero">${minutos}</div>
                    <div class="text_contador">MINUTOS</div>
                </div>
                <div class="bloque_contador">
                    <div class="numero">${segundos}</div>
                    <div class="text_contador">SEGUNDOS</div>
                </div>
            </div>
`;


        if (tiempoRestante.value <= 0) {
            document.getElementById('contador').innerHTML = '¡El tiempo ha terminado!';
        }
    }

    setInterval(actualizarContador, 1000);
});


document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces dentro del modal
    var menuItems = document.querySelectorAll('.menu_mobile');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Cerrar el modal
            var modal = document.getElementById('modalMenu');
            var bootstrapModal = bootstrap.Modal.getInstance(modal); // Utilizar Bootstrap 5
            bootstrapModal.hide();
        });
    });
});