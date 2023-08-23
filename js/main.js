'use strict'
const gris = document.querySelector('#gris');
const naranja = document.querySelector('#naranja');
const negro = document.querySelector('#negro');
const piel = document.querySelector('#piel');
const verde = document.querySelector('#verde');

console.log(document.querySelector('#gris'));

let mueble = document.querySelector('.muebles');

let circulo = document.querySelector('.circulo');

let boton = document.querySelector('.button__collection__l');

let btn_plus = document.querySelector('.btn__size');



gris.addEventListener('click', e=>{
    mueble.src = 'img/mueble-gris.png';
    circulo.style.border = '55px solid var(--color-gris)';   
    boton.style.background = 'var(--color-gris)';
    btn_plus.style.color = 'var(--color-gris)';
})
naranja.addEventListener('click', e=>{
    mueble.src = 'img/mueble-naranja.png';
    circulo.style.border = '55px solid var(--color-naranja)';
    boton.style.background = 'var(--color-naranja)';
    btn_plus.style.color = 'var(--color-naranja)';
})
negro.addEventListener('click', e=>{
    mueble.src = 'img/mueble-negro.png';
    circulo.style.border = '55px solid var(--color-negro)';
    boton.style.background = 'var(--color-negro)';
    btn_plus.style.color = 'var(--color-negro)';
})
piel.addEventListener('click', e=>{
    mueble.src = 'img/mueble-piel.png';
    circulo.style.border = '55px solid var(--color-piel)';
    boton.style.background = 'var(--color-piel)';
    btn_plus.style.color = 'var(--color-piel)';
})
verde.addEventListener('click', e=>{
    mueble.src = 'img/mueble-verde.png';
    circulo.style.border = '55px solid var(--color-verde)';
    boton.style.background = 'var(--color-verde)';
    btn_plus.style.color = 'var(--color-verde)';
})

//REDIRECCIOIN
let btn_next = document.querySelector('.btn__next');
btn_next.addEventListener('click', ()=>{
    window.location.href = './detalle_producto.html';
})