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
});

document.addEventListener("DOMContentLoaded", function () {
	const rumiVideo = document.getElementById("rumiVideo");
	const miraVideo = document.getElementById("miraVideo");
	const zoyeVideo = document.getElementById("zoyeVideo");

	rumiVideo.playbackRate = 0.7;
	zoyeVideo.playbackRate = 0.9;
	miraVideo.playbackRate = 0.4;
});
