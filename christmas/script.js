const sparklesContainer = document.querySelector('.sparkles');

// Function to create sparkles
function createSparkles() {
  for (let i = 0; i < 100; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDelay = `${Math.random() * 2}s`; // Vary animation delay
    sparklesContainer.appendChild(sparkle);
  }
}

createSparkles();
