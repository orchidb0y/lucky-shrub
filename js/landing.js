// Init memory variables
let lastClick = undefined;
let logoDown = true;
let played = false

// Get elements to animate
const logoAnimation = document.getElementById('top-logo').getAnimations()[0]
const menuAnimation = document.getElementById('menu').getAnimations()[0]
const spaceOutAnimation = document.getElementById('wrapper').getAnimations()[0]
const fadeInAnimation = document.getElementById('wrapper').getAnimations()[1]

// Animation functions
function reverseAnimation() {
    logoAnimation.reverse()
    menuAnimation.reverse()
    spaceOutAnimation.reverse()
    fadeInAnimation.reverse()
}

function playAnimation() {
    logoAnimation.play()
    menuAnimation.play()
    spaceOutAnimation.play()
    fadeInAnimation.play()
}

// If you click one of the menu anchors
const anchors = document.querySelectorAll('.nav-item a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {          
        if (logoDown) {
            if (!(played) && (anchor.id != 'home')) { // Open to article

                playAnimation()
                logoDown = false
                played = true
                lastClick = anchor.id

            } else if ((played) && (anchor.id != lastClick)) { // Change article (or return from home)
                
                reverseAnimation()
                logoDown = false
                lastClick = anchor.id

            }

        } else if ((anchor.id == 'home') && (played)) { // Back to home

            reverseAnimation()
            logoDown = true
            lastClick = anchor.id

        }
    })
})