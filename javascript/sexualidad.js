
window.addEventListener("load", () => {
  const animacion = document.getElementById("animacion");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    animacion.style.display = "none";
    document.body.style.overflow = "auto";
  }, 7000); // tiempo total de animación
});


