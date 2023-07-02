import "./poke-info.css"
import { PokemonContext } from "../../context/SelectedPokemon"
import { useContext } from "react"

function PokeInfo() {
  const {pokeOne, pokeTwo, setPokeOne, setPokeTwo} = useContext(PokemonContext)

  return (
    <>
      <div className="poke-one">
        <h1 className="compare poke-one">{pokeOne ? pokeOne.name : ""}</h1>
        <button onClick={() => setPokeOne(null)} className="remove-poke-one">X</button>
      </div>
      <div className="comparison">Compare</div>
      <div className="poke-two">
        <h1 className="compare poke-two">{pokeTwo ? pokeTwo.name : ""}</h1>
        <button onClick={() => setPokeTwo(null)} className="remove-poke-two">X</button>
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
    </>
  )
}

export default PokeInfo
