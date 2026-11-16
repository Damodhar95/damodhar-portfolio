
/* =========================================
   DAMODHAR PORTFOLIO
   Complete upgraded JavaScript
========================================= */


/* =========================================
   1. MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });

    });

}


/* =========================================
   2. SCROLL REVEAL ANIMATIONS
========================================= */

// Elements that will animate when they enter the screen
const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-card, " +
    ".fact, " +
    ".skill-card, " +
    ".project-card, " +
    ".experience-card, " +
    ".education-card, " +
    ".cert-card, " +
    ".contact-card, " +
    ".contact-message"
);


// Check browser support for animations
const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Add animation classes
revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    // Small staggered delay for a natural appearance
    element.style.transitionDelay = `${(index % 4) * 100}ms`;

});


// Activate scroll animations
if ("IntersectionObserver" in window && !prefersReducedMotion) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    // Animate only once
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );


    // Observe all selected elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for older browsers and reduced-motion users
    revealElements.forEach(element => {
        element.classList.add("is-visible");
    });

}


/* =========================================
   3. CURRENT YEAR IN FOOTER (OPTIONAL)
========================================= */

// Update footer year automatically if an element
// with the ID "currentYear" exists.

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
