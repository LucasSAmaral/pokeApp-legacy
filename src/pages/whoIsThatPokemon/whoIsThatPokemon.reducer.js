export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_COVERED = "POKEMON_COVERED";
export const POKEMON_GUESSED = "POKEMON_GUESSED";

const initialState = {
  status: POKEMON_LOADING,
  timesWithoutSkip: 0
};

export const whoIsThatPokemonReducer = (state = initialState, action = {}) => {
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
        status: POKEMON_GUESSED,
        timesWithoutSkip: state.timesWithoutSkip + 1
      };
    default:
      return state;
  }
};

export const pokemonLoadingActionCreator = () => ({
  type: POKEMON_LOADING
});

export const pokemonCoveredActionCreator = () => ({
  type: POKEMON_COVERED
});

export const pokemonGuessedActionCreator = () => ({
  type: POKEMON_GUESSED
});
