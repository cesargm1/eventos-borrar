const saludo = document.getElementById("saludo")
const paragraf = document.getElementById("texto")
const despedida = document.getElementById("despedida")
const bienvenida = document.getElementById("bienvenida")
const input = document.querySelector("#texto")

const saludar = () => {   
    return paragraf.innerHTML = "<b>hola</b>"
}

const despedirse = () => {   
    return paragraf.innerHTML = "<b>adios</b>"
}

const bienvenido = () => {   
    return paragraf.innerHTML = "<b>bienvenido</b>"
}

const escribir = (event) => {
   
}

saludo.addEventListener("click", saludar)

despedida.addEventListener("click", despedirse)

bienvenida.addEventListener("click", bienvenido)

 input.addEventListener("keydown" , escribir )

// Ejercicio 2: Captura de eventos de teclado y ratón 
// CE 5C: Diferencia los tipos de eventos que se pueden manejar
// CE 6E: Asocia acciones a eventos del modelo
// 1. Añade un campo de texto y detecta cuando el usuario escribe (keydown o
// input).
// 2. Muestra en tiempo real el número de caracteres introducidos.
// 3. Crea un área (div) que cambie de color cuando el ratón pase por encima
// (mouseover) y recupere su color original al salir (mouseout).
// 4. Usa funciones manejadoras bien nombradas y separadas del evento.