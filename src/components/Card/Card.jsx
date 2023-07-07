import "./card.css"
import { PokemonContext } from "../../context/SelectedPokemon"
import { useContext } from "react"

function Card({pokemon, loading}) {
  const {handlePokeSelect} = useContext(PokemonContext)

  return <>
    {
      loading ? <h1 className="loading">Loading...</h1>:
      pokemon.map((poke) => {
        return (
          <div onClick={() => handlePokeSelect(poke)} key={poke.id} className={`card ${poke.types[0].type.name}`}>
            <div className="card-left">
              <h3 className="poke-id">#{poke.id}</h3>
              {/* <h3 className="poke-gen">#{poke.id}</h3> */}
              <h3 className={`poke-name ${poke.name.length > 9 ? "long" : ""}`}>{
                `${poke.name[0].toUpperCase() + poke.name.substring(1)}`
                }</h3>
              <h3 className="poke-types">{poke.types.map((type) => {
                return <div key={type.type.name} className={`type ${type.type.name}`}>{type.type.name}</div>
              })}</h3>
            </div>
            <div className="card-right"><img src={poke.sprites.front_default} alt="Pokemon" /></div>
          </div>
        )
      })
    }
  </>
}

export default Card