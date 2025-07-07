window.addEventListener("load", () => {
  const animacion = document.getElementById("animacion");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    animacion.style.display = "none";
    document.body.style.overflow = "auto";
  }, 7000); // tiempo total de animación
});

function toggleCard(cardElement) {
  // Cierra otras cards si están abiertas
  document.querySelectorAll('.card').forEach(card => {
    if (card !== cardElement) {
      card.classList.remove('active');
    }
  });

  // Activa/desactiva la card seleccionada
  cardElement.classList.toggle('active');
}

// Aquí va el artículo sobre la menstruación
document.addEventListener("DOMContentLoaded", () => {
  const bloques = document.querySelectorAll(".arvista-bloque");

  const observar = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observar.unobserve(entrada.target); // para que no se repita
      }
    });
  }, {
    threshold: 0.1,
  });

  bloques.forEach(bloque => {
    observar.observe(bloque);
  });
});