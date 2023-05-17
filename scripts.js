$(document).ready(function(){
    $('.photo-carousel').slick({
      autoplay: true, // Activar el desplazamiento automático
      autoplaySpeed: 3000, // Velocidad del desplazamiento automático en milisegundos
      /* dots: true, // Agregar indicadores de navegación (puntos)
      arrows: true, // Agregar botones de navegación (flechas) */
      infinite: true, // Desplazarse infinitamente
      speed: 500, // Velocidad de transición en milisegundos
      slidesToShow: 1, // Mostrar una imagen por vez
      slidesToScroll: 1 // Desplazar una imagen por vez
    });
  });

  $('.photo-carousel').slick({
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '20px',
          arrows: false,
        },
      },
    ],
  }); 
    /* funcionalidad del botona rriba*/

   // Cuando el usuario hace scroll hacia abajo 20px desde la parte superior de la página, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Cuando el usuario hace clic en el botón, vuelve a la parte superior de la página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    