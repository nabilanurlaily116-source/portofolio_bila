ddocument.addEventListener("DOMContentLoaded", () => {
  // ANIMASI SECTION
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.classList.add("fade");

    setTimeout(() => {
      section.classList.add("show");
    }, index * 300);
  });
});