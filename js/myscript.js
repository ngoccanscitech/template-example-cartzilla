$(document).ready(function(){
    $('.center-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      dots: false,
      speed: 300,
      centerPadding: '20px',
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      prevArrow:`<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow:`<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`
    });
  });