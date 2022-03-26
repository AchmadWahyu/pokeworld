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
            <RouteWrapper exact path="/pokemon/:pokemon_name" component={PokemonDetail} layout={Layout}/>
            <RouteWrapper exact path="/my-pokemon" component={MyPokemonList} layout={Layout}/>
            <RouteWrapper exact path="/" component={PokemonList} layout={Layout}/>
        </MyPokemonContextProvider>
      </Switch>
    </Router>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
