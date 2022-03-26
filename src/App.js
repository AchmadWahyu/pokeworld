import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import Layout from "./Layout";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonContextProvider from "./contexts/MyPokemonContext";

function App() {
  return (
    <Router>
      <Switch>
        <MyPokemonContextProvider>
          <Layout>
            <Route exact path="/pokemon/:pokemon_name">
              <PokemonDetail />
            </Route>
            <Route exact path="/my-pokemon">
              <MyPokemonList />
            </Route>
            <Route exact path="/">
              <PokemonList />
            </Route>
          </Layout>
        </MyPokemonContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
