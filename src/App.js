import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import MyPokemonList from './pages/MyPokemonList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/my-pokemon">
          <MyPokemonList/>
        </Route>
        <Route path="/">
          <PokemonList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
