🌐 **Language:** [한국어](README.md) | [English](README.en.md)

# 🎶 K-PopDemonHunters( Responsive Web Portfolio )

<br>

https://github.com/user-attachments/assets/5ea9852e-72f8-4a75-84e3-e02714c9edfb

<br>

### ⌚ Project Duration   25.09 ~ 25.10 (Approx. 2 weeks) 

<br>

## 🧭 Quick Navigation

- [Project Overview](#프로젝트-소개)
- [Tech Stack](#기술-스택)
- [Feature Description](#기능-설명)
- [Cross-Browsing Check](#크로스브라우징-검사)
- [View K-PopDemonHunters ](https://rlaskarb20.mycafe24.com/media/)

<br>
<hr>
<br>

<a name = "프로젝트-소개"></a>
## 📌 Project Overview

A high-performance responsive web portfolio built in the style of a K-Pop Demon Hunters fan site.

It uses pure JavaScript (ES6+) with minimal libraries, while all other animation effects were crafted directly using CSS. 

It delivers an optimal user experience across all devices and achieved a Lighthouse score of 97 or higher.

<br/>

### ⚙️ Core Features Implemented 

#### ✨ Responsive Implementation
Using pure JavaScript, Media Queries, and Flexbox/Grid without jQuery, <br> 
a 3-tier layout transition for PC, tablet, and mobile was implemented. <br>
In addition, dependencies on external libraries were minimized as much as possible to keep the code lightweight. <br>

#### ✨ Performance Optimization
To ensure fast initial loading speeds even in an environment with 144 large media assets, <br> 
performance was optimized by actively utilizing the Intersection Observer API and the next-generation AVIF image format to reduce image file sizes. <br>
  
#### ✨ JSON Data-Based Dynamic Content Rendering & Tab Navigation
Character groups and detailed data stored in external JSON files are loaded asynchronously using the fetch API. <br>
When a user clicks a top tab menu (HUNTR/X, SAJA BOYS, etc.), only the data for that group is filtered, <br>
dynamically generating and rendering all related content such as character cards and story sections.
  
#### ✨ Web Standards & Accessibility Compliance
The fundamentals of development were upheld by passing W3C validation checks and strictly adhering to semantic markup principles.

![20](https://github.com/user-attachments/assets/ef7e89a9-ee4d-4a56-b0e6-8d91ab4376b9)

### Achieved Lighthouse Performance 100 and passed markup & accessibility audits

<br>
<hr>
<br>


<a name = "기술-스택"></a>
## 📌 Tech Stack
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
## 📌 Feature Description

### View Full Storyboard <br>
[Download Storyboard PDF](https://github.com/user-attachments/files/23164465/storyboard.pdf)






![21](https://github.com/user-attachments/assets/79b50ffd-62a6-4fce-b034-64d172bfdbf7)

### 1. Responsive Layout (CSS Grid & Flexbox)
To seamlessly respond to the 3-stage resolution changes of PC-Tablet-Mobile, <br>
the complex structure of each section (About, Characters, News, Gallery) <br>
was designed to be semantic and easy to maintain using **CSS Grid Layout (grid-template-areas)**. <br>
Flexbox was actively used for internal component alignment to increase flexibility. <br>

<br>

### 2. Performance-Focused Interaction & Loading (Intersection Observer)
To secure fast initial loading speeds even with 144 image and video assets,  <br>
the Intersection Observer API was actively utilized for each section. <br>
Animations are triggered smoothly only when each section's content actually appears on screen, <br>
dramatically reducing unnecessary initial rendering load. Furthermore, sequential delay times (`transition-delay`) were applied <br>
to each element to add visual delight. The `loading="lazy"` attribute was also used on images for additional performance gains. <br>

<br>

### 3. Pure CSS-Based Dynamic Visual Effects
By creatively utilizing **CSS Animation (@keyframes)** and the `clip-path` property without JavaScript,  <br>
a unique dynamic border effect resembling a 'dimensional rift' was implemented at the top and bottom of the Characters and News sections.  <br>
Additionally, CSS transitions were used to add various interactions such as zoom/brightness changes and overlay effects on image hover. <br>

<br>
  
### 4. Dynamic UI & Responsive Logic Handling with JavaScript
- Trailer Section: Detects screen width to dynamically switch between a custom thumbnail grid layout on PC <br>
and a Swiper library-based carousel UI on mobile/tablet. <br>
Clicking a YouTube video dynamically creates an iframe to play it in a modal popup. <br>

- Background Handling: Controlled via JavaScript to display a **background video** on PC and standard tablets, <br>
  and a **background image** on small tablets and mobile devices depending on screen width, <br> 
  optimizing data usage and performance for mobile environments. <br>
  
- Implemented various UI components with JavaScript, including a hamburger menu, scroll-to-top button, and custom mouse cursor.
  
<br>




<br> 

## Additional Feature Description - CHARACTERS Page
Going beyond simple information listing, this page focuses on providing a rich user experience through dynamic data processing and diverse interactions. <br>


![100](https://github.com/user-attachments/assets/400a491e-f7d3-4176-b0ed-87dfbe9e336d)


### 1. JSON Data-Based Dynamic Content Rendering & Tab Navigation
Character groups and detailed data stored in external JSON files are loaded asynchronously using the fetch API. <br>
When a user clicks a top tab menu (HUNTR/X, SAJA BOYS, etc.), only the data for that group is filtered, <br>
dynamically generating and rendering all related content such as character cards and story sections.
<br>

### 2. Advanced Card Layout Using CSS Grid
Inside each character introduction card, **Grid Layout** was used  <br>
to arrange various components—such as image sliders, info text, descriptions, videos, and additional images—in a complex yet refined layout. <br>
This structure adapts flexibly to screen sizes, effectively supporting responsive design. <br>

### 3. Swiper Library Integration & Dynamic Initialization
The Swiper.js library was applied to the image area at the top of each character card to implement an image slide. <br>
Importantly, whenever content is dynamically generated by clicking a tab, a new Swiper instance is accurately initialized <br>
and updated via JavaScript so that it operates without errors. 



<br>
<hr>
<br>


<a name = "크로스브라우징-검사"></a>
## 📌 Cross-Browsing Check
![23](https://github.com/user-attachments/assets/aa6c0e99-d379-4536-a58e-16f0febfd0de)


<br>

[🔝 Back to Top](#top)

<br>
<br>

