import "./card.css"

function Card({pokemon, loading}) {
  return <>
    {
      loading ? <h1>Loading...</h1>:
      pokemon.map((poke) => {
        return (
          <div key={poke.id} className="card">
            <h3>{poke.id}</h3>
            <img src={poke.sprites.front_default} alt="Pokemon" />
            <h3>{poke.name}</h3>
          </div>
        )
      })
    }
  </>
}

export default Card