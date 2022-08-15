"use strict";

const navContent = document.querySelector(".nav_content");
const sectionTitle = document.querySelector(".section_title--model_3");
const sectionP = document.querySelector(".section_p");
const sectionBtns = document.querySelector(".section_btns");

window.addEventListener("load", () => {
  navContent.classList.add("fade-in");
  sectionTitle.classList.add("fade-in");
  sectionP.classList.add("fade-in");
  sectionBtns.classList.add("fade-in");
});
