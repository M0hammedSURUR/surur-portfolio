// ===========================
// Mobile Navigation
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

// ===========================
// Navbar Shadow
// ===========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// ===========================
// Scroll Progress Bar
// ===========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ===========================
// Back To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// ===========================
// Scroll Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Smooth Scroll for Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});

// ===========================
// Footer Year
// ===========================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

// ======================================
// TERMINAL LOADER
// ======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const output = document.getElementById("loading-output");

    const messages = [

        "[ OK ] Loading Skills...",
        "[ OK ] Loading Projects...",
        "[ OK ] Loading Experience...",
        "[ OK ] Loading Certifications.",
        "[ OK ] Loading Contact...",
        "[ OK ] Initializing Portfolio.",
        "",
        "Welcome, Mohammed Surur"

    ];

    let lineIndex = 0;

    const interval = setInterval(() => {

        const line = document.createElement("p");

        line.className = "loading-line";

        line.textContent = messages[lineIndex];

        output.appendChild(line);

        output.scrollTop = output.scrollHeight;

        lineIndex++;

        if (lineIndex >= messages.length) {

            clearInterval(interval);

            setTimeout(() => {

                loader.classList.add("hide");

                // Start typing after loader disappears
                typing.textContent = "";
                index = 0;
                typeHero();

            }, 700);

        }

    }, 250);

});

// ======================================
// HERO TYPING
// ======================================

const typing = document.getElementById("typing");

const text = "Aspiring Linux System Administrator";

let index = 0;

function typeHero() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeHero, 70);

    }

}