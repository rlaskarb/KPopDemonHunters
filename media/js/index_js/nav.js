document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("headerArea");
  const gnb = document.getElementById("gnb");
  const blindBox = document.querySelector(".blind_box");
  const topMove = document.querySelector(".top_move");
  const menuTriggers = document.querySelectorAll(".menu_ham, .blind_box");

  gnb.addEventListener("click", function (e) {
    if (e.target === gnb) {
      header.classList.remove("mn_open");
      document.body.style.overflow = "auto";
      blindBox.style.display = "none";
    }
  });

  menuTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      header.classList.toggle("mn_open");

      if (header.classList.contains("mn_open")) {
        document.body.style.overflow = "hidden";
        blindBox.style.display = "block";
        if (topMove) {
          topMove.classList.remove("show");
        }
      } else {
        document.body.style.overflow = "auto";
        blindBox.style.display = "none";
        const listItems = document.querySelectorAll("#gnb .main_menu li");
        listItems.forEach((li) => li.classList.remove("active"));
      }
    });
  });

  const menuLinks = document.querySelectorAll(".main_menu h3 a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const clickedLi = e.target.closest("li");

      if (clickedLi.classList.contains("active")) {
        clickedLi.classList.remove("active");
      } else {
        const allLis = document.querySelectorAll("#gnb .main_menu li");
        allLis.forEach((li) => li.classList.remove("active"));
        clickedLi.classList.add("active");
      }
    });
  });
});

let isDesktop = window.innerWidth > 1150;

window.addEventListener("resize", function () {
  if (!isDesktop && window.innerWidth > 1150) {
    console.log("데스크탑으로 전환!");

    document.getElementById("headerArea").classList.remove("mn_open");
    document.body.style.overflow = "auto";
    isDesktop = true;
  } else if (isDesktop && window.innerWidth <= 1150) {
    console.log("모바일로 전환!");
    isDesktop = false;
  }
});
