
/////////////////////////home slider//////////////////////////////////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".home-slider", {
  spaceBetween: 80,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});
