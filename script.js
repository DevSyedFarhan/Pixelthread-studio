const menuIcon = document.querySelector(".ri-menu-fill");
const closeIcon = document.querySelector("#close-i");
const fullScrNav = document.getElementById("fullScrNav");

menuIcon.addEventListener("click", () => {
    fullScrNav.classList.add("active"); // Show menu
});

closeIcon.addEventListener("click", () => {
    fullScrNav.classList.remove("active"); // Hide menu
});
document.querySelectorAll(".content").forEach(item => {
    item.addEventListener("click", function() {
        const answerBox = this.nextElementSibling;
        const isActive = this.classList.contains("active");

        // Close all answers smoothly
        document.querySelectorAll(".answer-box").forEach(box => {
            box.style.maxHeight = "0px";
            box.style.opacity = "0";
            box.style.padding = "0px 3vw";  // Remove padding smoothly
        });
        document.querySelectorAll(".content").forEach(content => content.classList.remove("active"));

        // Toggle current answer
        if (!isActive) {
            answerBox.style.maxHeight = "180px"; // Adjust height as needed
            answerBox.style.opacity = "1";
            answerBox.style.padding = "15px 3vw"; // Restore padding
            this.classList.add("active");
        }
    });
});
function loader() {
    let tl = gsap.timeline();

    tl.from("#loader h3", {
        x: 35,
        stagger: 0.2,
        opacity: 0,
        duration: 1,
    });

    tl.to("#loader h3", {
        x: -35,
        stagger: 0.1,
        opacity: 0,
        duration: 1,
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector("#loader").style.display = "none"; // ✅ Fix
        }
    });
}
loader();
