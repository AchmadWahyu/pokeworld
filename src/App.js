import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <PokemonList/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
