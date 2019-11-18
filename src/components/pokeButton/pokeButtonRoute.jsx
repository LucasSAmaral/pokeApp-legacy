import React from "react";
import { Link } from "react-router-dom";

const PokeButtonRoute = ({ path, buttonLabel }) => {
  return (
    <Link className="pokeButton" to={path}>
      {buttonLabel}
    </Link>
  );
};

export default PokeButtonRoute;
