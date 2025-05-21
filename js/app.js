
const obtenerReloj = () => {
    const fecha = new Date();
    
    const semana = [
        'Domingo',
        'Lunes',
        'Martes',
        'Mieercoles',
        'Jueves',
        'Viernes',
        'Sabado',
    ];

    const meses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'julio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];

    const detalleFecha = document.querySelector('h2');
    detalleFecha.textContent = `${semana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth(4)]} ${fecha.getFullYear()}`

    const dettaleHora = document.querySelector('.fs-1');
    dettaleHora.textContent = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
}

setInterval(obtenerReloj, 10)