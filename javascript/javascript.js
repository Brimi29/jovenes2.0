let carrusel = document.querySelector('.carrusel');
let slides = document.querySelectorAll('.carrusel .slide');

let index = 0;
setInterval(() => {
  index = (index + 1) % slides.length;
  carrusel.style.transform = `translateY(-${index * 500}px)`;
}, 5000);
console.log("¡Funciona el JavaScript!");
// Aplica animación cuando las cards están en vista
const cards = document.querySelectorAll('.baraja-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5
});

cards.forEach(card => observer.observe(card));