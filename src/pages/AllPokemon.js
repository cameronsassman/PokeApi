import { useEffect, useState } from "react";

import PokeCard from "../components/pokemon/PokemonCard";
import classes from '../components/pokemon/PokemonList.module.css'
import LoadPokeball from "../components/ui/Loader";


const AllPokemon = () => {
    const[allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const [isLoading, setIsLoading] = useState(true)
 
   const getAllPokemons = async () => {
     const res = await fetch(loadMore )
     const data = await res.json()
     setIsLoading(false)
 
     setLoadMore(data.next)
 
     function createPokemonObject(results)  {
       results.forEach( async pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(res => res.json())
        .then (data => setAllPokemons(currentList => [...currentList, data]))
      })
     }
     createPokemonObject(data.results)
   }
 
  useEffect(() => {
   getAllPokemons()
  }, [])

    return (
        <section>
            {isLoading ? <LoadPokeball /> : (
                <div className={classes.container}>
                    {allPokemons.map((poke, index) => {
                        return (
                            <PokeCard
                            key={index}
                            pokemon={poke}
                        />
                        )
                    }
                    )}
                </div>
            )}
        <div>
        <div className={classes.npbtn}>
            <i className="fa fa-arrow-circle-down" onClick={() => getAllPokemons()} ></i>
        </div>
        </div>
        </section>
    )
}

export default AllPokemon