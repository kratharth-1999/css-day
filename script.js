const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".close");
const body = document.querySelector("body");

menuIcon.addEventListener("click", () => {
    nav.classList.add("nav--visible");
    menuIcon.classList.add("menu--hide");
    closeIcon.classList.add("close--show");
    body.classList.add("body--no-scroll");
});

closeIcon.addEventListener("click", () => {
    closeIcon.classList.remove("close--show");
    menuIcon.classList.remove("menu--hide");
    nav.classList.remove("nav--visible");
    body.classList.remove("body--no-scroll");
});
