const urlCharacter="https://rickandmortyapi.com/api/character";
const urlEpisode="https://rickandmortyapi.com/api/episode";

/** Función que retorna la información de todos los personajes */
export async function apiCharacters() {
    
    let api = await fetch(urlCharacter);
    let characters = await api.json(); 
    let informationCharacter = characters.results;
   
    return informationCharacter; 
}
/** Función que retorna la información de un personaje */
export async function apiShowDetailCharacter(itemId) {

    let id = itemId;
    let api = await fetch(`${urlCharacter}/${id}`);
    let character = await api.json();
   
    console.log('Episodios del personaje', character.episode); 
    console.log('Personaje', character); 
    
    return character;
}
/** Función que retorna la información del episodio */
export async function apiShowDetailEpisode() {

    let idUrl = localStorage.getItem('idUrl');
    let api = await fetch(`${urlEpisode}/${idUrl}`);
    let informationEpisode = await api.json();
   
    console.log('Información del episodio', informationEpisode); 
    
    return informationEpisode;
}