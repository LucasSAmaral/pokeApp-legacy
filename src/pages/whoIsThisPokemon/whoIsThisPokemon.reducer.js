export const INITIAL_STATUS = "INITIAL_STATUS";
export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_LOADED = "POKEMON_LOADED";

const initialState = {
  status: INITIAL_STATUS,
  timesWithoutSkip: 0,
  loading: false,
  cover: true
};

export const whoIsThisPokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_STATUS:
      return {
        ...state,
        status: INITIAL_STATUS
      };
    case POKEMON_LOADING:
      return {
        ...state,
        status: POKEMON_LOADING,
        loading: action.payload
      };
    case POKEMON_LOADED:
      return {
        ...state,
        status: POKEMON_LOADED,
        loading: action.payload
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

export const pokemonLoadingActionCreator = loading => ({
  type: POKEMON_LOADING,
  payload: loading
});

export const pokemonLoadedActionCreator = loaded => ({
  type: POKEMON_LOADED,
  payload: loaded
});
