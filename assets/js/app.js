// Get current year
const spanYear = document.getElementById("presentYear");
const currentYear = new Date().getFullYear();

spanYear.innerHTML = currentYear;

// Scroll to top visibility
window.onscroll = function () {
  const element = document.querySelector(".to-button");
  if (window.scrollY > 50) {
    element.classList.add("to-top");
  } else {
    element.classList.remove("to-top");
  }
};

// Toggle menu
const toggleIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".mobile");

toggleIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  navBar.classList.toggle("mobile-collapse");
}
