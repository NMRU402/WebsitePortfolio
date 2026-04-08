// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
    ".reveal,.reveal-left,.reveal-right,.reveal-scale",
);
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => revealObserver.observe(el));

// ===== ANIMATED BAR FILLS =====
const barFills = document.querySelectorAll(".d-bar-fill");
const barObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("animate");
        });
    },
    { threshold: 0.5 },
);
barFills.forEach((el) => barObserver.observe(el));

// ===== SCROLL PROGRESS & BACK TO TOP =====
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    // Progress bar width
    document.getElementById("scrollProgress").style.width = progress + "%";

    // Nav shadow
    document
        .getElementById("mainNav")
        .classList.toggle("scrolled", scrollTop > 20);

    // Show/Hide Floating Back to Top Button
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        backToTopBtn.classList.toggle("show", scrollTop > 600);
    }
});

// ===== HERO PARTICLES =====
(function () {
    const container = document.getElementById("heroParticles");
    for (let i = 0; i < 15; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = 8 + Math.random() * 12 + "s";
        p.style.animationDelay = Math.random() * 8 + "s";
        p.style.width = 2 + Math.random() * 4 + "px";
        p.style.height = p.style.width;
        p.style.opacity = 0.15 + Math.random() * 0.25;
        container.appendChild(p);
    }
})();
