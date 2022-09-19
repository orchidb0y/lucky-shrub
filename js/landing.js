// Init memory variables
let lastClick = undefined;
let logoDown = true;
let played = false

// Get elements to animate
const logoAnimation = document.getElementById('top-logo').getAnimations()[0]
const menuAnimation = document.getElementById('menu').getAnimations()[0]
const spaceOutAnimation = document.getElementById('wrapper').getAnimations()[0]
const fadeInAnimation = document.getElementById('wrapper').getAnimations()[1]
const articleAnimations = document.getElementsByClassName('page-article')

// Animation functions
function reverseAnimation() {
    logoAnimation.reverse()
    menuAnimation.reverse()
    spaceOutAnimation.reverse()
    fadeInAnimation.reverse()
}

function playAnimation(reverse) {
    logoAnimation.play()
    menuAnimation.play()
    spaceOutAnimation.play()
    fadeInAnimation.play()
}

const delay = ms => new Promise(res => setTimeout(res, ms))
const animateArticles = async (anchor) => {

    let animation;
    console.log('Created animation variable')

    if (anchor.id != 'home') {
        animation = articleAnimations[document.getElementsByClassName(anchor.id + '-article')[0].id].getAnimations()[0]
        console.log('Animation from', anchor.id + '-article is', animation)
    }

    if (logoDown) { console.log('Opening from home')

        if (animation.playState == 'paused') { console.log('First time opening articles') // First time opening articles
            await delay(1000)
            animation.play()
        }

    } else if (anchor.id == 'home') { console.log('Closing to home') // Closing article to home

        animation = articleAnimations[document.getElementsByClassName(lastClick + '-article')[0].id].getAnimations()[0]
        animation.reverse()

    } else if (anchor.id != lastClick) { console.log('Switching article')

        const oldAnimation = articleAnimations[document.getElementsByClassName(lastClick + '-article')[0].id].getAnimations()[0]
        console.log('Old animation from', lastClick + '-article is', animation)
        oldAnimation.reverse()
        await delay(500)

        if (animation.playState == 'paused') { console.log('Article has not been opened before')
            animation.play()
        } else if (animation.playState == 'finished') { console.log('Article has been opened before')
            animation.reverse()
        }

    }

    lastClick = anchor.id
    console.log('Changed last click to', lastClick)
        
}

// If you click one of the menu anchors
const anchors = document.querySelectorAll('.nav-item a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {          
        console.log('START! Clicked on', anchor.id)

        if (logoDown) {  console.log('Opening from home') // When logo is down, will only listen to clicks on the three buttons to the right
            if (!(played) && (anchor.id != 'home')) { console.log('Opening article') // Open to article

                playAnimation()
                animateArticles(anchor)
                logoDown = false
                played = true

            } else if ((played) && (anchor.id != lastClick)) { console.log('Returning from home') // Return from home
                
                reverseAnimation()
                animateArticles(anchor)
                logoDown = false

            }

        } else if ((anchor.id == 'home') && (played)) { console.log('Back to home') // Back to home

            reverseAnimation()
            animateArticles(anchor)
            logoDown = true

        } else if ((anchor.id != lastClick)) { console.log('Switch articles') // Switch articles

            animateArticles(anchor)

        }

    })
})