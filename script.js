
/* =====================================
   AJMERI CREATOR STUDIO
   JAVASCRIPT ANIMATIONS
===================================== */


/* 1. AUTOMATIC CHANGING TEXT */

const changingText = document.getElementById("changingText");

const words = [
    "Unforgettable",
    "Creative",
    "Beautiful",
    "Impactful",
    "Unique",
    "Inspiring"
];

let currentIndex = 0;

if (changingText) {
    setInterval(() => {

        // Purane text ko fade out karein
        changingText.classList.add("word-out");

        setTimeout(() => {

            // Agla word select karein
            currentIndex = (currentIndex + 1) % words.length;

            changingText.textContent = words[currentIndex];

            // Naye text ko fade in karein
            changingText.classList.remove("word-out");

        }, 250);

    }, 2200);
}


/* 2. MOBILE MENU OPEN / CLOSE */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    // Link par click karne ke baad menu band ho jayega
    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* 3. AUTOMATIC CURRENT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* 4. SMOOTH SECTION NAVIGATION */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 5. OPTIONAL: PAUSE TEXT ANIMATION WHEN TAB IS HIDDEN */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {
        document.title = "Come back soon | Ajmeri";
    } else {
        document.title = "Ajmeri | Creator Studio";
    }

});

console.log("Ajmeri Creator Studio loaded successfully!");
