// Init memory variables
let lastClick = undefined
let logoDown = false
let played = true

// Get elements to animate
const logoAnimation = document.getElementById('top-logo').getAnimations()[0]
const menuAnimation = document.getElementById('menu').getAnimations()[0]
const spaceOutFadeInAnimation = document.getElementById('wrapper').getAnimations()[0]
const fadeInAnimation = document.getElementById('wrapper').getAnimations()[1]
const articleAnimations = document.getElementsByClassName('page-article')

// Animation functions
