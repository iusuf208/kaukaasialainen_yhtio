
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let options = { threshold: 0.5 };

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
});