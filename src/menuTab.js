import { imageCarousel as entreeCarousel } from './entrees';
import { drinkCarousel } from './drinks';
import { drinks, reinitializeDrinkCarousel } from './drinks';
import { flkty, reinitializeFlktyCarousel } from './entrees';


export const menuHandler = document.createElement('div')
menuHandler.classList.add('menuHandler', 'tab')
menuHandler.dataset.activeTab = false
menuHandler.dataset.label='Menu'


// Defines the "Menu" header
let menuName = document.createElement('span') 
menuName.classList.add('menuName')
menuName.innerHTML = 'Menu'
menuHandler.appendChild(menuName)

// Container for the buttons
let menuButtonContainer = document.createElement('div')
menuButtonContainer.classList.add('menuButtonContainer')
menuHandler.appendChild(menuButtonContainer)

// Entree button creation
let entreeButton = document.createElement('button')
entreeButton.classList.add('entreeButton')
entreeButton.setAttribute('data-menu-button', '')
entreeButton.innerHTML = "Entrees"
menuButtonContainer.appendChild(entreeButton)

// Drinks button creation
let drinksButton = document.createElement('button')
drinksButton.classList.add('drinksButton')
drinksButton.setAttribute('data-menu-button', '')
drinksButton.innerHTML = "Drinks"
menuButtonContainer.appendChild(drinksButton)


menuHandler.appendChild(entreeCarousel);
menuHandler.appendChild(drinkCarousel);


// Handles entree button click
entreeButton.addEventListener('click', () =>{
    if (entreeCarousel.dataset.activeCarousel){
        return
    } 
    entreeCarousel.dataset.activeCarousel = true
    delete drinkCarousel.dataset.activeCarousel
    drinks.destroy()
    reinitializeFlktyCarousel()
})

// Handles drinks button click
drinksButton.addEventListener('click', () => {
    if (drinkCarousel.dataset.activeCarousel){
        return
    } 
    drinkCarousel.dataset.activeCarousel = true
    delete entreeCarousel.dataset.activeCarousel
    flkty.destroy()
    reinitializeDrinkCarousel()
});

// Initial tab setup
export function initialSetup(){
    entreeCarousel.dataset.activeCarousel = true    
    reinitializeFlktyCarousel()
    if( drinkCarousel.dataset.activeCarousel === 'true'){
        delete drinkCarousel.dataset.activeCarousel
    }
}
