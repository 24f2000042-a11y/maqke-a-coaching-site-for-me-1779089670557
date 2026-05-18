document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Reveal Animation
    const scrollReveal = () => {
        const elements = document.querySelectorAll('[data-scroll-reveal]');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
            if (isVisible) {
                el.setAttribute('data-scroll-reveal', 'enter.done');
            } else {
                // Optional: Reset if you want elements to re-animate when scrolling back up
                // el.setAttribute('data-scroll-reveal', 'enter');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check on page load

    // Add data-scroll-reveal attributes to elements that should animate
    document.querySelectorAll('.about-section h2, .about-section p, .about-image img, .services-section h2, .service-card, .testimonials-section h2, .testimonial, .contact-section h2, .contact-section p, .contact-section form').forEach(el => {
        el.setAttribute('data-scroll-reveal', 'enter');
    });
});
