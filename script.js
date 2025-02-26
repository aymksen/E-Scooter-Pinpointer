document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.add('active');
        });
    }
    
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Map Access Buttons - Fix for mobile button
    const accessMapButtons = document.querySelectorAll('#access-map, #access-map-cta, #mobile-access-map');
    accessMapButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', function() {
                // Redirect to map page
                window.location.href = 'map.html';
            });
        }
    });
    
    // Get Started Button
    const getStartedButton = document.getElementById('get-started');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', function() {
            window.location.href = 'map.html';
        });
    }
    
    // Learn More Button
    const learnMoreButton = document.getElementById('learn-more');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function() {
            const featuresSection = document.querySelector('#features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start', 
                    inline: 'nearest' 
                });
            }
        });
    }
    
    // Add parallax effect to floating squares
    window.addEventListener('scroll', function() {
        const squares = document.querySelectorAll('.square');
        const scrollY = window.scrollY;
        
        squares.forEach((square, index) => {
            const speed = 0.05 * (index + 1);
            square.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
    
    // Check for viewport resizing and handle mobile styles
    window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const heroButtons = document.querySelector('.hero-buttons');
        
        if (width <= 576 && heroButtons) {
            heroButtons.style.flexDirection = 'column';
        } else if (heroButtons) {
            heroButtons.style.flexDirection = 'row';
        }
    });
    
    // Initialize on load
    const width = window.innerWidth;
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (width <= 576 && heroButtons) {
        heroButtons.style.flexDirection = 'column';
    }
});

// Add at the top of the file
emailjs.init("YCKqvOTkXtrbF6pXx");

// Update Contact Us Button handler
const contactUsButton = document.getElementById('contact-us');
if (contactUsButton) {
    contactUsButton.addEventListener('click', function() {
        document.getElementById('contact-modal').style.display = 'flex';
    });
}

// Add modal close functionality
const closeModal = document.getElementById('close-contact-modal');
const contactModal = document.getElementById('contact-modal');

closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none';
});

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.primary-button');
    const originalText = submitBtn.textContent;
    
    // Show sending state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    emailjs.sendForm("service_yt8ebgx", "template_ptp1jhe", this)
        .then(() => {
            // Show success state
            submitBtn.textContent = 'Message Sent!';
            
            // Close modal and reset after 2 seconds
            setTimeout(() => {
                contactModal.style.display = 'none';
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, (error) => {
            // Show error state
            submitBtn.textContent = 'Failed to Send';
            console.log('EmailJS Error:', error);
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
});

