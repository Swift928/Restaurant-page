import icon from './images/campfire-black-outline-60246.jpg'
import { initialSetup } from './menuTab';

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
                item.setAttribute('data-active-tab', 'true')
                if (tabName === 'Menu'){
                    menuTab = true
                }
            }
        } else {
            item.setAttribute('data-active-tab','false');
        }
    })
    if (menuTab) {
        initialSetup();
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

    anchor.innerHTML = item.label
    anchor.href = item.href

    anchor.addEventListener('click', handleClick);
    listItem.appendChild(anchor)
    headerList.appendChild(listItem)
})