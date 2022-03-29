import { useState } from "react";
import "./Search.css"

const Search = (props) => {
    const [pokemonName, setPokemonName] = useState("mew");
    const [chosen, setChosen] = useState(false);

    const search = async () => {
        // const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        // const data = await res.json()
        // console.log(data)
        props.PokemonList(pokemonName)
        setChosen(true);
    }

    return (
        <div className="search">
            <input type="text" onChange={(e) => setPokemonName(e.target.value)} />
            <div className="icon">
                <i className="fa fa-search" onClick={search}></i>
            </div>
        </div>
    )
}

export default Search