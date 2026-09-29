document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("#nav-menu a");

  // Toggle menu state
  const toggleMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
  };

  // Listen for click on the hamburger icon
  hamburger.addEventListener("click", toggleMenu);

  // Close menu when a navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("show")) {
        toggleMenu();
      }
    });
  });
});
