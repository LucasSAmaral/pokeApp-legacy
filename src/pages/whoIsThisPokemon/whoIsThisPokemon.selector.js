import { pathOr, path } from "ramda";

export const getPokemonStatus = state =>
  pathOr("", ["pokemon", "status"], state);

export const getPokemonNumber = state =>
  pathOr("", ["pokemon", "pokemonNumber"], state);

export const getPokemonName = state =>
  pathOr("", ["pokemon", "pokemonName"], state);

export const getPokemonUrl = state =>
  pathOr("", ["pokemon", "pokemonUrl"], state);

export const getPokemonImage = state =>
  pathOr("", ["pokemon", "pokemonImage"], state);

export const getPokemonDescription = state =>
  pathOr("", ["pokemon", "pokemonDescription"], state);

export const getWhoIsThisPokemonStatus = state =>
  pathOr("", ["whoIsThisPokemon", "status"], state);

export const getTimesWithoutSkip = state =>
  pathOr(0, ["whoIsThisPokemon", "timesWithoutSkip"], state);

export const getWhoIsThisPokemonPageText = AppText =>
  path(["WhoIsThisPokemonPageText"], AppText);
