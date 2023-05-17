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
    /* funcionalidad del carrousel de los shows */

