const pokemonContainer = document.getElementById("pokemon_container");
const pokemon_nums = 150;


const getPokemon = async (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

const fecthPokemon = async () =>{
    for(let i = 1; i < pokemon_nums; i++){
        await getPokemon(i);
    }
}

function createPokemonCard(pokemon){
    const pokemonElement = document.createElement("div");
    pokemonElement.classList.add("pokemonStyle");
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    let types = '';
    for(let i = 0; i < pokemon.types.length; i++){
       types = types + pokemon.types[i].type.name + ' , '; 
    }
    types = types.slice(0, types.length - 2);
    const pokemonInnerHTMl  =    
    `
        <div class = "img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
        </div>
        <h4 id="index">#${pokemon.id.toString().padStart(3, '0')}</h4>
        <h3>${name}</h3>
        <h4>Type : ${types}</h4>
        <div class = "effect"></div>
    `
    pokemonElement.innerHTML = pokemonInnerHTMl;
    pokemonContainer.appendChild(pokemonElement);
}

fecthPokemon();