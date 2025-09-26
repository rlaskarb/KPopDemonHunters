document.addEventListener("DOMContentLoaded", function () {
  const swiperClasses = [
    ".huntrx_content_swiper",
    ".saja_boys_content_swiper",
    ".duffy_content_swiper",
  ];

  swiperClasses.forEach(function (selector) {
    new Swiper(selector, {
      direction: "horizontal",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouch: true,
      touchEventTarget: "wrapper",
    });
  });

  const fadeInElements = document.querySelectorAll(".fade-in");
  const fadeInObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entery) {
        if (entery.isIntersecting) {
          entery.target.classList.add("is-visible");
          observer.unobserve(entery.target); // 컷
        }
      });
    },
    { threshold: 0.1 }
  );

  //감시
  fadeInElements.forEach(function (element) {
    fadeInObserver.observe(element);
  });
});

//  webm 비디오 속도 조절 효괴
document.addEventListener("DOMContentLoaded", function () {
  const rumiVideo = document.getElementById("rumiVideo");
  const miraVideo = document.getElementById("miraVideo");
  const zoyeVideo = document.getElementById("zoyeVideo");

  rumiVideo.playbackRate = 0.7;
  zoyeVideo.playbackRate = 0.9;
  miraVideo.playbackRate = 0.4;
});

// // abut 텍스트 이미지 애니매이션 효과
// document.addEventListener("DOMContentLoaded", function () {
//   const targetElement = document.querySelector("#content h2");
//   const text = targetElement.textContent;
//   targetElement.textContent = ""; // 원래 텍스트를 비운다.
//   targetElement.classList.add("typing-bounce");

//   //    한글자 씩 나타나게 하는 효과
//   let index = 0;
//   const typingEffect = setInterval(function () {
//     if (index < text.length) {
//       targetElement.textContent += text.charAt(index);
//       targetElement.style.opacity = 1;
//       index++;
//     } else {
//       clearInterval(typingEffect); //멈춰!
//     }
//   }, 300);
// });
