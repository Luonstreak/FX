$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {})
  setInterval(() => {
    console.log('swipe', mySwiper)
  }, 500);
});
