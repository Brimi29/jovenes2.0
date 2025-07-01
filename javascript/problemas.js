window.addEventListener("load", () => {
  const animacion = document.getElementById("animacion");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    animacion.style.display = "none";
    document.body.style.overflow = "auto";
  }, 7000);
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
