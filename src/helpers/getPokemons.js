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

// import axios from "axios";
// import { path } from "ramda";

// const getPokemons = async (min, max) => {
//   try {
//     const results = await axios
//       .get("https://pokeapi.co/api/v2/pokemon", {
//         params: {
//           offset: min,
//           limit: max
//         }
//       })
//       .then(response => {
//         return path(["data", "results"], response);
//       });
//     const resolved = results => {
//       let acumulador = [];
//       let ready = Promise.resolve(null);

//       results.forEach((promise, index) => {
//         ready = ready
//           .then(() => promise)
//           .then(value => {
//             acumulador[index] = value;
//           });
//       });
//       return ready.then(() => {
//         return acumulador;
//       });
//     };
//     return resolved(results);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default getPokemons;
