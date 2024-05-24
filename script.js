$(document).ready(function () {
  var slides = $(".slider > div");
  $(".slider").slick({
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    speed: 5000,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('slick-prev slick-next');
    $('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('slick-prev');
    $('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass('slick-next');
});
});
