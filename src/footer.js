import icon from './images/campfire-black-outline-60246.jpg'
import githubIcon from './images/github.svg'

export const footer = document.createElement('footer')

footer.classList.add('footer')


// Footer container
let creatorContainer = document.createElement('div')
creatorContainer.classList.add('creatorContainer')

// Creator element
let creatorText = document.createElement('div')
creatorText.classList.add('creatorText')
creatorText.innerHTML = 'Created by: Swift928'
creatorContainer.appendChild(creatorText)

// Github svg
let github = new Image()
github.src = githubIcon
github.classList.add('githubSVG')
creatorContainer.appendChild(github)

footer.appendChild(creatorContainer)

// Restaurant logo 
const myIcon = new Image();
myIcon.src = icon
myIcon.id = 'navLogo'
footer.appendChild(myIcon)

// Rights reserved
let rightsText = document.createElement('div')
rightsText.classList.add('rightsText')
rightsText.innerHTML = '©2023 - Oh Sey Nami'
footer.appendChild(rightsText)
