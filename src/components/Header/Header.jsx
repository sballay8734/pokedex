import { useEffect, useState } from "react"
import "./header.css"
import {FaSearch} from "react-icons/fa"
import { useContext } from "react"
import { PokemonContext } from "../../context/SelectedPokemon"

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1010"

function Header() {
  const [input, setInput] = useState("")
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const { handlePokeSelect } = useContext(PokemonContext)

  useEffect(() => {
    window.addEventListener('click', closeDropdown)

    return () => {
      window.removeEventListener('click', closeDropdown)
    }
  })

  function closeDropdown(e) {
    if (e.target.classList.contains('poke-search')) {
      return
    }
    setDropdownIsOpen(false)
  }

  function handleChange(value) {
    setDropdownIsOpen(true)
    setInput(value)
    fetchData(value.toLowerCase())
  }

  async function handleKeyPress(e, pokemon) {
    if (e.key==="Enter") {
      setDropdownIsOpen(false)
      setInput("")
      await fetch(pokemon.url)
      .then((response) => response.json())
      .then((json) => {
        handlePokeSelect(json)
        return json
    })
    } else return
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

  async function handlePokeClick(pokemon) {
    setDropdownIsOpen(false)
    setInput("")
    await fetch(pokemon.url)
    .then((response) => response.json())
    .then((json) => {
      handlePokeSelect(json)
      return json
    })
  }

  return <div className="header">
    <h1 className="header-h1">Pokedex</h1>
    <h3 className="header-h3">Click on the pokemon to compare their stats</h3>
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input tabIndex={0} value={input} onChange={(e) => handleChange(e.target.value)} className="poke-search" placeholder="Type to search..." type="text" />
      <div className={`filtered-pokemon ${dropdownIsOpen ? "show" : ""}`}>
        {filteredPokemon.map((pokemon) => {
          return <li tabIndex={0} key={pokemon.name} onClick={() => handlePokeClick(pokemon)} onKeyDown={(e) => handleKeyPress(e, pokemon)} className="filtered-poke">{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</li>
        })}
      </div>
    </div>
  </div>
}

export default Header