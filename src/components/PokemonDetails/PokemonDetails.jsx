import axios from 'axios';
import './PokemonDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    const { id } = useParams(); // to access param from url

    const [pokemon, setPokemon] = useState({});

    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name) // types array hai to iterate krege and array me type object hai
        })
    }

    useEffect( () => {
        downloadPokemon();
    }, []);


    
    return (
        <>
            <div className='pokemon-details-wrapper'>
                <img className='pokemon-details-image' src={pokemon.image} alt="" />
                <div className='pokemon-details-name'><span>{pokemon.name}</span></div>
                <div className='pokemon-details-height'>Height: {pokemon.height}</div>
                <div className='pokemon-details-weight'>Weight: {pokemon.weight}</div>
                <div className='pokemon-details-types'>
                    {pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)}
                </div>
            </div>
        </>
    )

}

export default PokemonDetails;