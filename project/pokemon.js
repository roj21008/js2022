//FETCH  API
const pokemonContainer = document.querySelector('.pokemon-container');

let showBtn = document.getElementById('show');//BUTTON--SHOW
let cleanBtn = document.getElementById('clean');//BUTTON--ERASE

function fetchPokemon() {
    let choose = parseInt(document.querySelector('#choose').value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${choose}/`)
      .then((res) => res.json())
      .then((data) => {createPokemon(data);
        spinner.style.display = "none";
      });
  } 

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    const spritecontainer = document.createElement('div');
    spritecontainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default
    spritecontainer.appendChild(sprite);
    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    let listBtn = document.createElement('button');
    name.classList.add('name');
    name.textContent = pokemon.name;
    card.appendChild(spritecontainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(listBtn);
    listBtn.textContent = '❌';
    
    listBtn.onclick = function(e) {
      pokemonContainer.removeChild(card);
    }


   
pokemonContainer.appendChild(card);

 
}

showBtn.addEventListener('click',fetchPokemon);

//fetchPokemon(101);


listBtn.onclick = function(e) {
removeChild(pokemonContainer);
}