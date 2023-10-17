import icon from './images/campfire-black-outline-60246.jpg'
import { initialSetup, destroyCarousel } from './menuTab';
import { menuSvg } from './menuSvg';

export const header = document.createElement('nav')

header.classList.add('header')

// The Logo 
const myIcon = new Image();
myIcon.src = icon
myIcon.id = 'navLogo'
header.appendChild(myIcon)


// Div Container
let infoButtonsDiv = document.createElement('div')
infoButtonsDiv.classList.add('infoButtons')
header.appendChild(infoButtonsDiv)


// Restaurant Name
let restaurantName = document.createElement('h1')
restaurantName.classList.add('restaurantName')
restaurantName.innerHTML = 'Oh Sey Nami'
infoButtonsDiv.appendChild(restaurantName)


// Links list
let headerList = document.createElement('ul')
headerList.classList.add('nav-menu')
infoButtonsDiv.appendChild(headerList)

// Overlay
let overLay = document.createElement('div')
overLay.classList.add('overlay')
overLay.addEventListener('click', lessScreen)
headerList.appendChild(overLay)


// Menu svg
let menuSvgContainer = menuSvg
menuSvgContainer.classList.add('menuSvg')
infoButtonsDiv.appendChild(menuSvgContainer)
menuSvgContainer.addEventListener('click', ()=>{
    headerList.classList.toggle('active')
})


// Need to make the Li item
// const navItems = document.querySelectorAll('.nav-menu li');
// navItems.forEach(item =>{
//     item.addEventListener('click', handleItemClick)
// })

// function handleItemClick(event) {
//     event.preventDefault()
    
//     if (window.innerWidth <= 768) {
        
//         const link = event.currentTarget.querySelector('a');

//         if (link) {
//         link.handleClick(event);
//         }
//     }
// }


function lessScreen(e){
    e.preventDefault()
        if (window.innerWidth <= 768) {
            headerList.classList.remove('active');
        }
}

function initialContainerDimension(){
    const centerContainer = document.querySelector('.centerContainer');
    centerContainer.style.width = ''
    centerContainer.style.height = ''
}

export function homeTabContainerDimension(){
    const centerContainer = document.querySelector('.centerContainer');
    centerContainer.style.width = 'clamp(300px, 50%, 500px)';
    centerContainer.style.height = 'max-content';
}

let loadContent = true;
// Handles tab switching
function handleClick(e){
    e.preventDefault()
    let tabs = document.querySelectorAll('.tab')
    let menuTab = null;
    
    tabs.forEach((item) =>{
        let tabName = item.getAttribute('data-label')
        if (this.innerHTML === tabName){
            if (item.dataset.activeTab === 'true') {
                return;
            } else {    

                if (tabName === "Menu") {
                    menuTab = true
                    item.setAttribute('data-active-tab', 'true')
                    initialContainerDimension()
                }

                if (tabName != "Menu"){
                    destroyCarousel()
                }

                if (tabName === "Home"){
                    item.setAttribute('data-active-tab', 'true')
                    loadContent = true
                    homeTabContainerDimension()

                } else if (tabName === "About" || tabName === "Contact" || tabName === "Credits"){
                    item.setAttribute('data-active-tab', 'true')
                    loadContent = false
                    initialContainerDimension()
                }
            }
        } else {
            item.setAttribute('data-active-tab','false');
        }
    })
    if (menuTab) {
        if (loadContent){
            setTimeout(() =>{
                initialSetup()
            }, 501)
        } else {initialSetup()} 
    }
}


function createHeaderItems(){
    let headerItems = [
        {label: 'Home', href: "#"},
        {label: 'Menu', href: "#"},
        {label: 'Contact', href: "#"},
        {label: 'About', href: "#"},
        {label: 'Credits', href: "#"}
    ];
    return headerItems
}

const headerItems = createHeaderItems()

// Creates the nav-bar tabs 
headerItems.forEach((item) =>{
    let listItem = document.createElement('li')
    let anchor = document.createElement('a')

    anchor.dataset.activeNavButton = 'false';

    anchor.innerHTML = item.label
    anchor.href = item.href

    anchor.addEventListener('click', handleClick);
    anchor.addEventListener('click', lessScreen)
    listItem.appendChild(anchor)
    headerList.appendChild(listItem)
})