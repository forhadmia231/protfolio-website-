// Optional: Smooth scroll fallback (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Optional: Mobile menu toggle (you can use this if you later add a hamburger menu)
const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
