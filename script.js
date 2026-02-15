document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
        document.body.classList.toggle('overflow-hidden');
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Scroll Header Background
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // FAQ Data & Rendering
    const faqs = [
        { q: "Implementation Timeline?", a: "Timelines vary by complexity. Standard integrations take 2-4 weeks. Enterprise custom models require 2-3 months." },
        { q: "Data Privacy & Security?", a: "We deploy within your VPC ensuring data sovereignty. SOC2 and GDPR compliant architectures available." },
        { q: "Custom vs. API?", a: "Hybrid approach. Frontier APIs for reasoning; Open-source models for sensitive, domain-specific tasks." },
        { q: "Post-Launch Support?", a: "Continuous monitoring, re-training pipelines, and 24/7 system health checks included in all SLAs." }
    ];

    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqs.forEach((faq, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'border-b border-gray-100 last:border-0';
            faqItem.innerHTML = `
                <button class="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50/50 transition-colors px-2 faq-btn">
                    <span class="text-lg font-bold text-gray-900">${faq.q}</span>
                    <span class="transform transition-transform duration-300 text-gray-400">▼</span>
                </button>
                <div class="hidden overflow-hidden transition-all duration-300 faq-content">
                    <div class="pb-6 pl-2 pr-10 text-sm text-gray-500 leading-relaxed">
                        ${faq.a}
                    </div>
                </div>
            `;

            const btn = faqItem.querySelector('.faq-btn');
            const content = faqItem.querySelector('.faq-content');
            const icon = btn.querySelector('span:last-child');

            btn.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');

                // Close all others
                document.querySelectorAll('.faq-content').forEach(el => el.classList.add('hidden'));
                document.querySelectorAll('.faq-btn span:last-child').forEach(el => el.style.transform = 'rotate(0deg)');

                if (!isOpen) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                }
            });

            faqContainer.appendChild(faqItem);
        });
    }

    // Services Accordion Interaction
    function initServicesAccordion() {
        const items = document.querySelectorAll('.service-accordion-item');

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Remove active class from all items
                items.forEach(i => {
                    i.classList.remove('active', 'flex-[3]', 'bg-gray-900');
                    i.classList.add('flex-[1]', 'bg-gray-50', 'hover:flex-[1.5]');

                    // Reset image scale for inactive items
                    const img = i.querySelector('img');
                    if (img) img.classList.remove('group-[.active]:scale-100');
                });

                // Add active class to clicked item
                item.classList.remove('flex-[1]', 'bg-gray-50', 'hover:flex-[1.5]');
                item.classList.add('active', 'flex-[3]');
            });
        });
    }

    // Initialize on load
    initServicesAccordion();

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<span>Sending...</span>';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<span>Message Sent!</span>';
                btn.classList.add('bg-green-600');
                contactForm.reset();

                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-600');
                }, 3000);
            }, 1500);
        });
    }

    // Testimonial Carousel
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const avatarImages = document.querySelectorAll('[data-testimonial]');

    if (testimonialWrapper && testimonialSlides.length > 0) {
        let currentIndex = 0;
        const totalSlides = testimonialSlides.length;
        let autoAdvanceInterval;

        function updateCarousel() {
            const translateX = -currentIndex * 100;
            testimonialWrapper.style.transform = `translateX(${translateX}%)`;

            // Update avatar active states
            avatarImages.forEach((img, index) => {
                if (parseInt(img.dataset.testimonial) === currentIndex) {
                    img.style.transform = 'scale(1.1)';
                    img.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
                } else {
                    img.style.transform = 'scale(1)';
                    img.style.boxShadow = 'none';
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function startAutoAdvance() {
            stopAutoAdvance();
            autoAdvanceInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoAdvance() {
            if (autoAdvanceInterval) {
                clearInterval(autoAdvanceInterval);
            }
        }

        // Navigation button handlers
        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 5000);
        });

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoAdvance();
            setTimeout(startAutoAdvance, 5000);
        });

        // Avatar click handlers
        avatarImages.forEach(img => {
            img.addEventListener('click', () => {
                const testimonialIndex = parseInt(img.dataset.testimonial);
                goToSlide(testimonialIndex);
                stopAutoAdvance();
                setTimeout(startAutoAdvance, 5000);
            });
        });

        // Initialize
        updateCarousel();
        startAutoAdvance();
    }

});
