import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import './Pokemon.css';

function Pokemon() {
    return (
        <div className="pokemon-wrapper">
            <h1 id="pokemon-heading">Pokemon</h1>
            <Search></Search>
            <PokemonList></PokemonList>
        </div>
    )
}

export default Pokemon;