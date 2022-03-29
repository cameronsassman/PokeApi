const Type = props => {
    const searchPokemonByType = event => {
      const url = `https://pokeapi.co/api/v2/type/${event.target.id}/`;
      const request = new Request(url);
      fetch(request).then(response => {
        response.json().then(data => {
          const pokemon = data.pokemon.map(({ pokemon }) => pokemon.name);
          props.callbackFromParent(pokemon);
        });
      });
    };
  
    return (
      <button onClick={searchPokemonByType} type={props.type} id={props.type}>
        {props.type}
      </button>
    );
  };
  
  export default Type;