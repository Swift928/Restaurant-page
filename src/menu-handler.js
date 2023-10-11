import { imageCarousel as entreeCarousel } from './entrees';
import { drinksElement } from './drinks';


export const menuHandler = document.createElement('div')
menuHandler.classList.add('menuHandler')



let menuName = document.createElement('span') 
menuName.classList.add('menuName')
menuName.innerHTML = 'Menu'
menuHandler.appendChild(menuName)


let menuButtonContainer = document.createElement('div')
menuButtonContainer.classList.add('menuButtonContainer')
menuHandler.appendChild(menuButtonContainer)

let entreeButton = document.createElement('button')
entreeButton.classList.add('entreeButton')
entreeButton.setAttribute('data-menu-button', '')
entreeButton.innerHTML = "Entrees"
menuButtonContainer.appendChild(entreeButton)

let drinksButton = document.createElement('button')
drinksButton.classList.add('drinksButton')
drinksButton.setAttribute('data-menu-button', '')
drinksButton.innerHTML = "Drinks"
menuButtonContainer.appendChild(drinksButton)


menuHandler.appendChild(entreeCarousel);
menuHandler.appendChild(drinksElement)


entreeButton.addEventListener('click', () => {
    entreeCarousel.dataset.active = true
    drinksElement.dataset.active = false
});

drinksButton.addEventListener('click', () => {
    drinksElement.dataset.active = true
    entreeCarousel.dataset.active = false
});






