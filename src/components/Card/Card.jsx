import "./card.css"

function Card({pokemon, loading}) {

  return (
    <>
    {
    loading ? <h1>Loading...</h1> : 
    pokemon.map((item) => {
      return (
        <div key={item.id} className="card">
          <h3>{item.id}</h3>
          <img src={item.sprites.front_default} alt="Pokemon Img" />
          <h3>{item.name}</h3>
        </div>
      )
    })
    }
    </>
  )
}

export default Card