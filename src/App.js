import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import NotFound from "./pages/NotFound";
import MyPokemonContextProvider from "./contexts/MyPokemonContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <Switch>
        <MyPokemonContextProvider>
          <QueryClientProvider client={queryClient}>
            <Route
              exact
              path="/pokemon/:pokemon_name"
              component={PokemonDetail}
            />
            <Route exact path="/my-pokemon" component={MyPokemonList} />
            <Route exact path="/" component={PokemonList} />
            <Route path="*" component={NotFound} />
          </QueryClientProvider>
        </MyPokemonContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
