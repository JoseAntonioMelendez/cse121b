/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Antonio Meléndez',
    photo: 'images/imgantonio.jpeg',
    favoriteFoods: [
        'Hamburgers',
        'Pizza',
        'Sushi',
        'BBQ Wings',
        'Tacos',
        'Salad',
        'Cheese Cake'
    ],
    hobbies: [
        'Playing Boardgames',
        'Playing Basketball',
        'Playing Videogames',
        'Reading',
        'Watching Movies',
        'Studying Languages',
    ],
    placesLived: [],

};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: ['Torreón, Mexico', 'Provo, Utah',],
        length: ['10 years', '2 years',],
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place['place'][0];
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length['length'][0];
    document.querySelector('#places-lived').appendChild(dd);
});
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place['place'][1];
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length['length'][1];
    document.querySelector('#places-lived').appendChild(dd);
});

