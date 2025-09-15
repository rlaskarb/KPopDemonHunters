document.addEventListener("DOMContentLoaded", function () {
  // 1. 데이터 배열 정의
  const trailers = [
    {
      mainImage: "./images/sub3/golden2.jpg",
      title: "HUNTR/X - Golden",
      description:
        "This song tells a story about finding a golden light inside yourself. Using the magic of the Golden Honmoon, the music becomes a shield of light. It keeps everyone safe from the shadows trying to creep into the world.",
      youtubeId: "OwpgvSo_G0g",
    },
    {
      mainImage: "./images/sub3/sodapop2.jpg",
      title: "SAJA BOYS - Soda Pop",
      description:
        "On the surface, this song sounds bright and sweet, just like soda pop. But be careful. A dark secret is hidden in its cheerful sound. The melody is actually a beautiful trap made to steal the souls of its listeners.",
      youtubeId: "aNad2Ml2Lfw",
    },
    {
      mainImage: "./images/sub3/youridol2.jpg",
      title: "SAJA BOYS - Your Idol",
      description:
        "At first listen, this song feels like a sweet love letter from an idol to their fans. But listen closer. It's actually a chilling confession. It tells the story of a star who has become a perfect, polished doll for the public to adore. The addictive beat and energetic vocals are a mask, hiding the loneliness and the loss of self that comes with fame. It's a song that asks a heavy question: After giving everything, what is left of the person behind 'Your Idol'?",
      youtubeId: "1xhi2mi5cfk",
    },
    {
      mainImage: "./images/sub3/howitdone2.jpg",
      title: "HUNTR/X - How It's Done",
      description:
        "This song has no hidden secrets or sad stories. It is a pure, unstoppable explosion of confidence. From the very first second, HUNTR/X declares that they are at the top of their game. The heavy, driving beat feels like a freight train that won't stop, and the lyrics are a lesson in power and skill. This isn't a request for attention; it's a bold announcement. The message is loud and clear: Step aside and watch how it's done.",
      youtubeId: "uo1YZXlP3O8",
    },
    {
      mainImage: "./images/sub3/whatitsoundlike2.jpg",
      title: "HUNTR/X - What It Sound Like",
      description:
        " This song is a powerful anthem about healing and embracing imperfection. It uses the beautiful metaphor of broken glass to convey that our scars and flaws are not something to hide. Instead, they are part of our story and can be beautiful. The journey of the song is about moving from shame and loneliness to finding strength and harmony with others who are also 'broken'. The 'sound' in this title is not the sound of success, but the sound of an honest, true voice, finally free from lies. It's the sound of survivors coming together to create something beautiful from their pain.",
      youtubeId: "Ug_pv5-r1js",
    },
  ];

  // 2. 필요한 DOM 요소 선택
  const trailerThumbsList = document.querySelector(".trailer_content");
  const mainTrailerImage = document.getElementById("mainTrailerImage");
  const mainTrailerInfo = document.getElementById("mainTrailerInfo");
  const mainTrailerDisplay = document.querySelector(".main_trailer_display");
  const popup = document.querySelector(".trailer_popup");
  const closeBtn = document.querySelector(".close_btn");
  const youtubeIframeContainer = document.querySelector(".youtube_iframe");

  let currentTrailerIndex = 0; // 현재 선택된 트레일러 인덱스 저장

  // 3. 메인 컨텐츠 업데이트 함수
  function updateTrailer(index) {
    const trailer = trailers[index];
    mainTrailerImage.src = trailer.mainImage;
    mainTrailerInfo.querySelector("dt").textContent = trailer.title;
    mainTrailerInfo.querySelector("dd").textContent = trailer.description;

    currentTrailerIndex = index;
  }

  // 4. 썸네일 클릭 이벤트 (이벤트 위임 사용)
  trailerThumbsList.addEventListener("click", (e) => {
    const thumbLi = e.target.closest("li"); // 클릭된 요소의 가장 가까운 li를 찾음
    if (!thumbLi) return; // li가 아니면 함수 종료

    const index = thumbLi.dataset.index;
    if (index) {
      updateTrailer(index);
    }

    trailerThumbsList.querySelectorAll("li").forEach(function (li) {
      li.classList.remove("selected");
    });

    thumbLi.classList.add("selected");
  });

  // 5. 유튜브 팝업 열기
  mainTrailerDisplay.addEventListener("click", () => {
    const trailer = trailers[currentTrailerIndex];
    if (trailer.youtubeId) {
      youtubeIframeContainer.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${trailer.youtubeId}?autoplay=1" 
            frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
      popup.style.display = "flex"; // 팝업 보이기
    }
  });

  // 6. 유튜브 팝업 닫기
  function closePopup() {
    popup.style.display = "none";
    youtubeIframeContainer.innerHTML = ""; // iframe 제거하여 영상 정지
  }

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closePopup();
  });

  popup.addEventListener("click", (e) => {
    // 팝업의 어두운 배경 클릭 시 닫기
    if (e.target === popup) {
      closePopup();
    }
  });
  trailerThumbsList.querySelector("li").classList.add("selected");
});
