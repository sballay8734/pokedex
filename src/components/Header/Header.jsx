import { useState } from "react"
import "./header.css"
import {FaSearch} from "react-icons/fa"

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1010"

function Header() {
  const [input, setInput] = useState("")

  // BUILD THIS ON YOUR OWN BEFORE MOVING ON
  function fetchData(value) {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1010")
      .then((response) => response.json())
      .then((json) => {
        const results = json.results.filter((pokemon) => {
          return pokemon && pokemon.name && pokemon.name.toLowerCase().includes(value)
        })
        console.log(results)
      })
  }

  function handleChange(value) {
    setInput(value)
    fetchData(value)
  }

  return <div className="header">
    <h1 className="header-h1">Pokedex</h1>
    <h3 className="header-h3">Click on the pokemon to compare their stats</h3>
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input value={input} onChange={(e) => handleChange(e.target.value)} className="poke-search" placeholder="Type to search..." type="text" />
    </div>
  </div>
}

export default Header