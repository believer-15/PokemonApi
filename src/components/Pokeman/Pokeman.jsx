import './Pokeman.css';
import { Link } from 'react-router-dom';

function Pokeman({ name, image, id }) {
    return (
        <div className='pokemon'>
            <Link to={`/pokemon/${id}`}> 
                <div className='pokemon-name'>{name}</div>
                <div>
                    <img className="pokemon-image" src={image}/>
                </div>
            </Link>
        </div>
    );
};

export default Pokeman;