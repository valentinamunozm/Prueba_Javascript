const urlCharacter="https://rickandmortyapi.com/api/character";
const urlEpisode="https://rickandmortyapi.com/api/episode";

export async function apiCharacters() {
    
    let api = await fetch(urlCharacter);
    let character = await api.json(); 
    let informationCharacter = character.results;

    return informationCharacter; 
}

export async function apiShowDetailCharacter(itemId) {

    let id = itemId;
    let api = await fetch(`${urlCharacter}/${id}`);
    let character = await api.json();
   
    console.log('Episodios del personaje', character.episode); 
    console.log('Personaje', character); 
    
    return character;
}

export async function apiShowDetailEpisode() {

    let idUrl = localStorage.getItem('idUrl');
    let api = await fetch(`${urlEpisode}/${idUrl}`);
    let informationEpisode = await api.json();
   
    console.log('Información del episodio', informationEpisode); 
    
    return informationEpisode;
}