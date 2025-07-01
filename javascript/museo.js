document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("intro-museo").style.display = "none";
    const contenido = document.getElementById("contenido");
    contenido.classList.remove("oculto");
  }, 4000); // 4 segundos de animación rápida
});
