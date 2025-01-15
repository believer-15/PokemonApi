import Pokeman from "../Pokeman/Pokeman";
import './PokemonList.css';
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList () {
    const [pokemonListState, setPokemonListState] = usePokemonList(false);
  return (
    <>
      <div className="pokemon-list-wrapper">
        <div className="pokemon-wrapper-list">
          {(pokemonListState.isLoading) ? 'Loading...' : 
            pokemonListState.pokemonList.map((p) => <Pokeman name={p.name} image={p.image} key={p.id} id={p.id} />)
          }
        </div>
        <div className="controls">
          <button disabled={pokemonListState.prevUrl == null} onClick={() => {
            const urlToSet = pokemonListState.prevUrl;
            setPokemonListState({...pokemonListState, pokemonUrl: urlToSet} )}}>Prev</button>
          <button disabled={pokemonListState.nextUrl == null} onClick={() => {
            const urlToSet = pokemonListState.nextUrl;
            setPokemonListState({...pokemonListState, pokemonUrl: urlToSet})}}>Next</button>
        </div>
      </div>
    </>
  );
}

export default PokemonList;