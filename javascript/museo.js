document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagem");
  const contenido = document.getElementById("contenido");

  setTimeout(() => {
    imagenes.forEach((img, i) => {
      setTimeout(() => {
        img.style.animation = "desaparecer 1s ease forwards";
      }, i * 300);
    });

    setTimeout(() => {
      document.querySelector(".musei-intro").style.display = "none";
      contenido.classList.remove("oculto");
      contenido.style.opacity = 1;
    }, 4000); // tiempo total
  }, 7000); // espera hasta que todas hayan aparecido
});
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', () => {
    const texto = item.querySelector('.textoIm');
    texto.style.opacity = texto.style.opacity === '1' ? '0' : '1';
  });
});

