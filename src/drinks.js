import firstDrink from './images/shutterstock_1127029988.jpg'
import secondDrink from './images/mojito-cocktail-1160px.jpg'
import thirdDrink from './images/kyoto-sour-720x720-primary-f6f83307691c4e5691c1bf68a65d7d1e.jpg'
import fourthDrink from './images/signaturecocktails-Bamboo-crdt-Andy-Sewell.jpg'
import { carouselSetup } from './flickity'


export const drinkCarousel = document.createElement('div')
drinkCarousel.classList.add('imageCarousel')


let carouselWrapper = document.createElement('div')
carouselWrapper.classList.add('carouselWrapper')


let negroniItem = document.createElement('div')
negroniItem.classList.add('carouselItem')
let negroni = new Image()
negroni.classList.add('dishImage')
negroni.src = firstDrink
negroniItem.appendChild(negroni)
let itemDescription1 = document.createElement('p')
itemDescription1.classList.add('itemDescription')
itemDescription1.innerHTML = 'Negroni'
negroniItem.appendChild(itemDescription1)
carouselWrapper.appendChild(negroniItem)


let mojitoItem = document.createElement('div')
mojitoItem.classList.add('carouselItem')
let mojito = new Image()
mojito.classList.add('dishImage')
mojito.src = secondDrink
mojitoItem.appendChild(mojito)
let itemDescription2 = document.createElement('p')
itemDescription2.classList.add('itemDescription')
itemDescription2.innerHTML = 'Mojito'
mojitoItem.appendChild(itemDescription2)
carouselWrapper.appendChild(mojitoItem)


let kyotoItem = document.createElement('div')
kyotoItem.classList.add('carouselItem')
let kyoto = new Image()
kyoto.classList.add('dishImage')
kyoto.src = thirdDrink
kyotoItem.appendChild(kyoto)
let itemDescription3 = document.createElement('p')
itemDescription3.classList.add('itemDescription')
itemDescription3.innerHTML = 'Kyoto Sour'
kyotoItem.appendChild(itemDescription3)
carouselWrapper.appendChild(kyotoItem)


let bambooItem = document.createElement('div')
bambooItem.classList.add('carouselItem')
let bamboo = new Image()
bamboo.classList.add('dishImage')
bamboo.src = fourthDrink
bambooItem.appendChild(bamboo)
let itemDescription4 = document.createElement('p')
itemDescription4.classList.add('itemDescription')
itemDescription4.innerHTML = 'Bamboo Cocktail'
bambooItem.appendChild(itemDescription4)
carouselWrapper.appendChild(bambooItem)

drinkCarousel.appendChild(carouselWrapper)


// Create the buttons
let leftButton = document.createElement('button')
leftButton.classList.add('leftButton')
leftButton.dataset.carouselButton = 'left'
leftButton.innerHTML = '&lt;'
drinkCarousel.appendChild(leftButton)

let rightButton = document.createElement('button')
rightButton.classList.add('rightButton')
rightButton.dataset.carouselButton = 'right'
rightButton.innerHTML = '&gt;'
drinkCarousel.appendChild(rightButton)


export let drinks;


export function reinitializeDrinkCarousel() {
    // Destroy the existing carousel if it exists
    if (drinks) {
        drinks.destroy();
    }

    // Reinitialize the carousel
    const newDrinkCarousel = carouselSetup(carouselWrapper);

    // Assign the new carousel to the variable
    drinks = newDrinkCarousel;
}

leftButton.addEventListener('click', () => {
    drinks.previous(); // Move to the previous slide
});

// Event listener for the next button
rightButton.addEventListener('click', () => {
    drinks.next(); // Move to the next slide
});

// Font family to try
// Lusitana, Georgia, serif