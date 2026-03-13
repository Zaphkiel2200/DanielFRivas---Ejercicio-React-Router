import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <nav>
      </nav>

      <Routes>
        <Route path="/pages/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </main>
  );

};

export default App;
