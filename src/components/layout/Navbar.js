import classes from './Navbar.module.css'
import { useState } from 'react'
import Search from '../ui/Search'
import PokemonLogo from '../../assets/PokemonLogo.png'

const Navbar = () => {
    const [plist,setPlist] =useState("")
    console.log("testing:",plist)
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={PokemonLogo} />
            <nav className={classes.nav}>
                <Search PokemonList={setPlist} />
            </nav>
        </header>
    )
}

export default Navbar