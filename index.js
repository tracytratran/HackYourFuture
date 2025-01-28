"use strict";

function showAlert(message = "Tracy is a cat person 😻!") {
  alert(message);
}

// Toggle nav menu when switching between Mobile and Website screen
const toggleButton = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("close-button");
const toggleNavMenu = () => {
  navMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
};

if (toggleButton && closeButton && navMenu) {
  toggleButton.addEventListener("click", toggleNavMenu);
  closeButton.addEventListener("click", toggleNavMenu);
}

// Change flex-direction when switching between Mobile and Website screen
function onScreenResize() {
  const containers = document.querySelectorAll(".container");
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  containers.forEach((container) => {
    container.classList.toggle("flex-row", !isMobile);
    container.classList.toggle("flex-column", isMobile);
  });
}

// Debounce Resize Event Listener
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

window.addEventListener("resize", debounce(onScreenResize, 200));
