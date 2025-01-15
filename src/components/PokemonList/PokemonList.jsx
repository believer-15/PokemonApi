import { useEffect, useState } from "react";
import Pokeman from "../Pokeman/Pokeman";
import axios from "axios";
import './PokemonList.css';

function PokemonList () {

    // const [pokemonUrl, setPokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    // const [nextUrl, setNextUrl] = useState('');
    // const [prevUrl, setPrevUrl] = useState('');

    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const [pokemonListState, setPokemonListState] = useState({
      pokemonList:[],
      isLoading: true,
      pokemonUrl:'https://pokeapi.co/api/v2/pokemon/',
      nextUrl: '',
      prevUrl: ''
    })

    async function downloadPokemons() {
      // setIsLoading(true{});
      setPokemonListState((state) => ({ ...state, isLoading: true}));
      const response = await axios.get(pokemonListState.pokemonUrl); // download 20 pokemon
      const pokemonResults = response.data.results;  // we get the array of pokemons from result

      setPokemonListState((state) => ({
        ...state, 
        nextUrl:response.data.next, 
        prevUrl:response.data.previous
      }));
      // setPrevUrl(response.data.previous);
      // iterating over the array of pokemon, and using their url, to create array of promises  
      // that will download 20 pokemon 
      const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

      // passing that promise array to axios.all 
      const pokemonData = await axios.all(pokemonResultPromise); // array of 20 pokemon detailed data

      // now iterate on the data of each pokemon and extract id, name, image, type
     const res = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return { 
          id: pokemon.id,
          name: pokemon.name, 
          image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
          types: pokemon.types
        };
      });
      console.log(res);
      setPokemonListState((state) => ({
        ...state, 
        pokemonList:res, 
        isLoading: false
      }));
    }

    // useeffect takes two parameters, a callback function and dependencies array
    useEffect(() => {
      downloadPokemons();
    }, [pokemonListState.pokemonUrl]);




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