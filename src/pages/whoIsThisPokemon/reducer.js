export const INITIAL_STATUS = "INITIAL_STATUS";

const initialState = {
  status: INITIAL_STATUS,
  timesWithoutSkip: 0
};

export const whoIsThisPokemonReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INITIAL_STATUS:
      return {
        ...state,
        status: INITIAL_STATUS
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
