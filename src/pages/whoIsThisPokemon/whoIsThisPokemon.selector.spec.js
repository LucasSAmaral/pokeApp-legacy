import {
  getLoading,
  getPokemonName,
  getCover,
  getPokemonImage
} from "./whoIsThisPokemon.selector";

const mockedResponse = {
  pokemon: {
    pokemonName: "Pikachu",
    pokemonImage:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  },
  whoIsThisPokemon: {
    loading: true,
    cover: true
  }
};

it("should get loading state", () => {
  expect(getLoading(mockedResponse)).toEqual(true);
});

it("should get pokémon name", () => {
  expect(getPokemonName(mockedResponse)).toEqual("Pikachu");
});

it("should get cover state", () => {
  expect(getCover(mockedResponse)).toEqual(true);
});

it("should get pokémon image", () => {
  expect(getPokemonImage(mockedResponse)).toEqual(
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
  );
});
