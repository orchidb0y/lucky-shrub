// Array of nav menu anchors
const anchors = document.querySelectorAll('.nav-item a');

// If you click one of the anchors
anchors.forEach(element => {
    element.addEventListener('click', () => {
        const logo = document.getElementById('top-logo')

        logo.style.animation = 'shrinkup 2s ease-in-out'
        logo.style.animationFillMode = 'forwards'
    })
});