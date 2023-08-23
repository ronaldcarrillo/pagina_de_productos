let form = document.querySelector('#form');
let detalle = form[0];
detalle.addEventListener('click', (e)=>{
    e.preventDefault();
    window.location.href = './carrito.html'
})