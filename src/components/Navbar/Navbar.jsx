import "./navbar.css"
import {SiPokemon} from "react-icons/si"
import { useContext } from "react"
import { PokemonContext } from "../../context/SelectedPokemon"

function Navbar() {
  const {setPokeOne, setPokeTwo} = useContext(PokemonContext)

  function handleReset() {
    setPokeOne(null)
    setPokeTwo(null)
  }

  return <nav className="navbar">
    <div className="logo"> <SiPokemon/> </div>
    <div onClick={handleReset} className="reset">Reset</div>
  </nav>
}

export default Navbar