(function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Selecciona todas las imágenes de las celdas
  const imgs = document.querySelectorAll('.cell img, .row1-left img');

  imgs.forEach(function (img) {
    // Se elimina img.style.cursor = 'zoom-in'; para usar el cursor normal
    img.addEventListener('click', function () {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Cerrar al hacer clic en la cruz (si existe en el HTML)
  if (lightboxClose) {
    lightboxClose.addEventListener('click', cerrar);
  }

  // Cerrar al hacer clic en el fondo o en el botón de cierre dinámico por CSS
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      cerrar();
    }
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrar();
  });

  function cerrar() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }
})();