"use strict";
const navContent = document.querySelector(".nav_content");
const btnMenu = document.querySelector(".btn_menu");
const btnClose = document.querySelector(".btn_close");
const navLinks = document.querySelector(".nav_links--mobile");
const impactReport = document.querySelector(".impact_report");
const mainContent = document.getElementById("main_content");
const sectionTitle = document.querySelector(".section_title--model_3");
const fadeInElements = document.querySelectorAll(".fade-in");
const sectionP = document.querySelector(".section_p--model-3");
const sectionBtns = document.querySelector(".section_btns--model-3");

// Fade in elements on load
window.addEventListener("load", () => {
  navContent.classList.add("fade");
  sectionTitle.classList.add("fade");
  sectionP.classList.add("fade");
  sectionBtns.classList.add("fade");
});

// Mobile nav animations
btnMenu.addEventListener("click", () => {
  navContent.classList.toggle("active");
  mainContent.classList.toggle("active");
  impactReport.classList.toggle("active");
  navLinks.classList.toggle("active");
  mainContent.style.overflow = "hidden"; // Disable scrolling while nav is active
});
btnClose.addEventListener("click", () => {
  navContent.classList.remove("active");
  mainContent.classList.remove("active");
  impactReport.classList.remove("active");
  navLinks.classList.remove("active");
  mainContent.style.overflow = "auto";
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
