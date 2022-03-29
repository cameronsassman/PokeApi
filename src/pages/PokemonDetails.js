import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeDetails from "../components/pokemon/PokeDetails";
import LoadPokeball from "../components/ui/Loader";
import "../index.css"

const PokemonDetail = () => {
    const [isPokemon, setIsPokemon] = useState([])
    const [loadPokemon, setLoadPokemon] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [isLoading, setIsLoading] = useState(true)
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    const { pokeId } = useParams();

    const getPokemon = async () => {
        const res = await fetch(loadPokemon)
        const data = await res.json()
        setIsLoading(false)
        console.log(data)
        setLoadPokemon(data)

        function createPokemonObject(results)  {
             fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
             .then(res => res.json())
             .then (data => setIsPokemon(currentList => [...currentList, data]))
          }
          createPokemonObject(data.results)
    }

    useEffect(() => {
        getPokemon()
    }, [])
    
    return (
        <section>
            {isLoading ? <LoadPokeball /> : (
            <div className="container">
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
                        Tab 2
                    </button>
                    <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Tab 3
                    </button>
                </div>
                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            {isPokemon.map((pokemon, poke) => {
                            return (
                                <PokeDetails
                                    key={poke}
                                    pokemon={pokemon}
                                />
                            )
                        })}
                        </div>
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            {isPokemon.map((pokemon, poke) => {
                            return (
                                <PokeDetails
                                    key={poke}
                                    pokemon={pokemon}
                                />
                            )
                        })}
                        </div>
                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            <h1>Test 3</h1>
                        </div>
                    </div>
                    {/* {isPokemon.map((pokemon, poke) => {
                        return (
                            <PokeDetails
                                key={poke}
                                pokemon={pokemon}
                            />
                        )
                    })} */}
                </div>
            )}
        </section>
    )
}

export default PokemonDetail
