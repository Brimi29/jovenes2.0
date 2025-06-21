let carrusel = document.querySelector('.carrusel');
let slides = document.querySelectorAll('.carrusel .slide');

let index = 0;
setInterval(() => {
  index = (index + 1) % slides.length;
  carrusel.style.transform = `translateY(-${index * 500}px)`;
}, 5000);
console.log("¡Funciona el JavaScript!");