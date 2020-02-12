export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_COVERED = "POKEMON_COVERED";
export const POKEMON_GUESSED = "POKEMON_GUESSED";

const initialState = {
  status: POKEMON_LOADING,
  timesWithoutSkip: 0
};

export const whoIsThisPokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        ...state,
        status: POKEMON_LOADING
      };
    case POKEMON_COVERED:
      return {
        ...state,
        status: POKEMON_COVERED
      };
    case POKEMON_GUESSED:
      return {
        ...state,
        status: POKEMON_GUESSED
      };
    default:
      return state;
  }
};

// export const pokemonIdFetchedActionCreator = id => ({
//   type: POKEMON_ID_FETCHED,
//   payload: id
// });

// export const pokemonNameFetchedActionCreator = name => ({
//   type: POKEMON_NAME_FETCHED,
//   payload: name
// });

export const pokemonLoadingActionCreator = () => ({
  type: POKEMON_LOADING
});

export const pokemonCoveredActionCreator = () => ({
  type: POKEMON_COVERED
});

export const pokemonGuessedActionCreator = () => ({
  type: POKEMON_GUESSED
});
