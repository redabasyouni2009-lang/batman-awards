let totalVotes = 0;

function celebrateAward(award) {
    totalVotes++;
    updateVoteCounter();
    
    // Animation de célébration
    createConfetti();
    
    // Message d'encouragement
    alert(`🎉 Merci pour votre vote pour ${award}! 🦇`);
}

function updateVoteCounter() {
    document.getElementById('totalVotes').textContent = totalVotes;
}

function createConfetti() {
    const confettiPieces = 30;
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = Math.random() > 0.5 ? '#ffd700' : '#fff';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        // Animation de chute
        let top = -10;
        const speed = Math.random() * 2 + 2;
        const sway = Math.random() * 100 - 50;
        
        const interval = setInterval(() => {
            top += speed;
            confetti.style.top = top + 'px';
            confetti.style.left = (parseFloat(confetti.style.left) + sway * 0.01) + '%';
            
            if (top > window.innerHeight) {
                clearInterval(interval);
                confetti.remove();
            }
        }, 20);
    }
}

// Animation au chargement de la page
window.addEventListener('load', () => {
    console.log('🦇 Batman Awards page chargée avec succès!');
    
    // Ajouter une animation subtile aux cartes
    const cards = document.querySelectorAll('.award-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `slideIn 0.6s ease-out ${index * 0.1}s forwards`;
    });
});

// Ajouter une animation CSS pour l'apparition des cartes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
