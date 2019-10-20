import stringfyNumber from "./stringfyNumber";

export const dispatchPokemonName = (props, randomNumber, pokemons) => {
  pokemons
    .then(pokemon => {
      props.onPokemonNameFetched(pokemon[randomNumber].name);
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchPokemonUrl = (props, randomNumber, pokemons) => {
  pokemons
    .then(pokemon => {
      props.onPokemonUrlFetched(pokemon[randomNumber].url);
    })
    .catch(error => {
      console.log(error);
    });
};

export const dispatchPokemonNumber = (props, randomNumber) => {
  const pokemonNumber = randomNumber + 1;
  props.onPokemonNumberFetched(pokemonNumber);
};

export const dispatchPokemonImage = (props, randomNumber) => {
  const pokemonNumber = randomNumber + 1;
  const stringPokemonNumber = stringfyNumber(pokemonNumber);
  const pokemonImagePath = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${stringPokemonNumber}.png`;
  props.onPokemonImageFetched(pokemonImagePath);
};
