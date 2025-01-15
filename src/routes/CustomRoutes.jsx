import { Routes, Route } from 'react-router-dom';
import Pokemon from '../components/Pokemon/Pokemon';
import PokemonDetails from '../components/PokemonDetails/PokemonDetails';


function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokemon />} />
            <Route path="/pokemon/:id" element={<PokemonDetails />}/>
        </Routes>
    )
}

export default CustomRoutes;