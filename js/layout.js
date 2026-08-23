const btnMenu = document.getElementById("btnmobile");
const navMenu = document.querySelector(".nav-links");
const navMenuLinks =[...document.querySelectorAll(".nav-links>a")];

btnMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
navMenuLinks.forEach((e) => {
    e.addEventListener("click", () => {
        navMenu.classList.remove("open")
    })
})