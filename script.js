// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des cartes au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes
document.querySelectorAll('.accomplishment-card, .film-card, .bio-content').forEach(el => {
    observer.observe(el);
});

// Effet de hover sur les images de galerie
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) rotate(2deg)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Modal pour les images de galerie
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const img_large = document.createElement('img');
        img_large.src = this.src;
        img_large.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border: 3px solid #ffd700;
            border-radius: 10px;
            box-shadow: 0 0 50px rgba(255, 215, 0, 0.8);
        `;
        
        modal.appendChild(img_large);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', function() {
            modal.remove();
        });
    });
});

// Animation de la navbar au scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 30px rgba(255, 215, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Message de bienvenue
console.log('%c🦇 Bienvenue sur le site de Batman 🦇', 'color: #ffd700; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);');
console.log('%c"Je suis vengeance, je suis la nuit, JE SUIS BATMAN"', 'color: #ffd700; font-size: 14px; font-style: italic;');
