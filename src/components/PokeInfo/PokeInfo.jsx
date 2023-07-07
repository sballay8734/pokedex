import "./poke-info.css"
import { PokemonContext } from "../../context/SelectedPokemon"
import { useContext } from "react"
import CompareTable from "../CompareTable/CompareTable"

function PokeInfo() {
  const {pokeOne, pokeTwo, setPokeOne, setPokeTwo} = useContext(PokemonContext)

  return (
    // Need a "Clear All" button in comparison section
    <div className="compare-wrapper">
      <div className="poke-one">
        <h1 className="poke-one-header">Pokemon One</h1>
        {pokeOne ? <div className="poke-one-info">
          <h1 className="compare poke-one-name">{pokeOne ? pokeOne.name[0].toUpperCase() + pokeOne.name.substring(1) : ""}</h1>
          {pokeOne ? <img src={pokeOne.sprites.front_default} alt="Pokemon One" /> : ""}
        <div onClick={() => setPokeOne(null)} className="remove-poke-one">
          Remove
        </div>
        </div> : <div className="poke-one-info">Select a Pokemon above</div>}
      </div>
      <div className="comparison">
        <CompareTable pokeOne={pokeOne} pokeTwo={pokeTwo} setPokeOne={setPokeOne} setPokeTwo={setPokeTwo} />
      </div>
      <div className="poke-two">
        <h1 className="poke-two-header">Pokemon Two</h1>
        {pokeTwo ? <div className="poke-two-info">
          <h1 className="compare poke-two-name">{pokeTwo ? pokeTwo.name[0].toUpperCase() + pokeTwo.name.substring(1) : ""}</h1>
          {pokeTwo ? <img src={pokeTwo.sprites.front_default} alt="Pokemon Two" /> : ""}
        <div onClick={() => setPokeTwo(null)} className="remove-poke-two">
          Remove
        </div>
        </div> : <div className="poke-two-info">Select a Pokemon above</div>}
      </div>
    </div>
  )
}

export default PokeInfo
