const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIresponse.status === 200)  {
    const data = await APIresponse.json();
    return data;
   }

  }


const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
   pokemonImage.style.display = 'block';
   pokemonName.innerHTML = data.name;
   pokemonNumber.innerHTML = data.id;
   pokemonImage.src = data['sprites']['versions']['generation-v']
   ['black-white']['animated']['front_shiny'];
   input.value = '';
   searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found :(';
    pokemonNumber.innerHTML = '';
  }

}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value.toLowerCase());
  
});


buttonPrev.addEventListener('click', () => {
searchPokemon = searchPokemon -1;

if (searchPokemon === 0) {
  searchPokemon = 1;
  
};
renderPokemon(searchPokemon);

});

buttonNext.addEventListener('click', () => {
  searchPokemon = searchPokemon +1; //ou searchPokemon +=1; da na mesma
  renderPokemon(searchPokemon);
  });

renderPokemon(searchPokemon);