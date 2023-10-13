import image from './images/interior-1_1920x1080.jpg.resize.0.0.1270.711.jpg'
import { homeTab } from './homeTab';
import { menuHandler as menuTab } from './menuTab';
import { contactHandler as contactTab } from './contactTab';
import { aboutHandler } from './aboutTab';

// Create the Container Div
const element = document.createElement('div')
element.classList.add('main-content')


// Background image
const myIcon = new Image();
myIcon.src = image;
myIcon.classList.add('homeImage')
element.appendChild(myIcon)


// Center Container
let centerContainer = document.createElement('div')
centerContainer.classList.add('centerContainer')

// Appending tabs
centerContainer.appendChild(homeTab)
centerContainer.appendChild(menuTab)
centerContainer.appendChild(contactTab)
centerContainer.appendChild(aboutHandler)


element.appendChild(centerContainer)


export {element as bodyContainer}