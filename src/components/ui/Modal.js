import { useState } from 'react'
import Modal from 'react-modal'
// import PokeCard from '../pokemon/PokemonCard'

import './Modal.css'

const PokeModal = ({ pokemon }) => {
    const [isOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
      }
    
      function closeModal() {
        setIsOpen(false)
      }

    return (
        <div>
            <button className='pokebutton' onClick={openModal}>{pokemon.name}</button>
            <Modal open={isOpen}>
                {/* <PokeCard /> */}
            </Modal>
        </div>
    )
}

export default PokeModal