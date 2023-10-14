
const element = document.createElement('div')
element.classList.add('homeContainer', 'tab')
element.dataset.activeTab = true
element.dataset.label= "Home"


// Greeting header
let greetingHeader = document.createElement('h1')
greetingHeader.classList.add('greetingHeader')
greetingHeader.innerHTML = 'Welcome'
element.appendChild(greetingHeader)

// Greeting content
let greetingContent = document.createElement('p')
greetingContent.classList.add('greetingContent')
greetingContent.innerHTML = "OH SEY NAMI: Culinary artistry, impeccable cuisine, and unforgettable elegance await—indulge in exceptional dining, relish every moment."
element.appendChild(greetingContent)

document.addEventListener('DOMContentLoaded', () =>{
    const centerContainer = document.querySelector('.centerContainer');
    centerContainer.style.width = 'clamp(300px, 50%, 500px)';
    centerContainer.style.height = 'clamp(300px, 50%, 500px)';
})



export{element as homeTab}