$('.sl').slick();

$('.article-carusel-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: true
        }
      },
  
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      }
  
  ]
  });