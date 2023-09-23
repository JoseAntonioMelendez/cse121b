/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Antonio Meléndez';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/imgantonio.jpeg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute ('src', profilePicture);


/* Step 5 - Array */
let foodArray = ['Pizza','Salad','BBQ Ribs','Tacos','Sushi','Burgers'];
foodElement.textContent = foodArray;
foodArray.push('Steak');
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;

imageElement.setAttribute ('alt', 'Profile image of '`${fullName}`);








