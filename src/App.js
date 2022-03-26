import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/my-pokemon">
            <MyPokemonList />
          </Route>
          <Route exact path="/">
            <PokemonList />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
