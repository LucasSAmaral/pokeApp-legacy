import React from "react";
import RenderPokeAppFeature from "./functions/RenderPokeAppFeature";
import "./style/style.scss";

const App = () => {
  return <div className="container__pokeApp">{RenderPokeAppFeature()}</div>;
};

export default App;
