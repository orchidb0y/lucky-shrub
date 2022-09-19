//Memory object
const memory = {
    lastPage: 'products',
    productsAnimation: document.getElementById('products-article').getAnimations()[0],
    contactAnimation: document.getElementById('contact-article').getAnimations()[0],
    aboutAnimation: document.getElementById('about-article').getAnimations()[0]

}

// Helper functions
function originDestination(anchor) {

    let origin = memory.lastPage
    let destination = anchor.id
    let animate = false

    if (destination == 'home') {
        destination = 'products'
    }

    if (destination == origin) {
        return [origin, destination, animate]
    } else {
        animate = true
        memory.lastPage = destination
        return [origin, destination, animate]
    }

}

function getAnimation(page) {
    page = page + 'Animation'
    return memory[page]
}

function playAnimation(animation) {

    if (animation.playState == 'paused') {
        animation.play()
    } else if (animation.playState == 'finished') {
        animation.reverse()
    }

}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

// Animation function
const anchors = document.querySelectorAll('.nav-item a')
anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {

        let [origin, destination, animate] = originDestination(anchor)
        console.log(origin, destination, animate)

        if (!(animate)) {
            return
        } else {

            // Get and play current article's animation
            console.log('Getting outAnimation from', origin + '-article')
            let outAnimation = getAnimation(origin)
            console.log('Got', outAnimation)
            playAnimation(outAnimation)

            // Get and play new article's animation
            console.log('Getting inAnimation from', destination + '-article')
            let inAnimation = getAnimation(destination)
            console.log('Got', inAnimation)
            delay(1000).then(() => playAnimation(inAnimation))

        }

        console.log('')

    })
})