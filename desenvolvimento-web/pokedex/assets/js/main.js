const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

console.log(url);

// .then(function (response) {
//     return response.json();
//   });

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">Grass</li>
                <li class="type">Poison</li>
            </ol>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}"
            />
        </div>
    </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

fetch(url)
  .then((response) => response.json()) // response.json() retorna a promisse em JSON
  .then((jsonBody) => jsonBody.results) // jsonBody é o corpo da resposta em JSON
  .then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon);
    }
  }) // jsonBody é o corpo da resposta em JSON
  .catch((error) => console.error(error)); // tratamento de erro
