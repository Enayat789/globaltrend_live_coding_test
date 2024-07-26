const toggleHemburger = document.querySelector("#toggleHamburger");
const navLinks = document.getElementById("navLinks");

let checkNav = false;

toggleHemburger.onclick = () => {
  if (checkNav) {
    navLinks.style.display = "none";
    checkNav = false;
  } else {
    navLinks.style.display = "flex";
    checkNav = true;
  }
  toggleHemburger.classList.toggle("hamburger-toggle");
};
