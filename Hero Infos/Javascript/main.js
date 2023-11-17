const SUPERHERO_TOKEN = '1028354878286982';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroBtn = document.getElementById('newHeroBtn');

const heroImageDiv = document.getElementById('heroImg');

const searchButton = document.getElementById('searchButton');

const searchInput = document.getElementById('searchInput');



const getSuperHero = (id, name) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const name = json.name
        searchInput.value = name

        const intelligence = `<p class=color>intelligence: ${json.powerstats.intelligence}</p>`

        const strength = `<p class=color>Strength: ${json.powerstats.strength}</p>`

        heroImageDiv.innerHTML = `<img src="${json.image.url}" height = 200 width = 200/>${intelligence}${strength}`
        
        console.log(json.powerstats)
    })
};

const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0];
        // console.log(hero);
        heroImageDiv.innerHTML = `<img src="${hero.image.url}" height = 200 width = 200/>`
    })
}

function randomHero(){
    return Math.floor(Math.random() * 732)
}

newHeroBtn.onclick = () => {
    getSuperHero(randomHero())
} ;

searchButton.onclick = () => getSearchSuperHero(searchInput.value)
