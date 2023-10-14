import firstDish from './images/BEJ_1958_original.jpg'
import secondDish from './images/mott32-1920x1080-2.jpg'
import thirdDish from './images/iberico-pork-1_1920x1080.jpg'
import fourthDish from './images/best-peking-duck-hong-kong-mott-32.jpeg'
import { carouselSetup } from './flickity'




export let imageCarousel = document.createElement('div')
imageCarousel.classList.add('imageCarousel', 'entreesCarousel')

let carouselWrapper = document.createElement('div')
carouselWrapper.classList.add('carouselWrapper')


let braisedPorkItem = document.createElement('div')
braisedPorkItem.classList.add('carouselItem')
let braisedPork = new Image()
braisedPork.classList.add('dishImage')
braisedPork.src = firstDish
braisedPorkItem.appendChild(braisedPork)
let itemDescription1 = document.createElement('p')
itemDescription1.classList.add('itemDescription')
itemDescription1.innerHTML = 'Braised Pork Belly'
braisedPorkItem.appendChild(itemDescription1)
carouselWrapper.appendChild(braisedPorkItem)

let wholeCrabItem = document.createElement('dvi')
wholeCrabItem.classList.add('carouselItem')
let wholeCrab = new Image()
wholeCrab.classList.add('dishImage')
wholeCrab.src = secondDish
wholeCrabItem.appendChild(wholeCrab)
let itemDescription2 = document.createElement('p')
itemDescription2.classList.add('itemDescription')
itemDescription2.innerHTML = 'Wok-Fried Whole Crab'
wholeCrabItem.appendChild(itemDescription2)
carouselWrapper.appendChild(wholeCrabItem)

let ibericoPorkItem = document.createElement('div')
ibericoPorkItem.classList.add('carouselItem')
let ibericoPork = new Image()
ibericoPork.classList.add('dishImage')
ibericoPork.src = thirdDish
ibericoPorkItem.appendChild(ibericoPork)
let itemDescription3 = document.createElement('p')
itemDescription3.classList.add('itemDescription')
itemDescription3.innerHTML = 'Iberico Pork'
ibericoPorkItem.appendChild(itemDescription3)
carouselWrapper.appendChild(ibericoPorkItem)

let pekingDuckItem = document.createElement('div')
pekingDuckItem.classList.add('carouselItem')
let pekingDuck = new Image()
pekingDuck.classList.add('dishImage')
pekingDuck.src = fourthDish
pekingDuckItem.appendChild(pekingDuck)
let itemDescription4 = document.createElement('p')
itemDescription4.classList.add('itemDescription')
itemDescription4.innerHTML = 'Peking Duck'
pekingDuckItem.appendChild(itemDescription4)
carouselWrapper.appendChild(pekingDuckItem)

imageCarousel.appendChild(carouselWrapper)


// Create the buttons
let leftButton = document.createElement('button')
leftButton.classList.add('leftButton')
leftButton.dataset.carouselButton = 'left'
leftButton.innerHTML = '&lt;'
imageCarousel.appendChild(leftButton)

let rightButton = document.createElement('button')
rightButton.classList.add('rightButton')
rightButton.dataset.carouselButton = 'right'
rightButton.innerHTML = '&gt;'
imageCarousel.appendChild(rightButton)



export let flkty;

export function reinitializeFlktyCarousel() {
  // Destroy the existing carousel if it exists
  if (flkty) {
      flkty.destroy();
  }

  // Reinitialize the carousel
  const newFlktyCarousel = carouselSetup(carouselWrapper);

  // Assign the new carousel to the variable
  flkty = newFlktyCarousel;
}


leftButton.addEventListener('click', () => {
  flkty.previous(); // Move to the previous slide
});

// Event listener for the next button
rightButton.addEventListener('click', () => {
  flkty.next(); // Move to the next slide
});
