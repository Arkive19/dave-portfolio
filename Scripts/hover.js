const hoverText = document.querySelector('.gelatine');
const mouseImage = document.getElementById('mouse-image');

hoverText.addEventListener('mouseenter', () => {
    mouseImage.style.display = 'block'; // Show the image when hovering
});

hoverText.addEventListener('mouseleave', () => {
    mouseImage.style.display = 'none'; // Hide the image when hover ends
});

hoverText.addEventListener('mousemove', (event) => {
    // Position the image near the cursor
    mouseImage.style.left = `${event.pageX + 10}px`; // Adjust offset
    mouseImage.style.top = `${event.pageY}px`;
});
