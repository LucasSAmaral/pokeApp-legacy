import React from "react";
import { Link } from "react-router-dom";

const PokeButtonRoute = ({ path }) => {
  return <Link className="pokeball" to={path} />;
};

export default PokeButtonRoute;
