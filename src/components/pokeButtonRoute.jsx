import React from "react";
import { Link } from "react-router-dom";

const PokeButtonRoute = props => {
  return <Link className="pokeball" to={props.path} />;
};

export default PokeButtonRoute;
