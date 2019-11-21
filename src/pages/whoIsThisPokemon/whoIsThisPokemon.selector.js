import { pathOr, path } from "ramda";

export const getPokemonName = state =>
  pathOr("", ["pokemon", "pokemonName"], state);

export const getPokemonImage = state =>
  pathOr("", ["pokemon", "pokemonImage"], state);

export const getCover = state =>
  pathOr(false, ["whoIsThisPokemon", "cover"], state);

export const getLoading = state =>
  pathOr(false, ["whoIsThisPokemon", "loading"], state);

export const getWhoIsThisPokemonPageText = AppText =>
  path(["WhiIsThisPokemonPageText"], AppText);
