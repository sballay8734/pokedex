import { useState } from "react"
import "./header.css"
import {FaSearch} from "react-icons/fa"
import FilteredPokemon from "./FilteredPokemon"

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1010"

function Header() {
  const [input, setInput] = useState("")
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [filteredPokemon, setFilteredPokemon] = useState([])

  function handleChange(value) {
    setDropdownIsOpen(true)
    setInput(value)
    fetchData(value.toLowerCase())
  }

  function fetchData(value) {
    fetch(apiUrl).then((response) => response.json())
    .then((json) => {
      const results = json.results.filter((pokemon) => {
        return pokemon && pokemon.name && pokemon.name.toLowerCase().includes(value)
      })
      setFilteredPokemon(results)
    })
  }

  function handlePokeSelect(pokemon) {
    setDropdownIsOpen(false)
    setInput("")
    console.log(pokemon)
    // setPokeOne(pokemon)
  }

  return <div className="header">
    <h1 className="header-h1">Pokedex</h1>
    <h3 className="header-h3">Click on the pokemon to compare their stats</h3>
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input value={input} onChange={(e) => handleChange(e.target.value)} className="poke-search" placeholder="Type to search..." type="text" />
      <div className={`filtered-pokemon ${dropdownIsOpen ? "show" : ""}`}>
        {filteredPokemon.map((pokemon) => {
          return <div onClick={() => handlePokeSelect(pokemon)} className="filtered-poke">{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</div>
        })}
      </div>
    </div>
  </div>
}

export default Header