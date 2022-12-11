const urlEpisode="https://rickandmortyapi.com/api/episode";

/**Función que permite traer la información del episodio seleccionado */
async function apiShowDetailEpisode() {

    let idUrl = localStorage.getItem('idUrl');
    let api = await fetch(`${urlEpisode}/${idUrl}`);
    let informationEpisode = await api.json();
   
    console.log('Información del episodio', informationEpisode); 
    
    return informationEpisode;
}
/** Función que muestra una card con la información del episodio */
async function showEpisode() {

    let infoEpisode = await apiShowDetailEpisode();
    let main = document.querySelector('#main2');

    let cardItem = document.createElement('div')
    cardItem.innerHTML = ` 
    <div class="card text-white bg-secondary mb-3" style="border-radius: 0.5em; ">
        <div class="card-header text-center"><strong>${infoEpisode.name}</strong></div>
        <div id="card-body" class="card-body">
            <p><strong>Episodio:</strong> ${infoEpisode.episode} </p>
            <p><strong>Fecha de estreno:</strong> ${infoEpisode.air_date}</p>
        </div>
    </div>
    `
    main.appendChild(cardItem);
}
/** Función que renderiza los personajes del episodio y muestra el nombre de cada episodio */
async function showCharacters() {

    let infoEpisode = await apiShowDetailEpisode();
    let totalCharacters = infoEpisode.characters;
    let totalNameCharacters = [];
    let main = document.querySelector('#card-body');
    let spanItem = document.createElement('span')
    spanItem.innerHTML = `
        <span><strong>Personajes:</strong> 
            <ol style="height: 150px; max-height: 50%; overflow: auto; margin-top:3%; background: #808B96;"> </ol>
        </span>
    `
    main.appendChild(spanItem);

    totalCharacters.forEach(async (item) => {    
        let apiCharacters = await fetch(`${item}`);
        let data = await apiCharacters.json();
       
        let ol = document.querySelector('ol') 
        totalNameCharacters.push( `<li>${data.name}</li>`
        )
        ol.innerHTML = totalNameCharacters.join('');
    });
}

showEpisode();
showCharacters();