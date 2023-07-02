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
          <h1 className="compare poke-one-name">{pokeOne ? pokeOne.name : ""}</h1>
          {pokeOne ? <img src={pokeOne.sprites.front_default} alt="Pokemon One" /> : ""}
        <div onClick={() => setPokeOne(null)} className="remove-poke-one">
          Remove
        </div>
        </div> : <div className="poke-one-info">Select a Pokemon above</div>}
      </div>
      <div className="comparison">
        <CompareTable pokeOne={pokeOne} pokeTwo={pokeTwo} />
      </div>
      <div className="poke-two">
        <h1 className="poke-two-header">Pokemon Two</h1>
        {pokeTwo ? <div className="poke-two-info">
          <h1 className="compare poke-two-name">{pokeTwo ? pokeTwo.name : ""}</h1>
          {pokeTwo ? <img src={pokeTwo.sprites.front_default} alt="Pokemon Two" /> : ""}
        <div onClick={() => setPokeTwo(null)} className="remove-poke-two">
          Remove
        </div>
        </div> : <div className="poke-two-info">Select a Pokemon above</div>}
      </div>
      {/* <h1>Pokemon Name</h1>
    <img src="" alt="Pokemon Img" />
    <div className="abilities">
      <div className="ability-one">
        <h2>Ability One</h2>
      </div>
      <div className="ability-two">
        <h2>Ability Two</h2>
      </div>
    </div>
    <div className="stats">
      <h3>HP</h3>
      <h3>Attack</h3>
      <h3>Defense</h3>
      <h3>Special-Attack</h3>
      <h3>Speed</h3>
    </div> */}
    </div>
  )
}

export default PokeInfo
