import image from './images/interior-1_1920x1080.jpg.resize.0.0.1270.711.jpg'
import { homeContainer } from './homePage';
import { menuHandler } from './menu-handler';

// Create the Container Div
const element = document.createElement('div')
element.classList.add('main-content')


// Added image
const myIcon = new Image();
myIcon.src = image;
myIcon.classList.add('homeImage')
element.appendChild(myIcon)


// Center Container
let centerContainer = document.createElement('div')
centerContainer.classList.add('centerContainer')

// Add homepage render
// centerContainer.appendChild(homeContainer)

centerContainer.appendChild(menuHandler)


element.appendChild(centerContainer)

export {element as homeContent}