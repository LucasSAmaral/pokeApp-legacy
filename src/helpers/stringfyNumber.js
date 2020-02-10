const stringfyNumber = pokemonNumber => {
  const stringNumber = pokemonNumber.toLocaleString();
  if (stringNumber.length === 1) {
    return `00${stringNumber}`;
  }

  if (stringNumber.length === 2) {
    return `0${stringNumber}`;
  }

  return stringNumber;
};

export default stringfyNumber;
