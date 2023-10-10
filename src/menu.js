import firstDish from './images/BEJ_1958_original.jpg'
import secondDish from './images/mott32-1920x1080-2.jpg'
import thirdDish from './images/iberico-pork-1_1920x1080.jpg'
import fourthDish from './images/best-peking-duck-hong-kong-mott-32.jpeg'
import Flickity from 'flickity';
import 'flickity/css/flickity.css';



export let imageCarousel = document.createElement('div')
imageCarousel.classList.add('imageCarousel')

let carouselWrapper = document.createElement('div')
carouselWrapper.classList.add('carouselWrapper')


// let braisedPorkItem = document.createElement('li')
// braisedPorkItem.classList.add('carouselItem')
// braisedPorkItem.dataset.active = true
let braisedPork = new Image()
braisedPork.classList.add('dishImage')
braisedPork.src = firstDish
// braisedPorkItem.appendChild(braisedPork)
carouselWrapper.appendChild(braisedPork)

// let wholeCrabItem = document.createElement('li')
// wholeCrabItem.classList.add('carouselItem')
let wholeCrab = new Image()
wholeCrab.classList.add('dishImage')
wholeCrab.src = secondDish
// wholeCrabItem.appendChild(wholeCrab)
carouselWrapper.appendChild(wholeCrab)

// let ibericoPorkItem = document.createElement('li')
// ibericoPorkItem.classList.add('carouselItem')
let ibericoPork = new Image()
ibericoPork.classList.add('dishImage')
ibericoPork.src = thirdDish
// ibericoPorkItem.appendChild(ibericoPork)
carouselWrapper.appendChild(ibericoPork)

// let pekingDuckItem = document.createElement('li')
// pekingDuckItem.classList.add('carouselItem')
let pekingDuck = new Image()
pekingDuck.classList.add('dishImage')
pekingDuck.src = fourthDish
// pekingDuckItem.appendChild(pekingDuck)
carouselWrapper.appendChild(pekingDuck )

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




const flkty = new Flickity(carouselWrapper, {
    cellAlign: 'center',
    contain: false,
    wrapAround: true,
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    LazyLoad: true,
    initialIndex: 2,
  });
  


  leftButton.addEventListener('click', () => {
    flkty.previous(); // Move to the previous slide
  });
  
  // Event listener for the next button
  rightButton.addEventListener('click', () => {
    flkty.next(); // Move to the next slide
  });

  
  

// const buttons = imageCarousel.querySelectorAll("[data-carousel-button]")

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {

//         console.log('esf')
//         const offset = button.dataset.carouselButton === 'right' ? 1 : -1;
//         const slides = button.closest('.imageCarousel').querySelector('.carouselWrapper')

//         const activeSlide = slides.querySelector('[data-active]')
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset;

//         if (newIndex < 0) newIndex = slides.children.length - 1;
//         if (newIndex >= slides.children.length) newIndex = 0;

//         const translateX = -newIndex * 100 + '%';
//         slides.style.transform = `translateX(${translateX})`;


//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
    
//     })
// })

