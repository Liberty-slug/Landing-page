const toggleIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".mobile");

toggleIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  navBar.classList.toggle("mobile-collapse");
}
