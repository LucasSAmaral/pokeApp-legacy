import axios from "axios";
import { path } from "ramda";

const getPokemons = async (min, max) => {
  try {
    const results = await axios
      .get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          offset: min,
          limit: max
        }
      })
      .then(response => {
        return path(["data", "results"], response);
      });
    return results;
  } catch (error) {
    console.error(error);
  }
};

export default getPokemons;
