let carrusel = document.querySelector('.carrusel');
let slides = document.querySelectorAll('.carrusel .slide');

let index = 0;
setInterval(() => {
  index = (index + 1) % slides.length;
  carrusel.style.transform = `translateY(-${index * 500}px)`;
}, 5000);
console.log("¡Funciona el JavaScript!");

// Aplica animación cuando las cards están en vista

function barajarCartas() {
  const baraja = document.querySelector('.baraja');
  const cartas = Array.from(baraja.children);

  // Agregar clase 'flip' para animación
  cartas.forEach(carta => {
    const img = carta.querySelector('img');
    img.classList.add('flip');

    // Quitar la clase después de que termine la animación
    img.addEventListener('animationend', () => {
      img.classList.remove('flip');
    }, { once: true });
  });

  // Barajar con Fisher-Yates
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }

  // Actualizar el DOM
  baraja.innerHTML = '';
  cartas.forEach(carta => baraja.appendChild(carta));
}

// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', () => {
  barajarCartas();
  setInterval(barajarCartas, 4000); // Baraja cada 4 segundos
});
