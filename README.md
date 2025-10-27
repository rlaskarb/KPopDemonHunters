# 🎶 K-PopDemonHunters( Responsive Web Portfolio )

<br>

https://github.com/user-attachments/assets/5ea9852e-72f8-4a75-84e3-e02714c9edfb

<br>

### ⌚ 프로젝트 기간   25.09 ~ 25.10 (약 2주) 

<br>

## 🧭 빠른 이동

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [기능 설명](#기능-설명)
- [크로스브라우징 검사](#크로스브라우징-검사)
- [K-PopDemonHunters 보러가기 ](https://rlaskarb20.mycafe24.com/media/)

<br>
<hr>
<br>

<a name = "프로젝트-소개"></a>
## 📌 프로젝트 소개

K-Pop 아이돌 컨셉의 데몬 헌터 팬 사이트 형식으로 제작된 고성능 반응형 웹 포트폴리오입니다.

jQuery 등 외부 라이브러리 없이 오직 순수 JavaScript(ES6+)와 CSS만을 사용하여, 

모든 디바이스에서 최적의 사용자 경험을 제공하고 Lighthouse 95점 이상이라는 성능 목표를 달성하는 데 집중했습니다.

<br/>

### ⚙️ 직접 구현한 핵심 기능 
성능 최적화 중심의 반응형 UI/UX 설계 및 순수 JavaScript 구현

#### ✨ 반응형 구현
jQuery 없이 순수 JavaScript와 Media Query, Flexbox/Grid를 활용하여 <br> 
PC, 태블릿, 모바일 3단계 레이아웃 전환을 구현했습니다. <br>
또한 외부 라이브러리에 대한 의존도를 최대한 낮추고 코드의 경량화를 시도하였습니다. <br>

#### ✨ 성능 최적화
총 144개의 대규모 미디어 에셋 환경에서도 빠른 초기 로딩 속도를 확보하기 위해, <br> 
Intersection Observer API 및 차세대 이미지 포맷인 AVIF를 적극 활용하여 이미지 파일 크기를 줄여 성능을 최적화에 신경썻습니다. <br>
  
#### ✨ JSON 데이터 기반 동적 콘텐츠 렌더링 & 탭 네비게이션
외부 JSON 파일(sub2.json)에 저장된 캐릭터 그룹 및 상세 데이터를 fetch API를 사용하여 비동기적으로 불러옵니다. <br>
사용자가 상단 탭 메뉴(HUNTR/X, SAJA BOYS 등)를 클릭하면, 해당 그룹의 데이터만 필터링하여 페이지 새로고침 없이 캐릭터 카드,<br>
스토리 섹션 등 모든 관련 콘텐츠를 JavaScript로 동적으로 생성하고 렌더링합니다.<br>
  
#### ✨ 웹 표준 및 접근성 준수
W3C 유효성 검사를 통과하고 시맨틱 마크업 원칙을 철저히 준수하여 개발의 기본을 지켰습니다.

![20](https://github.com/user-attachments/assets/ef7e89a9-ee4d-4a56-b0e6-8d91ab4376b9)

<br>
<hr>
<br>


<a name = "기술-스택"></a>
## 📌 기술 스택
### Front-end
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

### Tools & Design
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-333333?style=for-the-badge&logo=figma&logoColor=white)


<br>
<hr>
<br>


<a name = "기능-설명"></a>
## 📌 기능 설명

### 전체 스토리보드 보기 <br>
[스토리보드 PDF 다운로드](https://github.com/user-attachments/files/23164465/storyboard.pdf)






![21](https://github.com/user-attachments/assets/79b50ffd-62a6-4fce-b034-64d172bfdbf7)

### 1. 반응형 레이아웃 (CSS Grid & Flexbox)
PC-Tablet-Mobile의 3단계 해상도 변화에 완벽하게 대응하기 위해, <br>
각 섹션(About, Characters, News, Gallery)의 복잡한 구조를 <br>
**CSS Grid Layout (grid-template-areas)** 을 활용하여 시맨틱하고 유지보수하기 쉽게 설계했습니다. <br>
컴포넌트 내부 정렬에는 Flexbox를 적극 활용하여 유연성을 높였습니다. <br>

<br>

### 2. 성능 중심의 인터랙션 및 로딩 (Intersection Observer)
총 144개의 이미지와 비디오 에셋 환경에서도 빠른 초기 로딩 속도를 확보하기 위해,  <br>
각 섹션마다 Intersection Observer API를 적극적으로 활용했습니다. <br>
각 섹션의 콘텐츠가 실제로 화면에 보일 때만 애니메이션 효과가 부드럽게 나타나도록 구현하여, <br>
불필요한 초기 렌더링 부하를 획기적으로 줄였습니다. 또한, 각 요소에 순차적인 지연 시간(transition-delay) 을 <br>
적용하여 시각적인 즐거움을 더했습니다. 이미지에는 loading="lazy" 속성을 사용하여 추가적인 성능 개선을 도모했습니다. <br>

<br>

### 3.순수 CSS 기반의 동적 시각 효과
JavaScript 없이 **CSS Animation (@keyframes)**과 clip-path 속성을 창의적으로 활용하여,  <br>
Characters 및 News 섹션 상하단에 '차원의 균열'처럼 보이는 독특한 동적 경계선 효과를 구현했습니다.  <br>
또한, CSS transition을 활용하여 이미지 호버 시 확대/밝기 변화, 오버레이 효과 등 다양한 인터랙션을 추가했습니다. <br>

<br>
  
### 4.JavaScript를 활용한 동적 UI 및 반응형 로직 처리
- Trailer 섹션: 화면 너비를 감지하여 PC에서는 커스텀 썸네일 그리드 레이아웃을, <br>
모바일/태블릿에서는 Swiper 라이브러리 기반의 캐러셀 UI를 동적으로 전환하여 보여줍니다. <br>
YouTube 영상은 클릭 시 동적으로 iframe을 생성하여 모달 팝업으로 재생합니다. <br>

- 배경 처리: 화면 너비에 따라 PC,일반테블릿에서는 **배경 비디오**를, <br>
  소형테블릿, 모바일에서는 **배경 이미지**를 보여주도록 JavaScript로 제어하여 <br> 
  모바일 환경의 데이터 사용량과 성능을 최적화했습니다. <br>
  
- JavaScript로 햄버거 메뉴, 스크롤 Top 버튼, 커스텀 마우스 커서 등 다양한 UI 컴포넌트를 구현했습니다.
  
<br>




<br> 

## 추가 기능설명 - CJARACTERS 페이지
이 페이지는 단순한 정보 나열을 넘어, 동적인 데이터 처리와 다채로운 인터랙션을 통해 사용자에게 풍부한 경험을 제공하는 데 집중했습니다. <br>
모든 기능은 **순수 JavaScript(ES6+)**와 고급 CSS 기법을 중심으로 구현되었습니다. <br>

### 1. JSON 데이터 기반 동적 콘텐츠 렌더링 & 탭 네비게이션
외부 JSON 파일(sub2.json)에 저장된 캐릭터 그룹 및 상세 데이터를 fetch API를 사용하여 비동기적으로 불러옵니다. <br>
사용자가 상단 탭 메뉴(HUNTR/X, SAJA BOYS 등)를 클릭하면, 해당 그룹의 데이터만 필터링하여 페이지 새로고침 없이 캐릭터 카드, <br>
스토리 섹션 등 모든 관련 콘텐츠를 JavaScript로 동적으로 생성하고 렌더링합니다. <br>

### 2. CSS Grid를 활용한 고도화된 카드 레이아웃
각 캐릭터를 소개하는 카드 내부는 **Grid Layout**을 사용하여  <br>
이미지 슬라이더, 정보 텍스트, 설명, 비디오, 추가 이미지 등 다양한 컴포넌트를 복잡하면서도 정교하게 배치했습니다. <br>
이 구조는 화면 크기에 따라 유연하게 변경되어 반응형 디자인을 효과적으로 지원합니다. <br>

### 3. Swiper 라이브러리 연동 및 동적 초기화
각 캐릭터 카드 상단의 이미지 영역에는 Swiper.js 라이브러리를 적용하여 이미지 슬라이드를 구현했습니다. <br>
중요한 점은, 탭 클릭으로 콘텐츠가 동적으로 생성될 때마다 새로운 Swiper 인스턴스를 JavaScript로 정확하게 <br>
초기화하고 업데이트 하여 오류 없이 작동하도록 구현 했습니다. 



<br>
<hr>
<br>


<a name = "크로스브라우징-검사"></a>
## 📌 크로스브라우징 검사
![23](https://github.com/user-attachments/assets/aa6c0e99-d379-4536-a58e-16f0febfd0de)


<br>

[🔝 맨 위로 가기](#top)

<br>
<br>
