const saludo = document.getElementById("saludo")
const paragraf = document.getElementById("texto")
const despedida = document.getElementById("despedida")
const bienvenida = document.getElementById("bienvenida")
const input = document.querySelector(".input")
const contador = document.getElementById("contador")
const cuadrado = document.querySelector(".cuadrado")
const evento = document.querySelector(".evento")
const boton = document.querySelector(".boton")

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
   event.target.style.backgroundColor = "red"
}

function mostrarCaracteres(input, contador) {
       contador.innerText = input.value.length;
    }

const cambiarColor = () => {
  cuadrado.style.backgroundColor = "red"
}

const original = () => {
    cuadrado.style.backgroundColor = "white"
}

const capturarEvento = () => {
    alert("evento capturado")
}

const capturarEventoHijo = (evento) => {
    alert( "evento hijo" )
    evento.stopPropagation(); 
}


saludo.addEventListener("click", saludar)

despedida.addEventListener("click", despedirse)

bienvenida.addEventListener("click", bienvenido)

 input.addEventListener("keydown" , escribir)

input.addEventListener('input', function() {
  mostrarCaracteres(input, contador);
});

cuadrado.addEventListener("mouseover", cambiarColor)
cuadrado.addEventListener("mouseout", original)

evento.addEventListener("click", capturarEvento);


boton.addEventListener("click", capturarEventoHijo)



// Ejercicio 2: Captura de eventos de teclado y ratón 
// CE 5C: Diferencia los tipos de eventos que se pueden manejar
// CE 6E: Asocia acciones a eventos del modelo
// 1. Añade un campo de texto y detecta cuando el usuario escribe (keydown o
// input).
// 2. Muestra en tiempo real el número de caracteres introducidos.


// 3. Crea un área (div) que cambie de color cuando el ratón pase por encima
// (mouseover) y recupere su color original al salir (mouseout).
// 4. Usa funciones manejadoras bien nombradas y separadas del evento.





// 2. Inserta otro botón dentro de un contenedor (div). Al hacer clic, haz que ambos
// capturen el evento.
// 3. Muestra por consola el orden de ejecución de los manejadores.
// 4. Usa stopPropagation() en uno de ellos y observa el comportamiento.
// 5. Añade comentarios explicativos en cada parte del código.
