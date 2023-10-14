export const creditsHandler = document.createElement('div');
creditsHandler.classList.add('creditsHandler', 'tab');
creditsHandler.dataset.activeTab = false;
creditsHandler.dataset.label = 'Credits';

// Credits Title
let creditsTitle = document.createElement('span');
creditsTitle.classList.add('contactTitle');
creditsTitle.innerHTML = 'Credits';
creditsHandler.appendChild(creditsTitle);

// Assuming you have an array of image credits (10 items)
const imageCredits = [
    { name: 'Background Image, Iberico Pork, Peking Duck', source: 'https://www.venetianlasvegas.com/restaurants/mott-32.html' },
    { name: 'Wok-Fried Whole Crab', source: 'https://www.marinabaysands.com/restaurants/mott32.html' },
    { name: 'Braised Pork Belly', source: 'https://www.fourseasons.com/beijing/dining/restaurants/cai_yi_xuan/' },
    { name: 'Mojito', source: 'https://www.maltwhisky.de/mojito/' },
    { name: 'Kyoto Sour', source: 'https://www.liquor.com/recipes/kyoto-sour/' },
    { name: 'Bamboo Cocktail', source: 'https://imbibemagazine.com/recipe/bamboo-cocktail/' },
    { name: 'Negroni', source: 'https://www.negroni.co/pages/negroni'}
];

// Create a container to hold the image credits
const creditsContainer = document.createElement('div');
creditsContainer.classList.add('creditsContainer');

// Iterate through the imageCredits array and create elements for each credit
imageCredits.forEach((credit, index) => {
    const creditElement = document.createElement('div');
    creditElement.classList.add('credit');

    // Create an element for the creator's name
    const creatorName = document.createElement('p');
    creatorName.classList.add('creatorName');
    creatorName.textContent = `${credit.name}`;

    // Create an element for the source website
    const sourceWebsite = document.createElement('p');
    sourceWebsite.classList.add('sourceWebsite');
    sourceWebsite.innerHTML = `Source: <a href="${credit.source}" target="_blank">${credit.source}</a>`;

    // Append the creator's name and source website to the credit element
    creditElement.appendChild(creatorName);
    creditElement.appendChild(sourceWebsite);

    // Append the credit element to the credits container
    creditsContainer.appendChild(creditElement);
});

// Append the credits container to your "Credits" tab
creditsHandler.appendChild(creditsContainer);

// Finally, add the creditsHandler to your DOM as needed
