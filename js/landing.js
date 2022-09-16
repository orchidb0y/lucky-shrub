// Init memory variables
let lastClick = undefined;
let logoDown = true;
let played = false

// Get elements to animate
const logoAnimation = document.getElementById('top-logo').getAnimations()[0]
const menuAnimation = document.getElementById('menu').getAnimations()[0]
const spaceOutAnimation = document.getElementById('wrapper').getAnimations()[0]
const fadeInAnimation = document.getElementById('wrapper').getAnimations()[1]

// If you click one of the menu anchors
const anchors = document.querySelectorAll('.nav-item a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {          
        if (logoDown) {
            if (!(played) && (anchor.id != 'home')) { // Open to article

                logoAnimation.play()
                menuAnimation.play()
                spaceOutAnimation.play()
                fadeInAnimation.play()

                logoDown = false
                played = true
                lastClick = anchor.id

            } else if ((played) && (anchor.id != lastClick)) { // Change article
                
                logoAnimation.reverse()
                menuAnimation.reverse()
                spaceOutAnimation.reverse()
                fadeInAnimation.reverse()

                logoDown = false
                lastClick = anchor.id

            }

        } else if ((anchor.id == 'home') && (played)) { // Back to home

            logoAnimation.reverse()
            menuAnimation.reverse()
            spaceOutAnimation.reverse()
            fadeInAnimation.reverse()

            logoDown = true
            lastClick = anchor.id

        }
    })
})