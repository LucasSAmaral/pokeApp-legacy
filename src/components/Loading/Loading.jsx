import React from "react";

const Loading = props => {
  const { whoIsThisPokemon } = props;
  const { loading } = whoIsThisPokemon;
  return (
    loading && (
      <div className="pokeApp__loading--container">
        <div className="pokeApp__loading"></div>
      </div>
    )
  );
};

export default Loading;
