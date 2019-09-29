export const INITIAL_INFO_STATUS = "INITIAL_INFO_STATUS";
export const POKEMON_NUMBER_FETCHED = "POKEMON_NUMBER_FETCHED";
export const POKEMON_NAME_FETCHED = "POKEMON_NAME_FETCHED";
export const POKEMON_FETCHED = "POKEMON_FETCHED";
export const POKEMON_DESCRIPTION_FETCHED = "POKEMON_DESCRIPTION_FETCHED";

const initialState = {
  status: INITIAL_INFO_STATUS,
  pokemonNumber: 0,
  pokemonName: "",
  pokemons: [],
  pokemonDescription: ""
};

export const pokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_INFO_STATUS:
      return {
        ...state,
        status: INITIAL_INFO_STATUS
      };
    case POKEMON_NUMBER_FETCHED:
      return {
        ...state,
        status: POKEMON_NUMBER_FETCHED,
        pokemonNumber: action.payload
      };
    case POKEMON_NAME_FETCHED:
      return {
        ...state,
        status: POKEMON_NAME_FETCHED,
        pokemonName: action.payload
      };

    case POKEMON_FETCHED:
      return {
        ...state,
        status: POKEMON_FETCHED,
        pokemons: action.payload
      };

    case POKEMON_DESCRIPTION_FETCHED:
      return {
        ...state,
        status: POKEMON_DESCRIPTION_FETCHED,
        pokemonDescription: action.payload
      };
    default:
      return state;
  }
};

export const pokemonNumberFetchedActionCreator = number => ({
  type: POKEMON_NUMBER_FETCHED,
  payload: number
});

export const pokemonNameFetchedActionCreator = name => ({
  type: POKEMON_NAME_FETCHED,
  payload: name
});

export const pokemonsFetchedActionCreator = pokemons => ({
  type: POKEMON_FETCHED,
  payload: pokemons
});

export const pokemonDescriptionFetchedActionCreator = description => ({
  type: POKEMON_DESCRIPTION_FETCHED,
  payload: description
});
