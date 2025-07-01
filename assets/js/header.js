function toggleMobileMenu(event) {
  const menu = document.querySelector(".header-mobile");
  if (event.target === menu) menu.classList.remove("active")
  else menu.classList.add("active");
}

const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".menu-items li a");

menuLinks.forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active-page");
  }
});
