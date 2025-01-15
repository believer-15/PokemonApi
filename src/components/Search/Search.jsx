import useDebounce from '../../hooks/useDebounce';
import './Search.css';

// eslint-disable-next-line react/prop-types
function Search({updateSearchTerm}) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <div className="search-wrapper">
            <input 
                type="text" 
                placeholder="pokemon_name..." 
                id="pokemon-name-search" 
                onChange={debouncedCallback}
            />
        </div>
    )
}

export default Search;