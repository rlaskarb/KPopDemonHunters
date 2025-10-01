document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".trailer-swiper", {
    loop: true,
    allowTouch: true,
    touchEventTarget: "wrapper",
    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".trailer-swiper .swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".trailer-swiper .swiper-button-next",
      prevEl: ".trailer-swiper .swiper-button-prev",
    },
  });
});
