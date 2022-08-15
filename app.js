"use strict";

const navContent = document.querySelector(".nav_content");
const btnMenu = document.querySelector(".btn_menu");
const btnClose = document.querySelector(".btn_close");
const navLinks = document.querySelector(".nav_links");
const sectionTitle = document.querySelector(".section_title--model_3");
const fadeInElements = document.querySelectorAll(".fade-in");
const sectionP = document.querySelector(".section_p--model-3");
const sectionBtns = document.querySelector(".section_btns--model-3");

window.addEventListener("load", () => {
  navContent.classList.add("fade");
  sectionTitle.classList.add("fade");
  sectionP.classList.add("fade");
  sectionBtns.classList.add("fade");
});

btnMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
btnClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
});

///////////////////////////
// INTERSECTION OBSERVER //
///////////////////////////
const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
    if (!entry.isIntersecting) {
      entry.target.style.opacity = 0;
    }
  });
}, {});

fadeInElements.forEach((el) => {
  fadeUpObserver.observe(el);
});
