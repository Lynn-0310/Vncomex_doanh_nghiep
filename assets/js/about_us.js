
  document.addEventListener("DOMContentLoaded", function () {
    const aboutMenu = this.getElementById("about-menu");
    const currentPath = window.location.pathname;
    const currentHref = window.location.href;
console.log(aboutMenu);

    if (
      currentPath.includes("about_vncomex.html") ||
      currentHref.includes("about_vncomex.html")
    ) {
        
      aboutMenu.classList.add("show-submenu");
    } else {
      aboutMenu.classList.remove("show-submenu");
    }
  });