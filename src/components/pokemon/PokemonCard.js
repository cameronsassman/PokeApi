import { Link } from "react-router-dom"; 
import { useState } from 'react'
import Modal from 'react-modal'

import PokemonType from "../helpers/PokemonType";
import classes from './PokemonCard.module.css'
import '../ui/Modal.css'

const PokeCard = ({ pokemon }) => {
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
            <button className='pokebutton' onClick={openModal}><img className={classes.pokeimg2} src={pokemon.sprites.other["official-artwork"].front_default} alt="" />{pokemon.name}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modal'
                overlayClassName='overlay'
            >
                <div 
                    className={classes.content} 
                    style={{ background: `linear-gradient(100deg, ${PokemonType[pokemon.types[0].type.name]} 25%, white 15%)`}}
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
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Tab 1
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
            </Modal>
        </div>
    );
}

export default PokeCard;


{/* <div className={classes.pokestats}>
<div>
    Type:
    {
        pokemon.types.map(type => {
            return (
            <span className={classes.type}>
                {type.type.name}
            </span>
            )
        })
    }
</div>
    <div>
        Base Exp:
        <span className={classes.descspan}>{pokemon.base_experience}</span>
    </div>
    <div>
        Weight: 
        <span className={classes.descspan}>{pokemon.weight}</span>
    </div>
    <div>
        Height:
        <span className={classes.descspan}>{pokemon.height}</span>
    </div>
    <div className={classes.ability}>
        Ability
        <span className={classes.descspan}>{pokemon.abilities[0].ability.name}</span>
    </div>
</div> */}