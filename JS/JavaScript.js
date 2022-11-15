'use strict';

const form = document.forms.letter

const palabras = [
  { nombre: "TORTILLA", pista: "comida" },
  { nombre: "MACARRONES", pista: "comida" },
  { nombre: "COCIDO", pista: "comida" },
  { nombre: "PAELLA", pista: "comida" },
  { nombre: "HAMBURGUESA", pista: "comida" },
  { nombre: "ESPAÑA", pista: "pais" },
  { nombre: "FRANCIA", pista: "pais" },
  { nombre: "MEXICO", pista: "pais" },
  { nombre: "ARGENTINA", pista: "pais" },
  { nombre: "CHINA", pista: "pais" },
];

console.log(palabras);

const numeroAleatorio = Math.round(Math.random() * 9);

console.log(numeroAleatorio);

const palabraElegida = []
const pistaBuena = []
for (let index = 0; index < palabras.length; index++) {
    const palabra = palabras[index];
    if (numeroAleatorio === index) {
        const arrayPalabra = palabra.nombre.split('')
        const pistaPalabra = palabra.pista
        pistaBuena.push(pistaPalabra)
        palabraElegida.push(arrayPalabra)
    }
}

console.log(`${palabraElegida}, ${pistaBuena}`);


function comprobar(e) {
    e.preventDefault();
    console.log('Letra enviada');
    const data = new FormData(form);
    for (const elemento of data) {
        const [nameImput, valueInput] = elemento
        if (nameImput === 'letra') {
            console.log(`${valueInput}`);
        }
    }
    form.reset();
}

form.addEventListener('submit', comprobar)