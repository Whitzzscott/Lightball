const lightbulb = document.getElementById('lightbulb');
let isDragging = false;
let startX, startY, initialX, initialY;

lightbulb.addEventListener('mousedown', (e) => {
    isDragging = true;
    lightbulb.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
    const rect = lightbulb.getBoundingClientRect();
    initialX = rect.left + window.scrollX;
    initialY = rect.top + window.scrollY;
    lightbulb.style.transition = 'none';
});

window.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        lightbulb.style.left = `${initialX + dx}px`;
        lightbulb.style.top = `${initialY + dy}px`;
    }
});

window.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        lightbulb.classList.remove('dragging');
        lightbulb.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        lightbulb.style.transform = 'translateY(300px) rotateX(720deg) rotateY(720deg)';
        lightbulb.style.opacity = '0.5';
        setTimeout(() => {
            lightbulb.style.transition = 'none';
            lightbulb.style.transform = 'translateY(300px) scale(0.5)';
            lightbulb.style.opacity = '0';
            setTimeout(() => {
                lightbulb.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                lightbulb.style.transform = 'translateY(0)';
                lightbulb.style.opacity = '1';
                lightbulb.style.left = '0';
                lightbulb.style.top = '0';
            }, 500);
        }, 500);
    }
});
