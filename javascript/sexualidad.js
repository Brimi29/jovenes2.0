window.addEventListener("load", () => {
  const animacion = document.getElementById("animacion");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    animacion.style.display = "none";
    contenido.style.display = "block";
    document.body.style.overflow = "auto";
  }, 7000); // tiempo total de animación
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const contenido = document.querySelector('#contenido');
    const frases = document.querySelector('.animacion-frases');
    if (contenido && frases) {
      contenido.style.display = 'block';
      frases.style.display = 'none';
    }
  }, 14000); // Espera 14 segundos
});

