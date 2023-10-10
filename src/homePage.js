
const element = document.createElement('div')
element.classList.add('homeContainer')

// Adding the greeting content
let greetingHeader = document.createElement('h1')
greetingHeader.classList.add('greetingHeader')
greetingHeader.innerHTML = 'Welcome'
element.appendChild(greetingHeader)


let greetingContent = document.createElement('p')
greetingContent.classList.add('greetingContent')
greetingContent.innerHTML = "OH SEY NAMI: Culinary artistry, impeccable cuisine, and unforgettable elegance await—indulge in exceptional dining, relish every moment."
element.appendChild(greetingContent)

export{element as homeContainer}