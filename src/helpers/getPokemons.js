import axios from "axios";

const getPokemons = async (min, max) => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        offset: min,
        limit: max
      }
    });
    const { results } = data;
    return results;
  } catch (error) {
    console.error(error);
  }
};

export default getPokemons;
