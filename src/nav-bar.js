import icon from './images/campfire-black-outline-60246.jpg'
import { initialSetup, destroyCarousel } from './menuTab';

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


let loadContent = true;
// Handles tab switching
function handleClick(e){
    e.preventDefault()
    let tabs = document.querySelectorAll('.tab')
    const centerContainer = document.querySelector('.centerContainer');
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
                    centerContainer.style.width = ''
                    centerContainer.style.height = ''
                }

                if (tabName != "Menu"){
                    destroyCarousel()
                }

                if (tabName === "Home"){
                    item.setAttribute('data-active-tab', 'true')
                    loadContent = true
                    centerContainer.style.width = 'clamp(300px, 50%, 500px)';
                    centerContainer.style.height = 'clamp(300px, 50%, 500px)';

                } else if (tabName === "About" || tabName === "Contact"){
                    console.log(loadContent)
                    item.setAttribute('data-active-tab', 'true')
                    loadContent = false
                    console.log(loadContent)
                    centerContainer.style.width = ''
                    centerContainer.style.height = ''
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


let headerItems = [
    {label: 'Home', href: "#"},
    {label: 'Menu', href: "#"},
    {label: 'Contact', href: "#"},
    {label: 'About', href: "#"}
]


// Creates the nav-bar tabs 
headerItems.forEach((item) =>{
    let listItem = document.createElement('li')
    let anchor = document.createElement('a')

    anchor.dataset.activeNavButton = 'false';

    anchor.innerHTML = item.label
    anchor.href = item.href

    anchor.addEventListener('click', handleClick);
    listItem.appendChild(anchor)
    headerList.appendChild(listItem)
})