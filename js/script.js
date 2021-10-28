function carrousel() {
    // Variables
    const IMAGENES = [
        '/images/image-product-1.jpg',
        '/images/image-product-2.jpg',
        '/images/image-product-3.jpg',
        '/images/image-product-4.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 1;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');

    // Funciones
    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    return renderizarImagen();
}

var sumar = document.getElementById("mas");
var restar = document.getElementById("menos");
var contador = document.getElementById("contador");
var importe = document.getElementById("importe");
var indicator = document.getElementById("indicator");
var valorBase = 250.00 * 0.5;
var prevValue;

function calcular() {
    var value = contador.value;
    var isValid = /^[0-9][0-9]*$/.test(value);

    if (!isValid) {
        contador.value = prevValue;
    } else {
        prevValue = value;
    }

    importe.value = Number.parseFloat(contador.value * valorBase).toFixed(2);
}

sumar.onclick = function () {
    contador.value = Number(contador.value) + 1;
    indicator.value = Number(contador.value);
    calcular();
};

restar.onclick = function () {
    contador.value = Number(contador.value) - 1;
    indicator.value = Number(contador.value);
    calcular();
};

contador.onchange = function () {
    calcular();
};

contador.onkeyup = function () {
    if (contador.value === "") {
        return;
    }
    calcular();
};

calcular();