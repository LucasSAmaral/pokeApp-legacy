import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Pokedex from "./pages/Pokedex";
import WhoIsThisPokemon from "./pages/WhoIsThisPokemon";
import Pokemon from "./pages/Pokemon";
import AboutTheApp from "./pages/AboutTheApp";
import AboutMe from "./pages/AboutMe";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/who-is-this-pokemon" component={WhoIsThisPokemon} />
      <Route path="/pokemon" component={Pokemon} />
      <Route path="/about-the-app" component={AboutTheApp} />
      <Route path="/about-me" component={AboutMe} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
