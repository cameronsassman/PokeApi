import { Fragment } from 'react';

import PokeCard from './PokemonCard';
import classes from './PokemonList.module.css'


const PokemonList = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <PokeCard />
      </div>
    </Fragment>
  );
};

export default PokemonList;