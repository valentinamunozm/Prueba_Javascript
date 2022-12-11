import './scss/styles.scss';
import { apiCharacters, apiShowDetailCharacter } from './service/services';

/** Función que renderiza las cards con los personajes*/
async function showCard() {

    let infoCharacter = await apiCharacters();
    let main = document.querySelector('#main');

    infoCharacter.forEach(item => {
        let cardItem = document.createElement('div')
        cardItem.innerHTML = ` 
        <div class="card text-dark bg-light mb-3" style="border-radius: 0.5em; cursor:pointer;" 
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <div class="card-header text-center"><strong>${item.name}</strong></div>
            <div class="card-body">
                <img src="${item.image}" class="img-fluid" alt="Avatar" style="width: 100%; border-radius: 0.5em;">
            </div>
        </div>
        `
        /**Muestra un offcanvas con información de los personajes */
        cardItem.addEventListener("mouseenter", function (event) {
            event.onclick = showDetailCharacter(item.id);
        });
        /** Hover sobre las cards */
        cardItem.addEventListener("mouseover", function( event ) {
            event.target.style.transform = `scale(1.009)`;
            setTimeout(function() {
                event.target.style.transform = "";
            }, 500);
        });

        main.appendChild(cardItem);
    })
}
/** Función que muestra el detalle del personaje */
async function showDetailCharacter(itemId) {

    let infoCharacter = await apiShowDetailCharacter(itemId);
    let totalEpisodes = infoCharacter.episode;
    let totalNameEpisode = [];

    let title = document.querySelector('h5');
    title.innerHTML = infoCharacter.name;
    document.getElementById("avatar").src = infoCharacter.image;

    let species = document.querySelector('#infoGeneral');
    species.innerHTML = `
        <p>${infoCharacter.status} - ${infoCharacter.species}</p>
        <p><strong> Género:</strong> ${infoCharacter.gender}</p>
        `
    /** Renderiza todos los episodios de la info del personaje y muestra el nombre de cada uno */
    totalEpisodes.forEach(async (item) => {    
        let apiEpisodes = await fetch(`${item}`);
        let data = await apiEpisodes.json();
       
        let ol = document.querySelector('ol') 
        /**Guarda en localstorage el id del episodio */
        totalNameEpisode.push( `<li>
            <a href="episode.html" onclick = 'localStorage.setItem("idUrl", ${data.id})'; 
                style="text-decoration: underline; color: blue; cursor:pointer;">${data.name}
            </a></li>`
        )
        ol.innerHTML = totalNameEpisode.join('');
    });
}

showCard();
