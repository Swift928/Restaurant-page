export const contactHandler = document.createElement('div');
contactHandler.classList.add('contactHandler', 'tab');
contactHandler.dataset.activeTab = false;
contactHandler.dataset.label = 'Contact';

// Contact Title
let contactTitle = document.createElement('span');
contactTitle.classList.add('contactTitle');
contactTitle.innerHTML = 'Contact Us';
contactHandler.appendChild(contactTitle);

// Restaurant Information
let restaurantInfo = document.createElement('div');
restaurantInfo.classList.add('contactInfo');
restaurantInfo.innerHTML = '<strong>Sakura Palace</strong><p>123 Moonlight Avenue<br>Celestial District<br>Galaxy XYZ-8888<br>Contact: info@sakurapalace.com<p>';
contactHandler.appendChild(restaurantInfo);

// Executive Chef
let executiveChef = document.createElement('div');
executiveChef.classList.add('contactInfo');
executiveChef.innerHTML = '<strong>Executive Chef:</strong><p>Hiroshi Tanaka<br>Email: chef.hiroshi@sakurapalace.com<p>';
contactHandler.appendChild(executiveChef);

// Restaurant Manager
let restaurantManager = document.createElement('div');
restaurantManager.classList.add('contactInfo');
restaurantManager.innerHTML = '<strong>Restaurant Manager:</strong><p>Ayumi Nakamura<br>Email: manager.ayumi@sakurapalace.com<p>';
contactHandler.appendChild(restaurantManager);

// Reservations Manager
let reservationsManager = document.createElement('div');
reservationsManager.classList.add('contactInfo');
reservationsManager.innerHTML = '<strong>Reservations Manager:</strong><p>Takeshi Suzuki<br>Email: reservations.takeshi@sakurapalace.com<p>';
contactHandler.appendChild(reservationsManager);

// Marketing Contact
let marketingContact = document.createElement('div');
marketingContact.classList.add('contactInfo');
marketingContact.innerHTML = '<strong>Marketing Contact:</strong><p>Yumi Kim<br>Email: marketing.yumi@sakurapalace.com<p>';
contactHandler.appendChild(marketingContact);
