import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonContextProvider from "./contexts/MyPokemonContext";

function App() {
  return (
    <Router>
      <Switch>
        <MyPokemonContextProvider>
          <Route
            exact
            path="/pokemon/:pokemon_name"
            component={PokemonDetail}
          />
          <Route exact path="/my-pokemon" component={MyPokemonList} />
          <Route exact path="/" component={PokemonList} />
        </MyPokemonContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
