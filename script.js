const button = document.getElementById("worksButton");

button.addEventListener("click", function() {
    works.scrollIntoView({ behavior: "smooth" }); 
});

const works = document.getElementById("works");

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
            });
            }, {
                threshold: 0
    });

    const about = document.querySelector(".about");
    observer.observe(about);
    observer.observe(works);
    
const skills = document.querySelector(".skills");
observer.observe(skills);

const contactSection = document.querySelector(".contact");
observer.observe(contactSection);

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    const isOpen = mainNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

const menuLinks = document.querySelectorAll("#main-nav a");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});