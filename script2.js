// ==========================================================================
// INTERACTIVE ARCHITECTURE & GSAP ANIMATIONS — NIDHHI TAPADIAA
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. CUSTOM CURSOR MOTION
    const cursor = document.getElementById('cursor');
    const cursorFollower = document.getElementById('cursorFollower');

    if (cursor && cursorFollower) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(cursorFollower, { x: e.clientX - 12, y: e.clientY - 12, duration: 0.25 });
        });
    }

    // 2. HERO ENTRANCE TIMELINE
    const heroTl = gsap.timeline();

    if (document.querySelector('.hero-section')) {
        heroTl.from('.gsap-fade-up', {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out"
        })
        .from('.gsap-hero-img', {
            scale: 1.15,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out"
        }, "-=1.0")
        .from('.gsap-badge', {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)"
        }, "-=0.6");
    }

    // 3. PARALLAX BANNER & HERO GLOW SCROLLTRIGGER EFFECTS
    if (document.getElementById('parallaxBg')) {
        gsap.to('#parallaxBg', {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: '.parallax-banner-section',
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    if (document.getElementById('heroGlow')) {
        gsap.to('#heroGlow', {
            y: 150,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero-section',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    if (document.querySelector('.gsap-hero-img')) {
        gsap.to('.gsap-hero-img', {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
                trigger: '.hero-section',
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // 4. DYNAMIC MARQUEE TICKER SCROLL-REACTIVE ANIMATIONS
    if (document.getElementById('marqueeLeftTrack')) {
        gsap.to('#marqueeLeftTrack', {
            xPercent: -35,
            ease: "none",
            scrollTrigger: {
                trigger: '.marquee-section',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    }

    if (document.getElementById('marqueeRightTrack')) {
        gsap.to('#marqueeRightTrack', {
            xPercent: 35,
            ease: "none",
            scrollTrigger: {
                trigger: '.marquee-section',
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    }

    // 5. ABOUT SECTION REVEAL
    if (document.querySelector('.gsap-reveal-left')) {
        gsap.from('.gsap-reveal-left', {
            x: -80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about-section',
                start: "top 75%"
            }
        });
    }

    if (document.querySelector('.gsap-reveal-right')) {
        gsap.from('.gsap-reveal-right', {
            x: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.about-section',
                start: "top 75%"
            }
        });
    }

    // 6. BEFORE & AFTER TRANSFORM SLIDER DRAG LOGIC
    const comparisonContainer = document.getElementById('comparisonContainer');
    const comparisonTopImg = document.getElementById('comparisonTopImg');
    const comparisonSliderHandle = document.getElementById('comparisonSliderHandle');

    if (comparisonContainer && comparisonTopImg && comparisonSliderHandle) {
        let isDragging = false;

        const handleMove = (clientX) => {
            const rect = comparisonContainer.getBoundingClientRect();
            let posX = clientX - rect.left;
            let percentage = (posX / rect.width) * 100;

            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;

            comparisonTopImg.style.width = percentage + '%';
            comparisonSliderHandle.style.left = percentage + '%';
        };

        comparisonContainer.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            handleMove(e.clientX);
        });

        comparisonContainer.addEventListener('touchstart', () => isDragging = true);
        window.addEventListener('touchend', () => isDragging = false);
        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            handleMove(e.touches[0].clientX);
        });
    }

    // 7. STAGGERED GRIDS REVEAL
    if (document.querySelector('.projects-grid')) {
        gsap.from('.gsap-project-item', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.projects-grid',
                start: "top 80%"
            }
        });
    }

    if (document.querySelector('.portfolio-grid')) {
        gsap.from('.gsap-portfolio-card', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: "top 80%"
            }
        });
    }

    if (document.querySelector('.filmography-grid')) {
        gsap.from('.gsap-film-card', {
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.filmography-grid',
                start: "top 80%"
            }
        });
    }

    if (document.querySelector('.insta-grid')) {
        gsap.from('.gsap-insta-card', {
            scale: 0.9,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.insta-grid',
                start: "top 85%"
            }
        });
    }

    // 8. MAGNETIC BUTTON PHYSICS
    const magneticElements = document.querySelectorAll('.magnetic-element');
    magneticElements.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        });
    });

    // Sticky Navbar Toggle
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Nav Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Category Filters
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (projectFilterBtns.length > 0 && projectCards.length > 0) {
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                projectCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        gsap.to(card, { display: 'block', opacity: 1, scale: 1, duration: 0.4 });
                    } else {
                        gsap.to(card, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => { card.style.display = 'none'; } });
                    }
                });
            });
        });
    }

    const filterBtns = document.querySelectorAll('#filterTabs .filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        gsap.to(item, { display: 'block', opacity: 1, scale: 1, duration: 0.4 });
                    } else {
                        gsap.to(item, { opacity: 0, scale: 0.9, duration: 0.3, onComplete: () => { item.style.display = 'none'; } });
                    }
                });
            });
        });
    }
});

// Modal triggers (Global scope for inline onclick usage)
function openLightbox(src, caption) {
    const imgElem = document.getElementById('lightboxImg');
    const capElem = document.getElementById('lightboxCaption');
    const modalElem = document.getElementById('lightboxModal');

    if (imgElem && capElem && modalElem) {
        imgElem.src = src;
        capElem.textContent = caption;
        modalElem.classList.add('active');
        document.body.style.overflow = 'hidden';
        gsap.from('#lightboxModal .modal-content-wrap', { scale: 0.85, opacity: 0, duration: 0.4, ease: "power2.out" });
    }
}

function closeLightbox() {
    const modalElem = document.getElementById('lightboxModal');
    if (modalElem) {
        modalElem.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function openVideoModal(title) {
    const titleElem = document.getElementById('videoModalTitle');
    const modalElem = document.getElementById('videoModal');

    if (titleElem && modalElem) {
        titleElem.textContent = title;
        modalElem.classList.add('active');
        document.body.style.overflow = 'hidden';
        gsap.from('#videoModal .video-wrap', { y: 40, opacity: 0, duration: 0.4, ease: "power2.out" });
    }
}

function closeVideoModal() {
    const modalElem = document.getElementById('videoModal');
    if (modalElem) {
        modalElem.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// 9. CINEMATIC PRELOADER REMOVAL
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 600);
        });
    }

    // 10. BACK TO TOP BUTTON SCROLL TRIGGER
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    }