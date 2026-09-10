// Smooth active navigation highlight
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});
