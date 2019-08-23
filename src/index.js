import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Pokedex from "./pages/Pokedex";
import WhoIsThisPokemon from "./pages/WhoIsThisPokemon";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/who-is-this-pokemon" component={WhoIsThisPokemon} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
