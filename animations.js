// animations.js - GSAP Animations for Service Pages

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // ===== HERO ANIMATIONS =====

    // Hero breadcrumb fade-in
    gsap.from('.hero-breadcrumb', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Hero heading scale and fade-in
    gsap.from('.hero-heading', {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out'
    });

    // Hero tagline fade-in
    gsap.from('.hero-tagline', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.7,
        ease: 'power2.out'
    });

    // Hero CTAs slide-up
    gsap.from('.hero-ctas', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 1,
        ease: 'power2.out'
    });

    // Scroll indicator fade-in
    gsap.from('.scroll-indicator', {
        opacity: 0,
        y: -10,
        duration: 0.6,
        delay: 1.3,
        ease: 'power2.out'
    });

    // ===== COUNTER ANIMATIONS =====

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (target < 100 ? '%' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (target < 100 ? '%' : '+');
            }
        }, 16);
    }

    // Trigger counter animation on scroll
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        ScrollTrigger.create({
            trigger: counters[0].closest('section'),
            start: 'top 70%',
            once: true,
            onEnter: () => {
                counters.forEach(counter => animateCounter(counter));
            }
        });
    }

    // ===== FADE-IN ANIMATIONS =====

    // Fade-in-up elements
    gsap.utils.toArray('.fade-in-up').forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Fade-in-left elements
    gsap.utils.toArray('.fade-in-left').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: -60,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Fade-in-right elements
    gsap.utils.toArray('.fade-in-right').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            x: 60,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ===== PROCESS CARDS STAGGER =====

    const processCards = document.querySelectorAll('.process-card');
    if (processCards.length > 0) {
        gsap.from(processCards, {
            opacity: 0,
            y: 80,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: processCards[0].closest('section'),
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // ===== BENEFIT CARDS STAGGER =====

    const benefitCards = document.querySelectorAll('.benefit-card');
    if (benefitCards.length > 0) {
        gsap.from(benefitCards, {
            opacity: 0,
            y: 60,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: benefitCards[0].closest('section'),
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
    }

    // ===== SERVICE CARDS STAGGER =====

    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        gsap.from(serviceCards, {
            opacity: 0,
            y: 70,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: serviceCards[0].closest('section'),
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }

    // ===== PARALLAX EFFECT =====

    // Subtle parallax on background elements
    gsap.utils.toArray('.animate-float, .animate-float-delayed, .animate-float-delayed-2').forEach(element => {
        gsap.to(element, {
            y: -50,
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });

    // ===== HOVER ANIMATIONS =====

    // Add hover scale effect to cards
    const hoverCards = document.querySelectorAll('.process-card, .benefit-card');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // ===== SMOOTH SCROLL =====

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: target,
                            offsetY: 80
                        },
                        ease: 'power2.inOut'
                    });
                }
            }
        });
    });

    // ===== REVEAL ON SCROLL (Generic) =====

    // Add reveal animation to any element with .reveal-on-scroll class
    gsap.utils.toArray('.reveal-on-scroll').forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ===== MOBILE MENU ANIMATION =====

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');

            // Stagger animation for menu items
            gsap.from(mobileLinks, {
                opacity: 0,
                x: 50,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power2.out'
            });
        });

        if (closeMenuBtn) {
            closeMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        }

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // ===== HEADER SCROLL EFFECT =====

    const header = document.getElementById('header');
    if (header) {
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                header.classList.add('shadow-lg');
            } else {
                header.classList.remove('shadow-lg');
            }

            lastScroll = currentScroll;
        });
    }

    // ===== FORM ANIMATIONS =====

    // Add focus animations to form inputs
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', function () {
            gsap.to(this, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // ===== ANIMATED SERVICE CARDS OBSERVER =====
    const revealCards = document.querySelectorAll('.reveal');
    if (revealCards.length > 0) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 120);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        revealCards.forEach(card => revealObserver.observe(card));

    }


    // ===== TESTIMONIAL SLIDER REDESIGN LOGIC =====
    const testTrack = document.querySelector('.testimonial-track');
    const testSlides = document.querySelectorAll('.test-slide');
    const testPrev = document.getElementById('test-prev');
    const testNext = document.getElementById('test-next');
    const testProgress = document.getElementById('test-progress');

    if (testTrack && testSlides.length > 0) {
        let testIndex = 0;
        const totalTestSlides = testSlides.length;

        function updateTestSlider() {
            if (!testSlides[0]) return;

            // Calculate movement based on card width + gap
            const gap = 24;
            const slideWidth = testSlides[0].offsetWidth || 450;
            const moveAmount = (slideWidth + gap) * testIndex;

            gsap.to(testTrack, {
                x: -moveAmount,
                duration: 0.6,
                ease: "power2.out"
            });

            // Update progress bar
            const progress = ((testIndex + 1) / totalTestSlides) * 100;
            if (testProgress) {
                testProgress.style.width = `${progress}%`;
            }

            // Clean slider state
            testSlides.forEach((slide) => {
                slide.style.opacity = "1";
                slide.style.transform = "scale(1)";
            });
        }

        testNext.addEventListener('click', () => {
            if (testIndex < totalTestSlides - 1) {
                testIndex++;
            } else {
                testIndex = 0; // Circular
            }
            updateTestSlider();
        });

        testPrev.addEventListener('click', () => {
            if (testIndex > 0) {
                testIndex--;
            } else {
                testIndex = totalTestSlides - 1; // Circular
            }
            updateTestSlider();
        });

        // Initialize
        setTimeout(updateTestSlider, 100); // Small delay to ensure layout is ready

        // ===== DRAG & SWIPE LOGIC =====
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;

        const viewport = document.querySelector('.testimonial-view');

        if (viewport) {
            // Mouse Events
            viewport.addEventListener('mousedown', dragStart);
            window.addEventListener('mouseup', dragEnd); // Use window for better UX
            window.addEventListener('mousemove', dragAction);

            // Touch Events
            viewport.addEventListener('touchstart', dragStart, { passive: true });
            window.addEventListener('touchend', dragEnd);
            window.addEventListener('touchmove', dragAction, { passive: false });
        }

        function dragStart(e) {
            isDragging = true;
            startX = getPositionX(e);
            viewport.style.cursor = 'grabbing';
            const slideWidth = testSlides[0].offsetWidth || 450;
            prevTranslate = -((slideWidth + 24) * testIndex);

            gsap.killTweensOf(testTrack);
        }

        function dragAction(e) {
            if (!isDragging) return;
            const currentPosition = getPositionX(e);
            const diff = currentPosition - startX;
            currentTranslate = prevTranslate + diff;

            gsap.set(testTrack, { x: currentTranslate });
        }

        function dragEnd() {
            if (!isDragging) return;
            isDragging = false;
            viewport.style.cursor = 'grab';

            const movedBy = currentTranslate - prevTranslate;

            // Shift index if dragged enough (lower threshold for better feel)
            if (movedBy < -50 && testIndex < totalTestSlides - 1) {
                testIndex += 1;
            } else if (movedBy > 50 && testIndex > 0) {
                testIndex -= 1;
            }

            updateTestSlider();
        }

        function getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        }

        // Responsive handling
        window.addEventListener('resize', updateTestSlider);
    }

    console.log('✨ Animations loaded successfully!');
});
