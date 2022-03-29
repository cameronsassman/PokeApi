import classes from './Loader.module.css';
import Pokeball from '../../assets/Pokeball.gif'

const LoadPokeball = () => {
  return (
    <img className={classes.loading} src={Pokeball} />
  )
}

export default LoadPokeball;