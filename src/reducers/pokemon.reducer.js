export const INITIAL_INFO_STATUS = "INITIAL_INFO_STATUS";
export const POKEMON_INFO_NUMBER_FETCHED = "POKEMON_INFO_NUMBER_FETCHED";
export const POKEMON_INFO_NAME_FETCHED = "POKEMON_INFO_NAME_FETCHED";
export const POKEMON_INFO_DESCRIPTION_FETCHED =
  "POKEMON_INFO_DESCRIPTION_FETCHED";

const initialState = {
  status: INITIAL_INFO_STATUS,
  pokemonNumber: 0,
  pokemonName: "",
  pokemonDescription: ""
};

export const pokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_INFO_STATUS:
      return {
        ...state,
        status: INITIAL_INFO_STATUS
      };
    case POKEMON_INFO_NUMBER_FETCHED:
      return {
        ...state,
        status: POKEMON_INFO_NUMBER_FETCHED,
        pokemonNumber: action.payload
      };
    case POKEMON_INFO_NUMBER_FETCHED:
      return {
        ...state,
        status: POKEMON_INFO_NUMBER_FETCHED,
        pokemonName: action.payload
      };

    case POKEMON_INFO_DESCRIPTION_FETCHED:
      return {
        ...state,
        status: POKEMON_INFO_DESCRIPTION_FETCHED,
        pokemonDescription: action.payload
      };
    default:
      return state;
  }
};

export const pokemonNumberFetchedActionCreator = number => ({
  type: POKEMON_INFO_NUMBER_FETCHED,
  payload: number
});

export const pokemonInfoNameFetchedActionCreator = name => ({
  type: POKEMON_INFO_NUMBER_FETCHED,
  payload: name
});

export const pokemonInfoDescriptionFetchedActionCreator = description => ({
  type: POKEMON_INFO_DESCRIPTION_FETCHED,
  payload: description
});
