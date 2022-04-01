import classes from './Loader.module.css';
import Pokeball from '../../assets/Pokeball.gif'

const LoadPokeball = () => {
  return (
    <img className={classes.loading} src={Pokeball} alt="loader" />
  )
}

export default LoadPokeball;