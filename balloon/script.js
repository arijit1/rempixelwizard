const bubblesContainer =
 document.querySelector('.bubbles');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 20; 
    const left = Math.random() * 100 + 'vw'; 
    const animationDuration = Math.random() * 6 + 4 + 's'; 
    const top = window.innerHeight + 'px'; 
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = left;
    bubble.style.animationDuration = animationDuration;
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.top = top;
    bubblesContainer.appendChild(bubble);
}

for (let i = 0; i < 20; i++) {
    createBubble();
}
