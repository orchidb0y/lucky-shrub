// Store clicks
var lastClick;
var click;

// Array of nav menu anchors
const anchors = document.querySelectorAll('.nav-item a');

// If you click one of the anchors
anchors.forEach(element => {
    element.addEventListener('click', () => {
        // Check where was last click
        switch (lastClick) {
            case undefined:
                // Store click
                click = element.id

                // Get and transform relevant article
                console.log(click + '-article')
                const article = document.getElementById(click + '-article')

                article.style.animation = ''
            case 'products':

            case 'contact':

            case 'about':

        }

        // Get and transform logo element
        const logo = document.getElementById('top-logo')

        logo.style.animation = 'shrinkup 2s ease-in-out'
        logo.style.animationFillMode = 'forwards'
    })
});