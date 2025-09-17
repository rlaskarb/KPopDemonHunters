document.addEventListener("DOMContentLoaded", function () {
  // ----------------------------------------------------------------
  // 1. 기본 데이터 및 DOM 요소 변수 선언
  // ----------------------------------------------------------------
  const trailers = [
    {
      mainImage: "./images/sub3/golden2.avif",
      title: "HUNTR/X - Golden",
      description:
        "This song tells a story about finding a golden light inside yourself. Using the magic of the Golden Honmoon, the music becomes a shield of light. It keeps everyone safe from the shadows trying to creep into the world.",
      youtubeId: "OwpgvSo_G0g",
    },
    {
      mainImage: "./images/sub3/sodapop2.avif",
      title: "SAJA BOYS - Soda Pop",
      description:
        "On the surface, this song sounds bright and sweet, just like soda pop. But be careful. A dark secret is hidden in its cheerful sound. The melody is actually a beautiful trap made to steal the souls of its listeners.",
      youtubeId: "aNad2Ml2Lfw",
    },
    {
      mainImage: "./images/sub3/youridol2.avif",
      title: "SAJA BOYS - Your Idol",
      description:
        "At first it sounds like a sweet love letter to fans, but beneath the polished image lies a chilling truth. The addictive beat hides loneliness and the loss of self, asking: what remains of the person behind ‘Your Idol’?",
      youtubeId: "1xhi2mi5cfk",
    },
    {
      mainImage: "./images/sub3/howitdone2.avif",
      title: "HUNTR/X - How It's Done",
      description:
        "A pure explosion of confidence, with heavy beats like an unstoppable train. Bold and unapologetic, it’s not a plea for attention but a clear command: Watch how it’s done.",
      youtubeId: "uo1YZXlP3O8",
    },
    {
      mainImage: "./images/sub3/whatitsoundlike2.avif",
      title: "HUNTR/X - What It Sound Like",
      description:
        "A powerful anthem about healing and embracing imperfection. Using broken glass as a metaphor, it shows that scars and flaws are part of our story and can be beautiful. The song moves from shame to strength, as voices of survivors join together in harmony.",
      youtubeId: "Ug_pv5-r1js",
    },
  ];

  const trailerContainer = document.querySelector(".trailer_container");
  const trailerThumbsList = document.querySelector(".trailer_content");
  const trailerArrows = document.querySelector(".trailer_arrows");
  const trailerDots = document.querySelector(".trailer_dots");
  const popup = document.querySelector(".trailer_popup");
  const closeBtn = document.querySelector(".close_btn");
  const youtubeIframeContainer = document.querySelector(".youtube_iframe");

  // --- 상태 변수들 ---
  let currentSlide = 0; // 슬라이더 현재 위치 (0부터 시작)
  let activeDesktopIndex = 0; // 데스크탑 모드 현재 위치
  const slideCount = trailers.length;
  let isDragging = false;
  let startPos = 0;
  let dragOffset = 0;
  let autoplayInterval = null;

  // ----------------------------------------------------------------
  // 2. 핵심 기능 함수들
  // ----------------------------------------------------------------

  // 태블릿 슬라이드 특정번호 이동시키는 함수
  function goToSlide(index) {
    trailerContainer.style.transition = "transform 0.5s ease-in-out";
    trailerContainer.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    updateDots();
  }

  function updateDots() {
    const currentActiveDot = trailerDots.querySelector(".active");
    currentActiveDot?.classList.remove("active");
    trailerDots.children[currentSlide]?.classList.add("active");
  }

  function updateTrailer(index) {
    activeDesktopIndex = index;
    const trailer = trailers[index];
    const mainImage = document.getElementById("mainTrailerImage");
    const mainInfo = document.getElementById("mainTrailerInfo");
    if (mainImage && mainInfo) {
      mainImage.src = trailer.mainImage;
      mainInfo.querySelector("dt").textContent = trailer.title;
      mainInfo.querySelector("dd").textContent = trailer.description;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slideCount;
      goToSlide(nextSlide);
    }, 3000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // ----------------------------------------------------------------
  // 3. 이벤트 핸들러 함수들
  // ----------------------------------------------------------------

  function handleArrowClick(e) {
    stopAutoplay();
    const target = e.target.closest(".arrow");
    if (!target) return;

    let nextSlide;
    if (target.classList.contains("next")) {
      nextSlide = (currentSlide + 1) % slideCount;
    } else {
      nextSlide = (currentSlide - 1) % slideCount;
    }

    goToSlide(nextSlide);

    startAutoplay();
  }

  function handleDotClick(e) {
    stopAutoplay();
    const target = e.target.closest(".dot");
    if (!target) return;
    const index = parseInt(target.dataset.index, 10);
    goToSlide(index);
    startAutoplay();
  }

  function handleThumbnailClick(e) {
    const thumbLi = e.target.closest("li");
    if (!thumbLi) return;
    const index = parseInt(thumbLi.dataset.index, 10);
    updateTrailer(index);
    trailerThumbsList.querySelector(".selected")?.classList.remove("selected");
    thumbLi.classList.add("selected");
  }

  function dragStart(e) {
    if (!e.target.closest(".trailer_item")) return;
    e.preventDefault(); // 브라우져의 기본이미지 드래그 동작을 막자
    stopAutoplay();
    isDragging = true;
    startPos = getPositionX(e);
    dragOffset = 0;
    trailerContainer.style.transition = "none";
  }

  function dragging(e) {
    if (isDragging) {
      const currentX = getPositionX(e);
      dragOffset = currentX - startPos;
      trailerContainer.style.transform = `
      translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))
      `;
    }
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    trailerContainer.style.transition = "transform 0.5s ease-in-out";
    const threshold = trailerContainer.offsetWidth / 4;
    let nextSlide = currentSlide;
    if (dragOffset < -threshold) {
      nextSlide = currentSlide + 1;
    } else if (dragOffset > threshold) {
      nextSlide = currentSlide - 1;
    }

    if (nextSlide >= 0 && nextSlide < slideCount) {
      goToSlide(nextSlide);
    } else {
      goToSlide(currentSlide); // 경계를 넘으면 원래 슬라이드로 복귀
    }
    startAutoplay();
  }

  function getPositionX(e) {
    return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
  }

  function openPopup(e) {
    const mainDisplay = e.target.closest(".main_trailer_display");
    if (!mainDisplay) return;
    stopAutoplay();

    let trailer;
    if (window.innerWidth <= 1150) {
      trailer = trailers[currentSlide];
    } else {
      trailer = trailers[activeDesktopIndex];
    }

    if (trailer && trailer.youtubeId) {
      youtubeIframeContainer.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${trailer.youtubeId}?autoplay=1" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
      popup.style.display = "flex";
    }
  }

  function closePopup() {
    popup.style.display = "none";
    youtubeIframeContainer.innerHTML = "";
    if (window.innerWidth <= 1150) {
      startAutoplay();
    }
  }

  // ----------------------------------------------------------------
  // 4. 모드별 설정 및 정리(cleanup) 함수
  // ----------------------------------------------------------------

  function setupSliderMode() {
    trailerContainer.innerHTML = trailers
      .map(
        (trailer, index) => `
        <div class="trailer_item" data-index="${index}">
          <div class="main_trailer_display">
            <img src="${trailer.mainImage}" alt="${trailer.title}" />
            <div class="play_icon"><i class="fa-brands fa-youtube"></i></div>
          </div>
          <dl>
            <dt>${trailer.title}</dt>
            <dd>${trailer.description}</dd>
          </dl>
        </div>`
      )
      .join("");

    trailerDots.innerHTML = trailers
      .map((_, index) => `<div class="dot" data-index="${index}"></div>`)
      .join("");

    goToSlide(0);

    trailerArrows.addEventListener("click", handleArrowClick);
    trailerDots.addEventListener("click", handleDotClick);
    trailerContainer.addEventListener("click", openPopup);
    trailerContainer.addEventListener("mousedown", dragStart);
    trailerContainer.addEventListener("touchstart", dragStart, {
      passive: true,
    });
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);
    window.addEventListener("mousemove", dragging);
    window.addEventListener("touchmove", dragging);

    startAutoplay();
  }

  function setupDesktopMode() {
    trailerContainer.innerHTML = `
      <div class="main_trailer_display">
          <img id="mainTrailerImage" src="" alt="trailer image" />
          <div class="play_icon"><i class="fa-brands fa-youtube"></i></div>
      </div>
      <dl id="mainTrailerInfo">
          <dt></dt>
          <dd></dd>
      </dl>`;
    trailerThumbsList.addEventListener("click", handleThumbnailClick);
    trailerContainer.addEventListener("click", openPopup);
    const firstThumb = trailerThumbsList.querySelector("li");
    if (firstThumb) {
      firstThumb.classList.add("selected");
      updateTrailer(parseInt(firstThumb.dataset.index, 10));
    }
  }

  function cleanup() {
    stopAutoplay();
    trailerArrows.removeEventListener("click", handleArrowClick);
    trailerDots.removeEventListener("click", handleDotClick);
    trailerContainer.removeEventListener("click", openPopup);
    trailerThumbsList.removeEventListener("click", handleThumbnailClick);
    trailerContainer.removeEventListener("mousedown", dragStart);
    trailerContainer.removeEventListener("touchstart", dragStart, {
      passive: true,
    });
    window.removeEventListener("mouseup", dragEnd);
    window.removeEventListener("touchend", dragEnd);
    window.removeEventListener("mousemove", dragging);
    window.removeEventListener("touchmove", dragging);
  }

  // ----------------------------------------------------------------
  // 5. 초기화 및 반응형 처리
  // ----------------------------------------------------------------

  function initializeTrailer() {
    cleanup();
    if (window.innerWidth <= 1150) {
      trailerThumbsList.style.display = "none";
      trailerArrows.style.display = "flex";
      trailerDots.style.display = "flex";
      setupSliderMode();
    } else {
      trailerThumbsList.style.display = "flex";
      trailerArrows.style.display = "none";
      trailerDots.style.display = "none";
      setupDesktopMode();
    }
  }

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();
  });
  popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
  });

  window.addEventListener("resize", initializeTrailer);
  initializeTrailer();
});
