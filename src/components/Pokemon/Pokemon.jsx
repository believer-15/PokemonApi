import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useState } from "react";
import './Pokemon.css';

function Pokemon() {

    const [searchTerm, setSearchterm] = useState('');
    return (
        <div className="pokemon-wrapper">
            <Search></Search>
            <PokemonList></PokemonList>

            <Search updateSearchTerm={setSearchterm} />
            { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokemon;