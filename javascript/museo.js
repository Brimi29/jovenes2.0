const piezas = document.querySelectorAll('.pieza');
let currentAudio = null;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const audioSrc = entry.target.dataset.audio;

    if (entry.isIntersecting) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      currentAudio = new Audio(audioSrc);
      currentAudio.play();
    }
  });
}, {
  threshold: 0.6 // Reproduce cuando el 60% de la pieza esté visible
});

piezas.forEach(pieza => observer.observe(pieza));