document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth'
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('#services');
    const serviceCards = document.querySelectorAll('.service-card');

    // Function to reveal services cards with a delay
    const revealServices = () => {
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, index * 200); // Staggered reveal
        });
    };

    // Set initial styles for the cards
    serviceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)'; // Start slightly below
    });

    // Trigger reveal when the section comes into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            revealServices();
            observer.disconnect(); // Stop observing after reveal
        }
    });

    observer.observe(servicesSection);
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    const aboutContent = document.querySelector('.about-content');

    // Function to reveal the about content
    const revealAbout = () => {
        aboutContent.classList.add('reveal'); // Add class for animation
    };

    // Trigger reveal when the section comes into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            revealAbout();
            observer.disconnect(); // Stop observing after reveal
        }
    });

    observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function() {
    const portfolioSection = document.querySelector('#portfolio');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Function to reveal portfolio items
    const revealPortfolio = () => {
        portfolioItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, index * 200); // Staggered reveal
        });
    };

    // Set initial styles for the items
    portfolioItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)'; // Start slightly below
    });

    // Trigger reveal when the section comes into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            revealPortfolio();
            observer.disconnect(); // Stop observing after reveal
        }
    });

    observer.observe(portfolioSection);
});
document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSection = document.querySelector('#testimonials');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Function to reveal testimonial cards
    const revealTestimonials = () => {
        testimonialCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('reveal'); // Add class for animation
            }, index * 200); // Staggered reveal
        });
    };

    // Trigger reveal when the section comes into view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            revealTestimonials();
            observer.disconnect(); // Stop observing after reveal
        }
    });

    observer.observe(testimonialsSection);
});
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Here, you can handle form data (e.g., send it to a server)
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message!'); // Alert for confirmation

        contactForm.reset(); // Reset the form after submission
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear(); // Get current year
    const footerText = document.querySelector('.footer-content p');
    footerText.innerHTML = `&copy; ${yearSpan.textContent} henrypeterson. All rights reserved.`;
});
