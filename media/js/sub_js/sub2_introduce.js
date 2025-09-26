let characterGroups = [];
document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/sub2.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      characterGroups = data;

      // 데이터 로딩 후 함수실행

      createTabMenu();
      renderContent(characterGroups[0].id);
    });
});

// 메뉴 생성 함수
function createTabMenu() {
  const tabMenu = document.querySelector(".sub_nav");

  characterGroups.forEach(function (group) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";
    a.textContent = group.groupName;
    a.dataset.groupId = group.id;
    li.appendChild(a);
    tabMenu.appendChild(li);
  });

  tabMenu.addEventListener("click", function (event) {
    event.preventDefault();
    const clickedElement = event.target.closest("a");
    const groupId = clickedElement.dataset.groupId;
    renderContent(groupId);
  });
}

// 콘텐츠 렌더링 함수(핵심)
function renderContent(groupId) {
  const contentContainer = document.getElementById("character_content");
  contentContainer.innerHTML = ""; // 기존 컨탠츠 삭제

  // 선택된 데이터 그룹찾기
  const selectedGroup = characterGroups.find(function (group) {
    return group.id === groupId;
  });
  if (!selectedGroup) {
    return;
  }

  // 케릭터 카드 렌더링

  selectedGroup.characters.forEach(function (character) {
    // 새로운 케릭터 카드 컨테이너를 만든다.
    const characterCard = document.createElement("div");
    characterCard.className = "character-card-grid";

    // 카드에 들어갈 모든 요소를 만들고 조립한다.
    const swiperArea = document.createElement("div");
    swiperArea.className = "character-swiper-area";

    const swiperContainer = document.createElement("div");
    swiperContainer.className = "swiper-container";

    const swiperWrapper = document.createElement("div");
    swiperWrapper.className = "swiper-wrapper";

    // img 돌리기
    character.images.slice(0, 2).forEach(function (imagePath) {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      const img = document.createElement("img");
      img.src = imagePath;
      img.alt = `${character.name} img`;
      slide.appendChild(img);
      swiperWrapper.appendChild(slide);
    });

    // 스와이퍼 구조 완성
    swiperContainer.appendChild(swiperWrapper);
    swiperArea.appendChild(swiperContainer);

    // 3. (소개글 1 영역)
    const inforArea = document.createElement("div");
    inforArea.className = "character-info-area";
    inforArea.innerHTML = `
   <h4>${character.name}</h4>
   <p>Age : ${character.age}</p>
   <p>MBTI : ${character.mbti}</p>
   <p>Position : ${character.position}</p>
    `;

    // 4. 소개글 2 영역

    const descriptionArea = document.createElement("div");
    descriptionArea.className = "character-description-area";
    descriptionArea.innerHTML = `<p>${character.description}</p>`;

    // 5. 나머지 이미지 영역

    const image1Area = document.createElement("div");
    image1Area.className = "character-image1-area";
    const img1 = document.createElement("img");
    img1.src = character.images[2];
    img1.alt = `${character.name} img1`;
    image1Area.appendChild(img1);

    const image2Area = document.createElement("div");
    image2Area.className = "character-image2-area";
    const img2 = document.createElement("img");
    img2.src = character.images[3];
    img2.alt = `${character.name} img2`;
    image2Area.appendChild(img2);

    // 6. 모든 요소 메인 컨테이너 추가

    characterCard.appendChild(swiperArea);
    characterCard.appendChild(inforArea);
    characterCard.appendChild(descriptionArea);
    characterCard.appendChild(image1Area);
    characterCard.appendChild(image2Area);

    contentContainer.appendChild(characterCard);

    new Swiper(swiperContainer, {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouch: true,
      touchEventTarget: "wrapper",
    });
  });

  const storySection = document.createElement("div");
  storySection.className = "story-section";
  storySection.innerHTML = `
        <h4>${selectedGroup.storyTitle}</h4>
        <p>${selectedGroup.storyDescription}</p>
        <div class="story-grid-images">
            ${selectedGroup.storyImg
              .map((imgSrc) => `<img src="${imgSrc}" alt="스토리 이미지">`)
              .join("")}
        </div>
        <p>${selectedGroup.storyDescription2}</p>
    `;
  contentContainer.appendChild(storySection);
}
