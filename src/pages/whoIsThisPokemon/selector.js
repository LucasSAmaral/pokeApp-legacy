import { pathOr, path } from "ramda";

export const getPokemonName = state =>
  pathOr("", ["pokemon", "pokemonName"], state);

export const getPokemonImage = state =>
  pathOr("", ["pokemon", "pokemonImage"], state);

export const getIsCover = state =>
  pathOr(false, ["whoIsThisPokemon", "cover"], state);

export const getWhoIsThisPokemonPageText = AppText =>
  path(["WhiIsThisPokemonPageText"], AppText);
