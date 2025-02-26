document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            mobileMenu.classList.remove('active');
            
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
    
    // Map Access Buttons
    const accessMapButtons = document.querySelectorAll('#access-map, #access-map-cta');
    accessMapButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Redirect to map page
            window.location.href = 'map.html';
        });
    });
    
    // Get Started Button
    document.getElementById('get-started').addEventListener('click', function() {
        window.location.href = 'map.html';
    });
    
    // Learn More Button
    document.getElementById('learn-more').addEventListener('click', function() {
        document.querySelector('#features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
    
    // Contact Us Button
    document.getElementById('contact-us').addEventListener('click', function() {
        alert('Contact form functionality will be implemented here.');
    });
    
    // Add parallax effect to floating squares
    window.addEventListener('scroll', function() {
        const squares = document.querySelectorAll('.square');
        const scrollY = window.scrollY;
        
        squares.forEach((square, index) => {
            const speed = 0.05 * (index + 1);
            square.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
});