import "./Search.css"
import Type from './Type'
import { useState, useEffect } from "react";
import PokeCard from "../pokemon/PokemonCard";

const Types = (props) => {
    const [types, setTypes] = useState(null);
    const [filteredPokemon, setFilteredPokemon] = useState(null);
    const [hasPokemon, setHasPokemon] = useState(false);
    const [hideResults, setHideResults] = useState(false);
  
    useEffect(() => {
      getTypes();
    }, []);
  
    const pokemonFromFilterSearch = dataFromFilter => {
      setFilteredPokemon(dataFromFilter);
      setHasPokemon(true);
    };
  
    const getTypes = () => {
      const url = 'https://pokeapi.co/api/v2/type/';
      const request = new Request(url);
      fetch(request).then(response => {
        response.json().then(data => {
          const types = data.results
            .map(typeObj => typeObj.name)
            // splice last two empty types
            .splice(0, data.results.length - 2);
          setTypes(types);
        });
      });
    };
  
    const pokemonFromFilter =
      hasPokemon &&
      filteredPokemon.map(pokemon => (
        <div key={pokemon} id={pokemon}>
          {pokemon}
        </div>
      ));
  
    return (
      <div>
        <div>
          {types &&
            types.map(type => (
              <Type key={type} type={type} callbackFromParent={pokemonFromFilterSearch} />
            ))}
        </div>
        <section>{!hideResults && pokemonFromFilter}</section>
      </div>
    );
  };

export default Types

// const searchFilter = (text) => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/search/movie?api_key=17f709c69af2597f84403a41a627adac&language=en-US&query=${text}&include_adult=false`
//       )
//       .then(({ data }) => {
//         const searchedMovie = data.results;
//         if (text) {
//           setContent(searchedMovie);
//           // console.log(searchedMovie);
//           setSearch(text);
//         } else {
//           setContent(content);
//           setSearch(text);
//         }
//       });

//     if (text) {
//       const newData = content.filter((item) => {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : "".toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredData(newData);
//       setSearch(text);
//     } else if (!text) {
//       setFilteredData(content);
//       setSearch(text);
//     }
//   };