// =========================================
// 1. MOBILE NAVIGATION MENU
// =========================================

// Select the menu button and navigation links.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuToggle.querySelector("i");

// Open and close the navigation menu when clicked.
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    // Update the accessibility state.
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change the icon according to the menu state.
    if (isOpen) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
        menuToggle.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});

// Close the menu after clicking a navigation link.
const navigationItems = navLinks.querySelectorAll("a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});


// =========================================
// 2. HEADER SCROLL EFFECT
// =========================================

const header = document.querySelector(".header");

// Add a shadow when the page is scrolled.
window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================================
// 3. SCROLL REVEAL ANIMATION
// =========================================

// Select the sections and cards that should animate.
const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .about-visual, " +
    ".program-card, .benefit-card, .journey-content, " +
    ".journey-visual, .stat-item, .testimonial-card, " +
    ".faq-intro, .faq-item, .cta-content, .cta-illustration"
);

// Add the reveal class to each selected element.
revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

// Check whether the browser supports IntersectionObserver.
if ("IntersectionObserver" in window) {

    // Observe elements as they enter the visible screen.
    const observer = new IntersectionObserver(
        function (entries, currentObserver) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    // Stop observing after the animation runs once.
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

} else {
    // Fallback for older browsers.
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


// =========================================
// 4. FAQ ACCORDION BEHAVIOUR
// =========================================

// Select all FAQ items.
const faqItems = document.querySelectorAll(".faq-item");

// Allow only one FAQ answer to remain open at a time.
faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {

        // Do nothing when this item is closed.
        if (!item.open) {
            return;
        }

        // Close all other FAQ items.
        faqItems.forEach(function (otherItem) {
            if (otherItem !== item) {
                otherItem.open = false;
            }
        });
    });
});


// =========================================
// 5. AUTOMATIC COPYRIGHT YEAR
// =========================================

// Display the current year in the footer.
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


// =========================================
// 6. KEYBOARD ACCESSIBILITY
// =========================================

// Close the mobile menu when the Escape key is pressed.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    }
});


// =========================================
// 7. CONSOLE MESSAGE
// =========================================

// This message helps identify the project during testing.
console.log("InternNova Homepage Redesign loaded successfully!");