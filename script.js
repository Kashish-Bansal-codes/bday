// Add Confetti
const confettiContainer = document.querySelector('.confetti');
for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDelay = `${Math.random() * 3}s`;
    confetti.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(confetti);
}

// Add Balloons
const balloonsContainer = document.querySelector('.balloons');
for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${3 + Math.random() * 5}s`;
    balloonsContainer.appendChild(balloon);
}

// Random Color Generator
function getRandomColor() {
    const colors = ['#FF6B6B', '#FFB6C1', '#FFD700', '#87CEEB', '#6A5ACD'];
    return colors[Math.floor(Math.random() * colors.length)];
}
