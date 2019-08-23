import React from "react";
import RenderPokeAppFeature from "../functions/RenderPokeAppFeature";
import "../style/style.scss";

const MainPage = () => {
  return <div className="container__pokeApp">{RenderPokeAppFeature()}</div>;
};

export default MainPage;
