function toggleMobileMenu(event) {
  const menu = document.querySelector(".header-mobile");
  if (event.target === menu) menu.classList.remove("active")
  else menu.classList.add("active");
}