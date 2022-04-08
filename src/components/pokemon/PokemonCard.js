import { useState } from 'react'
import Modal from 'react-modal'

import PokemonType from "../helpers/PokemonType";
import classes from './PokemonCard.module.css'
import '../ui/Modal.css'

const PokeCard = ({ pokemon }) => {

    // const style = {
    //     background: `linear-gradient(100deg, ${PokemonType[pokemon.types[0].type.name]} 25%, white 15%)`
    // }

    const [modalIsOpen, setIsOpen] = useState(false)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    function openModal() {
        setIsOpen(true)
      }
    
      function closeModal() {
        setIsOpen(false)
      }
    return (
        <div>
            <div className="pokecontent" style={{ background: PokemonType[pokemon.types[0].type.name]}}>
                <button className='pokebutton' onClick={openModal}><img className={classes.pokeimg2} src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />{pokemon.name}</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modal'
                overlayClassName='overlay'
            >
                <div 
                    className={classes.content} 
                    style={{ background: PokemonType[pokemon.types[0].type.name]}}
                    // style={{ background: `linear-gradient(100deg, ${PokemonType[pokemon.types[0].type.name]} 25%, white 15%)`,}}
                >
                <div className={classes.pokeid}>
                <span>#{pokemon.id}</span>
                </div>
                <div className={classes.pokeimg}>
                    <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
                    <div className={classes.pokename}>
                        <span className={classes.namedescspan}>{pokemon.name}</span>
                    </div>
                </div>
                <div className={classes.pokeinfo}>
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            Description
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Stats
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            Moves
                        </button>
                    </div>
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                            <div className="pokemon--stats">
                                <div className={classes.pokestats}>
                                    <div className={classes.text}>
                                        Base Exp:
                                        <span className={classes.descspan}>{pokemon.base_experience}</span>
                                    </div>
                                    <div className={classes.text}>
                                        Weight: 
                                        <span className={classes.descspan}>{pokemon.weight}</span>
                                    </div>
                                    <div className={classes.text}>
                                        Height:
                                        <span className={classes.descspan}>{pokemon.height}</span>
                                    </div>
                                    <div className={classes.text}>
                                        Ability:
                                        <span className={classes.descspan}>{pokemon.abilities[0].ability.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
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
                        </div>
                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            <div className={classes.pokestats}>
                                <ul className="scroll">
                                    {
                                        pokemon.moves.map(move => {
                                            return (
                                            <span className={classes.type}>
                                                {move.move.name}
                                            </span>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Modal>
        </div>
    );
}

export default PokeCard;