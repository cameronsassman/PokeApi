import { Link } from 'react-router-dom';
import './PokemonStats.css'
import PokemonType from '../helpers/PokemonType';

const PokeDetails = ({ pokemon }) => {
    return (
        <div>
            <Link className="npbtn" key={pokemon.id} to={`/pokemon`}>
                <i className="fa fa-arrow-circle-left"></i>
            </Link>
        <div className="pokemon--card">
            <div className="pokemon--profile">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                <h1 className="pokemon--name">{pokemon.name}</h1>
            </div>
            <div className="pokemon--stats">
                {
                    pokemon.stats.map(stat => {
                        return (
                            <div className="pokemon-stat-item">
                                <div>{stat.stat.name}</div>
                                <div>{stat.base_stat}</div>
                                <div className="progress-bar" style={{ background: PokemonType[pokemon.types[0].type.name]}}>
                                    <span
                                        style={{
                                            width: `${100 - stat.base_stat || 0}%`,
                                        }}
                                    />
                                </div>
                            </div>
                    );
                    })
                }
            </div>
            {/* <div>
                Type:
                {
                    pokemon.types.map(type => {
                        return (
                        <span>
                            {type.type.name}
                        </span>
                        )
                    })
                }
            </div> */}
        </div>
    </div>
    )
}

export default PokeDetails