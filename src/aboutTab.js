export const aboutHandler = document.createElement('div');
aboutHandler.classList.add('aboutHandler', 'tab');
aboutHandler.dataset.activeTab = false;
aboutHandler.dataset.label = 'About';

// About Title
let aboutTitle = document.createElement('span');
aboutTitle.classList.add('aboutTitle');
aboutTitle.innerHTML = 'About <span class="restaurantNameAbout">Oh Sey Nami</span>';
aboutHandler.appendChild(aboutTitle);

// About Description
let aboutDescription = document.createElement('div');
aboutDescription.classList.add('aboutDescription');

// Restaurant Name
let restaurantName = 'Oh Sey Nami';

let descriptionText = `<p>
Welcome to <span class="restaurantNameAbout">Oh Sey Nami</span>, a high-end Asian restaurant nestled on the enigmatic planet of Zorblax. In the Era of the Lunar Moons, our culinary journey began in the heart of the cosmos. Our mission is to cater to interstellar travelers and cosmopolitan gourmands who seek an extraordinary dining experience beyond the stars.
<br><br>
History meets innovation as we embrace the cosmic wonders of Zorblax, offering a fusion of authentic Asian flavors and celestial ingredients. From our floating sushi bar to our asteroid-grown herbs, each dish is a testament to our unwavering commitment to gastronomic excellence.
<br><br>
Join us for an unforgettable voyage through flavors as we explore the boundless universe of tastes. At <span class="restaurantNameAbout">Oh Sey Nami</span>, the sky is not the limit – it's just the beginning.
</p>`

aboutDescription.innerHTML = descriptionText;

aboutHandler.appendChild(aboutDescription);
