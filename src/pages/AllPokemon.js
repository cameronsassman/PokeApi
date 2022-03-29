import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";

import PokeCard from "../components/pokemon/PokemonCard";
import classes from '../components/pokemon/PokemonList.module.css'
import LoadPokeball from "../components/ui/Loader";


const AllPokemon = () => {
    const[allPokemons, setAllPokemons] = useState([])
    const [searchData,setSearchData] =useState("")
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    const [isLoading, setIsLoading] = useState(true)
 
   const getAllPokemons = async () => {
     const res = await fetch(loadMore )
     const data = await res.json()
     setIsLoading(false)
 
     setLoadMore(data.next)
 
     const createPokemonObject = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchData}`)
        .then(res => res.json())
        .then (data => setAllPokemons(console.log(data.results)))
        
     }
     createPokemonObject()
   }
 
  useEffect(() => {
   getAllPokemons()
  }, [])

    return (
        <section>
            <Navbar searchResult={setSearchData} />
            {isLoading ? <LoadPokeball /> : (
                <div className={classes.container}>
            {allPokemons?allPokemons.map((poke, index) => {
                return (
                    <PokeCard
                    key={index}
                    pokemon={poke}
                />
                )
            }
            ):null}
        </div>
            )}
        <div>
        <i className="fa fa-arrow-circle-down" onClick={() => getAllPokemons()} ></i>
        <button className={classes.load_more} onClick={() => getAllPokemons()}>Load more</button>
        </div>
        </section>
    )
}

export default AllPokemon