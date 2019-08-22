import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Pokedex from "./pages/pokedex";
import WhoIsThisPokemon from "./pages/WhoIsThisPokemon";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/who-is-this-pokemon" component={WhoIsThisPokemon} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
