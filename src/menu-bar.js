import icon from './images/campfire-black-outline-60246.jpg'

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


// Buttons list
let headerList = document.createElement('ul')
headerList.classList.add('nav-menu')
infoButtonsDiv.appendChild(headerList)


let headerItems = [
    {label: 'Home', url: '/src/home-page.js'},
    {label: 'Menu', url: '/src/menu-page.js'},
    {label: 'Contact', url: '/src/contact-page.js'},
    {label: 'About', url: '/src/about-page.js'}
]

headerItems.forEach((item) =>{
    let listItem = document.createElement('li')
    let anchor = document.createElement('a')

    anchor.innerHTML = item.label
    anchor.href = item.url

    listItem.appendChild(anchor)

    headerList.appendChild(listItem)
})