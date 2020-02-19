import React, { Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/layout/Navbar.js";
import Caught from "./components/data/Caught.js";
import PokemonPage from "./components/data/PokemonPage";
import Pokemons from "./components/data/Pokemons";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Pokemons} />
              <Route exact path="/caught" component={Caught} />
              <Route exact path="/pokemons/:pokemonId" component={PokemonPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
