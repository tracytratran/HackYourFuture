"use strict";

function showAlert() {
  alert("Tracy is a cat person 😻!");
}

const toggleButton = document.getElementById("toggle-button");
const navMenu = document.getElementById("nav-menu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggleButton.classList.toggle("active");
});

function onScreenResize() {
  const containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      container.classList.remove("flex-row");
      container.classList.add("flex-column");
    } else {
      container.classList.remove("flex-column");
      container.classList.add("flex-row");
    }
  });
}

// toggleFlexClasses();

window.addEventListener("resize", onScreenResize);
