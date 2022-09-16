// Init memory variables
let lastClick = undefined;
let logoDown = true;
let played = false

// Get elements to animate
const logoAnimation = document.getElementById('top-logo').getAnimations()[0]
const menuAnimation = document.getElementById('menu').getAnimations()[0]
const divAnimation = document.getElementById('wrapper').getAnimations()[0]

// If you click one of the menu anchors
const anchors = document.querySelectorAll('.nav-item a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {          
        if (logoDown) {
            if (!(played) && (anchor.id != 'home')) {

                logoAnimation.play()
                menuAnimation.play()
                divAnimation.play()
                logoDown = false
                played = true
                lastClick = anchor.id

            } else if ((played) && (anchor.id != lastClick)) {
                
                logoAnimation.reverse()
                menuAnimation.reverse()
                divAnimation.reverse()
                logoDown = false
                lastClick = anchor.id

            }

        } else if ((anchor.id == 'home') && (played)) {

            logoAnimation.reverse()
            menuAnimation.reverse()
            divAnimation.reverse()
            logoDown = true
            lastClick = anchor.id

        }
    })
})