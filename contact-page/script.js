const menuIcon = document.querySelector(".ri-menu-fill");
const closeIcon = document.querySelector("#close-i");
const fullScrNav = document.getElementById("fullScrNav");

menuIcon.addEventListener("click", () => {
    fullScrNav.classList.add("active"); // Show menu
});

closeIcon.addEventListener("click", () => {
    fullScrNav.classList.remove("active"); // Hide menu
});