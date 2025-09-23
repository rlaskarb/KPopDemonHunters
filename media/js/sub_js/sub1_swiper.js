document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".huntrx_content_swiper", {
    direction: "horizontal", // 가로

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,

    // 마우스 드래그 기능
    allowTouchMove: true,
    simulateTouch: true,

    // 모바일 환경 터치 스와이프
    touchEventsTarget: "wrapper",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rumiVideo = document.getElementById("rumiVideo");
  const miraVideo = document.getElementById("miraVideo");
  const zoyeVideo = document.getElementById("zoyeVideo");

  rumiVideo.playbackRate = 0.7;
  miraVideo.playbackRate = 0.4;
  zoyeVideo.playbackRate = 0.9;
});
