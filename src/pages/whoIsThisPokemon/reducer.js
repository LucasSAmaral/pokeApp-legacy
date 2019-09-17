export const INITIAL_STATUS = "INITIAL_STATUS";
export const POKEMON_ID_FETCHED = "POKEMON_ID_FETCHED";
export const POKEMON_NAME_FETCHED = "POKEMON_NAME_FETCHED";

const initialState = {
  status: INITIAL_STATUS,
  pokemonId: 0,
  pokemonName: "",
  timesWithoutSkip: 0
};

export const whoIsThisPokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_STATUS:
      return {
        ...state,
        status: INITIAL_STATUS
      };
    case POKEMON_ID_FETCHED:
      return {
        ...state,
        status: POKEMON_ID_FETCHED,
        pokemonId: action.payload
      };
    case POKEMON_NAME_FETCHED:
      return {
        ...state,
        status: POKEMON_NAME_FETCHED,
        pokemonName: action.payload
      };
    default:
      return state;
  }
};

export const pokemonIdFetchedActionCreator = id => ({
  type: POKEMON_ID_FETCHED,
  payload: id
});

export const pokemonNameFetchedActionCreator = name => ({
  type: POKEMON_NAME_FETCHED,
  payload: name
});
